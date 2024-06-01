>&2 echo YUM START
sudo yum -y update
>&2 echo YUM UPDATE DONE
sudo yum -y --nobest --allowerasing install tuned tuned-profiles-oci
>&2 echo YUM TUNED DONE
sudo yum -y --nobest --allowerasing install cmake mesa-libGL-devel libX11-devel libXrandr-devel libXinerama-devel libXcursor-devel libXi-devel
>&2 echo YUM SAFE DONE
sudo yum -y --nobest --allowerasing install wayland-devel libxkbcommon-devel
>&2 echo YUM WAYLAND DONE
