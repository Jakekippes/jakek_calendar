let displayDate = document.querySelector('#currentDay');
let nineInput = document.querySelector('#nine');
let tenInput = document.querySelector('#ten');
let elevenInput = document.querySelector('#eleven');
let twelveInput = document.querySelector('#twelve');
let oneInput = document.querySelector('#one');
let twoInput = document.querySelector('#two');
let threeInput = document.querySelector('#three');
let fourInput = document.querySelector('#four');
let fiveInput = document.querySelector('#five');
let save = document.querySelector('.saveBtn')


let NowMoment = moment().format("llll");

displayDate.innerHTML = NowMoment;
  
if(localStorage.getItem('time') === null){
  let timeBlock = {
    "9am":"",
    "10am":"",
    "11am":"",
    "12pm":"",
    "1pm":"",
    "2pm":"",
    "3pm":"",
    "4pm":"",
    "5pm":"",
  };
  localStorage.setItem('time', JSON.stringify(timeBlock));
}; 
let timeBlocks = JSON.parse(localStorage.getItem('time'));

$(save).on("click", function(event){
  let newTime = timeBlocks
  newTime["9am"] = ;
  console.log(newTime);
  localStorage.setItem("time", newTime);
});

// localStorage.setItem('time', JSON.stringify(time));
// update time blocks on page with information from timeBlocks
// When user clicks on save button update timeBlocks and store in local storage
