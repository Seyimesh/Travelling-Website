import React from "react";
import { Modal } from "antd";
import { Button } from "antd";

const Modal = ({ children, title }) => {
  return <Modal title={title}>{children}</Modal>;
};
