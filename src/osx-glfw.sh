echo 'GLFW Build Started'

cd src
rm -rf glfw-3.3.8
unzip -qq glfw-3.3.8.zip -d .

mkdir -p build

cd glfw-3.3.8

cmake \
	-DBUILD_SHARED_LIBS=ON \
	-DGLFW_BUILD_EXAMPLES=OFF \
	-DGLFW_BUILD_TESTS=OFF \
	-DGLFW_BUILD_DOCS=OFF \
	-DGLFW_VULKAN_STATIC=OFF \
	-DCMAKE_SHARED_LINKER_FLAGS='-install_name "@rpath/glfw.dylib"' \
	.

echo '----------- 1 -----------'

cat src/CMakeFiles/glfw.dir/link.txt

echo '----------- 2 -----------'

ls src/CMakeFiles/glfw.dir

echo '----------- 3 -----------'

echo '/Applications/Xcode_13.2.1.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -dynamiclib -Wl,-headerpad_max_install_names -install_name "@rpath/glfw.dylib" -compatibility_version 3.0.0 -current_version 3.3.8.0 -o libglfw.3.3.8.dylib CMakeFiles/glfw.dir/context.c.o CMakeFiles/glfw.dir/init.c.o CMakeFiles/glfw.dir/input.c.o CMakeFiles/glfw.dir/monitor.c.o CMakeFiles/glfw.dir/vulkan.c.o CMakeFiles/glfw.dir/window.c.o CMakeFiles/glfw.dir/cocoa_init.m.o CMakeFiles/glfw.dir/cocoa_joystick.m.o CMakeFiles/glfw.dir/cocoa_monitor.m.o CMakeFiles/glfw.dir/cocoa_window.m.o CMakeFiles/glfw.dir/cocoa_time.c.o CMakeFiles/glfw.dir/posix_thread.c.o CMakeFiles/glfw.dir/nsgl_context.m.o CMakeFiles/glfw.dir/egl_context.c.o CMakeFiles/glfw.dir/osmesa_context.c.o -framework Cocoa -framework IOKit -framework CoreFoundation -framework CoreVideo' \
> src/CMakeFiles/glfw.dir/link.txt

make

cd ..

mv glfw-3.3.8/src/libglfw.3.3.8.dylib build/glfw.dylib

cd ..

echo 'GLFW Build Finished'
