'use strict';

const path = require('node:path');
const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

const {
	getPlatform, getBin, ensuredir, copyall, copy,
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
			await copy(path.resolve('src/OpenGL32.Lib'), `${binPath}/OpenGL32.Lib`);
		}
		
		await copyall(path.resolve('src/build'), binPath);
	} catch (error) {
		fail(error);
	}
})();
