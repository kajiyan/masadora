const home = 'https://moogle.ga/'; // 何も操作が発生しなかった時に戻る URL
const wait = 1000 * 60; // 最後の操作から home に戻るまでの待ち時間

const debounce = (callback, wait) => {
  let timeoutId = null;

  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
};

const onAutoReturn = debounce(() => {
  if (location.href !== home) {
    window.location.href = home;
  }
}, wait);

const onReturn = debounce(() => {
  if (location.href !== home) {
    window.location.href = home;
  }
}, wait);

document.documentElement.addEventListener('mousemove', () => {
  onAutoReturn();
  onReturn();
});
document.documentElement.addEventListener('keydown', () => {
  onAutoReturn();
  onReturn();
});

onAutoReturn();