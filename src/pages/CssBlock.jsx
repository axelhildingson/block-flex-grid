import React from 'react'

const CssBlock = ({cssText, label, onClick}) => {
    return <div style={{backgroundColor: '#f8f8f8', padding: '12px 24px'}}>
        <h1 style={{fontWeight: '200'}}>{label.toUpperCase()}</h1>
        <p style={{whiteSpace: 'break-spaces', textAlign: 'start'}}><code>{cssText}</code></p>
        <button onClick={onClick}>{`Use ${label}`}</button>
    </div>
}

export default CssBlock