# 网络配置与网络工具

关于 Linux 网络配置及相关工具的讲解。

## 内容要点

- 回顾网络的相关知识
- 配置以太网络接口（配置 IP 地址、子网掩码、默认网关、DNS）
- 使用网络检测工具

## Linux 的网络支持

Linux 支持各种协议类型的网络：

- TCP/IP、NetBIOS/NetBEUI、IPX/SPX、AppleTake 等
- 在网络底层也支持 Ethernet、Token Ring、ATM、PPP（PPPoE）、FDDI、Frame Relay 等网络协议。

这些网络协议是 Linux 内核提供的功能，具体的支持情况由内核编译参数决定。

RHEL/CentOS 的 Linux 内核默认支持上述的网络协议。

### Linux 的网络接口

- Linux 支持众多类型的网络接口：每一个网络接口设备在 Linux 的内核中都有相应的设备名称
- 每一种网络接口设备（网络适配器）都需要相应的设备驱动程序：网络接口设备的驱动程序被编译在系统内核中，或者被编译为系统内核模块以便让系统内核进行调用

RHEL/CentOS 默认是采用内核模块（Module）的方式在系统引导时驱动网络接口的：

- 在 `/lib/modules/$(uname -r)/kernel/drivers/net` 目录下可以找到可加载的驱动
- 可以从系统内核模块配置文件 `/etc/modprobe.conf` 中查看系统加载的网卡驱动模块

### Linux 下常见的网络接口

| 接口类型           | 接口名称  | 说明                                                  |
| ------------------ | --------- | ----------------------------------------------------- |
| 以太网接口         | eth**X**  | 是最常用的网络接口                                    |
| 令牌环接口         | tr**X**   | 只出现在少数纯 IBM 环境的网络中                       |
| 光纤分布式数据接口 | fddi**X** | FDDI 接口设备昂贵，通常用于核心网或高速网络中         |
| 点对点协议接口     | ppp**X**  | 用于 Modem/ADSL 拨号网络或基于 PPTP 协议的 VPN 等     |
| 本地回环接口       | lo        | 用于支持 UNIX Domain Socket 技术的进程相互通信（IPC） |

> **X**是从 0 开始的整数。如：eth0 代表第一块以太网卡，eth1 代表第二块以太网卡等。

## 临时性配置网络参数

### 配置网络参数的方法

1. 临时性网络配置

   通过命令修改当前内核中的网络相关参数实现，主要有：

   `ifconfig`、`route`、`hostname`、`sysctl -w`。

   特征：

   - 配置后立即生效
   - 重新开机后失效

2. 永久性网络配置

   通过直接修改网络相关的配置文件实现。

   特征：

   - 修改配置文件后，为了使之立即生效，需要通过重新启动网络服务或指定的网络接口设备实现
   - 重新开机后保留所有配置

### 管理以太网接口

网络接口命名：eth0、eth1 等等

- 使用别名（aliases），单个设备可具备多个地址
- 别名被标识为（eth0:1，eth0:2）等等
- 别名被当作单独的接口对待
- 基于一块物理网卡的多个别名（包括物理网卡自身）只能有一个接口使用 DHCP 动态分配网络参数

查看网络接口配置：`ifconfig [ethx]`

网络接口的启用与停用：

- `ifup ethx`：启用指定的接口
- `ifdown ethx`：禁用指定的接口

### ifconfig 命令详解

ifconfig 命令可以临时地设置网络接口的 IP 参数。

格式：`ifconfig <网络接口> <IP地址> [netmask <子网掩码>] [broadcast <广播地址>]`

当 IP 地址使用标准 A、B、C 类地址时，广播地址和子网掩码可以省略。

如：

```bash
ifconfig eth0 10.0.0.10 netmask 255.255.255.0 broadcast 10.0.0.255
ifconfig eth0 192.168.0.10
ifconfig eth0:0 192.168.1.10
```

## 永久性配置网络参数

### RHEL/CentOS 中的 TCP/IP 配置文件

| 配置文件                                  | 说明                                                                   |
| ----------------------------------------- | ---------------------------------------------------------------------- |
| /etc/sysconfig/network                    | 包含了主机最基本的网络信息用于系统启动，在系统启动时由 rc.sysinit 读取 |
| /etc/sysconfig/network-scripts/ifcfg-ethX | 以太网接口配置文件                                                     |
| /etc/sysconfig/network-scripts/route-ethX | 以太网接口的静态路由配置文件                                           |
| /etc/hosts                                | 定义主机名映射为 IP 地址的静态解析映射功能                             |
| /etc/resolv.conf                          | DNS 客户端的配置文件                                                   |
| /etc/host.conf                            | DNS 客户端的控制文件                                                   |
| /etc/services                             | 设置主机的各个网路服务的端口号                                         |

### 网络接口配置文件

路径：`/etc/sysconfig/network-scripts/ifcfg-ethX`

（配置文件的格式参见 /usr/share/doc/initscripts-\*/sysconfig.txt）

常用选项：

| 选项      | 说明                     |
| --------- | ------------------------ |
| Type      | 指定网络接口类型         |
| DEVICE    | 指定设备名               |
| HWADDR    | 指定网卡的 MAC 地址      |
| BOOTPROTO | 指定获取网络参数的方式   |
| ONBOOT    | 指定是否在启动时启用设备 |
| IPADDR    | 指定静态 IP 地址         |
| NETMASK   | 指定子网掩码             |
| BROADCAST | 指定广播地址             |
| GATEWAY   | 指定设备的网关           |

如：

静态配置：

```bash
# vim /etc/sysconfig/network-scripts/ifcfg-eth0
# Type=Ethernet
# DEVICE=eth0
# HWADDR=00:02:8A:A6:30:45
# BOOTPROTO=static # 静态分配
# ONBOOT=yes
# IPADDR=192.168.0.123
# NETMASK=255.255.255.0
# BROADCAST=192.168.0.255
# GATEWAY=192.168.0.1
```

