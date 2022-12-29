# 系统监视与系统日志

关于 Linux 系统监视与系统日志的讲解。

## 学习目标

- 学会使用 top、mpstat、vmstst、iostat 工具分析系统性能
- 熟悉系统性能评估标准
- 学习 rsyslog 的配置方法
- 学习配置远程日志

## 监视系统性能

系统性能监视对象（重点通常为容易形成性能瓶颈的部分）：

- CPU 性能
- 内存性能
- 磁盘 I/O 性能
- 网络 I/O 带宽

### 系统性能监视常用工具

CPU 监视工具：

- `/usr/bin/uptime`：显示系统平均负载
- `/usr/bin/top`：动态显示系统进程任务
- `/usr/bin/mpstat`：输出 CPU 的各种统计信息

内存监视工具：

- `/usr/bin/free`：显示系统内存的使用
- `/usr/bin/vmstat`：报告虚拟内存的统计信息

I/O 监视工具：

- `/usr/bin/iostat`：输出 CPU、I/O 系统和磁盘分区的统计信息

### top 命令详解

top 命令同来动态显示系统的统计信息和进程的重要信息。

- 统计信息包括：

  - 系统平均负载

  - 进程状态统计

  - CPU 使用的统计信息

  - 物理内存和虚拟内存的使用统计信息

- 进程信息，如：

  ```bash
  1  PID USER  PR    NI   VIRT  RES  SHR S %CPU %MEM TIME+  COMMAND
  2  PID PPID  TIME+ %CPU %MEM  PR   NI S  VIRT SWAP RES UID COMMAND
  3  PID %MEM  VIRT  SWAP RES   CODE DATA  SHR  nFLT nDRT S PR NI %CPU COMMAND
  4  PID PPID  UID   USER RUSER TTY  TIME+ %CPU %MEM S COMMAND
  ```

输出结果如：

```bash
top
# 07:01:55 up 14 min,  1 user,  load average: 0.03, 0.02, 0.00
# Tasks:  98 total,   2 running,  96 sleeping,   0 stopped,   0 zombie
# %Cpu(s):  0.0 us,  0.2 sy,  0.0 ni, 98.9 id,  0.0 wa,  0.7 hi,  0.2 si,  0.0 st
```

#### 输出第一行

```
07:01:55 up 14 min,  1 user,  load average: 0.03, 0.02, 0.00
```

- `07:01:55`：表示当前时间
- `up 14 min`：表示系统自开机后运行的时间
- `1 user`：表示当前登录的用户数
- `load average: 0.03, 0.02, 0.00`：表示系统平均负载，其中：
  - 第一个数表示 1 分钟系统平均负载；
  - 第二个数表示 5 分钟系统平均负载；
  - 第二个数表示 15 分钟系统平均负载。

> 一段时间内，`load average` 中的每个值都应该小于系统中 CPU 的个数，否则表示系统存在 CPU 瓶颈
>
> 相关的交互命令：交互命令 `l` 是用于是否显示此信息的乒乓切换开关。

#### 输出第二行

用于输出整体进程状态：

```
Tasks:  98 total,   2 running,  96 sleeping,   0 stopped,   0 zombie
```

- `98 total`：总进程数
- `2 running`：正在运行进程数
- `96 sleeping`：睡眠的进程数
- `0 stopped`：停止的进程数
- `0 zombie`：僵尸进程数

> 僵尸进程指的是子进程退出后父进程并没有处理子进程的退出信号，导致子进程变为僵尸进程。

#### 输出第三行

用于输出 CPU 使用率情况（百分比）：

```
%Cpu(s):  0.0 us,  0.2 sy,  0.0 ni, 98.9 id,  0.0 wa,  0.7 hi,  0.2 si,  0.0 st
```

