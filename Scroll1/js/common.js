const depthWrap = document.querySelector(".depthWrap");
const progressBar = document.querySelector(".bar");
const submarine = document.querySelector(".submarine");
let scrollNum = 0;
let documentHeight = 0;
let per = 0;

window.addEventListener("scroll", () => {
    scrollNum = window.scrollY;
    documentHeight = document.body.scrollHeight - window.innerHeight;
    per = percent(scrollNum, documentHeight) + "%";

    depthWrap.querySelector("span").innerText = scrollNum;
    progressBar.style.width = per;
    submarine.style.transform = `translateX(${per})`;
});

const percent = (num, total) => {
    return ((num / total) * 100).toFixed(0);
};
