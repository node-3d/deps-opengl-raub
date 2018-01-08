'use strict';


const remDirs = {
	bin_win32    : 1,
	bin_win64    : 1,
	bin_linux32  : 1,
	bin_linux64  : 1,
	bin_mac64    : 1,
};

const platformPaths = {
	
	get win32()  { return process.arch === 'x64' ? 'bin_win64'   : 'bin_win32';   },
	get linux()  { return process.arch === 'x64' ? 'bin_linux64' : 'bin_linux32'; },
	get darwin() { return 'bin_mac64'; },
	
};

const binDir  = platformPaths[process.platform];
delete remDirs[binDir];

const binPath = `${__dirname}/${binDir}`;


if (process.platform === 'win32') {
	process.env.path = `${process.env.path ? `${process.env.path};` : ''}${binPath}`;
}


module.exports = {
	bin     : binPath,
	rem     : Object.keys(remDirs).map(k => `${__dirname.replace(/\\/g, '/')}/${k}`).join(' '),
	include : `${__dirname}/include`,
};
