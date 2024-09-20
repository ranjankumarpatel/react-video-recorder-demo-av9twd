import React from 'react';
import { render } from 'react-dom';
import { MyVideoRecorder } from './video-recorder';

const App = () => (
  <div>
    <MyVideoRecorder />
  </div>
);

render(<App />, document.getElementById('root'));
