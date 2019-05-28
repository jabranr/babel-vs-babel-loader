import React from 'react';
import { render } from 'react-dom';

import JoeBloggs from './components/joe-bloggs/dist';

const domRoot = document.getElementById('root');

render(<JoeBloggs />, domRoot);