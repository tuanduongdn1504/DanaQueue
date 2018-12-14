import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { split } from 'lodash';
import Dropzone from 'react-dropzone';

import AvatarEditorModal from './AvatarEditorModal';
import icCamera from '../../../assets/images/ic-camera.png';
import { AvatarComponentWrapper } from './style';

export default class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: null,
      file: null,
      isShowModal: false,
    };
  }

  onChangePreview(preview) {
    this.setState({ preview, isShowModal: false });
    this.props.onUploadImage({
      Base64Encoded: split(preview.img, ',')[1],
      FileName: this.state.file.name,
      file: this.state.file,
    });
  }

  onChangeFile(e) {
    if (e && e.target.files[0]) {
      this.setState({
        file: e.target.files[0],
        isShowModal: true,
      });
    }
  }

  renderImg() {
    const { imgSrc } = this.props;
    if (this.state.preview) {
      return (
        <img
          className="img-src"
          src={this.state.preview.img}
          alt="avatar"
          style={{ height: this.props.heightAvatar || 300 }}
        />
      );
    }
    if (imgSrc) {
      return (
        <img
          className="img-src"
          src={imgSrc}
          alt="avatar"
          style={{ height: this.props.heightAvatar || 300 }}
        />
      );
    }
    return null;
  }

  render() {
    const { imgSrc } = this.props;
    const defaultStyle = {
      height: this.props.heightAvatar || 300,
      width: this.props.heightAvatar || 300,
    };
    if (!imgSrc && !this.state.preview) {
      defaultStyle.visibility = 'visible';
    }

    return (
      <AvatarComponentWrapper style={defaultStyle}>
        <Dropzone
          accept="image/jpeg, image/png, image/jpg"
          onDrop={files =>
            this.setState({
              file: files[0],
              isShowModal: true,
            })
          }
          className="dropzone"
          style={defaultStyle}
        >
          {this.renderImg()}
          <div className="default-avatar" style={defaultStyle}>
            <img src={icCamera} alt="Choose avatar" />
          </div>
        </Dropzone>
        <AvatarEditorModal
          onChangePreview={preview => this.onChangePreview(preview)}
          image={this.state.file}
          visible={this.state.isShowModal}
          onCancel={() => this.setState({ isShowModal: false })}
        />
      </AvatarComponentWrapper>
    );
  }
}

Avatar.propTypes = {
  imgSrc: PropTypes.string,
  heightAvatar: PropTypes.number,
  onUploadImage: PropTypes.func,
};
