import React, { memo } from 'react';

import { title } from './style.module.css';

const JoeBloggs = () => {
  return (<h1 className={title}>JoeBloggs</h1>);
}

export default memo(JoeBloggs);