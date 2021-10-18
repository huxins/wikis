# NVMe RAID Controller

- PLX：桥接芯片，时分多路复用。
- PCIe Bifurcation
- Riser
  - 被动：卡上的差分缓冲芯片与主板的拆分指令相识别从而使主板顺利拆分出应有的通道。
  - 主动：卡上的 PLX 芯片能够在无门槛的情况下拓展 PCIe 通道。
- [记那些年用过的 NVMe HBA 扩展卡](https://www.chiphell.com/thread-1885185-1-1.html) | [页面存档备份](https://static-wiki.inxiny.cn/%E7%A1%AC%E4%BB%B6/%E7%A3%81%E7%9B%98/NVMe%20RAID%20Controller/%E8%AE%B0%E9%82%A3%E4%BA%9B%E5%B9%B4%E7%94%A8%E8%BF%87%E7%9A%84NVMe%20HBA%E6%89%A9%E5%B1%95%E5%8D%A1%20-%20%E7%94%B5%E8%84%91%E8%AE%A8%E8%AE%BA%20-%20Chiphell%20-%20%E5%88%86%E4%BA%AB%E4%B8%8E%E4%BA%A4%E6%B5%81%E7%94%A8%E6%88%B7%E4%BD%93%E9%AA%8C%20(2021_10_18%20%E4%B8%8B%E5%8D%886_34_16).html)

## 被动式

MSI M.2 Xpander

ASUS Hyper M.2 X16

## 主动式

Supermicro RSC-R2UG-A2E16-A

HighPoint 火箭 M.2 阵列卡


