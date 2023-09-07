# MIKU-HOMEPAGE

## 在Vercel部署

首先Fork本仓库。登录Vercel，新建Project，从Fork的仓库导入。

项目配置：

| 可选配置项   | 值   |
| ------------ | ---- |
| Project Name | 任意 |
| 环境变量     | 任意 |

| 保持默认配置项   | 值       |
| ---------------- | -------- |
| Framework Preset | VITE     |
| Root Directory   | homepage |
| Output Dir       | dist     |

| 必须配置项 Build and Output Settings | 值                 |
| ------------------------------------ | ------------------ |
| Build Command                        | pnpm -w home:build |
| Install Command                      | pnpm -w i          |

## PNPM Script

**dev**: 启动开发调试

**build：** 类型检查并构建产物

**build-only**：仅构建

**type-check**：类型检查

**preview**：预览构建产物

## 环境变量

目录下拥有两个示例环境变量文件，`.env.development`和`.env.production`。开发环境默认使用`.env.development`，生产环境默认使用`.env.production`。

关于默认值，你删除了环境变量文件或者某一项未配置，会使用程序内置的默认值防止程序出错。如果你使用Vercel部署，Vercel的环境变量会覆盖`.env`文件中的配置。

| 变量名                   | 说明                 |
| ------------------------ | -------------------- |
| VITE_SITE_TITLE          | 站点标题             |
| VITE_SITE_DESCRIPTION    | 站点描述             |
| VITE_SITE_KEYWORDS       | 站点关键字(逗号隔开) |
| VITE_SITE_LINKS          | 友情链接(JSON)       |
| VITE_SITE_NAVS           | 导航栏(JSON)         |
| VITE_SITE_FOOTER         | 页脚信息             |
| VITE_SITE_ICP            | icp备案号(可选)      |
| VITE_MIKU                | MIKU看板娘开关       |
| VITE_PROFILE_NAME        | 姓名                 |
| VITE_PROFILE_SLOGAN      | 标语                 |
| VITE_PROFILE_AVATAR      | 头像(可选)           |
| VITE_PROFILE_TAGS        | 标签(JSON)           |
| VITE_PROFILE_EMAIL       | 电子邮箱             |
| VITE_PROFILE_DESCRIPTIOM | 个人信息配置描述     |
