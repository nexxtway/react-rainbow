import React from 'react';
import { Select } from './../../../../entry';

export default class DefaultSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Saray'
        }
    }
    render() {
        return (
            <span>
                <Select value={ this.state.value } label="Select label" required={ true } onChange={ e => this.setState({ value: e.target.value }) }>
                    <option>Reinier</option>
                    <option>Saray</option>
                </Select>
                <Select label="Disabled select" disabled={ true }>
                    <option>Reinier</option>
                    <option>Saray</option>
                </Select>
            </span>
        )
    }
}