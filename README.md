# node-deps-opengl


## Abstract

Common dependencies for opengl-dependent compilation. +Binaries.

* Platforms: win x32/x64, linux x32/x64, mac x64.
* Libraries: FreeImage, GLEW, GLFW, GL.


## Install

`npm i -s node-deps-opengl-raub`


## Use

**binding.gyp**

```javascript
	'variables': {
		'opengl_include' : '<!(node -e "console.log(require(\'node-deps-opengl-raub\').include)")',
		'opengl_bin'     : '<!(node -e "console.log(require(\'node-deps-opengl-raub\').bin)")',
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
						'<(opengl_bin)/....so',
						'<(opengl_bin)/....a',
						...
					],
				}],
				
				['OS=="mac"', {
					'libraries': [
						'-Wl,-rpath,<(opengl_bin)',
						'<(opengl_bin)/....dylib',
						'<(opengl_bin)/....a',
					],
				}],
				
				['OS=="win"', {
					'libraries': [ '....lib', ... ],
					...
				}],
				
			],
		},
```


**addon.cpp**

```cpp
// Usage example

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
