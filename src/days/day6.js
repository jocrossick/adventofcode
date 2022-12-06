const day6 = (input, part) => {
    const startLength = 4;
    const messageLength = 14;
    const lookFor = part == 2 ? messageLength : startLength;

    const signal = input.split('');
    for (let i = 0; i < signal.length-lookFor; i++) {
        const message = new Set(signal.slice(i, i+lookFor));
        if (message.size == lookFor) {
            return i + lookFor;
        }
    }
}

module.exports = { day6 }