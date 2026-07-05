function debounce(func, wait) {
  let timerId = null;

  return function (...args) {
    const context = this;

    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}
