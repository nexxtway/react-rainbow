import React from 'react';
import buildShapeAttrList from './shapeAttrList';
import buildArrayOfTypeList from './arrayOfTypeList';
import buildEnumTypeList from './enumTypeList';
import buildInstanceOfType from './instanceOfType';

export default function buildUnionTypeList(data) {
    return Object.keys(data).map(index => {
        const type = data[index].name;
        const value = data[index].value;

        if (type === 'arrayOf') {
            return buildArrayOfTypeList(value, index);
        }

        if (type === 'enum') {
            return buildEnumTypeList(value, index);
        }

        if (type === 'instanceOf') {
            return buildInstanceOfType(value, index);
        }

        let childrensList;
        if (value) {
            if (type === 'shape') {
                childrensList = buildShapeAttrList(value);
            } else if (type === 'union') {
                childrensList = buildUnionTypeList(value);
            }
        }

        return (
            <li key={index}>
                <code className="react-rainbow-prop-type-label">{type}</code>
                {childrensList && <ul>{childrensList}</ul>}
            </li>
        );
    });
}
