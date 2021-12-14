let raceNumber = Math.floor(Math.random() * 1000);

// a variable that indicates a runner registered early or not
let earlyRegistration = true;

// variable for runner's age
const runnerAge = 18;

// checks whether a runner is an adult and registered early

if (runnerAge > 18 && earlyRegistration === true){
 raceNumber +=1000;
 console.log(raceNumber);
}

if(runnerAge > 18 && earlyRegistration===true){
  console.log(`You will race at 9:30am, Your race number is:, ${raceNumber}`);
}
else if(runnerAge > 18 && earlyRegistration != true){
   console.log(`You will race at 11:00am, Your race number is:, ${raceNumber}`);
}
else if(runnerAge < 18){
  console.log(`You will race at 12:30pm, Your race number is:, ${raceNumber}`);
}
else{
  console.log(`Please see anybody at the registration desk, Thank You!`);
}
