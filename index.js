///////////////////////////////////////////Test examples/////////////////////////////////////////////////////////////////////////

function map(array,callback){

  const arrayData=[]
  for(const el of array){
      arrayData.push(callback(el))
  }

  return arrayData
}


var x= map([2,3,4],(eachnum)=>{

  var answer=parseInt(eachnum) * parseInt(eachnum)
  return answer
})

// map([1, 2, 3], function (num) {
//   console.log(parseInt(num) * parseInt(num));
// });

// console.log(x);

///////////////////////////////////////////Assignments////////////////////////////////////////////////////////////////////////////////////////////////


const tutorials = [
"what does the this keyword mean?",
"What is the Constructor OO pattern?",
"implementing Blockchain Web API",
"The Test Driven Development Workflow",
"What is NaN and how Can we Check for it",
"What is the difference between stopPropagation and preventDefault?",
"Immutable State and Pure Functions",
"what is the difference between == and ===?",
"what is the difference between event capturing and bubbling?",
"what is JSONP?",
];


const newCapsTutorial = tutorials.map((tutorial)=>{

  const newtutorial = tutorial.split(" ");
for (var i = 0; i < newtutorial.length; i++) {
  newtutorial[i] = newtutorial[i].charAt(0).toUpperCase() + newtutorial[i].slice(1);

}

const answer = newtutorial.join(" ");

console.log(answer);
})






















