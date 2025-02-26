function writeCards(names, eventName) {
  let thankYouMessage = []; 

  for (let i = 0; i < names.length; i++) { 
    thankYouMessage.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`); // Step 3 & 4
  }

  return thankYouMessage;
}


console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));


function countDown(num) {
  while (num >= 0) { 
    console.log(num); 
    num--; 
  }
}


countDown(10);
