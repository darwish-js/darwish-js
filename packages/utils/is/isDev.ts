/**
 * @description Check if the current environment is development or test. (检查当前环境是否为开发或测试环境)
 *
 * !! NOTE: This constant is recommended font-end framework developers to use. (该常量建议前端框架开发者使用)
 * @author <darwish 289582304@qq.com> (https://github.com/LonelyFellas)
 * @return {boolean}
 *
 */
const isDev =
  process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test";

export default isDev;
