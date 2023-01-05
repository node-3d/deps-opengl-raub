(
	cd src/glfw-3.3.8
	
	cmake \
		-DBUILD_SHARED_LIBS=ON \
		-DGLFW_BUILD_EXAMPLES=OFF \
		-DGLFW_BUILD_TESTS=OFF \
		-DGLFW_BUILD_DOCS=OFF \
		-DGLFW_VULKAN_STATIC=OFF \
		.
	
	make
)

mv src/glfw-3.3.8/src/libglfw.so.3.3 src/build/libglfw.so.3
