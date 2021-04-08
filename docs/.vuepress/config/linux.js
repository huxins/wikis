const shell = [
    '/Linux/Shell/xargs',
    '/Linux/Shell/du',
    '/Linux/Shell/scp',
    '/Linux/Shell/ssh',
    '/Linux/Shell/wget',
    '/Linux/Shell/curl',
    '/Linux/Shell/env',
    '/Linux/Shell/if',
    '/Linux/Shell/crontab'
]

const kernel = [
    '/Linux/Kernel/version',
    '/Linux/Kernel/selinux',
    '/Linux/Kernel/iptables',
    '/Linux/Kernel/sysctl',
    '/Linux/Kernel/ulimit',
    '/Linux/Kernel/systemd'
]

const debian = [
    '/Linux/Debian/package'
]

const centos = [
    '/Linux/CentOS/centos7',
    '/Linux/CentOS/firewall',
    '/Linux/CentOS/package',
    '/Linux/CentOS/kvm'
]

const network = [
    '/Linux/Network/start',
    '/Linux/Network/bind',
    '/Linux/Network/proxychains',
    '/Linux/Network/haproxy',
    '/Linux/Network/wireguard'
]

const disk = [
    '/Linux/Disk/start',
    '/Linux/Disk/fdisk',
    '/Linux/Disk/mount',
    '/Linux/Disk/smartmontools',
    '/Linux/Disk/fio'
]

const tool = [
    '/Linux/Tool/rsync',
    '/Linux/Tool/network',
    '/Linux/Tool/screen',
    '/Linux/Tool/解压缩'
]

module.exports = {
    shell,
    kernel,
    debian,
    centos,
    network,
    disk,
    tool
}
