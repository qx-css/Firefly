---
title: 搭建个人博客教程
published: 2026-07-09
description: 教程
image: ./d4.avif
tags: [新手，教程]
category: 学习
draft: false
author: 千絮
---
# **20分钟让你零成本拥有属于自己的Blog**
无需服务器，本教程适用于小白
## 1.环境安装
首先需要Cloudflare账号
[点击跳转](https://cloudflare.com "点击跳转")
简单注册后来到这个界面
[![https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEWzwpqTemn7Pa0tKhuiu5ZW6GJ5G-e2wACxCUAAuHecVYpvmOYypqnfTwE.png](https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEWzwpqTemn7Pa0tKhuiu5ZW6GJ5G-e2wACxCUAAuHecVYpvmOYypqnfTwE.png "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEWzwpqTemn7Pa0tKhuiu5ZW6GJ5G-e2wACxCUAAuHecVYpvmOYypqnfTwE.png")](https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEWzwpqTemn7Pa0tKhuiu5ZW6GJ5G-e2wACxCUAAuHecVYpvmOYypqnfTwE.png "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEWzwpqTemn7Pa0tKhuiu5ZW6GJ5G-e2wACxCUAAuHecVYpvmOYypqnfTwE.png")
然后第一步到此结束。
第二部安装VSCode
网上非常多教程，本文不多复述
第三步安装git
这个也很多教程，不在复述
第四步安装GitHub桌面端
第五步，注册免费域名账号
[前往](https://domain.digitalplat.org/ "前往")
注册账号
[![https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEWz4tqTe4m_psz3SlZLiBXG9wuGmXiOwACUCYAAuHecVZdaa8_rwLYbjwE.png](https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEWz4tqTe4m_psz3SlZLiBXG9wuGmXiOwACUCYAAuHecVZdaa8_rwLYbjwE.png "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEWz4tqTe4m_psz3SlZLiBXG9wuGmXiOwACUCYAAuHecVZdaa8_rwLYbjwE.png")](https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEWz4tqTe4m_psz3SlZLiBXG9wuGmXiOwACUCYAAuHecVZdaa8_rwLYbjwE.png "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEWz4tqTe4m_psz3SlZLiBXG9wuGmXiOwACUCYAAuHecVZdaa8_rwLYbjwE.png")
选好你的域名来到这个页面
![BQACAgUAAyEGAASHRsPbAAEWz6FqTe67Cjr1vZzPiVJtpRT0SIh3_wACaSYAAuHecVbsqmmhFOZRiDwE.png](https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEWz6FqTe67Cjr1vZzPiVJtpRT0SIh3_wACaSYAAuHecVbsqmmhFOZRiDwE.png)
不要点按钮，来到CloudFlare
![BQACAgUAAyEGAASHRsPbAAEWz69qTe7_atN6_Pzo5nUMbJvVPv9hBQACeSYAAuHecVbu-x-BI8oyPzwE.png](https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEWz69qTe7_atN6_Pzo5nUMbJvVPv9hBQACeSYAAuHecVbu-x-BI8oyPzwE.png)
点击概览
然后点击添加域名
选择连接域名
输入你在域名注册商注册的域名
点击添加
选择免费计划
一路下一步来到这个页面
![BQACAgUAAyEGAASHRsPbAAEWz8hqTe_kj96hzQlHcBCqsZsoFzDZ0wAClSYAAuHecVb6SXDdgOdSazwE.png](https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEWz8hqTe_kj96hzQlHcBCqsZsoFzDZ0wAClSYAAuHecVb6SXDdgOdSazwE.png)
复制两个名称服务器，填写到刚才的界面的NS1和NS2
然后到cf选择我已更新名称服务器
等待几分钟
出现![BQACAgUAAyEGAASHRsPbAAEWz_9qTfHL_6zJu3P63lParuY3uJYQvgAC0yYAAuHecVb0nsI7zorNvTwE.png](https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEWz_9qTfHL_6zJu3P63lParuY3uJYQvgAC0yYAAuHecVb0nsI7zorNvTwE.png)
最重要的一部就好了

二、Fork Firefly 官方仓库#
打开Firefly官方仓库：

二、Fork Firefly 官方仓库#
打开Firefly官方仓库：
[前往](https://github.com/CuteLeaf/Firefly "前往")
点击右上角的「Fork」按钮。

Fork仓库
填写信息后，点击「Create Fork」后，会自动跳转到你自己的仓库。
使用Github桌面版把他克隆下来
按照https://github.com/CuteLeaf/Firefly
进行配置
然后配置Worker
新建 Cloudflare Worker 应用#
1. 登录 Cloudflare 控制台 打开浏览器访问官方控制台：https://dash.cloudflare.com/，输入账号密码完成登录。
2. 进入 Workers & Pages 页面 登录后，在左侧菜单栏找到并点击 Workers 和 Pages（英文对应：Workers & Pages），进入应用管理页面。
3. 创建应用程序 在页面右上角，点击 创建应用程序（英文对应：Create application），进入应用创建流程。
4. 关联 GitHub 代码仓库 在创建页面中，选择 连接到 Git（Connect Git），然后选中 GitHub，按照页面提示完成授权，允许 Cloudflare 访问你的 GitHub 账号。
5. 选择目标仓库 授权完成后，系统会列出你的 GitHub 所有仓库，从中选中需要部署到 Cloudflare Worker 的代码仓库（如 Firefly 仓库）。
6. 配置构建设置 ：
• Build command: pnpm build
• Deploy command: npx wrangler deploy
1. 发起首次部署 配置完成后，点击页面底部的 部署（Deploy），启动首次自动部署流程。
2. 等待自动构建完成 Cloudflare 会自动执行三个操作：拉取 GitHub 仓库代码 → 执行构建命令 → 将项目部署至 Workers 服务器，耐心等待即可。
，然后在上面的菜单栏选择域添加域就大功告成
