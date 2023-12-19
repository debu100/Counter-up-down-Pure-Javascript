let counter = 0;
const label = document.querySelector("label");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const reset = document.querySelector(".reset");

plus.addEventListener("click", function () {
  counter++;
  label.innerHTML = counter;
  //   console.log(typeof counter); //* number
});

minus.addEventListener("click", function () {
  if (counter === 0) {
    alert("Number can't be less than zero");
  } else {
    counter--;
    label.innerHTML = counter;
  }
});

reset.addEventListener("click", function () {
  counter = 0;
  label.innerHTML = counter;
});
