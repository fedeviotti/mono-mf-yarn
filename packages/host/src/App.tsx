import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonLib } from '@fedeviotti/library';

import './index.scss';

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <ButtonLib
      type="primary"
      text="My first button"
      onClick={() => window.console.log('Click')}
    />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
