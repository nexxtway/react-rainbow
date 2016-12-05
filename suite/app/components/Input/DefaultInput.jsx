import React from 'react';
import { Input } from './../../../../entry'

export default class DefaultInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isNumberValid: true
        }
    }
    render() {
        return (
            <div>
                <Input type="text" label="Input label" isValid={ true } />
                <Input type="number" label="Input label" isValid={ this.state.isNumberValid } required={ true } onChange={ e => this.checkValidity(e) } />
                <Input label="Input label" isValid={ true } disabled={ true } />
            </div>
        )
    }

    checkValidity(e) {
        this.setState({ isNumberValid: e.target.checkValidity() })
    }
}