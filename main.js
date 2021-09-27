let questions = document.querySelectorAll('[id*=question]');
for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', show, false);
  questions[i].myParam = i + 1 + '';
}

function show(e) {
  let b = e.currentTarget.myParam;
  let answer = document.querySelector("#question" + b + " :nth-child(2)");
  let arrow = document.querySelector(".arrow" + b);

  answer.classList.toggle("answer");
  arrow.classList.toggle("down");


  for (let i = 1; i < 6; i++) {
    if (i != b) {
      document.querySelector("#question" + i + " :nth-child(2)").classList.add('answer');
      document.querySelector(".arrow" + i).classList.remove('down');

    }
  }
}
