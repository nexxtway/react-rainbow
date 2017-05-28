Button examples:
	
	<div>
	    <Button label="click here" onClick={ () => alert('clicked!') } variant="brand" />
	    <br/>
	    <br/>
	    <Button label="Success button" onBlur={ () => alert('blurred!') } variant="success" />
		<br/>
		<br/>
		<Button label="Disabled button" disabled />	
		<br/>
		<br/>
		<Button label={ <span>I'm a button's child node within label</span> } style={{ backgroundColor: '#000', color: '#fff' }} />
		<br/>
		<br/>
		<Button label="Button label" variant="destructive"><span>I have precedence over the label attrib</span></Button>
    </div>