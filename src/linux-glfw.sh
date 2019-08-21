echo 'GLFW Build Started'

(
	
	cd src
	unzip -qq glfw-3.3.zip -d .
	
	(
		cd glfw-3.3
		
		cmake \
			-DBUILD_SHARED_LIBS=ON \
			-DGLFW_BUILD_EXAMPLES=OFF \
			-DGLFW_BUILD_TESTS=OFF \
			-DGLFW_BUILD_DOCS=OFF \
			-DGLFW_VULKAN_STATIC=OFF \
			-DGLFW_USE_CHDIR=OFF \
			-DGLFW_USE_MENUBAR=OFF \
			.
		
		make
		
	)
	
	
	mv glfw-3.3/src/libglfw.3.3.so glfw.dylib
	
)

echo 'GLFW Build Finished'
