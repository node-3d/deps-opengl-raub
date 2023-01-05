(
	cd src/glew-2.1.0
	make LDFLAGS.EXTRA='-install_name "@rpath/glew.dylib" -arch x86_64' glew.lib
)

mv src/glew-2.1.0/lib/libGLEW.2.1.0.dylib src/build/glew.dylib
