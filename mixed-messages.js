/* An object containing all 3 possible elements fo the final quote */
quoteComponents = {messageComponent1: ["an old man", "a blind washerwoman", "a lost giraffe", "3 pigeons in a crows loft", "6 wise hens listening to western rock"], messageComponent2: ["will never know the time that midday will strike", "doesn't know the front door from the back door except when falling down the steps", "can't eat the corn when it's really worms from the field", "listens for a lion in the savannah with it's feet as well", "will never appreciate folk music from Cornawall"], messageComponent3: ["lock the back door", "wear running shoes with a sturdy grip", "bring a supply of fresh grain", "bring a mix tape", "set the clock to strike every hour on the hour"]};


/* A simple function to generate a random number depending on the length of the Object sub-array being chosen from, in case they are of differing length */
randNumGen = (array) => {
    return [Math.floor(Math.random() * array.length)];
}


/* A function to take the quote object and extract an element from each sub-array */
randQuoteGenerator = (quoteComponents) => {
    let quotePieces = [];
    Object.values(quoteComponents).forEach(element => {
        quotePieces.push(element[randNumGen(element)]);
    })
    return quotePieces;
}


/* Simple calls to the necesssary function and formatting for the final message */
const quote = randQuoteGenerator(quoteComponents);
console.log(`Remember Rhea, as Confuscius often used to say, ${quote[0]} ${quote[1]}, so always remember to ${quote[2]}!`);
