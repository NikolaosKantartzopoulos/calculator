function operate(a, oper, b) {
  if (oper == "+") return add_c(a, b);
  if (oper == "-") return sub_c(a, b);
  if (oper == "*") return mul_c(a, b);
  if (oper == "/") return div_c(a, b);
}

function add_c(a, b) {
  return a + b;
}
function sub_c(a, b) {
  return a - b;
}
function mul_c(a, b) {
  return a * b;
}
function div_c(a, b) {
  return a / b;
}

var a = Array.from(document.getElementsByClassName("number_button"));
a.forEach((element) => {
  //   console.log(element.textContent);
  //   if (element.textContent == "1") {
  //     element.addEventListener("keydown", logKey());
  //   }

  element.style.backgroundColor = "green";
  //element.addEventListener("click", inp_number(element.textContent));
});
