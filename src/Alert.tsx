import React from "react";

interface AlertProps {
  message: string;
  type: "error" | "warning" | "success";
}

const Alert: React.FC<AlertProps> = ({ message, type }) => {
  return <div className={`alert ${type}`}>{message}</div>;
};

export default Alert;
