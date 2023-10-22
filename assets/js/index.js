
// toggle button js
function showDiv(divNumber) {
  for (let i = 1; i <= 5; i++) {
    const div = document.getElementById(`div${i}`);
    const button = document.getElementById(`btn${i}`);
    
    if (i === divNumber) {
      div.classList.add('active');
      div.classList.remove('hidden');
      button.classList.add('active-button');
    } else {
      div.classList.remove('active');
      div.classList.add('hidden');
      button.classList.remove('active-button');
    }
  }
}

function NestedshowDiv(divNumber) {
  for (let i = 5; i <= 7; i++) {
    const div = document.getElementById(`div${i}`);
    const button = document.getElementById(`btn${i}`);
    
    if (i === divNumber) {
      div.classList.add('active');
      div.classList.remove('hidden');
      button.classList.add('active-button');
    } else {
      div.classList.remove('active');
      div.classList.add('hidden');
      button.classList.remove('active-button');
    }
  }
}
