#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

import chalkAnimation from "chalk-animation";



const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000)
    })
}
async function welcome() {
    let rainbowTitle = chalkAnimation.neon(" Welcome to Typescript Countdowntimer Made By Ariba");
    await sleep();
    rainbowTitle.stop();



}

await welcome()


let countDownDate = new Date("July 22, 2024  10:00").getTime();



let x = setInterval(function () {


    let now = new Date().getTime();


    let diff = countDownDate - now;


    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    console.log(days);

    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log(hours);

    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    console.log(minutes);

    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    console.log(seconds);


    console.log(chalk.blue
        (days + "d " + hours + "hrs "
            + minutes + "min" + seconds + "sec "));


    if (diff < 0) {
        clearInterval(x);
        "EXPIRED";
    }
}, 1000);