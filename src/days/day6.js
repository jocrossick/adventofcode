const day6 = (input, part) => {
    const chars = input.split('');
    for (let i = 0; i < chars.length-4; i++) {
        const signal = new Set(chars.slice(i, i+4));
        if (signal.size == 4) {
            return i + 4;
        }
    }
}

module.exports = { day6 }