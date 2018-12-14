import React from 'react';
import styled from 'styled-components';
import { Modal } from 'antd';

const ModalComp = props => <Modal {...props} />;

export const AvatarEditorModal = styled(ModalComp)`
  .ant-modal-body {
    text-align: center;

    .zoom-div input {
      width: 50%;
      margin: auto;
    }
  }
  .rotate-div {
    margin-bottom: 10px;
    .left {
      -moz-transform: scaleX(-1);
      -webkit-transform: scaleX(-1);
      -o-transform: scaleX(-1);
      transform: scaleX(-1);
      -ms-filter: fliph; /*IE*/
      filter: fliph; /*IE*/
    }
    button {
      margin-left: 5px;
    }
  }
`;

export const AvatarComponentWrapper = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: rgba(196, 196, 196, 0.71);
  width: ${props => props.style.width};
  height: ${props => props.style.height};

  .dropzone {
    .default-avatar {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      visibility: hidden;
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      background-color: rgba(196, 196, 196, 0.71);
      border-radius: 50%;
      -webkit-transition: visibility 0.2s;
      transition: visibility 0.2s;
      &:hover img {
        width: 40px;
        height: auto;
        cursor: pointer;
      }

      img {
        width: 25px;
        height: auto;
        cursor: pointer;
        -webkit-transition: width 0.5s;
        transition: width 0.5s;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        position: absolute;
        margin: auto;
      }
    }
    &:hover .default-avatar {
      visibility: visible;
    }

    .img-src {
      border-radius: 50%;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
