import React, { memo } from 'react';

import './style.module.css';

const MyComponent = () => {
  return (<div className='my'>MyComponent</div>);
}

export default memo(MyComponent);