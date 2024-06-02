(
	cd src
	(
		cd glew
		make LDFLAGS.EXTRA='-install_name "@rpath/glew.dylib" -arch arm64' glew.lib
	)
	
	mv glew/lib/libGLEW.2.2.0.dylib build/glew.dylib
)
