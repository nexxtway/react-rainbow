import React from 'react';
import { Badge } from './../../../../entry';
import styles from './styles.scss';

export default class CustomStyleBadge extends React.Component {
    render() {
        return (
            <div>
                <Badge label="Custom badge1" className="custom-badge"/>
            </div>
        )
    }
}