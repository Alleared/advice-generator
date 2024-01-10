
const adviceNumber = document.querySelector('.js-advice-number');
const adviceParagraph = document.querySelector('.js-advice-paragraph');


function adviceRequestButton () {

  fetch('https://api.adviceslip.com/advice')
  .then(response => {
    return response.json();
  })
  .then(randomAdvice => {
    adviceNumber.innerHTML = `<p>Advice &num;${randomAdvice.slip.id}</p>`;
    adviceParagraph.innerHTML = `<p>&ldquo;${randomAdvice.slip.advice}&rdquo;</p>`;
  })

}

  