# kvm

查看 CPU 是否支持虚拟化

```bash
cat /proc/cpuinfo | egrep 'vmx|svm'
```

查看是否加载 KVM 模块

```bash
lsmod | grep kvm
ll /dev/kvm
modprobe kvm
modprobe kvm-intel
```

安装 KVM 相关软件包

```bash
yum install -y qemu-kvm qemu-img \
libvirt libvirt-client libvirt-python \
virt-manager virt-install virt-clone virt-image virt-viewer virsh
```

启用 libvirt

```bash
systemctl start libvirtd
```

安装虚拟机

```bash
virt-install \
--name=centos7 \
--memory=512,maxmemory=1024 \
--vcpus=1,maxvcpus=2 \
--os-type=linux \
--os-variant=rhel7 \
--location=/tmp/CentOS-7-x86_64-DVD-1908.iso \
--disk path=/opt/kvm_data/centos7.img,size=10 \
--bridge=br0 \
--graphics=none \
--console=pty,target_type=serial \
--extra-args="console=tty0 console=ttyS0"
```

