function showLog(total) {
    for (let i = 0; i < total; i++) {
        console.log(i);
    }
}

addEventListener("message", function (event) {
    //event.data diambil dari postMessage
    const total = event.data
    showLog(total)
    //mengirim event.data ke Web_Worker.html
    postMessage("Done")
})