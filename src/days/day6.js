const day6 = (input, part) => {
    const uniqueLength = part == 2 ? 14 : 4;
    const chars = input.split('');
    for (let i = 0; i < chars.length-uniqueLength; i++) {
        const signal = new Set(chars.slice(i, i+uniqueLength));
        if (signal.size == uniqueLength) {
            return i + uniqueLength;
        }
    }
}

module.exports = { day6 }