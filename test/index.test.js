'use strict';

const deps = require('..');


describe('Paths', () => {
	it('exports an object', () => {
		expect(typeof deps).toBe('object');
	});
	
	it('exports "bin" string', () => {
		expect(typeof deps.bin).toBe('string');
	});
	
	it('exports "include" string', () => {
		expect(typeof deps.include).toBe('string');
	});
});
