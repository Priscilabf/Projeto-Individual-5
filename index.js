
import readlineSync from "readline-sync";
import chalk from "chalk";

const properties = [];
let input = "";

while (input != "sair") {
  properties.push(input);
  input = readlineSync
    .question(chalk.yellowBright.bgMagenta("=> DIGITE UMA PROPRIEDADE DE CSS:"))
    .toLocaleLowerCase();
}
console.log(chalk.yellow.underline(properties.sort().join("\n")));