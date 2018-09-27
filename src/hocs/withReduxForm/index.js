import React, { Component } from 'react';

export default function withReduxForm(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.inputRef = React.createRef();
        }

        getErrorMessage() {
            const {
                meta,
                error,
            } = this.props;

            if (meta) {
                const {
                    touched,
                    submitted,
                    error: metaError,
                 } = meta;

                if ((touched || submitted) && metaError) {
                    return metaError;
                }
            }

            return error;
        }

        focus() {
            this.inputRef.current.focus();
        }

        render() {
            const { error, input, ...rest } = this.props;

            return (
                <WrappedComponent
                    {...rest}
                    {...input}
                    error={this.getErrorMessage()}
                    ref={this.inputRef} />
            );
        }
    };
}
