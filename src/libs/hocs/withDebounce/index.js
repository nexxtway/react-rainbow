/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import debounce from '../../debounce';

export default function withDebounce(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.fieldRef = React.createRef();
            this.handleChange = this.handleChange.bind(this);
            this.debouncedChange = debounce(this.debouncedChange, props.debounceTimeout);
        }

        handleChange(event) {
            event.persist();
            this.debouncedChange(event);
        }

        debouncedChange(event) {
            const { onChange } = this.props;
            onChange(event);
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

        render() {
            const { onChange, ...rest } = this.props;

            return <WrappedComponent {...rest} onChange={this.handleChange} ref={this.fieldRef} />;
        }
    };
}
