/// <reference path="../lib/jasmine.d.ts"/>
/// <reference path="./yatzee.ts"/>

import {chance, yatzy, ones, twos, pair} from './yatzee'

describe('chance', function() {
	it("sums the values of all dices", function() {
		expect(chance(1, 2, 3, 4, 5)).toEqual(15);
	});

});

describe('yatzy', () => {
    it('scores 50 if all dice is the same', () => {
        expect(yatzy(1, 1, 1, 1, 1)).toEqual(50);
        expect(yatzy(4, 4, 4, 4, 4)).toEqual(50);
        expect(yatzy(3, 3, 3, 3, 3)).toEqual(50);
    })
    it('scores 0 if not all dice is the same', () => {
        expect(yatzy(1, 2, 1, 1, 1)).toEqual(0);
        expect(yatzy(4, 4, 1, 4, 4)).toEqual(0);
        expect(yatzy(3, 3, 3, 3, 4)).toEqual(0);
    })
})

describe('same rolls', () => {
    it('ones returns the sum of 1 rolls', () => {
        expect(ones(1, 2, 3, 4, 5)).toEqual(1)
        expect(ones(1, 2, 3, 1, 5)).toEqual(2)
    })

    it('twos returns the sum of 2 rolls', () => {
        expect(twos(1, 2, 3, 4, 5)).toEqual(2)
        expect(twos(1, 2, 3, 2, 5)).toEqual(4)
    })
})

describe('pair', () => {
    it('returns sum of pairs', () => {
        expect(pair(1, 2, 3, 4, 5)).toEqual(0)
        expect(pair(3, 3, 5, 6, 4)).toEqual(6)
        // expect(pair(1, 1, 6, 2, 6)).toEqual(12)
        // expect(pair(3, 3, 3, 4, 5)).toEqual(0)
        // expect(pair(3, 3, 3, 3, 5)).toEqual(0)
    })
})
