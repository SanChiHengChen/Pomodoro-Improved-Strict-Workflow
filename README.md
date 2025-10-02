# Pomodoro-Improved(Firefox extension)

A Firefox extension that helps you stay focused by blocking sites during work timers and letting you browse during break timers.

Based on [i207M](https://github.com/i207M)/[Pomodoro-Improved-Strict-Workflow](https://github.com/i207M/Pomodoro-Improved-Strict-Workflow).

Sincere respect to i207M and The GNU General Public License!!

## TODO
- Migrating to Manifest V3.
- Fix a bug that when both *"Show a notification when a timer finishes"* and *"Open newtab when a timer finishes"* are set up. (In that case, when you click the *notification*, the *newtab* dose not close at the same time)
- Fix the bug of location.split() in options.js. ✔
- Fix a bug about video website (such as Bilibili & YouTube) autoplay the video during the work time when you open video website Tab in a special way (like open video website Tab in History or switch to a video website Tab that once been initiated but not once been actived).
- Be tolerant of the issue. :-)

# Pomodoro-Improved(火狐插件)

本火狐插件, 旨在工作时间阻止网站, 并允许您在休息时间浏览, 进而帮助您保持专注。

本插件基于Microsoft Edge插件 [i207M](https://github.com/i207M)/[Pomodoro-Improved-Strict-Workflow](https://github.com/i207M/Pomodoro-Improved-Strict-Workflow).

向 i207M 同志和 GNU General Public License(GNU GPL 许可证)致以崇高敬意!!

## 下一步开发方向

- 打算向 Manifest V3 迁移
- 修复bug: 在 *"倒计时结束时显示新标签页"* 和 *"倒计时结束时在右下角显示通知"* 同时打开时, 用户响应 *右下角通知* 后 *新标签页* 不自动关闭
- 已修复bug: 在options.js之中location.split()报错的bug ~~(虽然正常用户看不见这个bug也就是了)~~✔
- 修复视频播放网站, 在工作时, (以特殊打开方式时)自动播放的bug ~~(我自认为的bug)~~
- 欢迎提 issue :-)


***
# (Original Microsoft Edge extension)
***
# Pomodoro-Improved

[![](https://img.shields.io/badge/Edge-Install-blue)](https://microsoftedge.microsoft.com/addons/detail/aglnejhljfcgffkmhafficfaejjbcnji)

A Chrome/Edge extension that helps you stay focused by blocking sites during work timers and letting you browse during break timers.

Based on [matchu](https://github.com/matchu)/[Strict-Workflow](https://github.com/matchu/Strict-Workflow).

## Features

- Blacklist or whitelist
- Long-short break (Thanks [@cori](https://github.com/matchu/Strict-Workflow/pull/25))
- Statistics & Set daily goal (Thanks [@karthickpdy](https://github.com/matchu/Strict-Workflow/pull/61))
- Play background music (eg. ticking) when working
- Click the notification to start automatically (Thanks [@pedrogalv](https://github.com/matchu/Strict-Workflow/pull/65))

## Usage

Go to [Microsoft Edge Addons store](https://microsoftedge.microsoft.com/addons/detail/aglnejhljfcgffkmhafficfaejjbcnji) if using Chromium Edge.

Otherwise:

1. Download `.zip` file in the latest release (or the artifact produced in a workflow run).
2. Unzip the crx file.
3. Enable Developer mode on the chrome extensions page.
4. Click "Load unpacked extension..."
5. Select the unzipped folder.

## TODO

- Migrating to Manifest V3

---

实践番茄工作法：工作时屏蔽浪费时间的网站，休息时允许访问。

基于 [matchu](https://github.com/matchu)/[Strict-Workflow](https://github.com/matchu/Strict-Workflow).

## 功能

- 黑名单/白名单
- 长短休息（Thanks [@cori](https://github.com/matchu/Strict-Workflow/pull/25)）
- 数据统计 & 设定目标（Thanks [@karthickpdy](https://github.com/matchu/Strict-Workflow/pull/61)）
- 工作时播放背景音乐（滴答声）
- 点击通知自动启动（Thanks [@pedrogalv](https://github.com/matchu/Strict-Workflow/pull/65)）