- `0.0 us` (user)：用户态进程占用 CPU 百分比
- `0.2 sy` (system)：核心态进程占用 CPU 百分比
- `0.0 ni` (nice)：调整过优先级的用户态进程占用 CPU 时间的百分比
- `98.9 id` (idel)：CPU 空闲的百分比
- `0.0 wa` (iowait)：等待系统 I/O 的 CPU 时间百分比
- `0.7 hi` (hard interrupt)： CPU 用于处理硬件中断的时间百分比
- `0.2 si` (soft interrupt)： CPU 用于处理软中断的时间百分比
- `0.0 st` (steal)：被虚拟机偷掉的 CPU 时间百分比（仅用于运行虚拟机的情况）

> - 交互命令 `t` 是用于是否显示进程状态统计和 CPU 使用率的乒乓切换开关；
> - 交互命令 `1` 是用于显示所有 CPU 的平均状态还是每个 CPU 状态的乒乓切换开关。

#### 输出第四、五行

用于输出内存使用情况（MB）：

```
MiB Mem :   2766.0 total,    116.0 free,   1613.0 used,   1037.0 buff/cache
MiB Swap:   2765.0 total,   2710.0 free,     55.0 used.    987.8 avail Mem
```

- `Mem`：指物理内存使用
- `Swap`：指交换空间使用
- `2766.0 total`：总量
- `116.0 free`：空闲量
- `1613.0 used`：使用量

> Buffers 指的是块设备的读写缓冲区；Cached 指的是文件系统本身的页面缓存。
>
> buffers 和 cached 都是 Linux 操作系统底层的机制，目的是加速对磁盘的访问。
>
> 交互命令 `m` 是用于是否显示系统内存和交换空间信息的乒乓切换开关。

#### 列表输出内容

```
PID  USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
5956 cworld    20   0 4124032 226396 138980 S   2.0   8.0   0:08.93 gnome-shell
6854 cworld    20   0  932972  66740  53316 S   0.7   2.4   0:00.89 gnome-terminal-
...
```

- `PID`：进程号
- `USER`：运行用户
- `PR`：优先级
- `NI`：任务 nice 值
- `VIRT`：虚拟内存用量
- `RES`：物理内存用量
- `SHR`：共享内存用量
- `S`：进程状态（R=运行；S=睡眠；T=跟踪/停止；Z=僵尸）
- `%CPU`：CPU 占用百分比
- `%MEM`：内存占用百分比
- `TIME+`：累计 CPU 占用时间
- `COMMAND`：指令名称

#### top 的交互命令

基础交互：

<kbd>Space</kbd> 或 <kbd>Enter</kbd>：立即刷新显示
<kbd>?</kbd> 或 <kbd>h</kbd>：显示帮助信息屏幕
<kbd>G</kbd> + <kbd>[1234]</kbd>：可以使用 G1~G4 切换 top 提供的四种字段方案的显示窗口
<kbd>B</kbd>：加粗加亮显示的乒乓切换开关
<kbd>u</kbd>：显示指定用户的进程（仅匹配 EUID）
<kbd>U</kbd>：显示指定用户的进程（匹配 RUID、EUID、SUID 和 UID）
<kbd>k</kbd>：杀死指定的进程（发送进程信号）
<kbd>r</kbd>：重新设置一个进程的优先级别
<kbd>d</kbd> 或 <kbd>s</kbd>：改变两次刷新显示之间的时间间隔，单位为秒
<kbd>W</kbd>：将当前的 top 设置写入~/.toprc 文件中
<kbd>q</kbd>：退出 top

多窗口显示：

<kbd>A</kbd>：是否在一个界面中同时显示四种字段方案显示窗口的乒乓切换开关
<kbd>a</kbd> 和 <kbd>w</kbd>：在四种字段方案的显示窗口中移动以确认当前窗口；`a` 表示下一个窗口，`w` 表示上一个窗口

选择排序字段：

- 快速选择排序字段：

  - <kbd>M</kbd>：按 %MEM 字段排序
  - <kbd>N</kbd>：按 PID 字段排序
  - <kbd>P</kbd>：按 %CPU 字段排序
  - <kbd>T</kbd>：按 TIME+ 字段排序

- 交互式选择排序字段：<kbd>F</kbd> 或 <kbd>O</kbd>

