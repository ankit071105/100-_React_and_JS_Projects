
const image = document.getElementById('image');
const connectionStatus = document.getElementById("status");
const backgroundColor = document.querySelector("#main");

function setColor() {

    backgroundColor.classList.add("online");
    
}

async function statusCheck() {
    try {
    const fetchResult = await fetch("https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=" + (new Date()). getTime());

    image.src = "./images/online.png"
    setColor()
    return fetchResult.status >= 200 && fetchResult.status < 300;   
}
    catch (error) {
        console.log(error);
        connectionStatus.textContent = "OOPS! Your Connection is Down."
        image.src = "./images/offline.png"
        backgroundColor.classList.remove("online");
    }
}

setInterval(async () => {
    const result = await statusCheck(); 
    if (result) {
        connectionStatus.textContent = "You're Online!!! Connection looks stable."
        setColor();
    }
}, 5000);

window.addEventListener("load", async () => {
    if(statusCheck() ) {
        connectionStatus.textContent = "Online"
    }

    else {
        connnectionStatus.textContent = "Offline"
    }
    
})

statusCheck()