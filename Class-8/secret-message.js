let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
secretMessage.push("to", "Program");

secretMessage[7] = "right"

secretMessage.unshift("Programming");


secretMessage.splice(6,6, "know");

console.log(secretMessage.join(" "));