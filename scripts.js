//----------------------------------------
//    DOM
//----------------------------------------
const my_main_dom = document.getElementById("my_main");
const my_screen_dom = document.getElementById("my_screen");
const clear_button = document.getElementById("ctrl_1");
const del_button = document.getElementById("ctrl_2");
//----------------------------------------
//    FUNCTIONS
//----------------------------------------
function clear_screen() {
  my_screen_dom.innerHTML = "";
}
function pop_character() {
  my_screen_dom.textContent = my_screen_dom.textContent.slice(0, -1);
}
function parse_screen(to_parse) {
  console.log(`parse_screen called: ${to_parse}`);
  /*let buffer = toString(to_parse[0]);
  let num1;
  let num2;
  for(let i=1; i<to_parse.length;i++){
    if(/[0-9]/.test(to_parse[i])){
		console.log(buffer);
    	if(buffer=='-'){
			buffer += num1;
			buffer.toString();
			console.log(buffer);
		}
    }
  }*/
}
function log_button(e) {
  //console.log(e.key)
  if (e.key == "Backspace" || e.key == "Delete") {
    pop_character();
  }
  if (e.key == "c" || e.key == "C") {
    clear_screen();
  }
  if (e.key == "Enter") {
    parse_screen(my_screen_dom.textContent);
  }
  if (/\d|\/|\*|\-|\+|\./gi.test(e.key)) {
    my_screen_dom.textContent += e.key;
  }
  if (my_screen_dom.textContent.length >= 11) {
    my_screen_dom.textContent = "***ERROR***";
  }
}
function create_clickable_menu(arr) {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let button_id = 0;
    let logged_value = "";
    button_id = `but-${i + 1}`;
    //console.log(`Button_id = ${button_id}`);
    logged_value = arr[i];
    //console.log(`Logged_value = ${logged_value}`);
    document.getElementById(button_id).addEventListener("click", () => {
      if (button_id == "but-15") {
        parse_screen(my_screen_dom.textContent);
      } else {
        my_screen_dom.textContent += logged_value;
        if (my_screen_dom.textContent.length >= 11) {
          my_screen_dom.textContent = "***ERROR***";
        }
      }
    });
    console.log(`Linked but-${i + 1} --> ${logged_value}`);
  }
}
//----------------------------------------
//    UI
//----------------------------------------
window.addEventListener("keydown", log_button);
clear_button.addEventListener("click", clear_screen);
del_button.addEventListener("click", pop_character);
create_clickable_menu([
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  ".",
  "0",
  "=",
  "+",
]);

//----------------------------------------
//    Visual
//----------------------------------------
my_main_dom.style.width = `${my_main_dom.offsetHeight * 0.67}px`;
