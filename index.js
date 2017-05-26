'use strict';


const remDirs = {
	bin_win32  : 1,
	bin_win64  : 1,
	// bin_linux  : 1,
	// bin_darwin : 1,
};

const platformPaths = {
	
	get win32() { return process.arch === 'x64' ? 'bin_win64' : 'bin_win32'; },
	
	linux  : 'bin_linux' ,
	
	darwin : 'bin_darwin',
	
};

const binDir  = platformPaths[process.platform];
delete remDirs[binDir];

const binPath = `${__dirname}/${binDir}`;

process.env.path += ';' + binPath;

module.exports = {
	root : __dirname,
	bin  : binPath,
	dir  : binDir,
	rem  : Object.keys(remDirs).join(' '),
};
