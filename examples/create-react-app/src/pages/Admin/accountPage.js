import React from 'react';
import Card from 'react-rainbow-components/components/Card';
import Badge from 'react-rainbow-components/components/Badge';
import ButtonGroup from 'react-rainbow-components/components/ButtonGroup';
import ButtonIcon from 'react-rainbow-components/components/ButtonIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faPencilAlt,
    faPlus,
    faPlug,
    faCheck,
} from '@fortawesome/free-solid-svg-icons';
import './styles.css';
import './media-queries.css';

const ACCOUNT_CARD_ACTIONS = (
    <ButtonGroup>
        <ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faPlus} />} />
        <ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faPencilAlt} />} />
    </ButtonGroup>
);

const ACCOUNT_CARD_FOOTER = (
    <div className="rainbow-align-content_space-between">
        <div className="rainbow-flex">
            <div>
                <h2 className="rainbow-color_gray-4 rainbow-font-size-text_small">Payments</h2>
                <p className="rainbow-color_dark-1 rainbow-font-size-text_medium">Enabled</p>
            </div>
            <div className="rainbow-admin_card-footer--divider rainbow-m-horizontal_large" />
            <div>
                <h2 className="rainbow-color_gray-4 rainbow-font-size-text_small">Total Balance</h2>
                <p className="rainbow-color_dark-1 rainbow-font-size-text_medium">$ 100 000</p>
            </div>
        </div>
        <ButtonIcon icon={<FontAwesomeIcon icon={faAngleDown} />} />
    </div>
);

const ACCOUNT_CARD_BODY = (
    <div className="rainbow-p-horizontal_medium rainbow-flex rainbow-align_center">
        <h1 className="rainbow-font-size-heading_medium rainbow-color_dark-1">
            Leandro Torres
        </h1>
        <Badge
            className="rainbow-admin_card-body-badge rainbow-m-left_small"
            variant="inverse">
            <FontAwesomeIcon icon={faCheck} pull="left" />
            verified
        </Badge>
    </div>
);

const IDENTITY_CARD_ACTIONS = (
    <ButtonIcon variant="border" disabled size="medium" icon={<FontAwesomeIcon icon={faPencilAlt} />} />
);

export default function AccountPage() {
    return (
        <section>
            <div>
                <Card
                    icon={<FontAwesomeIcon icon={faPlug} size="lg" className="rainbow-color_success-active" />}
                    title="Conected account"
                    actions={ACCOUNT_CARD_ACTIONS}
                    footer={ACCOUNT_CARD_FOOTER}>
                    {ACCOUNT_CARD_BODY}
                </Card>
            </div>

            <div className="rainbow-m-top_large">
                <Card
                    isLoading
                    title="Identity"
                    actions={IDENTITY_CARD_ACTIONS} />
            </div>
        </section>
    );
}
