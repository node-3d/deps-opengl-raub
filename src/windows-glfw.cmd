echo 'GLFW Build Started'

cd src
rd /s /q "glfw-3.3"
tar -xf glfw-3.3.zip

rd /s /q "build"
mkdir build

cd glfw-3.3

cmake -DBUILD_SHARED_LIBS=ON -DUSE_MSVC_RUNTIME_LIBRARY_DLL=ON -DGLFW_USE_HYBRID_HPG=ON -DGLFW_BUILD_EXAMPLES=OFF -DGLFW_BUILD_TESTS=OFF -DGLFW_BUILD_DOCS=OFF -DGLFW_VULKAN_STATIC=OFF .

msbuild /p:Platform=x64 /p:Configuration=Release /p:PlatformToolset=v142 ALL_BUILD.vcxproj

cd ..

copy /y glfw-3.3\src\Release\glfw3.dll build\glfw3.dll
copy /y glfw-3.3\src\Release\glfw3dll.lib build\glfw3dll.lib

cd ..

echo 'GLFW Build Finished'