- 切换排序字段和逆向排序：

  - 切换排序字段：<kbd>\<</kbd> 或 <kbd>\></kbd>
  - 逆向排序：<kbd>R</kbd>

### mpstat 命令详解

功能：输出每一个 CPU 的运行状况，为多处理器系统中的 CPU 利用率提供统计信息。
格式：`mpstat [ -P { cpu | ALL } ] [ interval [ count ] ]`
其中：

- `-P {cpu-id|ALL}`：用 CPU-ID 指定 CPU，CPU-ID 从 0 开始
- `interval`：为取样时间间隔
- `count`：为输出次数

如：

```bash
mpstat
# Linux 2.6.18-194.32.1.el5 (centos1.ls-al.me)    04/29/11
#
# 12:56:27   CPU  %user  %nice   %sys %iowait   %irq   %soft  %steal   %idle    intr/s
# 12:56:27       all     3.89   0.00     0.76      4.04     0.02    0.12    0.00    91.18   1050.99

mpstat -P 0
# Linux 2.6.18-194.32.1.el5 (centos1.ls-al.me)    04/29/11
#
# 12:56:37   CPU  %user  %nice   %sys %iowait   %irq   %soft  %steal   %idle    intr/s
# 12:56:37     0       3.86    0.00       0.75    4.01      0.02    0.12     0.00   91.24   1050.81

mpstat 5 10
mpstat –P 1  5 10
```

### vmstat 命令详解

功能：显示进程队列、内存、交换空间、磁盘 I/O、和 CPU 状态信息。
格式：`vmstat [-a] [-n] [-S k|K|m|M] [Interval [ Count ]]`
选项：

- `-a`：显示活跃和非活跃内存
- `-n`：只在开始时显示一次各字段名称
- `-S`：使用指定单位显示。k(1000)、K(1024)、m(1000000)、M(1048576) 字节，默认单位为 K。

> interval 和 count 的含义与 mpstat 一致

如：

```bash
vmstat
# procs -----------memory---------- ---swap-- -----io---- --system-- -----cpu------
#  r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy  id wa st
#  0  0      0 504544 119328 236716    0    0    46    30 1036   52  1  0  97  2  0
#  0  0      0 504544 119336 236708    0    0     0     6 1002   28  0  0 100  0  0
```

其中：

- `procs` 列：

  - `r` 列：表示运行和等待CPU时间片的进程数，这个值若长期大于系统CPU的个数，说明CPU资源不足。
  - `b` 列：表示在等待资源的进程数，比如正在等待I/O、或者内存交换等。

- `cpu` 列：

  - `us` 列：显示了用户态进程消耗的CPU 时间百分比；
  - `sy` 列：显示了核心态进程消耗的CPU时间百分比。

  us 的值比较高时说明用户进程消耗的CPU时间多，sy 值较高时说明内核消耗的CPU资源很多。
  根据经验，us+sy 的参考值为80%，若 us+sy>80% 说明可能存在CPU资源不足。

- `memory` 列：

  - `swpd` 列：表示切换到内存交换区的内存数量（以k为单位）。
    若 swpd 的值不为0，或者比较大，只要si、so的值长期为0，这种情况下一般不用担心，不会影响系统性能。
  - `free` 列：表示当前空闲的物理内存数量(以k为单位)。
  - `buff` 列：表示 buffers cache 的内存数量，一般对块设备的读写才需要缓冲。
  - `cache` 列：表示 page cached 的内存数量，一般作为文件系统cached，频繁访问的文件都会被 cached
    若 cache 值较大，说明 cached 的文件数较多，如果此时 IO 中 bi 比较小，说明文件系统效率比较好。

- `swap` 列：

  - si 列：表示由磁盘调入内存，也就是内存进入内存交换区的数量。
  - so 列：表示由内存调入磁盘，也就是内存交换区进入内存的数量。

  一般情况下，si、so 的值都为0，如果 si、so 的值长期不为0，则表示系统内存不足。
