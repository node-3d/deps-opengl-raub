echo 'GLEW Build Started'

(
	
	cd src
	rm -rf glew-2.1.0
	unzip -qq glew-2.1.0.zip -d .
	
	mkdir -p build
	
	(
		cd glew-2.1.0
		
		make glew.lib
		
	)
	
	mv glew-2.1.0/lib/libGLEW.so.2.1.0 build/libGLEW.so.2
	
)

echo 'GLEW Build Finished'
