export default function throttle(func, wait) {
  let isThrottled = false;

  return function (...args) {
    if (isThrottled) {
      return;
    }

    isThrottled = true;

    func.apply(this, args);

    setTimeout(() => {
      isThrottled = false;
    }, wait);
  };
}
