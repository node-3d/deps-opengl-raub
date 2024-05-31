(
	cd src
	(
		cd glew
		make glew.lib
	)
	
	mv glew/lib/libGLEW.so.2.2.0 build/libGLEW.so.2.2
)

