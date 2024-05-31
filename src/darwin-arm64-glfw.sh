(
	cd src
	(
		cd glfw
		
		cmake \
			-DBUILD_SHARED_LIBS=ON \
			-DGLFW_BUILD_EXAMPLES=OFF \
			-DGLFW_BUILD_TESTS=OFF \
			-DGLFW_BUILD_DOCS=OFF \
			-DCMAKE_SHARED_LINKER_FLAGS='-install_name "@rpath/glfw.dylib"' \
			.
			
		echo "$(<src/CMakeFiles/glfw.dir/link.txt )"
		# echo '/Applications/Xcode_13.2.1.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc  -isysroot /Applications/Xcode_13.2.1.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX12.1.sdk -dynamiclib -Wl,-headerpad_max_install_names -install_name "@rpath/glfw.dylib" -compatibility_version 3.0.0 -current_version 3.4.0 -o libglfw.3.4.dylib CMakeFiles/glfw.dir/context.c.o CMakeFiles/glfw.dir/init.c.o CMakeFiles/glfw.dir/input.c.o CMakeFiles/glfw.dir/monitor.c.o CMakeFiles/glfw.dir/vulkan.c.o CMakeFiles/glfw.dir/window.c.o CMakeFiles/glfw.dir/cocoa_init.m.o CMakeFiles/glfw.dir/cocoa_joystick.m.o CMakeFiles/glfw.dir/cocoa_monitor.m.o CMakeFiles/glfw.dir/cocoa_window.m.o CMakeFiles/glfw.dir/cocoa_time.c.o CMakeFiles/glfw.dir/posix_thread.c.o CMakeFiles/glfw.dir/nsgl_context.m.o CMakeFiles/glfw.dir/egl_context.c.o CMakeFiles/glfw.dir/osmesa_context.c.o  -framework Cocoa -framework IOKit -framework CoreFoundation' \
		# > src/CMakeFiles/glfw.dir/link.txt
		
		# make
	)

	# mv glfw/src/libglfw.3.4.dylib build/glfw.dylib
)
