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


const extractArchives = async () => {
	try {
		console.log('Extracting SRC acrhives');
		const { stderr } = await exec('sh ./extract.sh');
		if (stderr) {
			console.error(stderr);
		}
		console.log('-------------------');
	} catch (error) {
		fail(error);
	}
};


(async () => {
	try {
		await extractArchives();
	} catch (error) {
		fail(error);
	}
})();
