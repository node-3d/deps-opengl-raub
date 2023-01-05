(
	cd src/glew-2.1.0
	make glew.lib
)

mv src/glew-2.1.0/lib/libGLEW.so.2.1.0 src/build/libGLEW.so.2.1
