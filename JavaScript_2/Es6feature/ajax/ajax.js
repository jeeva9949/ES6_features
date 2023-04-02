let btn = document.querySelector("button");
let p = document.querySelector("p");

// console.log(btn,p)

// adding event lister to get data

const getdatafromajax = () => {
  console.log("hello its working");
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "content.txt", true);
  xhr.send();

  xhr.onprogress = function () {
    p.innerHTML = "Loading...";
  };

  xhr.onload = function () {
    p.innerHTML = xhr.responseText;
  };
};

btn.addEventListener("click", getdatafromajax);
