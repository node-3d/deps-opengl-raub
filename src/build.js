'use strict';

const path = require('node:path');
const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

const {
	getPlatform, getBin, ensuredir, copyall,
} = require('addon-tools-raub');


const getScriptForLib = (name) => `./${getPlatform()}-${name.toLowerCase()}.sh`;


const fail = (error) => {
	console.error(error);
	process.exit(-1);
};


const chmod = async () => {
	try {
		if (getPlatform() === 'windows') {
			return;
		}
		
		console.log('Setting Execution Permissions');
		const { stderr } = await exec([
			`chmod +x ./${getPlatform()}-glfw.sh`,
			`chmod +x ./${getPlatform()}-glew.sh`,
		].join(' && '));
		if (stderr) {
			fail(stderr);
		}
		if (getPlatform() === 'aarch64') {
			const { stderr } = await exec([
				`chmod +x ./linux-glfw.sh`,
				`chmod +x ./linux-glew.sh`,
			].join(' && '));
			if (stderr) {
				fail(stderr)
			}
		}
		console.log('-------------------');
	} catch (error) {
		fail(error);
	}
};


const updateSystem = async () => {
	try {
		console.log('Updating System');
		if (getPlatform() === 'linux') {
			const { stderr } = await exec('chmod +x update-linux.sh && sh ./update-linux.sh');
			if (stderr) {
				fail(stderr)
			}
		} else if (getPlatform() === 'aarch64') {
			const { stderr } = await exec('chmod +x update-aarch64.sh && sh ./update-aarch64.sh');
			if (stderr) {
				fail(stderr)
			}
		}
		console.log('-------------------');
	} catch (error) {
		fail(error);
	}
};


const extractArchives = async () => {
	try {
		console.log('Extracting SRC acrhives');
		const { stderr } = await exec('sh ./extract.sh');
		if (stderr) {
			fail(stderr);
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
		if (stderr) {
			fail(stderr);
		}
		console.log(`${name.toUpperCase()} Build Finished`);
		console.log('-------------------');
	} catch (error) {
		fail(error);
	}
};


(async () => {
	try {
		await chmod();
		await updateSystem();
		await extractArchives();
		
		await buildLib('glew');
		await buildLib('glfw');
		
		await ensuredir(path.resolve(`../${getBin()}`));
		await copyall(
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
		fail(error);
	}
})();
