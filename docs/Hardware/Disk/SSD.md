# SSD

- 闪存原厂：三星、铠侠、西数、美光、Intel、SK Hynix。

- DRAM：主要用来存储 FTL 表，小文件临时存放缓存，可以减少持续写入，增加产品使用寿命。

- SLC Cache：主控会将一部分单元“降级”为 SLC，每个单元仅存储 1bit 的单元，这种分配技术，就叫 SLC 缓存。

- DWPD：硬盘每天写入。

  DWPD 中的耐用性 = PBW ÷ 额定驱动器密度 ÷ 5（保修期内年份）÷ 365（每年天）
  
- [JESD219](https://www.jedec.org/standards-documents/docs/jesd219a)：JEDEC 耐久性工作负载。

- OP：Over-provisioning，预留空间。

  预留空间百分比 = （实际容量 - 用户容量）÷ 用户容量

美光是<span style="color:red">闪存原厂</span>之一，同时也是<span style="color:red">内存原厂</span>三巨头之一。

读取仰仗<span style="color:red">主控</span>，写入更依赖<span style="color:red">闪存</span>。

| 产品  | 型号  | 主控      | 闪存                                                    | SLC Cache                            | 缓存 |
| ----- | ----- | --------- | ------------------------------------------------------- | ------------------------------------ | ---- |
| MX550 | 500GB | 慧荣2258H | 16nm 64-layer 3D TLC NAND<br>7 32GB 2Die<br>1 32GB 4Die | 32GB<br>20s 清空<br>一边写入一边回复 | 512M |
|       |       | 88SS1074  |                                                         |                                      |      |

## 参考链接

- [Crucial Storage Executive](https://www.crucial.com/support/storage-executive)
- [DWPD, TBW, PBW, GB/day Calculator](https://wintelguy.com/dwpd-tbw-gbday-calc.pl)

