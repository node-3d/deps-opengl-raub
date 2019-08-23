echo 'GLEW Build Started'

(
	
	cd src
	unzip -qq glew-2.1.0.zip -d .
	
	mkdir -p build
	
	(
		cd glew-2.1.0
		
		make LDFLAGS.EXTRA='-install_name "@rpath/glew.dylib" -arch x86_64' glew.lib
		
	)
	
	mv glew-2.1.0/lib/libGLEW.2.1.0.dylib build/glew.dylib
	
)

echo 'GLEW Build Finished'
