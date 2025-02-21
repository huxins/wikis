const Windows = [
  '开机启动',
  '外接设备',
  '进程',
  '网络',
  'KMS',
  '分析工具',
  '磁盘工具'
]

const Linux_Shell = [
    '/操作系统/Linux/Shell/xargs',
    '/操作系统/Linux/Shell/du',
    '/操作系统/Linux/Shell/scp',
    '/操作系统/Linux/Shell/ssh',
    '/操作系统/Linux/Shell/if'
]

const Linux_Kernel = [
    '/操作系统/Linux/Kernel/version',
    '/操作系统/Linux/Kernel/selinux',
    '/操作系统/Linux/Kernel/iptables',
    '/操作系统/Linux/Kernel/sysctl',
    '/操作系统/Linux/Kernel/ulimit',
    '/操作系统/Linux/Kernel/systemd'
]

const Linux_Debian = [
    '/操作系统/Linux/Debian/package'
]

const Linux_Centos = [
    '/操作系统/Linux/CentOS/centos7',
    '/操作系统/Linux/CentOS/firewall',
    '/操作系统/Linux/CentOS/kvm'
]

const Linux_Network = [
    '/操作系统/Linux/Network/start',
    '/操作系统/Linux/Network/bind',
    '/操作系统/Linux/Network/proxychains',
    '/操作系统/Linux/Network/haproxy',
    '/操作系统/Linux/Network/wireguard'
]

const Linux_Disk = [
    '/操作系统/Linux/Disk/mount',
    '/操作系统/Linux/Disk/smartmontools',
    '/操作系统/Linux/Disk/fio'
]

const Linux_Tool = [
    '/操作系统/Linux/Tool/rsync',
    '/操作系统/Linux/Tool/network',
    '/操作系统/Linux/Tool/screen'
]

const Linux = [
    {
      title: 'Shell',
      children: Linux_Shell
    },
    {
      title: 'Kernel',
      children: Linux_Kernel
    },
    {
      title: 'Debian',
      children: Linux_Debian
    },
    {
      title: 'CentOS',
      children: Linux_Centos
    },
    {
      title: 'Network',
      children: Linux_Network
    },
    {
      title: 'Disk',
      children: Linux_Disk
    },
    {
      title: 'Tool',
      children: Linux_Tool
    }
]

const Debian = [
  '软件包管理'
]

const OpenWrt = [
  'eSir'
]

const Proxmox_VE = [
  'Install',
  '镜像格式',
  '磁盘',
  'QEMU Guest Agent'
]

module.exports = {
    Windows,
    Linux,
    Debian,
    OpenWrt,
    Proxmox_VE
}
