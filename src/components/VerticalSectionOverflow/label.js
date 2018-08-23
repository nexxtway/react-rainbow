import PropTypes from 'prop-types';

export default function Label({ expandedLabel, collapsedLabel, isExpanded }) {
    if (isExpanded) {
        return expandedLabel;
    }
    return collapsedLabel;
}

Label.propTypes = {
    expandedLabel: PropTypes.node.isRequired,
    collapsedLabel: PropTypes.node.isRequired,
    isExpanded: PropTypes.bool.isRequired,
};
