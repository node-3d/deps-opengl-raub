(
	cd src
	
	rm -rf build
	mkdir -p build
	
	rm -rf glew
	git clone --depth 1 -b glew-2.2.0 https://github.com/nigels-com/glew.git
	
	rm -rf glfw
	git clone --depth 1 -b 3.4 https://github.com/glfw/glfw.git
)