'use strict';

const fs = require('fs');

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
	
	it('has installed the "bin" directory', () => {
		expect(fs.existsSync(deps.bin)).toBe(true);
	});
	
});
