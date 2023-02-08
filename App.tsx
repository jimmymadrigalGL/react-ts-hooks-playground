import * as React from 'react';
import { logChild, logApp, useEffectLog, useLayoutEffectLog } from './utils';

function Child() {
  logChild('render start', 'MediumSpringGreen');

  const [count, setCount] = React.useState(() => {
    logChild('useState(() => 0)', 'green');
    return 0;
  });

  useEffectLog(logChild);
  useEffectLog(logChild, []);
  useEffectLog(logChild, [count], `[count: ${count}]`);

  useLayoutEffectLog(logChild);
  useLayoutEffectLog(logChild, []);
  useLayoutEffectLog(logChild, [count], `[count: ${count}]`);

  const element = (
    <button
      id="counter"
      onClick={() => setCount((previousCount) => previousCount + 1)}
    >
      {count}
    </button>
  );

  logChild('render end', 'MediumSpringGreen');

  return element;
}

function App() {
  logApp('render start', 'MediumSpringGreen');

  const [showChild, setShowChild] = React.useState(() => {
    logApp('useState(() => false)', 'green');
    return false;
  });

  useEffectLog(logApp);
  useEffectLog(logApp, []);
  useEffectLog(logApp, [showChild], `[showChild: ${showChild}]`);

  useLayoutEffectLog(logApp);
  useLayoutEffectLog(logApp, []);
  useLayoutEffectLog(logApp, [showChild], `[showChild: ${showChild}]`);

  const element = (
    <React.Fragment>
      <label>
        <input
          type="checkbox"
          checked={showChild}
          onChange={(e) => setShowChild(e.target.checked)}
        />{' '}
        show child (<span id="show">{showChild ? 'Yes' : 'No'}</span>)
      </label>
      <div
        style={{
          padding: 10,
          margin: 10,
          height: 50,
          width: 50,
          border: 'solid',
        }}
      >
        {showChild ? <Child /> : null}
      </div>
    </React.Fragment>
  );

  logApp('render end', 'MediumSpringGreen');

  return element;
}

export default App;
