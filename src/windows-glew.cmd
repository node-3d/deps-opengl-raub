cd glew-2.1.0/build/vc12

msbuild /p:Platform=x64 /p:Configuration=Release /p:PlatformToolset=v142 glew_shared.vcxproj

cd ../../..

copy /y glew-2.1.0\bin\Release\x64\glew32.dll build\glew32.dll
copy /y glew-2.1.0\lib\Release\x64\glew32.lib build\glew32.lib
