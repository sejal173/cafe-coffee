import React from 'react';
import "./PageTitle.css";

function PageTitle({title,subtitle}) {
  return (
  
    <div>
         <div className='page-title'>
            {title}
        </div>
        <div>
            {subtitle ? <p className='page-title-subtitle'>{subtitle}</p> : null}
        </div>
    </div>
    
    
  )
}

export default PageTitle