document.addEventListener('keydown', function (event) {
    if (event.key === "ArrowLeft") {
        document.getElementById('prev').click();
    }
    else if (event.key === "ArrowRight") {
        document.querySelector('#next').click();
    }
    else if (event.key === " ") {
        event.preventDefault()
    document.querySelector('#btn-el').click();
    }
});