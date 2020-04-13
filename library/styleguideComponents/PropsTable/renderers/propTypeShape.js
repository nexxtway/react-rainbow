import React from 'react';
import buildShapeAttrList from './builders/shapeAttrList';

export default function propTypeShapeRender(value) {
    return <ul className="react-rainbow-proptype-shape-list">{buildShapeAttrList(value)}</ul>;
}
