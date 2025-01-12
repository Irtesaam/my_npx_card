#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';
import clear from 'clear';

clear();

import { data } from './lib/data.js';

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
