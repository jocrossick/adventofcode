const { getMoveAndChange, getDestinationIndexes } = require("./day8");
const { test, expect } = require("@jest/globals");

test('It finds the right move/acc for each instruction', () => {
    expect(getMoveAndChange('acc +33')).toEqual([1, 33]);
    expect(getMoveAndChange('acc -4')).toEqual([1, -4]);
    expect(getMoveAndChange('nop +43')).toEqual([1, 0]);
    expect(getMoveAndChange('nop -5')).toEqual([1, 0]);
    expect(getMoveAndChange('jmp +6')).toEqual([6, 0]);
    expect(getMoveAndChange('jmp -8')).toEqual([-8, 0]);
});

test('It returns the correc start and end indexes', () => {
    const testData = ['acc +48', 'nop +308', 'acc -2', 'acc +48', 'jmp -3'];
    const expectedResult = [{startsAt: 0, endsAt: 1, instructionIs: 'acc +48'}, {startsAt: 1, endsAt: 2, instructionIs: 'nop +308'},{startsAt: 2, endsAt: 3, instructionIs: 'acc -2'},{startsAt: 3, endsAt: 4, instructionIs: 'acc +48'},{startsAt: 4, endsAt: 1, instructionIs: 'jmp -3'}];
    expect(getDestinationIndexes(testData)).toEqual(expectedResult);
})