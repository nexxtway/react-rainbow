### There are several runnable examples in this Git repo, but here's a Hello World one:
<br>

    const HelloWorldExample = 
    `import React from 'react';
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

    <div>
        <CodeEditor code={HelloWorldExample} />
        <iframe 
            src="https://codesandbox.io/embed/38wn6kop9p?hidenavigation=1&fontsize=14&view=preview"
            style={{ width: '100%', height: 350, border:0 }} 
        />
    </div>    
