'use strict';

const { expect } = require('chai');
const { stub, spy } = require('sinon');

const deps = require('deps-opengl-raub');


const pathsMethods = ['bin', 'rem', 'include'];


describe('Paths', () => {
	
	let log;
	let stubbed;
	beforeEach(() => {
		log = spy();
		stubbed = stub(console, 'log').callsFake(log);
	});
	afterEach(() => stubbed.restore());
	
	
	it(`exports an object`, () => {
		expect(deps).to.be.an('object');
	});
	
	
	pathsMethods.forEach(
		m => it(`#${m}() is available`, () => {
			expect(deps).to.respondTo(m);
		})
	);
	
	
	pathsMethods.forEach(
		m => it(`#${m}() writes stdout`, () => {
			deps[m]();
			expect(log.getCall(0), 'called').to.exist;
			expect(log.getCall(0).args[0], 'has args').to.exist;
			expect(log.getCall(0).args[0], 'writes string').to.be.a('string');
		})
	);
	
});
