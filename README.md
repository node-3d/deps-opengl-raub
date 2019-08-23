# OpenGL binaries

This is a part of [Node3D](https://github.com/node-3d) project.

[![NPM](https://nodei.co/npm/deps-opengl-raub.png?compact=true)](https://www.npmjs.com/package/deps-opengl-raub)

[![Build Status](https://api.travis-ci.com/node-3d/deps-opengl-raub.svg?branch=master)](https://travis-ci.com/node-3d/deps-opengl-raub)
[![CodeFactor](https://www.codefactor.io/repository/github/node-3d/deps-opengl-raub/badge)](https://www.codefactor.io/repository/github/node-3d/deps-opengl-raub)

> npm i deps-opengl-raub


## Synopsis

This dependency package is distributing **OpenGL**, **GLFW3** and **GLEW**
binaries through **NPM** for **Node.js** addons.

* Platforms (x64): Windows, Linux, OSX.
* Libraries: GLEW 2.1, GLFW 3.3, OpenGL.
* Linking: static dll-type.

## Usage

### binding.gyp

```javascript
	'variables': {
		'gl_include' : '<!(node -p "require(\'deps-opengl-raub\').include")',
		'gl_bin'     : '<!(node -p "require(\'deps-opengl-raub\').bin")',
	},
	...
	'targets': [
		{
			'target_name': '...',
			
			'include_dirs': [
				'<(gl_include)',
				...
			],
			
			'library_dirs': [ '<(gl_bin)' ],
			
			'conditions': [
				
				['OS=="linux"', {
					'libraries': [
						"-Wl,-rpath,'$$ORIGIN'",
						"-Wl,-rpath,'$$ORIGIN/../node_modules/deps-opengl-raub/<(bin)'",
						"-Wl,-rpath,'$$ORIGIN/../../deps-opengl-raub/<(bin)'",
						'<(gl_bin)/libglfw.so.3',
						'<(gl_bin)/libGL.so',
						'<(gl_bin)/libXrandr.so',
					],
				}],
				
				['OS=="mac"', {
					'libraries': [
						'-Wl,-rpath,@loader_path',
						'-Wl,-rpath,@loader_path/../node_modules/deps-opengl-raub/<(bin)',
						'-Wl,-rpath,@loader_path/../../deps-opengl-raub/<(bin)',
						'<(gl_bin)/glfw.dylib',
					],
				}],
				
				['OS=="win"', {
					'libraries': ['OpenGL32.lib', 'glfw3dll.lib', 'glew32.lib'],
				}],
				
			],
		},
```


### addon.cpp

```cpp
#include <GL/glew.h>

#define GLFW_NO_GLU
#define GLFW_DLL
#include <GLFW/glfw3.h>


// Platform specific windows and contexts if needed

#ifdef _WIN32
	#define GLFW_EXPOSE_NATIVE_WIN32
	#define GLFW_EXPOSE_NATIVE_WGL
#elif __APPLE__
	#define GLFW_EXPOSE_NATIVE_COCOA
	#define GLFW_EXPOSE_NATIVE_NSGL
#elif __linux__
	#define GLFW_EXPOSE_NATIVE_X11
	#define GLFW_EXPOSE_NATIVE_GLX
#endif
#include <GLFW/glfw3native.h>


// Fix bad defines for unix compilation

#undef True
#undef False
```

Refer to [GLFW](https://www.glfw.org/documentation.html) and
[GLEW](http://glew.sourceforge.net/basic.html) official docs.


---

## Legal notice

### GLFW

This software uses the [GLFW open source library](http://www.glfw.org/index.html).
GLFW is legally used under the ZLIB license.
It is explicitly stated that GLFW can be used commercially in closed-source projects.
GLFW licensing information (a COPY) is given in a [separate file](/GLFW_ZLIB),
which also can be found on
[GLFW's official repository](https://github.com/glfw/glfw/blob/master/LICENSE.md).
Windows binaries were found on the official web-site.
Linux binaries are taken from
[Ubuntu Packages](https://packages.ubuntu.com/cosmic/libglfw3).
OSX binaries are built through MAKE system with
[Travis CI matrix](https://travis-ci.com/node-3d/deps-opengl-raub).
See Travis [config](https://github.com/node-3d/deps-opengl-raub/blob/master/.travis.yml)
for details.


### GLEW

Also this software uses the [GLEW open source library](http://glew.sourceforge.net/).
GLEW is legally used under it's own custom license.
It is explicitly stated that GLEW can be used commercially in closed-source projects.
GLEW licensing information (a COPY) is given in a [separate file](/GLEW_LICENSE),
which also can be found on
[GLEW's official repository](https://raw.githubusercontent.com/nigels-com/glew/master/LICENSE.txt).
Windows binaries were found on the official web-site.
Linux binaries are taken from
[Ubuntu Packages](https://packages.ubuntu.com/cosmic/libglew2.0).
OSX binaries are built through MAKE system with
[Travis CI matrix](https://travis-ci.com/node-3d/deps-opengl-raub).
See Travis [config](https://github.com/node-3d/deps-opengl-raub/blob/master/.travis.yml)
for details.


### OpenGL

End users, independent software vendors, and others writing code based on the OpenGL API
are free from licensing requirements. https://www.opengl.org/about/#11


---

The rest of this package is MIT licensed.
