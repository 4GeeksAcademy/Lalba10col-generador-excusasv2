/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function generarexcusas() {
    let who = ["The dog", "My grandma", "The mailman", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "my phone", "the car"];
    let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];
    var rand1 = Math.floor(Math.random() * who.length);
    var rand2 = Math.floor(Math.random() * action.length);
    var rand3 = Math.floor(Math.random() * what.length);
    var rand4 = Math.floor(Math.random() * when.length);

    let Aleatorio = `${who[rand1]} ${action[rand2]} ${what[rand3]} ${when[rand4]}`;
    let excuseElement = document.getElementById("excuse");
    excuseElement.innerHTML = Aleatorio; // Actualiza el texto en la página
    excuseElement.style.visibility = "visible"; // Hace visible la excusa generada
  }
  generarexcusas();
};
