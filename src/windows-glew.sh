(
	cd glew-2.1.0/build/vc12
	echo $PATH
	msbuild.exe /p:Platform=x64 /p:Configuration=Release /p:PlatformToolset=v142 glew_shared.vcxproj
)

mv glew-2.1.0/bin/Release/x64/glew32.dll build/glew32.dll
mv glew-2.1.0/lib/Release/x64/glew32.lib build/glew32.lib
