Button examples:

    const buttonsContainerStyles = {
        display: 'flex',
        flexWrap: 'wrap',
    };
    const buttonStyles = {
        marginBottom: 16,
    };

    <div style={buttonsContainerStyles}>
        <Button style={buttonStyles} label="Button Base" />
        <Button style={buttonStyles} label="Button Neutral" variant="neutral" />
        <Button style={buttonStyles} label="Button Brand" onClick={() => alert('clicked!')} variant="brand" />
        <Button style={buttonStyles} label="Outline Brand" variant="outline-brand" />
        <Button style={buttonStyles} label="Button Success" onBlur={ () => alert('blurred!') } variant="success" />
        <Button style={buttonStyles} label="Destructive" variant="destructive" />
        <Button style={buttonStyles} label="Button Disabled" disabled variant="brand" />
    </div>

Button Inverse example:

    const buttonsContainerStyles = {
        backgroundColor: '#16325c',
        padding: 16,
    };

    <div style={buttonsContainerStyles}>
        <Button label="Button Inverse" variant="inverse" />
    </div>
