/**
 * Opens a new tab
 * 
 * @param {String} pattern 
 */
function openPrnt(pattern) {

    let win = window.open(`https://prnt.sc/${pattern}`,'_blank');
    if (!win) {
       
        alert('Please allow popups for this site / disable adblocker');
    }
}

/**
 * generates a random pattern
 */
function getRandomPattern() {
    let pattern = "";
    let lettersAndNumbers = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 6; i++) {
        pattern += lettersAndNumbers.charAt(Math.floor(Math.random() * lettersAndNumbers.length));
    }
    console.log(pattern);
    openPrnt(pattern);
}
/**
 * opens the given pattern
 */
function getSinglePattern() {
    let pattern = document.getElementById("patternInput").value;
    openPrnt(pattern)
}


/**
 * gets the given pattern and replaces the "." with a number between 100 and the stopvalue.
 */
function getLoopPattern() {
    let pattern = document.getElementById("loopInput").value;
    let stopvalue = document.getElementById("stopValue").value;
    let i = 100;
    let interval = setInterval(function () {
        pattern = document.getElementById("loopInput").value;
        openPrnt(pattern.replace(".", i++));
        if (i > stopvalue) {
            clearInterval(interval);
        }
    }, 1000);


}
/**
 * 
 */
function getRandomLoop() {
    let pattern = document.getElementById("loopInput").value;
    let stopvalue = document.getElementById("stopValue").value;
    let i = 100;
    let interval = setInterval(function () {
        pattern = document.getElementById("loopInput").value;
        openPrnt(pattern.replace(".", i++));
        if (i > stopvalue) {
            clearInterval(interval);
        }
    }, 1000);

}