English | [Chinese](./README.md)

<p>
<strong><h2>taoge的主页</h2></strong>
This project is based on the secondary development of the <a href="https://github.com/imsyy/home">imsyy/home</a> project
</p>

### Home

- [taoge的主页](https://home.mrtao.site)

### Functions

- [x] Loading animation
- [x] Site description
- [x] Hitokoto
- [x] Date and time
- [x] Live weather
- [x] Time progress bar
- [x] Music player

### Deployment

* **Installation** [node.js](https://nodejs.org/zh-cn/) **Environment**

  > node > 16.16.0  
  > npm > 8.15.0
  
* Then run the `cmd` terminal with **administrator privileges** and `cd` to the project root directory
* In the `terminal` type:

```bash
# Install pnpm
npm install -g pnpm

# Install the dependencies
pnpm install

# Preview
pnpm dev

# Build
pnpm build
```

> Once the build is complete, the files in the `dist` folder can be uploaded to the server or imported and automatically deployed with one click using a hosting platform such as `Vercel`.

### Weather

API: [教书先生](https://api.oioweb.cn/doc/weather/GetWeather)

It can also be replaced by other methods

### Technology Stack

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
