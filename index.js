const champ = document.getElementById("input");
const submit = document.getElementById("cc");
var random = (Math.random() * 10).toFixed();
champ.onkeyup = () => {
  let value = champ.value;
  if (value.trim() != 0) {
    submit.classList.add("active");
  } else {
    submit.classList.remove("active");
  }
};


submit.addEventListener("click", () => {
  let value = parseInt(champ.value); //getting user entered value
  let body = document.querySelector("body");
  if (value == random) {
    let creatFieldset = document.createElement("fieldset");
    let creatH1 = document.createElement("h1");
    let creatButton = document.createElement("a");
    creatFieldset.className = "winner";
    creatButton.className = "new";
    creatH1.innerHTML = "WINNER WINNER CHICKEN DINNER";
    creatButton.innerHTML = "New try";
    //n9ololo gg
    body.appendChild(creatFieldset);
    creatFieldset.appendChild(creatH1);
    creatFieldset.appendChild(creatButton);
    creatButton.addEventListener("click", () => {
      window.location.reload();
    });
  } else {
    //na9so les chances
    let chance = parseInt(document.querySelector("span").innerHTML);
    if (chance > 1) {
      chance -= 1;
      
      document.querySelector("span").innerHTML = chance;
    } else {
      let creatFieldset = document.createElement("fieldset");
      let creatH1 = document.createElement("h1");
      let creatButton = document.createElement("a");
      creatFieldset.className = "winner";
      creatButton.className = "new";
      creatH1.innerHTML = "LOSER LOSER DOUBLE LOSER";
      creatButton.innerHTML = "Try again";

      body.appendChild(creatFieldset);
      creatFieldset.appendChild(creatH1);
      creatFieldset.appendChild(creatButton);
      creatButton.addEventListener("click", () => {
        window.location.reload();
      });
    }
  }
});
