/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default function withReduxForm(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.fieldRef = React.createRef();
        }

        getErrorMessage() {
            const { meta, error } = this.props;

            if (meta) {
                const { touched, submitFailed, error: metaError } = meta;

                if ((touched || submitFailed) && metaError) {
                    return metaError;
                }
            }

            return error;
        }

        focus() {
            this.fieldRef.current.focus();
        }

        click() {
            this.fieldRef.current.click();
        }

        blur() {
            this.fieldRef.current.blur();
        }

        reset() {
            this.fieldRef.current.reset();
        }

        render() {
            const { error, input, meta, ...rest } = this.props;

            return (
                <WrappedComponent
                    {...rest}
                    {...input}
                    error={this.getErrorMessage()}
                    ref={this.fieldRef}
                />
            );
        }
    };
}
