##### LoadingShape solid

```js
const style = { 
    width: '400px', 
    display: 'flex', 
    justifyContent: 'space-evenly', 
};
const circleStyle = { width: '50px', height: '50px' };
const squareStyle = { height: '50px' };
const rectStyle = { height: '30px', width: '100px', };
const roundedStyle = { height: '30px', width: '100px', };

<div className="rainbow-p-vertical_x-large rainbow-p-horizontal_small rainbow-m_auto" style={style}>
    <div className="rainbow-flex rainbow-flex_column rainbow-justify_end">
        <div className="rainbow-m-vertical_medium" style={circleStyle}>
            <LoadingShape shape="circle" />
        </div>
        <strong className="rainbow-m-vertical_xx-small">circle</strong>
    </div>

    <div className="rainbow-flex rainbow-flex_column rainbow-justify_end">
        <div className="rainbow-m-vertical_medium" style={squareStyle}>
            <LoadingShape shape="square" />
        </div>
        <strong className="rainbow-m-vertical_xx-small">square</strong>
    </div> 

    <div className="rainbow-flex rainbow-flex_column rainbow-justify_end">
        <div className="rainbow-m-vertical_medium">
            <LoadingShape shape="rect" style={rectStyle} />
        </div>
        <strong className="rainbow-m-vertical_xx-small">rect</strong>
    </div> 

    <div className="rainbow-flex rainbow-flex_column rainbow-justify_end">
        <div className="rainbow-m-vertical_medium">
            <LoadingShape shape="rounded-rect" style={roundedStyle} />
        </div>
        <strong className="rainbow-m-vertical_xx-small">rounded-rect</strong>
    </div>
</div>
```

##### LoadingShape circle

```js
const style = { width: '300px' };
const shapeStyle = { width: '50px', height: '50px' };

<div className="rainbow-p-vertical_x-large rainbow-p-horizontal_small rainbow-m_auto" style={style}>
    <div className="rainbow-flex rainbow-justify_spread">
        <div className="rainbow-flex rainbow-flex_column rainbow-justify_end rainbow-align_center">
            <div className="rainbow-m-vertical_medium">
                <LoadingShape shape="circle" style={shapeStyle} />
            </div>
            <strong className="rainbow-m-vertical_xx-small">solid</strong>
        </div>

        <div className="rainbow-flex rainbow-flex_column rainbow-justify_end rainbow-align_center">
            <div className="rainbow-m-vertical_medium">
                <LoadingShape shape="circle" variant="avatar" style={shapeStyle} />
            </div>
            <strong className="rainbow-m-vertical_xx-small">avatar</strong>
        </div>

        <div className="rainbow-flex rainbow-flex_column rainbow-justify_end rainbow-align_center">
            <div className="rainbow-m-vertical_medium">
                <LoadingShape shape="square" variant="image" style={shapeStyle} />
            </div>
            <strong className="rainbow-m-vertical_xx-small">image</strong>
        </div>
    </div>
</div>
```


##### LoadingShape interactive example

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
                    value={width}
                    onChange={event => setWidth(event.target.value)}
                />
                <Input
                    label="Height"
                    className="rainbow-p-around_small"
                    style={inputStyle}
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