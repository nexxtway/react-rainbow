Button examples:
	
	<div>
		<div className="slds-p-bottom--medium">
	    	<Button label="click here" onClick={ () => alert('clicked!') } variant="brand" />
	    </div>
	    <div className="slds-p-bottom--medium">
	    	<Button label="Success button" onBlur={ () => alert('blurred!') } variant="success" />
		</div>
		<div className="slds-p-bottom--medium">
			<Button label="Disabled button" disabled />	
		</div>
		<div className="slds-p-bottom--medium">
			<Button label={ <span>I'm a button's child node within label</span> } style={{ backgroundColor: '#000', color: '#fff' }} />
		</div>
		<div>
			<Button label="Button label" variant="destructive">
				<span>I have precedence over the label attrib</span>
			</Button>
		</div>
    </div>