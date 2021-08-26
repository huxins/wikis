# SSD

- DRAM：存储 FTL 表，小文件中转站。

- SLC Cache：主控会将一部分单元 “降级” 为 SLC，每个单元仅存储 1bit 的单元，这种分配技术，就叫 SLC 缓存。

- OP：Over-provisioning，预留空间。

  - 预留空间百分比 = （实际容量 - 用户容量）÷ 用户容量

  - 坏块处理

  - 存储 FTL 表

  - 给 GC 和 Wear Levelling 留下腾挪空间

  - 减少写入放大（Write Amplification）

- Wear Levelling：寿命均衡，由 FTL 保证，不会被逻辑块的区隔所影响。

- Write Amplification：写入放大。

- DWPD：硬盘每天写入。

  - DWPD 中的耐用性 = PBW ÷ 额定驱动器密度 ÷ 5（保修期内年份）÷ 365（每年天）
  
- Package：Chip，即 Flash 芯片。

- Die：一个 NAND 颗粒由一颗或多颗 Die 封装而成，这种封装可是平排的，也可以是层叠的。

  - Die 内部可以通过 3D 堆叠技术扩展容量。
  
  - Die 是可以单独执行命令和返回状态的最小单位。
  
- Plane：一个 Die 可以包含几个 Plane。

- Block：擦除操作的最小单位。

- Page：写入动作的最小单位。

- MCP：Multi-Chip Package，多芯片封装，封装打线（Wire Bonding）。

- TSV：Through Silicon Via，硅穿孔技术，将 IC 基板（Substrate）穿孔，填入金属，让上下晶粒直接相导通。

- CTF：Charge Trap Flash，电荷撷取闪存。

- FG：Floating Gate，浮栅极。

- FTL：逻辑 Block 地址（LBA，logical block addresses）和物理 Block 地址（PBA，physical block addresses）的对应关系。

  - page-level mapping
  - block-level mapping
  - log-block mapping

- 读取仰仗<span style="color:red">主控</span>，写入更依赖<span style="color:red">闪存</span>。

## 参考链接

- [DWPD, TBW, PBW, GB/day Calculator](https://wintelguy.com/dwpd-tbw-gbday-calc.pl)
- [Samsung’s V-NAND: Hitting the Reset Button on NAND Scaling](https://www.anandtech.com/show/7237/samsungs-vnand-hitting-the-reset-button-on-nand-scaling)
- [128 层 3D 堆叠闪存大比拼](http://bbs.pceva.com.cn/thread-145007-1-1.html)
- [SSD Over-Provisioning And Its Benefits](https://www.seagate.com/tw/zh/tech-insights/ssd-over-provisioning-benefits-master-ti/)
- [StorageReview](https://www.storagereview.com/)
- [TechPowerUp](https://www.techpowerup.com/review/?category=SSD)
- [Tom's Hardware](https://www.tomshardware.com/)
- [TechInsights](https://www.techinsights.com/)
- [十四款120/128GB SSD横向评测](https://www.expreview.com/19604-all.html)
- [利用HDAT2的HPA功能划分出SSD的第3层OP](http://bbs.pceva.com.cn/thread-125114-1-1.html)
- [用HDAT2给SSD做SE](http://bbs.pceva.com.cn/thread-96030-1-1.html)
- [用parted magic做安全擦除](http://bbs.pceva.com.cn/thread-88688-1-1.html)

