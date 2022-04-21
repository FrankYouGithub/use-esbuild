/*
 * @Author       : frank
 * @Date         : 2022-04-19 22:46:07
 * @LastEditTime : 2022-04-19 22:46:25
 * @LastEditors  : frank
 * @Description  : In User Settings Edit
 */
import Server from "react-dom/server";

let Greet = () => <h1>Hello, juejin!</h1>;
console.log(Server.renderToString(<Greet />));