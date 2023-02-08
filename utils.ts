import * as React from 'react';
export function getHtml(id) {
  const el = document.getElementById(id);
  return el ? `<${id}=${el.innerHTML}>` : '';
}

export function logApp(text, color) {
  const html = getHtml('show');
  console.log(`%cApp: ${text} ${html}`, `color: ${color}`);
}

export function logChild(text, color) {
  const html = getHtml('counter');
  console.log(
    `%c.....%cChild: ${text} ${html}`,
    'color: black',
    `color: ${color}`
  );
}

export function useLayoutEffectLog(logFn, deps?, text?) {
  const color = !deps ? 'tomato' : !deps.length ? 'LightCoral' : 'HotPink';
  const textDeps = !deps ? '' : !deps.length ? ', []' : `, ${text}`;
  React.useLayoutEffect(() => {
    logFn(`useLayoutEffect(() => {}${textDeps})`, color);
    return () => {
      logFn(`🧹useLayoutEffect(() => {}${textDeps}) cleanup`, color);
    };
  }, deps);
}

export function useEffectLog(logFn, deps?, text?) {
  const color = !deps ? 'Gold' : !deps.length ? 'Yellow' : 'Khaki';
  const textDeps = !deps ? '' : !deps.length ? ', []' : `, ${text}`;
  React.useEffect(() => {
    logFn(`useEffect(() => {}${textDeps})`, color);
    return () => {
      logFn(`🧹useEffect(() => {}${textDeps}) cleanup`, color);
    };
  }, deps);
}
