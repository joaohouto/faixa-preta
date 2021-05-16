import React from 'react';

const style = { 
    width: '100%', 
    minHeight: '300px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center' 
}

const Loader = ({ ...rest }) => {
    return (
        <div style={style} {...rest}>
            <div className="loader" />
        </div>
    );
}

export default Loader;