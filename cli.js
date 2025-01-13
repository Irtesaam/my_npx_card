#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';
import inquirer from "inquirer";
import clear from 'clear';
import open from 'open';
import fs from 'fs';
import request from 'request';
import path from 'path';
import ora from 'ora';
import cliSpinners from 'cli-spinners';
import os from 'os';
clear();

import { data } from './lib/data.js';

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.magentaBright.bold("email")}?`,
                value: () => {
                    open("mailto:atfimdirtesaam@gmail.com");
                    console.log("\nCheck your browser, and type the mail.\n");
                }
            },
            {
                name: `Download my ${chalk.blue.bold("Resume")}?`,
                value: () => {
                    // cliSpinners.dots;
                    const loader = ora({
                        text: 'Downloading Resume',
                        spinner: cliSpinners.material,
                    }).start();
                    const homeDir = os.homedir(); // Get the home directory
                    let pipe = request('https://drive.google.com/uc?export=download&id=1OQRUzZUODI64XXyxfIJClgwRq0-ndYuG').pipe(fs.createWriteStream(`${homeDir}/irtesaam_atfi_resume.pdf`));
                    pipe.on("finish", function () {
                        let downloadPath = path.join(homeDir, 'irtesaam_atfi_resume.pdf');
                        console.log(`\nResume Downloaded at ${downloadPath} \n`);
                        open(downloadPath)
                        loader.stop();
                    });
                }
            },

            {
                name: `Just ${chalk.red.bold("quit.")}`,
                value: () => {
                    console.log("Thanks for hanging out, goodbye!\n");
                }
            }
        ]
    }
];

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelEducation}  ${data.education}`,
        `${data.labelPortfolio}  ${data.portfolio}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "I am a Web Developer seeking to contribute to impactful projects."
        )}`,
        `${chalk.italic(
            "Looking to build something impactful and creative? So am I!."
        )}`,
        `${chalk.italic(
            "Let's chat! Whether it's exploring opportunities or simply connecting,"
        )}`,
        `${chalk.italic(
            "I would be delighted to hear from you and will get back to you ASAP."
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "double",
        borderColor: "#29B5B5"
    }
);


console.log(me);

prompt(questions).then(answer => answer.action());
