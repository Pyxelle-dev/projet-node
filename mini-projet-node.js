import chalk from "chalk";
import axios from "axios";

const count = Number(process.argv[2] || 3); // ex: `npm run mini -- 10` => 10 citations

async function fetchAdvice() {
  const { data } = await axios.get("https://api.adviceslip.com/advice", {
    headers: { "Cache-Control": "no-cache" },
    timeout: 8000,
  });
  return data.slip.advice;
}

(async () => {
  console.log(chalk.bold.underline(`🎯 ${count} conseil(s) aléatoire(s)`));
  for (let i = 1; i <= count; i++) {
    try {
      const advice = await fetchAdvice();
      console.log(chalk.cyan(`${i}. ${advice}`));
    } catch (err) {
      const msg = err.response ? `HTTP ${err.response.status}` : err.code || err.message;
      console.error(chalk.red(`(${i}) Échec: ${msg}`));
    }
  }
})();