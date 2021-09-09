let question1 = document.querySelector("#question1");
let question2 = document.querySelector("#question2");
let question3 = document.querySelector("#question3");
let question4 = document.querySelector("#question4");
let question5 = document.querySelector("#question5");

question1.addEventListener("click", show, false);
question1.myParam = "1";

question2.addEventListener("click", show, false);
question2.myParam = "2";

question3.addEventListener("click", show, false);
question3.myParam = "3";

question4.addEventListener("click", show, false);
question4.myParam = "4";

question5.addEventListener("click", show, false);
question5.myParam = "5";

function show(a) {
  let b = a.currentTarget.myParam;
  let answer = document.querySelector("#question" + b + " :nth-child(2)");
  let arrow = document.querySelector(".arrow" + b);
  let question = document.querySelector("#question" + b);

  if (answer.classList.contains("answer")) {
    question.style.fontWeight = 700;
    answer.classList.remove("answer");
    answer.style.fontWeight = 400;
    answer.style.opacity = 0.5;
    answer.style.fontSize = "12px";
    arrow.style.transform = "rotate(180deg) scale(2)";
    arrow.style.paddingLeft = "0px";
    arrow.style.paddingBottom = "5px";
  } else {
    question.style.fontWeight = 400;
    answer.classList.add("answer");
    arrow.style.transform = "rotate(0deg) scale(2)";
    arrow.style.paddingRight = "0px";
    arrow.style.paddingTop = "6px";
  }

  for (i = 1; i < 6; i++) {
    if (i != b) {
      let j = "" + i;
      let ans = document.querySelector("#question" + j + " :nth-child(2)");
      let other_arrows = document.querySelector(".arrow" + j);
      let other_questions = document.querySelector("#question" + j);

      ans.classList.add("answer");
      other_questions.style.fontWeight = 400;
      other_arrows.style.transform = "rotate(0deg) scale(2)";
      other_arrows.style.padding = 0;
      other_arrows.style.paddingRight = "0px";
      other_arrows.style.paddingTop = "5px";
    }
  }
}
