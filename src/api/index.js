// import axios from "axios";
import fetchJsonp from "fetch-jsonp";

/**
 * 音乐播放器
 */

// 获取音乐播放列表
export const getPlayerList = async (server, type, id) => {
  const res = await fetch(
    `${import.meta.env.VITE_SONG_API}?server=${server}&type=${type}&id=${id}`,
  );
  const data = await res.json();

  if (data[0].url.startsWith("@")) {
    // eslint-disable-next-line no-unused-vars
    const [handle, jsonpCallback, jsonpCallbackFunction, url] = data[0].url.split("@").slice(1);
    const jsonpData = await fetchJsonp(url).then((res) => res.json());
    const domain = (
      jsonpData.req_0.data.sip.find((i) => !i.startsWith("http://ws")) ||
      jsonpData.req_0.data.sip[0]
    ).replace("http://", "https://");

    return data.map((v, i) => ({
      name: v.name || v.title,
      artist: v.artist || v.author,
      url: domain + jsonpData.req_0.data.midurlinfo[i].purl,
      cover: v.cover || v.pic,
      lrc: v.lrc,
    }));
  } else {
    return data.map((v) => ({
      name: v.name || v.title,
      artist: v.artist || v.author,
      url: v.url,
      cover: v.cover || v.pic,
      lrc: v.lrc,
    }));
  }
};

/**
 * 一言
 */

const hitokotoApis = {
  // 古诗词一言
  'AncientPoetry': async () => {
    const response = await fetch('https://v1.jinrishici.com/all')
    const data = await response.json()
    return {
      hitokoto: data.content, // 诗句
      from: data.origin, // 出处
    }
  },
  // 韩小韩接口
  'vvhan': async () => {
    const response = await fetch('https://api.vvhan.com/api/ian?type=json')
    const jsonData = await response.json()
    if (jsonData.success !== true) {
      throw new Error('接口调用失败')
    }
    return {
      hitokoto: jsonData.data.vhan,
      from: jsonData.data.source,
    }
  },
  'hitokoto': async () => {
    const res = await fetch("https://v1.hitokoto.cn");
    const jsonData = await res.json();
    return {
      hitokoto: jsonData.hitokoto,
      from: jsonData.from
    }
  },
}
// 获取一言数据
export const getHitokoto = async () => {
  const cacheKey = 'hitokotoCache'
  // 使用缓存
  let cache = sessionStorage.getItem(cacheKey)
  if (cache) {
    console.assert(cache && cache !== '', '使用缓存成功')
    console.log(cache)
    ElMessage({ message: '未满5秒，再等等吧(●ˇ∀ˇ●)' })
    // 返回缓存，输出缓存信息
    return JSON.parse(cache)
  }

  console.assert(!cache, '使用缓存失败')
  // 缓存过期，请求新的一言
  const apiNames = Object.keys(hitokotoApis)
  const num = Math.floor(Math.random() * apiNames.length)
  const data = await hitokotoApis[apiNames[num]]()
  // 设置缓存
  let expiresIn = 5000 // 缓存 5秒钟
  sessionStorage.setItem(cacheKey, JSON.stringify(data))
  setTimeout(() => {
    sessionStorage.removeItem(cacheKey)
  }, expiresIn)

  return data
};

/**
 * 天气
 */

// 获取教书先生天气 API
// https://api.oioweb.cn/doc/weather/GetWeather
export const getOtherWeather = async () => {
  const res = await fetch("https://api.oioweb.cn/api/weather/GetWeather");
  return await res.json();
};
