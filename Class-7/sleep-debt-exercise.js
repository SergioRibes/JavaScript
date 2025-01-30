function getsleepHours(day) {
    switch(day) {
        case "monday":
            return 7;
            break;
        case "tuesday":
            return 6;
            break;
        case "wednesday":
            return 7;
            break;
        case "thursday":
            return 8;
            break;
        case "friday":
            return 6;
            break;
        case "saturday":
            return 7;
            break;
        case "sunday":
            return 7;
            break;
        default:
            return 0;
            break;
        }
    }
function getActualSleepHours() {
    return getsleepHours("monday") + getsleepHours("tuesday") + getsleepHours("wednesday") + getsleepHours("thursday") + getsleepHours("friday") + getsleepHours("saturday") + getsleepHours("sunday");
}


function getIdealSleepHours() {
    let idealHours = 8;
    return idealHours * 7;
}

function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log("You just slept the perfect amount of hours.");
    }else if (actualSleepHours > idealSleepHours){
        let extraHours = actualSleepHours - idealSleepHours;
        console.log(`You slept more ${extraHours} hours than necessary.`);
    }else if (actualSleepHours < idealSleepHours) {
        let deficitHours = idealSleepHours - actualSleepHours;
        console.log(`You should rest a little more. ${deficitHours} hours to be precise.`);
    }
}

calculateSleepDebt();


 
                        
             
            
 