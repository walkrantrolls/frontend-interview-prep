export default function debounce(func, wait) {
  let timer = null;
  let lastArgs = null;
  let lastThis = null;

  function debounced(...args) {
    lastArgs = args;
    lastThis = this;

    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(lastThis, lastArgs);
      timer = null;
    }, wait);
  }

  debounced.cancel = function () {
    clearTimeout(timer);
    timer = null;
    lastArgs = null;
    lastThis = null;
  };

  debounced.flush = function () {
    if (timer !== null) {
      clearTimeout(timer);

      func.apply(lastThis, lastArgs);

      timer = null;
      lastArgs = null;
      lastThis = null;
    }
  };

  return debounced;
}
