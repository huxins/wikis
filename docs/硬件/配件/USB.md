# USB

- [USB 指导书](https://www.usb.org/sites/default/files/usb-if_logo_usage_guidelines_final_as_of_november_30_2018_locked.pdf)

## 版本

| 版本            | 带宽     | 说明   |
| --------------- | -------- | ------ |
| USB 2.0         | 480 Mbps | 半双工 |
| USB 3.2 Gen 1   | 5 Gbps   |        |
| USB 3.2 Gen 2   | 10 Gbps  |        |
| USB 3.2 Gen 2x2 | 20 Gbps  | 双通道 |
| USB4 Gen 2×2    | 20 Gbps  | 双通道 |
| USB4 Gen 3×2    | 40 Gbps  | 双通道 |

### Type-C

| 接口         | USB 3.2 Gen 1 | USB 3.2 Gen 2 |
| ------------ | ------------- | ------------- |
| 带宽         | 5 Gbps        | 10 Gbps       |
| 最大电缆长度 | 5 m           | 1 m           |
| 最大功率输出 | 15 W          | 100 W         |

## 全双工

- TX：Transmit，发送，从开启到现在发送封包的情况，是上行流量。
- RX：Receive，接收，从开启到现在接收封包的情况，是下行流量。
- SSTX±：发送器差分对。
- SSRX±：接收器差分对。

## DisplayPort

- DP Alt Mode：替代模式，占据一半或者全部的数据通道（收发共 8 信号线）。
- 显示信号只有一个方向，每两根信号线就组成一个 DP 通道。

## 雷电

- 电流：3A / 5A。
- 主动 Thunderbolt 3：放大器不支持 USB 3 信号，最高只支持 USB 2.0。
- 被动 Thunderbolt 3：满速 Gen 3，兼容 USB4 Gen 3×2；半速 Gen 2，兼容 USB4 Gen 2×2。

| 功能              | Thunderbolt 4 | Thunderbolt 3 | USB4        |
| ----------------- | ------------- | ------------- | ----------- |
| 带宽              | 40 Gbps       | 20/40 Gbps    | 20/40 Gbps  |
| 带宽动态分配      | 支持          | 不支持        | 支持        |
| 外接显卡          | 支持          | 支持          | 支持        |
| 强制开启 DMA 保护 | 有            | 没有          | 没有        |
| 强制保留充电功能  | 有            | 没有          | 没有        |
| 支持 DP 视频协议  | DP 1.4        | DP 1.2        | 可选 DP 1.4 |
| 支持 PD 快充协议  | PD 3.0        | PD 3.0        | PD 3.0      |
| 反向供电最小功率  | 15 W          | 15 W          | 7.5 W       |

