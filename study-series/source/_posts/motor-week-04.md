---
title: "W04 · 反电动势观测器与 PLL"
date: 2026-11-02 08:00:00
updated: 2026-11-02 08:00:00
categories:
  - 学习计划
  - 电机控制与嵌入式
tags:
  - 12周成长计划
  - 电机控制
permalink: study-series/motor/week-04/
---

> 本系列面向有一些基础、但希望系统提升的学习者。每周具体成果根据真实练习调整。

# W04 · 反电动势观测器与 PLL

**时间：** 2026-11-02—2026-11-08  
**方向：** 电机控制与嵌入式  
**时间预算：** 专业 45 分钟/日

## 本周目标

- 算法：BEMF observer 状态估算、误差项、PLL 角度与速度提取
- 嵌入式：控制中断预算、时间戳、速度估计滤波
- 产出：Observer + PLL 运行仿真
- 重点实验：注入已知角速度与电压/电流信号，记录 θtrue 与 θest 误差、锁定时间

## 每日任务

- [ ] **2026-11-02 周一·理解**：先阅读「BEMF observer 状态估算、误差项、PLL 角度与速度提取」，画知识关系图，写出 3 个待解决的问题
- [ ] **2026-11-03 周二·拆解**：推导/复盘关键公式与单位，指出 2 个前提假设；梳理「控制中断预算、时间戳、速度估计滤波」的工程约束
- [ ] **2026-11-04 周三·实现**：开展实际代码或 Python 仿真练习：注入已知角速度与电压/电流信号，记录 θtrue 与 θest 误差、锁定时间
- [ ] **2026-11-05 周四·迁移**：对照 NXP 或 Infineon 参考工程/数据手册，记录入口函数、输入输出及差异
- [ ] **2026-11-06 周五·检验**：设计正常、边界、故障三个测试场景，并解释可能失败的原因
- [ ] **2026-11-07 周六·交付**：完成交付：Observer + PLL 运行仿真；写清环境、步骤、输出、可复现实验
- [ ] **2026-11-08 周日·复盘**：口头用 2 分钟解释本周成果；回答 5 道自测题，整理未解决问题

## 验收标准

在两档速度和负载变化下报告误差，不只展示成功波形

## 学习资料

- [NXP Motor Control SDK 文档](https://docs.mcuxpresso.nxp.com/mcuxsdk/latest/middleware/motor_control/doc/index.html)
- [Infineon ModusToolbox Motor Control](https://www.infineon.com/design-resources/development-tools/sdk/modustoolbox-software/modustoolbox-motor-control)

## 学习复盘

- 实际完成任务：
- 完成证据（代码/笔记/录音）：
- 最大问题：
- 下周调整：
