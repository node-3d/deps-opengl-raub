(
	cd src
	(
		cd glfw
		cmake \
			-DBUILD_SHARED_LIBS=ON \
			-DGLFW_BUILD_EXAMPLES=OFF \
			-DGLFW_BUILD_TESTS=OFF \
			-DGLFW_BUILD_DOCS=OFF \
			-DGLFW_BUILD_WAYLAND=ON \
			-DGLFW_BUILD_X11=ON \
			.
		
		make
	)

	mv glfw/src/libglfw.so.3.4 build/libglfw.so.3
)