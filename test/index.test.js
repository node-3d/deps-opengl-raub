'use strict';

const assert = require('node:assert').strict;
const { describe, it } = require('node:test');

const deps = require('..');


describe('Paths', () => {
	it('exports an object', () => {
		assert.strictEqual(typeof deps, 'object');
	});
	
	it('exports "bin" string', () => {
		assert.strictEqual(typeof deps.bin, 'string');
	});
	
	it('exports "include" string', () => {
		assert.strictEqual(typeof deps.include, 'string');
	});
});
