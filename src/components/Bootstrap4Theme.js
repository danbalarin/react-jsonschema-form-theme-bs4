import widgets from './widgets/';
// // import Templates from './Templates';
import fields from './fields/';

import React, { Component } from 'react'
import Form from "react-jsonschema-form";

export class Bootstrap4Theme extends Component {
    constructor(props) {
        super(props);
        this.state = {wasValidated: false, formData: {}};
        this.onSubmit = this.onSubmit.bind(this);
        this.onError = this.onError.bind(this);
    }

    onSubmit({...data}) {
        this.setState({wasValidated: true});
        if(this.props.onSubmit) {
            this.props.onSubmit({...data});
        }
    }

    onError({...data}) {
        this.setState({wasValidated: true});
        if(this.props.onError) {
            this.props.onError({...data});
        }
    }

    render() {
        const {onSubmit, onError, ...restProps} = this.props;
        return (
            <Form {...restProps} formContext={{wasValidated: this.state.wasValidated}} formData={this.state.formData} onSubmit={this.onSubmit} onError={this.onError}/>
        )
    }
}

export default {
    // form: Bootstrap4Theme, 
    widgets: widgets,
    fields: fields,
}
