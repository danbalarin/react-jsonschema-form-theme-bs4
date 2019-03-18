import React from "react";
import IconButton from "./IconButton";

export default function AddButton({ className, onClick, disabled }) {
  return (
    <div className="row">
      <p className={`col-3 offset-9 text-right ${className}`}>
        <IconButton
          type="info"
          icon="plus"
          className="btn-add col-12"
          tabIndex="0"
          onClick={onClick}
          disabled={disabled}
        />
      </p>
    </div>
  );
}