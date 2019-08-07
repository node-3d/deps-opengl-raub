'use strict';

const { expect } = require('chai');

const deps = require('..');


describe('Paths', () => {
	
	it(`exports an object`, () => {
		expect(deps).to.be.an('object');
	});
	
	it(`exports "bin" string`, () => {
		expect(deps.bin).to.be.a('string');
	});
	
	it(`exports "include" string`, () => {
		expect(deps.include).to.be.a('string');
	});
	
	it(`has installed the "bin" directory`, () => {
		expect(require('fs').existsSync(deps.bin)).to.be.true;
	});
	
});
