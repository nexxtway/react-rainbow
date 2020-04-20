import React from 'react';
import buildArrayOfTypeList from './builders/arrayOfTypeList';

export default function propTypeArrayOfRender(value) {
    return <ul className="react-rainbow-proptype-shape-list">{buildArrayOfTypeList(value)}</ul>;
}
