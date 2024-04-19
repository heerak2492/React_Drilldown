import React from 'react';
import ReactDOM from 'react-dom/client'

// JSX is not HTML inside javascript but you can call it as HTML like syntax.
// Jsx is transpiled before it reaches the JS engine as JSX is not understandable by JS engine.
// This transpilation is done by PARCEL here that contains BABEL that does the work.
const Title = () => (
    <h1 className='heerak'>
        Hi Heerak
    </h1>
)

const HeadingComponent = ()=>(
    <div id='container'>
        <Title></Title>
        <Title/>
        {Title()}
        <h1 className='heading'>
            Namaste Heerak, Thanks for practicing react.
        </h1>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('headerRoot'))
root.render(<HeadingComponent />)