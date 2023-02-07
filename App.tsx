import * as React from 'react';

function Child() {
  console.log('%c.....Child: render start', 'color: MediumSpringGreen');

  const [count, setCount] = React.useState(() => {
    console.log('%c.....Child: useState(() => 0)', 'color: green');
    return 0;
  });
  console.log(`%c.....Child: count: ${count}`, 'color: greenYellow');

  React.useEffect(() => {
    console.log('%c.....Child: useEffect(() => {})', 'color: Gold');
    return () => {
      console.log(
        '%c 🧹.....Child: useEffect(() => {}) cleanup',
        'color: Gold'
      );
    };
  });

  React.useEffect(() => {
    console.log('%c.....Child: useEffect(() => {}, [])', 'color: Yellow');
    return () => {
      console.log(
        '%c 🧹.....Child: useEffect(() => {}, []) cleanup',
        'color: Yellow'
      );
    };
  }, []);

  React.useEffect(() => {
    console.log(
      `%c.....Child: useEffect(() => {}, [count: ${count}])`,
      'color: Khaki'
    );
    return () => {
      console.log(
        `%c 🧹.....Child: useEffect(() => {}, [count: ${count}]) cleanup`,
        'color: Khaki'
      );
    };
  }, [count]);

  React.useLayoutEffect(() => {
    console.log('%c.....Child: useLayoutEffect(() => {})', 'color: tomato');
    return () => {
      console.log(
        '%c 🧹.....Child: useLayoutEffect(() => {}) cleanup',
        'color: tomato'
      );
    };
  });

  React.useLayoutEffect(() => {
    console.log(
      '%c.....Child: useLayoutEffect(() => {}, [])',
      'color: LightCoral'
    );
    return () => {
      console.log(
        '%c 🧹.....Child: useLayoutEffect(() => {}, []) cleanup',
        'color: LightCoral'
      );
    };
  }, []);

  React.useLayoutEffect(() => {
    console.log(
      `%c.....Child: useLayoutEffect(() => {}, [count: ${count}])`,
      'color: HotPink'
    );
    return () => {
      console.log(
        `%c 🧹.....Child: useLayoutEffect(() => {}, [count: ${count}]) cleanup`,
        'color: HotPink'
      );
    };
  }, [count]);
  const element = (
    <button onClick={() => setCount((previousCount) => previousCount + 1)}>
      {count}
    </button>
  );

  console.log('%c.....Child: render end', 'color: MediumSpringGreen');

  return element;
}

function App() {
  console.log('%cApp: render start', 'color: MediumSpringGreen');

  const [showChild, setShowChild] = React.useState(() => {
    console.log('%cApp: useState(() => false)', 'color: green');
    return false;
  });
  console.log(`%cApp: showChild: ${showChild}`, 'color: greenYellow');

  React.useEffect(() => {
    console.log('%cApp: useEffect(() => {})', 'color: Gold');
    return () => {
      console.log('%c 🧹App: useEffect(() => {}) cleanup', 'color: Gold');
    };
  });

  React.useEffect(() => {
    console.log('%cApp: useEffect(() => {}, [])', 'color: Yellow');
    return () => {
      console.log('%c 🧹App: useEffect(() => {}, []) cleanup', 'color: Yellow');
    };
  }, []);

  React.useEffect(() => {
    console.log(
      `%cApp: useEffect(() => {}, [showChild: ${showChild}])`,
      'color: Khaki'
    );
    return () => {
      console.log(
        `%c 🧹App: useEffect(() => {}, [showChild: ${showChild}]) cleanup`,
        'color: Khaki'
      );
    };
  }, [showChild]);

  React.useLayoutEffect(() => {
    console.log('%cApp: useLayoutEffect(() => {})', 'color: tomato');
    return () => {
      console.log(
        '%c 🧹App: useLayoutEffect(() => {}) cleanup',
        'color: tomato'
      );
    };
  });

  React.useLayoutEffect(() => {
    console.log('%cApp: useLayoutEffect(() => {}, [])', 'color: LightCoral');
    return () => {
      console.log(
        '%c 🧹App: useLayoutEffect(() => {}, []) cleanup',
        'color: LightCoral'
      );
    };
  }, []);

  React.useLayoutEffect(() => {
    console.log(
      `%cApp: useLayoutEffect(() => {}, [showChild: ${showChild}])`,
      'color: HotPink'
    );
    return () => {
      console.log(
        `%c 🧹App: useLayoutEffect(() => {}, [showChild: ${showChild}]) cleanup`,
        'color: HotPink'
      );
    };
  }, [showChild]);

  const element = (
    <React.Fragment>
      <label>
        <input
          type="checkbox"
          checked={showChild}
          onChange={(e) => setShowChild(e.target.checked)}
        />{' '}
        show child ({showChild ? 'Yes' : 'No'})
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

  console.log('%cApp: render end', 'color: MediumSpringGreen');

  return element;
}

export default App;
