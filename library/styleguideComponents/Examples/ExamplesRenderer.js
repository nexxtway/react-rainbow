import 'core-js/modules/es.function.name';
import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';

var styles = function styles() {
    return {
        // Just default jss-isolate rules
        root: {},
    };
};

export function ExamplesRenderer(_ref) {
    var { classes, name, children } = _ref;
    return (
        <article className={classes.root} data-testid={name + '-examples'}>
            {children}
        </article>
    );
}
ExamplesRenderer.propTypes = {
    classes: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.node,
};
export default Styled(styles)(ExamplesRenderer);
