/// <reference path="../lib/jasmine.d.ts"/>
/// <reference path="./example.ts"/>

import {Example} from './example'

describe('answer', function() {
	it("to life the universe and everything", function() {
		var example = new Example();
		expect(example.answer()).toEqual(42);
	});
});