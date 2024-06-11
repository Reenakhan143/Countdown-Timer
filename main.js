import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
const res = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: " Please Enter the amount of second!",
    validate: (input) => {
        if (isNaN(input)) {
            return "please Enter valid number";
        }
        else if (input > 60) {
            return "second must be 60";
        }
        else {
            return true;
        }
    }
});
let input = res.userInput;
function starttime(val) {
    const inittime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(inittime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Time has Expired");
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min}:${sec}`);
    }, 1000);
}
starttime(input);
