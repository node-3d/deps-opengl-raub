msbuild /p:Platform=x64 /p:Configuration=Release /p:PlatformToolset=v142 src\glew\build\vc15\glew_shared.vcxproj

copy /y src\glew\bin\Release\x64\glew32.dll src\build\glew32.dll
copy /y src\glew\lib\Release\x64\glew32.lib src\build\glew32.lib
