import type { BackgroundWallpaperConfig } from "@/types/backgroundWallpaper";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
	// 壁纸模式："banner" 横幅壁纸，"fullscreen" 全屏壁纸，"overlay" 全屏透明，"none" 纯色背景无壁纸
	mode: "banner",
	// 是否允许用户通过导航栏切换壁纸模式
	switchable: true,
	// 是否启用背景视频播放
	playerEnable: true,
	/**
	 * 背景图片配置
	 * 桌面端和移动端分别使用不同的随机图API
	 */
	src: {
		// 桌面端：使用随机图API（PC端壁纸）
		desktop: "https://t.alcy.cc/pc",
		// 移动端：使用随机图API（移动端壁纸）
		mobile: "https://t.alcy.cc/mp",
		// 背景视频播放地址
		playerUrl: [
			"https://www.image2url.com/r2/default/videos/1781765166391-f2ba6648-1597-40e0-9f0a-6768ae39e574.mp4",
		],
	},
	// 横幅壁纸和全屏壁纸共享配置
	common: {
		// 壁纸遮罩暗度
		dimOpacity: 0.2,
		// 多视频播放模式："order" 顺序循环，"random" 随机切换
		playerMode: "random",
		// 主页横幅文字
		homeText: {
			enable: true,
			switchable: true,
			title: "你好，世界",
			titleSize: "3.8rem",
			subtitle: [
				"为校园提供色彩",
				"揪码互联网科技有限公司",
				"今天你睡觉了吗",
				"无区别攻击",
				"冷知识豆包智能体下架",
				"我勒个骚刚",
			],
			subtitleSize: "1.5rem",
			typewriter: {
				enable: true,
				speed: 100,
				deleteSpeed: 50,
				pauseTime: 2000,
			},
		},
		// 导航栏配置
		navbar: {
			transparentMode: "semi",
			enableBlur: true,
			blur: 5,
		},
		// 水波纹动画效果
		waves: {
			enable: {
				desktop: true,
				mobile: true,
			},
			switchable: true,
		},
		// 渐变过渡效果
		gradient: {
			enable: {
				desktop: true,
				mobile: true,
			},
			height: "10%",
			switchable: true,
		},
		// 壁纸轮播配置
		carousel: {
			enable: false,
			interval: 5000,
			transitionEffect: "zoom",
			switchable: true,
		},
	},
	// Banner模式特有配置
	banner: {
		position: "0% 20%",
	},
	// 全屏透明覆盖模式特有配置
	overlay: {
		switchable: {
			opacity: true,
			blur: true,
			cardOpacity: true,
		},
		zIndex: -1,
		opacity: 0.8,
		blur: 10,
		cardOpacity: 0.5,
	},
	// 全屏壁纸模式特有配置
	fullscreen: {
		position: "center",
	},
};