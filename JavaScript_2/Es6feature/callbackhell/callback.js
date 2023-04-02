const handle = () => {
  let arr = ["callback", "closures", "promise", "ajax"];
  setTimeout(() => {
    console.log(arr[0]);
    setTimeout(() => {
      console.log(arr[1]);
      setTimeout(() => {
        console.log(arr[2]);
        setTimeout(() => {
          console.log(arr[3]);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
};

handle();
console.log("heloo");
