import React, { memo } from 'react';

import style from './style.module.scss';

const JoeBloggs = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>JoeBloggs</h1>
    </div>
  );
}

export default memo(JoeBloggs);