import React from 'react';
import Card from 'react-rainbow-components/components/Card';
import Button from 'react-rainbow-components/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faUsers } from '@fortawesome/free-solid-svg-icons';

export default function CardExample() {
    return (
        <div className="rainbow-m-around_large">
            <Card className="rainbow-align-content_center rainbow-m-around_large">
                <img
                    src="assets/images/Illustration-rainbow-1.svg"
                    className="rainbow-p-vertical_x-large"
                    alt="the wood" />
            </Card>
            <Card
                className="rainbow-m-around_large"
                icon={<FontAwesomeIcon icon={faUsers} />}
                title="Contacts (3)"
                footer="View all"
                actions={<Button variant="neutral" label="New" />}>

                <h1 className="rainbow-p-bottom_medium rainbow-text-heading_x-small rainbow-align-content_center">
                    Anything in the body
                </h1>
            </Card>
            <Card
                className="rainbow-m-around_large"
                isLoading
                icon={<FontAwesomeIcon icon={faTasks} />}
                title="Task"
                actions={<Button variant="neutral" label="New" />} />

        </div>
    );
}
