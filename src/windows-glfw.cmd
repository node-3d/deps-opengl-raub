cd src/glfw-3.3.8
cmake -DBUILD_SHARED_LIBS=ON -DUSE_MSVC_RUNTIME_LIBRARY_DLL=ON -DGLFW_BUILD_EXAMPLES=OFF -DGLFW_BUILD_TESTS=OFF -DGLFW_BUILD_DOCS=OFF -DGLFW_VULKAN_STATIC=OFF .
cd ../..

msbuild /p:Platform=x64 /p:Configuration=Release /p:PlatformToolset=v142 src\glfw-3.3.8\ALL_BUILD.vcxproj

copy /y src\glfw-3.3.8\src\Release\glfw3.dll src\build\glfw3.dll
copy /y src\glfw-3.3.8\src\Release\glfw3dll.lib src\build\glfw3dll.lib
