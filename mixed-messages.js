quoteComponents = {messageComponent1: ["an old man", "a blind washerwoman", "a lost giraffe", "3 pigeons in a crows loft", "6 wise hens listening to western rock"], messageComponent2: ["will never know the time that midday will strike", "doesn't know the front door from the back door except when falling down the steps", "can't eat the corn when it's really worms from the field", "listens for a lion in the savannah with it's feet as well", "will never appreciate folk music from Cornawall"], messageComponent3: ["lock the back door", "wear running shoes with a sturdy grip", "bring a supply of fresh grain", "bring a mix tape", "set the clock to strike every hour on the hour"]};


randQuoteGenerator = (quoteComponents) => {
    let component1 = quoteComponents['messageComponent1'][randNumGen(quoteComponents['messageComponent1'].length)];
    let component2 = quoteComponents['messageComponent2'][randNumGen(quoteComponents['messageComponent2'].length)];
    let component3 = quoteComponents['messageComponent3'][randNumGen(quoteComponents['messageComponent3'].length)];
    return `Confucious once said, \"${component1} ${component2}, so always ${component3}\"!`;
}


randNumGen = (arrayLength) => {
    return [Math.floor(Math.random() * arrayLength)];
}


let quote = randQuoteGenerator(quoteComponents);
console.log(quote);