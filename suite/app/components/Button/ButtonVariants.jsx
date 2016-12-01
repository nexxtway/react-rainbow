import React from 'react';
import { Button } from './../../../../entry';

export default class ButtonVariants extends React.Component {
    render() {
        return (
            <div>
                <Button variant="base">Base</Button>
                <Button variant="neutral">Neutral</Button>
                <Button variant="brand">Brand</Button>
                <Button variant="destructive">Destructive</Button>
            </div>
        )
    }
} 