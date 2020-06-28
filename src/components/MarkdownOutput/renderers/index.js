/* eslint-disable react/prop-types */
import React from 'react';
import RenderIf from '../../RenderIf';
import {
    Heading as StyledHeading,
    Paragraph,
    CodeBlock,
    HorizontalRule,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    List as StyledList,
    ListItem as StyledListItem,
} from './styled';
import Checkbox from './checkbox';

const HeadingRenderer = ({ level, children }) => {
    return (
        <StyledHeading as={`h${level}`} level={level}>
            {children}
        </StyledHeading>
    );
};

const NullRenderer = () => {
    return null;
};

const RootRenderer = ({ children }) => children;

const TextRenderer = ({ children }) => children;

const CodeBlockRenderer = ({ language, value }) => {
    const className = language && `rainbow-markdown-code-${language}`;
    return (
        <pre>
            <CodeBlock className={className}>{value}</CodeBlock>
        </pre>
    );
};

const InlineCodeRenderer = ({ language, value }) => {
    const className = language && `rainbow-markdown-code-${language}`;
    return (
        <CodeBlock inline className={className}>
            {value}
        </CodeBlock>
    );
};

const HorizontalRuleRenderer = () => <HorizontalRule />;

const TableRenderer = ({ children }) => <Table>{children}</Table>;

const TableHeadRenderer = ({ children }) => <TableHead>{children}</TableHead>;

const TableBodyRenderer = ({ children }) => <TableBody>{children}</TableBody>;

const TableRowRenderer = ({ children }) => <TableRow>{children}</TableRow>;

const TableCellRenderer = ({ align, isHeader, children }) => {
    const cellType = isHeader ? 'th' : 'td';
    return (
        <TableCell as={cellType} align={align} isHeader={isHeader}>
            {children}
        </TableCell>
    );
};

const List = ({ start, isOrdered, children }) => {
    const startAt = start && start !== 1 ? start.toString() : undefined;
    const tag = isOrdered ? 'ol' : 'ul';
    return (
        <StyledList as={tag} start={startAt} isOrdered={isOrdered}>
            {children}
        </StyledList>
    );
};

const ListItem = ({ isChecked, children }) => {
    const hasCheckbox = typeof isChecked === 'boolean';
    return (
        <StyledListItem isTask={hasCheckbox}>
            <RenderIf isTrue={hasCheckbox}>
                <Checkbox isChecked={isChecked} />
            </RenderIf>
            {children}
        </StyledListItem>
    );
};

export default {
    break: 'br',
    paragraph: Paragraph,
    emphasis: 'em',
    strong: 'strong',
    thematicBreak: HorizontalRuleRenderer,
    blockquote: 'blockquote',
    delete: 'del',
    link: 'a',
    image: 'img',
    linkReference: 'a',
    imageReference: 'img',
    table: TableRenderer,
    tableHead: TableHeadRenderer,
    tableBody: TableBodyRenderer,
    tableRow: TableRowRenderer,
    tableCell: TableCellRenderer,
    root: RootRenderer,
    text: TextRenderer,
    list: List,
    listItem: ListItem,
    definition: NullRenderer,
    heading: HeadingRenderer,
    inlineCode: InlineCodeRenderer,
    code: CodeBlockRenderer,
};
