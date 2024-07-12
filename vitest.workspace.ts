import { defineWorkspace } from "vitest/config";

// defineWorkspace 会提供一个很好的类型提示开发体验
export default defineWorkspace([
  "packages/*",
  {
    // // 添加 "extends" 将两个配置合并到一起
    // // extends: "./vite.config.js",
    test: {
      include: ["/packages/utils/__test__/**/*.{browser}.test.{ts,js}"],
      name: "darwish-utils",
      environment: "is",
    },
  },
  // {
  //   test: {
  //     include: ["tests/**/*.{node}.test.{ts,js}"],
  //     name: "node",
  //     environment: "node",
  //   },
  // },
]);
