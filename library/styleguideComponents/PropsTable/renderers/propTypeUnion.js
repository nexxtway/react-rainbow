import React from 'react';
import buildUnionTypeList from './builders/unionTypeList';

export default function propTypeShapeRender(value) {
    return <ul className="react-rainbow-proptype-union-list">{buildUnionTypeList(value)}</ul>;
}
