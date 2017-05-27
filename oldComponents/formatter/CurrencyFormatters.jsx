import React from 'react';
import { FormattedNumber } from 'react-intl';

export class CUCFormatter extends FormattedNumber {
    render() {
        return (
            <span>
                <FormattedNumber value={ this.props.value } minimumFractionDigits={ 2 }/> CUC
            </span>
        )
    }
}

export class USDFormatter extends FormattedNumber {
    render() {
        return <FormattedNumber value={ this.props.value } style="currency" currency="USD"/>
    }
}
