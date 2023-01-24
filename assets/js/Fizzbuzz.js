document.querySelector('button').addEventListener('click', fizzbuzz)

function fizzbuzz() {
    let display = document.getElementById('display');
    let displayHTML = "";
    let num = document.querySelector('input').value 
    for (i = 1; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        displayHTML += "<p>" + i + 'fizzbuzz' + "</p>"
      } else if (i % 3 === 0) {
        displayHTML += "<p>" + i + 'fizz' + "</p>"
      } else if (i % 5 === 0) {
        displayHTML += "<p>" + i + 'buzz' + "</p>"
      } else {
        displayHTML += "<p>" + i + "</p>"
      }
    }
    display.innerHTML = displayHTML
    event.preventDefault()
}