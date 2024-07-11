/**
 * @description Check current environment is browser or not (判断是否是浏览器环境)
 * @author <darwish 289582304@qq.com> (https://github.com/LonelyFellas)
 * @returns {boolean}
 */
const isBrowser = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

export default isBrowser;
