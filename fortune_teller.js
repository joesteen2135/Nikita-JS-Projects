// I created The Fourtune Teller Though I also Added A Automatic Number Generator To Make It More Fun!

var fortune = Math.floor(Math.random() * 10);
console.log("Your Luck Is " + fortune);

if (fortune <= 3 && fortune >=0){
    console.log("Sorry Bud, You Dont Seem To Get Good Luck!");
} else if (fortune > 3 && fortune <= 7){
    console.log("You Have Average Luck!");
} else if (fortune > 7 && fortune <= 10){
    console.log("You Have Great Luck!");
} else {
    console.log("Invalid Input! Fourtune Cannot Be Read Correctly!");
}

