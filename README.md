简体中文 | [English](./README_EN.md)

<p>
<strong><h2>taoge的主页</h2></strong>
本项目基于<a href="https://github.com/imsyy/home">imsyy/home</a>项目二次开发
</p>

### 主页

- [taoge的主页](https://homepage.mrtao.site)

### 功能

- [x] 载入动画
- [x] 站点简介
- [x] Hitokoto 一言
- [x] 日期及时间
- [x] 实时天气
- [x] 时光进度条
- [x] 音乐播放器

### 自动部署

如果遇到构建环境或者打包过程出现错误，则可以采用 `Github Actions` 来进行自动构建

- 在成功 `fork` 仓库后，前往 `Actions` 页面，若您是首次开启，则会出现下面的提示，点击开启
  
  ![步骤1](/screenshots/step1.jpg)

- 然后在仓库中进行任意修改后均会触发工作流的运行，在工作流完成后，会在下方生成一个可供下载的压缩包，这就是构建出的静态文件，可自行上传至服务器
  
  ![步骤2](/screenshots/step2.jpg)

### 手动部署

* **安装** [node.js](https://nodejs.org/zh-cn/) **环境**

  > node > 16.16.0  
  > npm > 8.15.0
  
* 然后以 **管理员权限** 运行 `cmd` 终端，并 `cd` 到 项目根目录
* 在 `终端` 中输入：

```bash
# 安装 pnpm
npm install -g pnpm

# 安装依赖
pnpm install

# 预览
pnpm dev

# 构建
pnpm build
```
> 构建完成后，静态资源会在 **`dist` 目录** 中生成，可将 **`dist` 文件夹下的文件**上传至服务器，也可使用 `Vercel` 等托管平台一键导入并自动部署

### Docker 部署

> 安装及配置 Docker 将不在此处说明，请自行解决

```bash
# 构建
docker build -t home .
# 运行
docker run -p 12445:12445 -d home
```

### 网站链接

在 `src/assets/siteLinks.json` 中可以自定义网站链接（以指向自己的网站）:

```json
{
    "icon": "图标路径",
    "name": "程序员导航",
    "link": "https://openi.cn/dev"
}
```

### 社交链接

在 `src/assets/socialLinks.json` 中可以自定义社交链接:

```json
{
    "name": "Github",
    "icon": "图标路径",
    "tip": "去 Github 看看",
    "url": "https://github.com/ZhouT1024"
}
```

### 天气

使用`教书先生api`获取

也可自行更换其他方式

### 网站图标及网站背景

#### 网站背景

可以在 `public/images` 中修改网站背景

如果想要添加更多的本地图片作为网站背景，可以将图片重命名 `background+数字` 的形式，并在 `src/components/Background/index.vue` 中进行修改：

```js

if (type == 0) {
  // 修改此处 Math.random() 后面的第一个数字为图片的数量
  bgUrl.value = `/images/background${Math.floor(
    Math.random() * 10 + 1
  )}.webp`;
}
```

#### 网站图标

可以在 `public/images/icon` 中修改网站图标。

### 技术栈

* [Vue](https://cn.vuejs.org/)
* [Vite](https://vitejs.cn/vite3-cn/)
* [Pinia](https://pinia.vuejs.org/zh/)
* [IconPark](https://iconpark.oceanengine.com/official)
* [xicons](https://xicons.org/)
* [Aplayer](https://aplayer.js.org/)

### API

* 壁纸接口
  - [小歪 API](https://api.aixiaowai.cn)
  - [搏天 API](https://api.btstu.cn/doc/sjbz.php)
* [教书先生 API](https://api.oioweb.cn/doc/weather/GetWeather)
* 一言API
  - [Hitokoto 一言](https://hitokoto.cn/)
  - [古诗词](https://v1.jinrishici.com/all)
  - [韩小韩](https://api.vvhan.com/api/ian?type=json)