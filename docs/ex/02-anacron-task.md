# Anacron 任务

## crond 和 anacron

crond 假定服务器是 24\*7 全天候运行的，当系统时间变化或有一段关机时间就会遗漏这一时间段应该执行的 cron 任务。anacron（anachronistic cron） 是 **crond 的一个连续时间版本**，它运行计算机关机时 crond 没有运行的任务,用于笔记本电脑、台式机、工作站等不一直开机的系统，对偶尔要关机的服务器也很有用。

若服务器 24\*7 全天候运行，无需开启 anacron 守护进程。每个用户都可以安排自己的 cron 任务。超级用户可以管理系统的 cron 任务和 anacron 任务。

## 系统的 anacron 任务

anacron 在 /var/spool/anacron 中保留时间戳文件，记录作业运行的时间。当 anacron 运行时，它检查自作业上一次运行以来是否已经经过了所需的天数，如果需要，就运行作业。

anacron 的任务表存储在 /etc/anacrontab 文件中。

对于每项任务，anacron 先判定该任务是否已在配置文件的周期字段中指定的期间内被执行了。如果它在给定周期内还没有被执行，anacron 会等待延迟字段中指定的分钟数，然后再次尝试执行命令字段中指定的命令。

当任务完成后，anacron 会将此日期记录在 /var/spo ol/anacron 目录的时间戳（Timestamp）文件中，默认的时间戳文件有三个：cron.daily，cron.monthly 和 cron.weekly。

```bash
ls /var/spool/anacron/
```

/etc/anacrontab 默认文件：

```bash
cat /etc/anacrontab
# SHELL=/bin/sh
# PATH=/sbin:/bin:/usr/sbin:/usr/bin
# MAILTO=root
# # 若1天之内没有运行“日任务”，则 65 分钟之后运行它
# 1       65      cron.daily          run-parts /etc/cron.daily
# # 若7天之内没有运行“周任务”，则 70 分钟之后运行它
# 7       70      cron.weekly         run-parts /etc/cron.weekly
# # 若30天之内没有运行“月任务”，则 75 分钟之后运行它
# 30      75      cron.monthly        run-parts /etc/cron.monthly
```
