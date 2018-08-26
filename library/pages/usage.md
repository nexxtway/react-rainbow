## There are several runnable examples in this Git repo, but here's a Hello World one:


    const HelloWorldExample = `
    import React from 'react';
    import ReactDOM from 'react-dom';
    import Button from 'react-slds/components/button';
    
    function App() {
        return (
            <Button 
                label="Hello World!" 
                variant="brand" 
                onClick={() => alert('Hello World!')} 
            />
        );    
    }
    
    ReactDOM.render(
        <App />,
        document.getElementById('container')
    );
    `;

    <CodeEditor code={HelloWorldExample} />
