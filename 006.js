// Convert seconds into HH:MM:SS
function humanReadable(seconds) {
    var hours=Math.floor(seconds/3600);
    var minutes=Math.floor(seconds%3600/60);
    seconds=Math.ceil((seconds%3600)%60);
    if(hours<10){
        hours="0"+hours;
    }
    if(minutes<10){
        minutes="0"+minutes;
    }
    if(seconds<10){
        seconds="0"+seconds;
    }
    return hours+":"+minutes+":"+seconds;
}

console.log(humanReadable(10));