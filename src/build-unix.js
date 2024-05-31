'use strict';

const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

const {
	getPlatform,
} = require('addon-tools-raub');


const platform = getPlatform();

const getScriptForLib = (name) => `src/${platform}-${name.toLowerCase()}.sh`;


const fail = (error) => {
	console.error(error);
	process.exit(-1);
};


const updateSystem = async () => {
	try {
		if (!['linux', 'aarch64'].includes(platform)) {
			return;
		}
		
		console.log('Updating System');
		const { stderr } = await exec(`sh src/update-${platform}.sh`);
		if (stderr) {
			console.error(stderr);
		}
		console.log('-------------------');
	} catch (error) {
		fail(error);
	}
};


const buildLib = async (name) => {
	try {
		console.log(`${name.toUpperCase()} Build Started`);
		const { stderr } = await exec(`sh ${getScriptForLib(name)}`);
		if (stderr && name !== 'glew') {
			if (name === 'glew') {
				console.error(stderr.replaceAll(/src\/glew\.c(.|\n)*?void/g, ''));
			} else {
				console.error(stderr);
			}
		}
		console.log(`${name.toUpperCase()} Build Finished`);
		console.log('-------------------');
	} catch (error) {
		fail(error);
	}
};


(async () => {
	try {
		await updateSystem();
		
		await buildLib('glew');
		await buildLib('glfw');
	} catch (error) {
		fail(error);
	}
})();
