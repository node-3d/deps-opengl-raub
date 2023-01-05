'use strict';

const path = require('node:path');
const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

const {
	getPlatform, getBin, ensuredir, copyall,
} = require('addon-tools-raub');


const bin = getBin();
const binPath = path.resolve(bin);
const platform = getPlatform();


const fail = (error) => {
	console.error(error);
	process.exit(-1);
};


(async () => {
	try {
		await ensuredir(binPath);
		
		if (platform === 'windows') {
			await cp(path.resolve('src/OpenGL32.Lib'), binPath);
		}
		
		await copyall(path.resolve('src/build'), binPath);
	} catch (error) {
		fail(error);
	}
})();
