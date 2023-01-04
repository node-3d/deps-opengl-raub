'use strict';

const path = require('node:path');
const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

const {
	getPlatform, getBin, ensuredir, cpdir,
} = require('addon-tools-raub');


const getScriptForLib = (name) => `./${getPlatform()}-${name.toLowerCase()}.sh`;

const chmod = async () => {
	try {
		console.log('Setting Execution Permissions');
		const { stderr } = await exec([
			`chmod +x ${getScriptForLib('glfw')}`,
			`chmod +x ${getScriptForLib('glew')}`,
			'chmod +x update.sh',
			'chmod +x extract.sh',
		].join(' && '));
		if (stderr) {
			console.error(stderr);
		}
		console.log('-------------------');
	} catch (error) {
		console.error(error);
	}
};


const updateSystem = async () => {
	try {
		console.log('Updating System');
		if (getPlatform() === 'linux') {
			const { stderr } = await exec('sh ./update-linux.sh');
			if (stderr) {
				console.error(stderr);
			}
		} else if (getPlatform() === 'aarch64') {
			const { stderr } = await exec('sh ./update-aarch64.sh');
			if (stderr) {
				console.error(stderr);
			}
		}
		console.log('-------------------');
	} catch (error) {
		console.error(error);
	}
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
		console.error(error);
	}
};


const buildLib = async (name) => {
	try {
		console.log(`${name.toUpperCase()} Build Started`);
		const { stderr } = await exec(`sh ${getScriptForLib(name)}`);
		if (stderr) {
			console.error(stderr);
		}
		console.log(`${name.toUpperCase()} Build Finished`);
		console.log('-------------------');
	} catch (error) {
		console.error(error);
	}
};


(async () => {
	try {
		if (getPlatform() !== 'windows') {
			await chmod();
		}
		
		await updateSystem();
		
		await extractArchives();
		
		await buildLib('glew');
		await buildLib('glfw');
		
		await ensuredir(path.resolve(`../${getBin()}`));
		await cpdir(
			path.resolve('./build'),
			path.resolve(`../${getBin()}`),
		);
		
		if (getPlatform() === 'windows') {
			await cp(
				path.resolve('./OpenGL32.Lib'),
				path.resolve(`../${getBin()}`),
			);
		}
	} catch (error) {
		console.error(error);
		process.exit(-1);
	}
})();
