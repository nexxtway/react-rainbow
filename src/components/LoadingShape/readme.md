# LoadingShape on card
##### LoadingShapes can be used on cards, tables, lists, menus to display a placeholder where content is being loaded.

```js
import React from 'react';
import { Card, LoadingShape } from 'react-rainbow-components';

const style = {
    maxWidth: '400px',
    minWidth: '300px',
    display: 'flex',
    padding: '20px',
};

const imageStyle = {
    width: '100px',
};

<div className="rainbow-align-content_center rainbow-m-around_x-large">
    <Card style={style}>
        <div className="rainbow-m-right_medium" style={imageStyle}>
            <LoadingShape variant="image" shape="square" />
        </div>
        <div>
            <div className="rainbow-align-content_space-between rainbow-p-bottom_small">
                <LoadingShape className="rainbow-p-right_small" />
                <LoadingShape />
            </div>
            <div>
                <LoadingShape className="rainbow-m-bottom_small" />
                <LoadingShape className="rainbow-m-bottom_small" />
                <div className="rainbow-align-content_space-between">
                    <LoadingShape className="rainbow-p-right_small" />
                    <LoadingShape />
                </div>
            </div>
        </div>
    </Card>
</div>

```

# LoadingShape dynamic example
##### This is a dynamic example where you can play around with the component customization. 

```js
import React, { useState } from 'react';
import { LoadingShape, RadioGroup, Input } from 'react-rainbow-components';

const styles = {
    maxWidth: 400,
    margin: 'auto',
};

const shapeContainerStyles = {
    height: '150px',
    display: 'flex',
    justifyContent: 'center',
}

const radioContainerStyles = {
    display: 'flex',
    justifyContent: 'space-evenly',
};

const inputStyle = {
    width: '150px',
}

const shapeOptions = [
    { value: 'rounded-rect', label: 'Rounded Rect' },
    { value: 'square', label: 'Square' },
    { value: 'circle', label: 'Circle' },
];

const variantOptions = [
    { value: 'solid', label: 'Solid' },
    { value: 'image', label: 'Image' },
    { value: 'avatar', label: 'Avatar' },
];

const LoadingShapeExample = () => {
    const [shape, setShape] = useState('rounded-rect');
    const [variant, setVariant] = useState('solid');
    const [width, setWidth] = useState(300);
    const [height, setHeight] = useState(15)

    const shapeStyle = {
        height: `${height}px`,
        width: `${width}px`,
    };

    const handleShapeChange = (event) => {
        setShape(event.target.value);
        if (event.target.value === 'circle' || event.target.value === 'square') {
            setWidth(75);
            setHeight(75);
        } else {
            setWidth(200);
            setHeight(15);
        }
    };

    return (
        <div className="rainbow-p-vertical_x-large rainbow-p-horizontal_small" style={styles}>
            <div className="rainbow-align-content_center rainbow-flex_wrap">
                <Input
                    label="Width"
                    className="rainbow-p-around_small"
                    style={inputStyle}
                    type="number"
                    value={width}
                    onChange={event => setWidth(event.target.value)}
                />
                <Input
                    label="Height"
                    className="rainbow-p-around_small"
                    style={inputStyle}
                    type="number"
                    value={height}
                    onChange={event => setHeight(event.target.value)}
                />
            </div>
            <div className="rainbow-m-bottom_medium" style={radioContainerStyles}>
                <RadioGroup
                    options={shapeOptions}
                    value={shape}
                    onChange={handleShapeChange}
                    label="Select shape"
                />
                <RadioGroup
                    options={variantOptions}
                    value={variant}
                    onChange={(event) => setVariant(event.target.value)}
                    label="Select variant"
                />
            </div>
            <div style={shapeContainerStyles}>
                <div className="rainbow-m-vertical_medium" style={shapeStyle}>
                    <LoadingShape shape={shape} variant={variant} />
                </div>
            </div>
        </div>
    );
}

<LoadingShapeExample />
```
