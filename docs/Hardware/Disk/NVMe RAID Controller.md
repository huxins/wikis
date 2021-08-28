# NVMe RAID Controller

- PLX：桥接芯片，时分多路复用。
- PCIe Bifurcation
- Riser
  - 被动：卡上的差分缓冲芯片与主板的拆分指令相识别从而使主板顺利拆分出应有的通道。
  - 主动：卡上的 PLX 芯片能够在无门槛的情况下拓展 PCIe 通道。

## 被动式

MSI M.2 Xpander

ASUS Hyper M.2 X16

## 主动式

Supermicro RSC-R2UG-A2E16-A

HighPoint 火箭 M.2 阵列卡

- [记那些年用过的 NVMe HBA 扩展卡](https://www.chiphell.com/thread-1885185-1-1.html)

