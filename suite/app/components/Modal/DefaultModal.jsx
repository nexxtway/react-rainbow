import React from 'react';
import { Modal, ModalFooter, Button } from './../../../../entry';

export default class DefaultModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    render() {
        return (
            <div>
                <Button onClick={ e => this.setState({ isOpen: true }) }>Open Modal</Button>
                <Modal title="Hi..."
                       isOpen={ this.state.isOpen }
                       footer={ this.getFooter() }
                       closeCallback={ () => this.closeModal() }>
                    Hello World!
                </Modal>
            </div>
        );
    }

    getFooter() {
        return (
            <ModalFooter>
                <Button onClick={ e => this.closeModal() }>Cancel</Button>
            </ModalFooter>
        )
    }

    closeModal() {
        this.setState({ isOpen: false});
    }
}