echo 'GLFW Build Started'

(
	
	cd src
	rm -rf glfw-3.3.4
	unzip -qq glfw-3.3.4.zip -d .
	
	mkdir -p build
	
	(
		cd glfw-3.3.4
		
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
	
	mv glfw-3.3.4/src/libglfw.so.3.3.4 build/libglfw.so.3
	
)

echo 'GLFW Build Finished'
