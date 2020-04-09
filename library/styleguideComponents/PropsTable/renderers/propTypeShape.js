import React from 'react';

function buildShapeAttrList(data) {
    return Object.keys(data).map(name => {
        const type = data[name].name;
        const label = (
            <div>
                <code className="react-rainbow-prop-name-label">{name}:</code>
                {type !== 'shape' && <span className="react-rainbow-prop-type-label"> {type}</span>}
            </div>
        );

        let childrensList;
        if (data[name].value) {
            childrensList = buildShapeAttrList(data[name].value);
        }

        return (
            <li className="">
                {label}
                {childrensList && <ul>{childrensList}</ul>}
            </li>
        );
    });
}

export default function propTypeShapeRender(value) {
    return <ul className="react-rainbow-proptype-shape-list">{buildShapeAttrList(value)}</ul>;
}
