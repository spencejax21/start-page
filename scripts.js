let colon = true;

function setTimeMessage() {
    let currentTime = new Date().toLocaleTimeString("en-US", {
        hour12: false,
        hour: "numeric",
        minute: "numeric",
    });

    console.log(currentTime);
    let hourMinute = currentTime.split(":");
    let hour = parseInt(hourMinute[0]);
    console.log(hourMinute);

    if (hourMinute[0] >= 5 && hourMinute[0] < 12) {
        document.getElementById("time-message").innerHTML = "Good Morning,";
    } else if (hourMinute[0] >= 12 && hourMinute[0] < 7) {
        document.getElementById("time-message").innerHTML = "Good Afternoon,";
    } else {
        document.getElementById("time-message").innerHTML = "Good Evening,";
    }
}

function setTime() {
    let time = new Date().toLocaleTimeString("en-US", {
        hour12: true,
        hour: "numeric",
        minute: "numeric",
    });

    if (colon) {
        document.getElementById("colon").className = "invisible";
        colon = false;
    } else {
        document.getElementById("colon").className = "visible";
        colon = true;
    }
    timeArray = time.split(":");
    document.getElementById("first-num").innerHTML = timeArray[0];
    document.getElementById("second-num").innerHTML = timeArray[1];
}

async function getQuote() {
    try {
        let response = await fetch("https://api.quotable.io/random");
        json = await response.json();
    } catch (error) {
        getQuote();
    }
    document.getElementById("quote-content").innerHTML = json["content"];
    document.getElementById("quote-author").innerHTML = " " + json["author"];
}
setTimeMessage();
getQuote();
setTime();

setInterval(function () {
    setTime();
}, 1000);
