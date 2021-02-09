var roster = []

function addNew()
{
  var name = prompt("What name would you want to add")
  roster.push(name)
}
function remove(){
  var game = prompt("What name would you like to remove")
  var index = roster.indexOf(game);
  roster.splice(index,1)
}
function display()
{
  console.log(roster)
}
var start = prompt("Would You like to start? yes or no")
var request ="empty";

if (start === 'yes'){
  while (request !== "quit") {
    request = prompt("Please select an action: add, remove, display or quit")
    if (request ==='add') {
      addNew();
    }else if (request === 'display') {
      display();
    }else if (request === 'remove') {
      remove();
    }else {
      alert("Not recognised, will quit")
    }
  }
}else {
  console.log("thanks");
}
alert("thanks for co-operation")


function sleepIn(weekday, vacation){
return (!weekday || vacation)
}

function monkeyTrouble(aSmile, bSmile) {
  return (aSmile && bSmile) || (!aSmile && !bSmile)

}
function stringTimes(str,n) {
  var getString ="";
  var i=0;
  while (i<n) {
    getString +=str
    i++
}
return stringTimes
}

function luckySum(a, b, c){
  if(a===13){
    return 0
  }else if (b===13) {
    return a
  }else if (c===13) {
    return a+b
  }else {
  return a+b+c
  }
}
function caughtSpeeding(speed,isBirthday){
  if (is_birthday) {
    speed -= 5
  } if (speed <= 60) {
    return 0
  } else if (60< speed <=80) {
    return 1
  } else {
    return 2
  }
}

function makeBricks(small, big, goal){
  return ((small*1)+(big*5))>=goal
}
