---
sidebar_position: 1
---

# 笔记简述

[![GitHub stars](https://img.shields.io/github/stars/cworld1/linux-learning?style=flat-square)](https://github.com/cworld1/linux-learning/stargazers)
[![GitHub commit activity](https://img.shields.io/github/actions/workflow/status/cworld1/linux-learning/.github/workflows/main.yml?branch=main&style=flat-square)](https://github.com/cworld1/linux-learning/commits)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/cworld1/linux-learning/docusaurus-build-deloy?label=workflow&style=flat-square)](https://github.com/cworld1/linux-learning/actions/workflows/main.yml)
[![GitHub license](https://img.shields.io/github/license/cworld1/linux-learning?style=flat-square)](https://github.com/cworld1/linux-learning/blob/master/LICENSE)

这是关于 CWorld 学习 Linux 一些笔记和代码。

[前往阅读](https://linux.cworld.top/)

## 项目介绍

本项目使用 [Docusaurus 2](https://docusaurus.io/) 构建。

## 项目运行

首先请确保已经安装了 Node.js。

- 安装相关包文件：

  ```
  $ yarn
  ```

- 本地开发运行：

  ```
  $ yarn start
  ```

  此命令启动本地开发服务器并打开浏览器窗口。大多数更改都是实时反映的，无需重新启动服务器。

- 构建生成成品（如果你需要的话）：

  ```
  $ yarn build
  ```

  此命令将静态内容生成到 `build` 目录中，并可以使用任何静态内容托管服务提供。

- 部署（使用 SSH）：

  ```
  $ USE_SSH=true yarn deploy
  ```

  部署（不使用 SSH）：

  ```
  $ GIT_USER=<Your GitHub username> yarn deploy
  ```

  如果您正在使用 GitHub 页面进行托管，则此命令是构建网站并推送到 `gh-pages` 分支的便捷方法。

## 贡献

由于作者只是个正在浅学 Linux 的初学者，所以笔记难免存在明显纰漏，还请读者们多多海涵。此外，也欢迎诸位使用 PR 或 Issues 来改善它们。

## 鸣谢

一些电子教材对作者学习上帮助颇多，没有这些资料，就没有这部笔记。在此对这些教材的原作者深表感谢。读者若对此项目笔记抱有疑惑，也可以仔细阅读以下教材以作弥补。

- [基礎學習篇目錄 - for CentOS 7](https://linux.vbird.org/linux_basic/centos7/)
- [鸟哥的 Linux 私房菜：基础学习篇 第四版](https://wizardforcel.gitbooks.io/vbird-linux-basic-4e/content/1.html)
- [Linux 就该这么学](https://www.linuxprobe.com/basic-learning-00.html)
- [Linux 命令大全(手册)](https://www.linuxcool.com/)

## License

The MIT License.

[![知识共享许可协议](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh)

本作品采用 [知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。
