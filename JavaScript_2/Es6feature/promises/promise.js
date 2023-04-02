// let p = new Promise(function (sucess, error) {
//   let datacoming = true;
//   if (datacoming) {
//     sucess([1, 2, 3, 4]);
//   } else {
//     error("error promise not done");
//   }
// });
// console.log(p);

// p.then(function (data) {
//   console.log(data);
// });

// p.catch(function (data) {
//   console.log(data);
// });


let btn = document.querySelector("button")
let data = document.querySelector("p")

btn.onclick = function () {
  var p = new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "content.txt", true);
    xhr.send();

    xhr.onload = function () {
      if (xhr.status == 200) {
        resolve(xhr.responseText);
      } else {
        reject("data not found");
      }
    };
  });

  p.then(function (data_res) {
    data.innerHTML(data_res);
    console.log(data_res)
  });
  p.catch(function (data_rej) {
    data.innerHTML(data_rej);
    console.log(data_rej)
  });
}
