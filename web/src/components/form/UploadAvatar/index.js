import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Upload, Avatar, Progress, Form, Input, Icon } from 'antd';
import { error } from 'react-notification-system-redux';
import AvatarCropperModal from './AvatarCropperModal';
import UploadImageWrapper from './style';
import { appConfig } from '../../../config';
import { getRecordData } from '../../../helpers/Tools';
import { del } from '../../../api/utils';
import user from '../../../assets/images/user.png';

const uploadUrl = `${appConfig.REACT_APP_SERVER_URL}/uploadFile`;
const FormItem = Form.Item;

// const confirm = Modal.confirm;

class UploadImage extends Component {
  state = {
    file: null,
    imgDisplay: getRecordData(this.props.record, this.props.source) || null,
    loading: false,
    loadingProgress: 0,
    isShowCropperModal: false,
    hasErr: false,
  };

  componentDidMount() {
    window.addEventListener('beforeunload', this.onUnload);
    this.onLoad();
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onUnload);
  }

  onLoad = () => {
    const getUrl = localStorage.getItem('url');
    if (getUrl) {
      this.onRemove(getUrl);
    }
  };

  onUnload = e => {
    if (this.state.imgDisplay && this.props.form) {
      localStorage.setItem('url', this.state.imgDisplay);
      e.returnValue = '';
    }
  };

  onHideCropperModal = () => {
    this.setState({
      isShowCropperModal: false,
    });
  };

  onChangePreview = ({ croppedFile }) => {
    if (this.state.imgDisplay) {
      this.onRemove(this.state.imgDisplay);
    }
    this.setState({
      isShowCropperModal: false,
      loading: true,
    });
    const xhr = new XMLHttpRequest();
    const fd = new FormData();
    xhr.open('POST', uploadUrl);

    xhr.upload.addEventListener('progress', e => {
      this.setState({
        loadingProgress: Math.round((e.loaded * 100) / e.total),
      });
    });

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // File uploaded successfully
        const response = JSON.parse(xhr.responseText);
        if (response.Location) {
          this.setState({
            imgDisplay: response.Location,
            loading: false,
            hasErr: false,
          });
          this.props.form
            ? this.props.form.setFieldsValue({ [this.props.source]: response.Location })
            : this.props.onUploadImage(response.Location);
        }
      }
      if (xhr.readyState === 4 && xhr.status > 200) {
        // File uploaded fail
        const response = JSON.parse(xhr.responseText);
        this.props.showErrorMsg(response);
        this.setState({
          file: null,
          imgDisplay: null,
          loading: false,
          hasErr: true,
          loadingProgress: 0,
        });
      }
    };
    fd.append('file', croppedFile, croppedFile.name);
    xhr.send(fd);
  };

  onRemove = url => {
    del('/deleteFile', { url });
    this.setState({
      file: null,
      imgDisplay: null,
      loading: false,
      loadingProgress: 0,
    });
    localStorage.removeItem('url');
  };

  renderImage() {
    const { style, defaultText, defaultIcon } = this.props;
    const { loading, imgDisplay, hasErr } = this.state;
    if (loading) {
      return (
        <Avatar style={style}>
          <Progress percent={this.state.loadingProgress} showInfo={false} />
          <div className="ant-upload-text">Uploading....</div>
        </Avatar>
      );
    }
    if (!imgDisplay) {
      return (
        <Avatar icon={defaultIcon} src={!defaultText && user} style={style}>
          <span className="default-image">{defaultText}</span>
        </Avatar>
      );
    }

    if (!hasErr) {
      return <Avatar src={imgDisplay} style={style} />;
    }

    return (
      <Avatar src={imgDisplay} style={style}>
        <Progress percent={this.state.loadingProgress} showInfo={false} status="exception" />
        <div className="ant-upload-text">Upload Failed</div>
      </Avatar>
    );
  }

  render() {
    const { form, source, style } = this.props;

    const imgDisplay = this.state.imgDisplay;
    const props = {
      showUploadList: false,
      action: uploadUrl,
      beforeUpload: file => {
        this.setState(() => ({
          file,
          isShowCropperModal: true,
        }));
        return false;
      },
    };

    return (
      <UploadImageWrapper>
        <FormItem>
          {form &&
            form.getFieldDecorator(source, {
              initialValue: imgDisplay,
            })(<Input style={{ display: 'none' }} />)}
          <Upload {...props}>
            <div className="image-uploader">
              {this.renderImage()}
              <div className="image-hover" style={style}>
                <Icon type="camera" className="image-hover-icon" />
              </div>
            </div>
          </Upload>
          <AvatarCropperModal
            isShowModal={this.state.isShowCropperModal}
            onHideModal={this.onHideCropperModal}
            onChangePreview={this.onChangePreview}
            image={this.state.file}
          />
        </FormItem>
      </UploadImageWrapper>
    );
  }
}

UploadImage.propTypes = {
  showErrorMsg: PropTypes.func,
  form: PropTypes.object,
  source: PropTypes.string,
  record: PropTypes.object,
  style: PropTypes.object,
  defaultText: PropTypes.string,
  defaultIcon: PropTypes.string,
  onUploadImage: PropTypes.func,
};

export default connect(
  () => {
    return {};
  },
  dispatch => {
    return {
      showErrorMsg: err => {
        dispatch(
          error({
            title: 'Error',
            message:
              err && err.message ? err.message : 'Server Internall Error. Please try later !!!!',
            position: 'tr',
            autoDismiss: 15,
          }),
        );
      },
    };
  },
)(UploadImage);
