import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <div>
        <h1>How to reproduce:</h1>
        <p>After successfully build. Just edit this file that HMR update that project.</p>
        
        <p>What's your favorite Color: ? (Replace `?`)</p>
    
        <p>{`/static/svg/sprite.${__webpack_hash__}.svg#party:`}</p>
        <svg>
            <use
                xlinkHref={`/static/svg/sprite.${__webpack_hash__}.svg#party`}
            />
        </svg>
        
        <p>{`/static/svg/sprite.[hash].svg#party:`}</p>
        <svg>
            <use
                xlinkHref={`/static/svg/sprite.[hash].svg#party`}
            />
        </svg>
    </div>,
    document.getElementById('root')
);
