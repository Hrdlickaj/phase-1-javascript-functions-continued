function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}

function mondayWork(workActivity = "go to the office") {
    return (`This Monday, I will ${workActivity}.`)
}

function wrapAdjective(flair = "#") {
    return function (word1 = "smart") {
    return `You are ${flair}${word1}${flair}!`
    }
}