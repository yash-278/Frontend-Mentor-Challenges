export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

export function addGlobalEventListener(type, selector, callback, options, parent = document) {
  parent.addEventListener(
    type,
    (e) => {
      if (e.target.matches(selector)) callback(e);
    },
    options
  );
}
