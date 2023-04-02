// const input = document.querySelector("input");
// input.addEventListener("focus", changeBackground);
// input.addEventListener("doubleclick", dc);
// // btn.onclick=changeBackground
// function changeBackground() {
//   input.style.backgroundColor = "red";
//   // alert("press ok to change background")
// }

// function dc() {
//   input.style.backgroundColor = "none";
// }

// console.log(Math.floor(Math.random() * 16));

const btn = document.querySelector("button")

const changebackground = () => {
  let letter = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const r = Math.floor(Math.random() * 16);
    console.log(r);
    color += letter[r];
  }
  console.log(color);
  document.body.style.backgroundColor = color;
};

btn.addEventListener("click",changebackground)


