# OpenGL binaries

This is a part of [Node3D](https://github.com/node-3d) project.

![NPM](https://nodei.co/npm/deps-opengl-raub.png?compact=true)

![Build Status](https://api.travis-ci.org/node-3d/deps-opengl-raub.svg?branch=master)

> npm i -s deps-opengl-raub


## Synopsis

This dependency package is distributing **OpenGL**, **GLFW3** and **GLEW**
binaries through **NPM** for **Node.js** addons.

* Platforms: win x32/x64, linux x64, mac x64.
* Libraries: GLEW, GLFW, OpenGL.
* Linking: static dll-type.


## Usage

### binding.gyp

```javascript
	'variables': {
		'opengl_include' : '<!(node -e "require(\'deps-opengl-raub\').include()")',
		'opengl_bin'     : '<!(node -e "require(\'deps-opengl-raub\').bin()")',
	},
	...
	'targets': [
		{
			'target_name': '...',
			
			'include_dirs': [
				'<(opengl_include)',
				...
			],
			
			'library_dirs': [ '<(opengl_bin)' ],
			
			'conditions': [
				
				['OS=="linux"', {
					'libraries': [
						'-Wl,-rpath,<(opengl_bin)',
						'<(opengl_bin)/libglfw.so.3',
						'<(opengl_bin)/libGLEW.so.2.0',
						'<(opengl_bin)/libGL.so',
						'<(opengl_bin)/libXrandr.so',
					],
				}],
				
				['OS=="mac"', {
					'libraries': [
						'-Wl,-rpath,<(opengl_bin)',
						'<(opengl_bin)/glfw.dylib',
						'<(opengl_bin)/glew.dylib'
					],
				}],
				
				['OS=="win"', {
					'libraries': [ 'OpenGL32.lib', 'glfw3dll.lib', 'glew32.lib' ],
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
Unix binaries are found through
[Debian Packages](https://packages.debian.org/stretch/libglew-dev)
and [MacOS Formulae](http://formulae.brew.sh/formula/glfw).


### GLEW

Also this software uses the [GLEW open source library](http://glew.sourceforge.net/).
GLEW is legally used under it's own custom license.
It is explicitly stated that GLEW can be used commercially in closed-source projects.
GLEW licensing information (a COPY) is given in a [separate file](/GLEW_LICENSE),
which also can be found on
[GLEW's official repository](https://raw.githubusercontent.com/nigels-com/glew/master/LICENSE.txt).
Windows binaries were found on the official web-site.
Unix binaries are found through
[Debian Packages](https://packages.debian.org/stretch/libglew-dev)
and [MacOS Formulae](http://formulae.brew.sh/formula/glew).


### OpenGL

End users, independent software vendors, and others writing code based on the OpenGL API
are free from licensing requirements. https://www.opengl.org/about/#11


---

The rest of this package is MIT licensed.
