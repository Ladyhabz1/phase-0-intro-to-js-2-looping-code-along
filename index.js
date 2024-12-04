//Code your solutions in this file
function writeCards(names, event) {
    const messages = []; // Create a new, empty array to hold the messages

    for (let i = 0; i < names.length; i++) {
        // Build out the thank-you message using string interpolation
        const message =`Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message); // Add the message to the array
    }

    return messages; // Return the array of messages
}
// countDown function
function countDown(start) {
    while (start >= 0) {
        console.log(start); // Log the current number
        start--; // Decrement the number
    }
}