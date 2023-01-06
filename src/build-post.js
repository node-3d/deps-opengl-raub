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


const findLinuxLib = async (name) => {
	try {
		const { stdout } = await exec(`ldconfig -p | grep ${name}`);
		if (!stdout.includes(name)) {
			return;
		}
		const matched = stdout.match(/ => \/.*/);
		if (!matched) {
			return;
		}
		const libPath = matched[0].replace(' => ', '');
		console.log('COPY', libPath, `${binPath}/${name}`);
		await copy(libPath, `${binPath}/${name}`);
	} catch (error) {
		fail(error);
	}
};


(async () => {
	try {
		await ensuredir(binPath);
		
		if (platform === 'windows') {
			await copy(path.resolve('src/OpenGL32.Lib'), `${binPath}/OpenGL32.Lib`);
		} else if (platform === 'linux') {
			await findLinuxLib('libGL.so');
			await findLinuxLib('libXrandr.so');
			await findLinuxLib('libXrender.so');
			// await findLinuxLib('libXrandr.a');
			// await findLinuxLib('libXrender.a');
		}
		
		await copyall(path.resolve('src/build'), binPath);
	} catch (error) {
		fail(error);
	}
})();