动态配置：

```bash
vim /etc/sysconfig/network-scripts/ifcfg-eth0
# Type=Ethernet
# DEVICE=eth0
# HWADDR=00:02:8A:A6:30:45
# BOOTPROTO=dhcp
# ONBOOT=yes
```

### 系统网络配置文件

用于永久性配置主机名和默认网关等。

路径：`/etc/sysconfig/network`

如：

```bash
vim /etc/sysconfig/network
# NETWORKING=yes
# HOSTNAME=centos1.ls-al.loc
# GATEWAY=192.168.1.254
```

### 查看 Linux 内核路由表

查看路由：`route`

如：

```bash
route
# Kernel IP routing table
# Destination  Gateway      Genmask         Flags Metric Ref Use Iface
# 192.168.0.0  *            255.255.255.0   U     0      0     0 eth0
# 192.168.1.0  *            255.255.255.0   U     0      0     0 eth1
# 192.19.12    192.168.1.1  255.255.255.0   U     0      0     0 eth1
# default      localhost    0.0.0.0         UG    0      0     0 eth0
```

路由的种类：

- 到主机的路由
- 到网络的路由
- 默认网关

### route 命令详解

route 命令可以临时地设置内核路由表。

格式：`route add|del [-net|-host] <target [netmask Netmask]> [gw Gateway] [[dev] Interface]`

参数：

- `add` 或 `del`：表示添加或删除路由
- `-net` 或 `-host`：表示添加到主机或网络的路由
- `target`：指定目标主机或网络地址，若目标为网络地址时，需使用 netmask 指定子网掩码
- `gw`：用于指定网关的 IP 地址
- `dev`：用于指定路由的网络接口（dev 关键字可省略）

如：

添加路由：

```bash
# 添加到主机的路由
route add -host 192.168.1.2 dev eth0:0
route add -host 10.20.30.148 gw 10.20.30.40
# 添加到网络的路由
route add -net 10.20.30.40 netmask 255.255.255.248 eth0
route add -net 10.20.30.48 netmask 255.255.255.248 gw 10.20.30.41
route add -net 192.168.1.0/24 eth1
# 添加默认网关路由
route add default gw 192.168.1.1
```

删除路由：

```bash
# 删除到主机的路由
route del -host 192.168.1.2 dev eth0:0
route del -host 10.20.30.148 gw 10.20.30.40
# 删除到网络的路由
route del -net 10.20.30.40 netmask 255.255.255.248 eth0
route del -net 10.20.30.48 netmask 255.255.255.248 gw 10.20.30.41
route del -net 192.168.1.0/24 eth1
# 删除默认网关路由
route del default gw 192.168.1.1
```

### 设置主机名和包转发

使用 hostname 命令可以临时地修改主机名。

格式：hostname <主机名>

如：

```bash
hostname centos1.ls-al.loc
```

使用 sysctl 命令可以临时地开启内核的包转发，用于临时调整内核参数。

如：

```bash
# 开启内核的包转发功能
sysctl -w net.ipv4.ip_forward=1
# 同理也可写作
echo "1" > /proc/sys/net/ipv4/ip_forward
```

### 网络接口的静态路由配置文件

每个网络接口均可有其静态路由配置文件。

路径：`/etc/sysconfig/network-scripts/route-ethX`

如：

```bash
# 配置网络接口eth0的静态路由
vim /etc/sysconfig/network-scripts/route-eth0
# 192.168.2.0/24  via  172.16.10.88
```

### 设置包转发

路径：`/etc/sysctl.conf`（永久性配置包转发）

确保如下配置行存在：

```bash
net.ipv4.ip_forward = 1
```

sysctl 命令用于查看和修改包转发配置

如：

```bash
# 查看当前系统是否支持包转发
sysctl  net.ipv4.ip_forward
# 使配置文件的修改在当前环境下生效
sysctl  -p
```

## 网络测试工具

### 网络检测的常用工具

| 命令工具          | 功能说明                              |
| ----------------- | ------------------------------------- |
| ifconfig          | 检测网络接口配置                      |
| route             | 检测路由配置                          |
| ping              | 检测网络连通性                        |
| netstat           | 查看网络状态                          |
| lsof              | 查看指定 IP、端口的进程的当前运行情况 |
| host/dig/nslookup | 检测 DNS 解析                         |
| traceroute        | 检测到目的主机所经过的路由器          |
| tcpdump           | 显示本机网络流量的状态                |

### 网络测试（ping、traceroute）

ping 命令：用于测试网络的连通性。

如：

```bash
ping www.sina.con.cn
ping -c 4 192.168.1.12
```

traceroute 命令：用于显示数据包到达目的主机所经过的路由。

如：

```bash
traceroute www.sina.com.cn
```

### 查看网络端口相关（netstat、lsof、nmap）

netstat 命令：查看网络端口

如：

```bash
netstat -an
netstat -lunpt
```

lsof 命令：查看在指定 IP 和/或 端口上打开的进程

```bash
# 查看指定IP的进程的运行情况
lsof -i @192.168.0.200
lsof -n -i UDP@192.168.0.200
# 查看指定端口运行的程序
lsof -i :ssh
lsof -i :22
```

nmap 命令：端口扫描

### dig 命令详解

如：

```bash
# 根据/etc/resolv.conf 中的 DNS 服务器配置查询 ls-al.me 的 IP 地址
dig ls-al.me
# 向指定的DNS服务器查询 g.cn 的IP地址
dig @202.106.196.115 g.cn
# 反向查询 192.168.0.252 所对应的域名
dig -x 192.168.0.252
```
