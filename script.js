const balloons = document.querySelectorAll(".box");
const check = document.querySelectorAll(".check");
const checkAll = document.querySelector(".checkAll");

balloons.forEach((balloon, idx) => {
    balloon.addEventListener("click", () => {
        balloon.classList.toggle("bgRed");
        console.log(check[idx].checked);
        check[idx].checked = !check[idx].checked;
        const allIsSelected = Array.from(balloons)
            .map((balloon, idx) => check[idx].checked)
            .every((item) => !!item);
        checkAll.checked = allIsSelected;
    });
});

checkAll.addEventListener("click", () => {
    let isSelected = checkAll.checked;

    if (isSelected) {
        balloons.forEach((balloon, idx) => {
            balloon.classList.add("bgRed");
            check[idx].checked = true;
        });
    } else {
        balloons.forEach((balloon, idx) => {
            balloon.classList.remove("bgRed");
            check[idx].checked = false;
        });
    }
});

