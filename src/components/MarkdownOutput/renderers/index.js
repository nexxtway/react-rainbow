/* eslint-disable react/prop-types, id-length, react/jsx-props-no-spreading */
import React from 'react';
import {
    StyledHeading,
    StyledParagraph,
    StyledCode,
    StyledHR,
    StyledTable,
    StyledTableRow,
    StyledTableHeadindCell,
    StyledTableCell,
    StyledList,
    StyledOrderedList,
    StyledListItem,
    StyledBlockquote,
    StyledLink,
} from './styled';

const Heading = ({ level, children }) => {
    return (
        <StyledHeading as={`h${level}`} level={level}>
            {children}
        </StyledHeading>
    );
};

export default {
    h1: props => <Heading level={1} {...props} />,
    h2: props => <Heading level={2} {...props} />,
    h3: props => <Heading level={3} {...props} />,
    h4: props => <Heading level={4} {...props} />,
    h5: props => <Heading level={5} {...props} />,
    h6: props => <Heading level={6} {...props} />,
    code: StyledCode,
    blockquote: StyledBlockquote,
    p: StyledParagraph,
    a: StyledLink,
    hr: StyledHR,
    ul: StyledList,
    ol: StyledOrderedList,
    li: StyledListItem,
    table: StyledTable,
    th: StyledTableHeadindCell,
    tr: StyledTableRow,
    td: StyledTableCell,
};
