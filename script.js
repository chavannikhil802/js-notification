const button1 = document.querySelector("#button1")
const button3 = document.querySelector("#button2")
let notification
let interval

button1.addEventListener("click", () => {
    Notification.requestPermission().then(perm => {
        if(perm === "granted") {
            notification = new Notification("Button 1 Notification!", {
                body: "Button 1 notification using JavaScript",
                icon: "js.png",
                // tag: "Welcom Message"
            })
        }
    })
})

button2.addEventListener("click", () => {
    Notification.requestPermission().then(perm => {
        if(perm === "granted") {
            notification = new Notification("Button 2 Notification!", {
                body: "Button 2 notification using JavaScript",
                icon: "js.png",
                // tag: "Welcom Message"
            })
        }
    })
})

// document.addEventListener("visibilitychange", () => {
//     if(document.visibilityState === "hidden") {
//         const leaveDate = new Date()
//         setInterval(() => {
//             notification = new Notification("You have left the page", {
//                 body: `You have been gone for ${Math.round((new Date() - leaveDate)/1000)} seconds`,
//                 tag: "Come Back"
//             })
//         }, 100)
//     }
//     else {
//         notification.close()
//     }
// })