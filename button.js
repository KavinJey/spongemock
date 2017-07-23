function button() {
  var string = document.getElementById('Words').value;
  string = string.split("");

  for (i = 0; i < string.length; i++) {
      console.log(num);
      var num = Math.floor(Math.random() * 2);
      if (num == 0) {
        string[i] = string[i].toUpperCase();
      }

      else if (num == 1) {
        string[i] = string[i].toLowerCase();
      }
      console.log(string[i]);
  }

  string = string.join("");
  console.log(string)
  document.getElementById('text').innerHTML = string;
}
