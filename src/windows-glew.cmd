msbuild /p:Platform=x64 /p:Configuration=Release /p:PlatformToolset=v142 src\glew\build\vc12\glew_shared.vcxproj

copy /y src\glew-2.2.0\bin\Release\x64\glew32.dll src\build\glew32.dll
copy /y src\glew-2.2.0\lib\Release\x64\glew32.lib src\build\glew32.lib
