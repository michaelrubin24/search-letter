
var string = "morning";
var string_input = prompt("Введите искомую букву").toLowerCase();
var i = 0;
if((string_input.length > 1) || (string_input == "")){
  alert("Неправильный ввод");
}else{
  while(i < string.length){
    if(string[i] == string_input){
      alert("Это буква находится в слове на " + (i + 1) + " -ой позиции");
      break;
    }
    i++;
  }
  if(string[i] != string_input){
    alert("-1");
  }
}
