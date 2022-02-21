/////////////////////////////////////////////////////////////
const champ = document.getElementById("input");
const submit = document.getElementById("cc");
var random = (Math.random() * 10).toFixed();

champ.onkeyup = () => {
  //is there a value in the input?
  let value = champ.value;
  if (value.trim() != 0) {
    submit.classList.add("active");
  } else {
    submit.classList.remove("active");
  }
};
///////////////////////////////////////////function that happen when validatin the value
function validate() {
  let value = parseInt(champ.value); //getting user entered value
  let body = document.querySelector("body");

  function endGame(win) {
    //winning or losing
    let creatFieldset = document.createElement("fieldset");
    let creatH1 = document.createElement("h1");
    let creatButton = document.createElement("a");
    creatFieldset.className = "winner"; //creat className
    creatButton.className = "new"; //creat className

    if (win) {
      creatH1.innerHTML = "WINNER WINNER CHICKEN DINNER";
      creatButton.innerHTML = "New try";
    } else {
      creatH1.innerHTML = "LOSER LOSER DOUBLE LOSER";
      creatButton.innerHTML = "Try again";
    }
    body.appendChild(creatFieldset);
    creatFieldset.appendChild(creatH1);
    creatFieldset.appendChild(creatButton);
    creatButton.addEventListener("click", () => {
      window.location.reload();
    });
    return;
  }

  function mistake(chances) {
    //indicateur en cas d'érreur
    let indicator = document.querySelector("fieldset > p");
    document.querySelector("span").innerHTML = chances;
    value > random
      ? (indicator.innerHTML = "LOWER !!")
      : (indicator.innerHTML = "HIGHER !!");
  }

  if (value == random) {
    //checking value of the user
    endGame(true);
    champ.blur();
  } else {
    //na9so les chances
    let chance = parseInt(document.querySelector("span").innerHTML);
    if (chance > 1) {
      chance -= 1;
      mistake(chance);
    } else {
      endGame(false);
      champ.blur();
    }
  }
}
///////////////////////////////////////////end

//validating Listenrs
champ.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    validate();
  }
});
submit.addEventListener("click", () => {
  validate();
});
