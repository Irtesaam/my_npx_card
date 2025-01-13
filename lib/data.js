import chalk from 'chalk';

export const data = {
    name: chalk.bold.hex("#CABA3C")("                             Irtesaam Atfi"),
    education: `${chalk.green("B.Tech student @")} ${chalk
        .green
        .bold("NIT Hamirpur")}`,
    portfolio: chalk.gray("https://") + chalk.hex("#2b82b2")("irtesnaps.in"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.hex("#2b82b2")("irtesaam"),
    github: chalk.gray("https://github.com/") + chalk.hex("#2b82b2")("irtesaam"),
    npx: chalk.hex("#29B5B5")("npx") + " " + chalk.hex("#29B5B5")("irtesaam"),

    labelEducation: chalk.hex("#976d96").bold("  Education:"),
    labelGitHub: chalk.hex("#976d96").bold("     GitHub:"),
    labelLinkedIn: chalk.hex("#976d96").bold("   LinkedIn:"),
    labelPortfolio: chalk.hex("#976d96").bold("  Portfolio:"),
    labelCard: chalk.hex("#976d96").bold("       Card:")
};
