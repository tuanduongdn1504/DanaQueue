import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AvatarEditor from 'react-avatar-editor';
import { Modal } from 'antd';
import Button from '../../../components/uielements/button';
import IntlMessages from '../../utility/IntlMessages';

export default class AvatarCropper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowZoomOut: false,
      position: { x: 0.5, y: 0.5 },
      scale: 1,
      rotate: 0,
      borderRadius: 0,
      preview: null,
      width: 200,
      height: 200,
    };
  }

  setEditorRef(editor) {
    if (editor) this.editor = editor;
  }

  handleNewImage(e) {
    this.setState({ image: e.target.files[0] });
  }

  handleSave() {
    const { image } = this.props;
    this.editor.getImageScaledToCanvas().toBlob(croppedFile => {
      // eslint-disable-next-line
      croppedFile.name = image.name;
      this.props.onChangePreview({
        croppedFile,
      });
    }, image.type);
  }

  handleScale(e) {
    const scale = parseFloat(e.target.value);
    this.setState({ scale });
  }

  handleAllowZoomOut({ target: { checked: allowZoomOut } }) {
    this.setState({ allowZoomOut });
  }

  handleXPosition(e) {
    const x = parseFloat(e.target.value);
    this.setState({ position: { ...this.state.position, x } });
  }

  handleYPosition(e) {
    const y = parseFloat(e.target.value);
    this.setState({ position: { ...this.state.position, y } });
  }

  handlePositionChange(position) {
    this.setState({ position });
  }

  render() {
    return (
      <div>
        <div className="static-modal">
          <Modal
            visible={this.props.isShowModal}
            onCancel={this.props.onHideModal}
            className="avatar-editor-modal"
            title="Edit Avatar"
            bodyStyle={{ textAlign: 'center' }}
            footer={[
              <Button
                className="btn-fill btn-wd"
                type="primary"
                onClick={() => this.handleSave()}
                key="saveBtn"
              >
                <IntlMessages id="form.save" />
              </Button>,
            ]}
          >
            <AvatarEditor
              ref={editor => this.setEditorRef(editor)}
              width={250}
              height={250}
              border={50}
              color={[0, 0, 0, 0.6]} // RGBA
              scale={parseFloat(this.state.scale)}
              rotate={0}
              borderRadius={125}
              onPositionChange={p => this.handlePositionChange(p)}
              onSave={() => this.handleSave()}
              image={this.props.image}
            />
            <br />
            Zoom:
            <div className="zoom-div">
              <input
                name="scale"
                type="range"
                onChange={e => this.handleScale(e)}
                min="1"
                max="2"
                step="0.01"
                defaultValue="1"
              />
            </div>
          </Modal>
        </div>
        {!!this.state.preview && (
          <img
            src={this.state.preview.img}
            style={{
              borderRadius: `${(Math.min(this.state.preview.height, this.state.preview.width) +
                10) *
                (this.state.preview.borderRadius / 2 / 100)}px`,
            }}
            alt=""
          />
        )}
      </div>
    );
  }
}

AvatarCropper.propTypes = {
  onChangePreview: PropTypes.func,
  image: PropTypes.object,
  isShowModal: PropTypes.bool,
  onHideModal: PropTypes.func,
};
