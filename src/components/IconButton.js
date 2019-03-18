import React from "react";
import {Button} from "reactstrap";

export default function IconButton(props) {
    const { type = "default", icon, className, ...otherProps } = props;
    return (
        <Button color={type} className={className} {...otherProps}>
            <i className={`fa fa-${icon}`} />
        </Button>
    );
}