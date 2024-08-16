let x = 0,
    y = 0;

const contentAll = document.querySelectorAll(".contWrap div");

window.addEventListener("mousemove", (event) => {
    console.log(event);
    x = event.pageX;
    y = event.pageY;

    contentAll.forEach((item) => {
        console.log(item);

        item.style.left = x + "px";
    });
});
