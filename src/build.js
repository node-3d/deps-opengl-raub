'use strict';

const path = require('node:path');
const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

const {
	getPlatform, getBin, ensuredir, copyall,
} = require('addon-tools-raub');


const bin = getBin();
const binPath = path.resolve(`../${bin}`);

const platform = getPlatform();
const scriptExt = platform === 'windows' ? 'cmd' : 'sh';

const getScriptForLib = (name) => `./${platform}-${name.toLowerCase()}.${scriptExt}`;


const fail = (error) => {
	console.error(error);
	process.exit(-1);
};


const chmod = async () => {
	try {
		if (platform === 'windows') {
			console.log('pp', process.env.PATH);
			return;
		}
		
		console.log('Setting Execution Permissions');
		const { stderr } = await exec([
			`chmod +x ./${platform}-glfw.sh`,
			`chmod +x ./${platform}-glew.sh`,
		].join(' && '));
		if (stderr) {
			console.error(stderr);
		}
		if (platform === 'aarch64') {
			const { stderr } = await exec([
				`chmod +x ./linux-glfw.sh`,
				`chmod +x ./linux-glew.sh`,
			].join(' && '));
			if (stderr) {
				console.error(stderr);
			}
		}
		console.log('-------------------');
	} catch (error) {
		fail(error);
	}
};


const updateSystem = async () => {
	try {
		if (!['linux', 'aarch64'].includes(platform)) {
			return;
		}
		
		console.log('Updating System');
		if (platform === 'linux') {
			const { stderr } = await exec('chmod +x update-linux.sh && sh ./update-linux.sh');
			if (stderr) {
				console.error(stderr);
			}
		} else if (platform === 'aarch64') {
			const { stderr } = await exec('chmod +x update-aarch64.sh && sh ./update-aarch64.sh');
			if (stderr) {
				console.error(stderr);
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
		const { stderr } = await exec(`${scriptExt} ${getScriptForLib(name)}`);
		if (stderr) {
			console.error(stderr);
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
		
		await ensuredir(binPath);
		await copyall(path.resolve('./build'), binPath);
		
		if (platform === 'windows') {
			await cp(path.resolve('./OpenGL32.Lib'), binPath);
		}
	} catch (error) {
		fail(error);
	}
})();
