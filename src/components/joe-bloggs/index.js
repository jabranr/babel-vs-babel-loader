import React, { memo } from 'react';

import { container, title } from './style.module.scss';

const JoeBloggs = () => {
  return (
    <div className={container}>
      <h1 className={title}>JoeBloggs</h1>
    </div>
  );
}

export default memo(JoeBloggs);