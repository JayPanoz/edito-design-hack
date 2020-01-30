const path = require("path");
const epubchecker = require("epubchecker");
const chalk = require("chalk");

const validating = (title) => {
  console.log(chalk.bold(`\nValidation de “${title}”...`));
}

const isValid = (title) => {
  console.log(chalk.bold.green(`${title} est valide.`))
}

const isNotValid = (title) => {
  console.log(chalk.bold.red(`${title} n’est pas valide.`))
}

const fatal = (log) => {
  console.log(chalk.magentaBright(log));
}

const error = (log) => {
  console.log(chalk.redBright(log));
}

const warn = (log) => {
  console.log(chalk.yellow(log));
}

const info = (log) => {
  console.log(log);
}

const log = (id, severity, message, locations) => {
  switch(severity) {
    case "FATAL":
      for (const loc of locations) {
        fatal(`\n${severity} ${id}: "${loc.path}" @ ${loc.line}:${loc.column}\n${message}`);
      }
      break;
    case "ERROR":
      for (const loc of locations) {
        error(`\n${severity} ${id}: "${loc.path}" @ ${loc.line}:${loc.column}\n${message}`);
      }
      break;
    case "WARNING":
      for (const loc of locations) {
        warn(`\n${severity} ${id}: "${loc.path}" @ ${loc.line}:${loc.column}\n${message}`);
      }
      break;
    case "INFO":
      for (const loc of locations) {
        info(`\n${severity} ${id}: "${loc.path}" @ ${loc.line}:${loc.column}\n${message}`);
      }
      break;
  }
}

const makeReport = async (filePath) => {
  const filename = path.basename(filePath);
  const report = await epubchecker(filePath, {
    includeWarnings: true,
    includeNotices: true,
    output: "reports/" + filename + ".json"
  });
  return report;
}

const handleReport = async (title, path) => {
  try {
    validating(title);
    const report = await makeReport(path);
    if (report.messages.length > 0) {
      isNotValid(title);
      for (const item of report.messages) {
        log(item.ID, item.severity, item.message, item.locations);
      }
    } else {
      isValid(title);
    }
  } catch (err) {
    throw err;
  }
};

const makeReports = async () => {
  try {
    await handleReport("L’Éditorial numérique", "src/LEditorialNumerique");
    await handleReport("Design du livre numérique", "src/DesignDuLivreNumerique");
    await handleReport("Hack le livre", "src/HackLeLivre")
  } catch (err) {
    console.error(err);
  }
}

makeReports();