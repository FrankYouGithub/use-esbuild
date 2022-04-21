/*
 * @Author       : frank
 * @Date         : 2022-04-19 23:21:14
 * @LastEditTime : 2022-04-19 23:21:15
 * @LastEditors  : frank
 * @Description  : In User Settings Edit
 */
const { transform, transformSync } = require("esbuild");

async function runTransform() {
  // 第一个参数是代码字符串，第二个参数为编译配置
  const content = await transform(
    "const isNull = (str: string): boolean => str.length > 0;",
    {
      sourcemap: true,
      loader: "tsx",
    }
  );
  console.log(content);
}

runTransform();