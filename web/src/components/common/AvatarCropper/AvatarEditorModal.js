import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Button } from 'antd';
import AvatarEditor from 'react-avatar-editor';

import { AvatarEditorModal } from './style';

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
    const img = this.editor.getImageScaledToCanvas().toDataURL();
    const rect = this.editor.getCroppingRect();

    this.props.onChangePreview({
      img,
      rect,
      scale: this.state.scale,
      width: this.state.width,
      height: this.state.height,
      borderRadius: this.state.borderRadius,
    });
  }

  handleScale(e) {
    const scale = parseFloat(e.target.value);
    this.setState({ scale });
  }

  handleRotate(e) {
    this.setState({ rotate: this.state.rotate + parseFloat(e.target.value) });
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
      <AvatarEditorModal
        visible={this.props.visible}
        onCancel={this.props.onCancel}
        onOk={() => this.handleSave()}
      >
        <AvatarEditor
          ref={editor => this.setEditorRef(editor)}
          width={250}
          height={250}
          border={50}
          color={[255, 255, 255, 0.6]} // RGBA
          scale={parseFloat(this.state.scale)}
          rotate={parseFloat(this.state.rotate)}
          borderRadius={200}
          onPositionChange={p => this.handlePositionChange(p)}
          onSave={() => this.handleSave()}
          image={this.props.image}
        />
        <br />
        <div className="rotate-div">
          <Tooltip title="Xoay trái">
            <Button
              icon="reload"
              className="left"
              value={-90}
              onClick={e => this.handleRotate(e)}
            />
          </Tooltip>
          <Tooltip title="Xoay phải">
            <Button icon="reload" value={90} onClick={e => this.handleRotate(e)} />
          </Tooltip>
        </div>
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
      </AvatarEditorModal>
    );
  }
}

AvatarCropper.propTypes = {
  onChangePreview: PropTypes.func,
  image: PropTypes.object,
  visible: PropTypes.bool,
  onCancel: PropTypes.func,
};
