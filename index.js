'use strict';

const os = require('os');

const platformPaths = {
	win32 : '/bin_win32' ,
	linux : '/bin_linux' ,
	darwin: '/bin_darwin',
};

const binPath = __dirname + platformPaths[os.platform()];

process.env.path += ';' + binPath;

module.exports = {
	root: __dirname,
	bin : binPath,
};
