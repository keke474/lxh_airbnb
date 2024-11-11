// 每个模块都有自己独立的文件来管理网络请求
import hyRequest from "..";

// 高性价比模块数据请求
export function getHomeGoodPriceData () {
  return hyRequest.get({
    url: "home/goodprice"
  })
}

// 高评分模块数据请求
export function getHomeHighScoreData () {
  return hyRequest.get({
    url: "home/highscore"
  })
}

// 折扣模块数据请求
export function getHomeDiscountData () {
  return hyRequest.get({
    url: "home/discount"
  })
}


// 推荐模块数据请求
export function getHomeHotRecoData () {
  return hyRequest.get({
    url: "home/hotrecommenddest"
  })
}

// 向往模块数据请求
export function getLongforData () {
  return hyRequest.get({
    url: "home/longfor"
  })
}

// plus模块数据请求
export function getPlusData () {
  return hyRequest.get({
    url: "home/plus"
  })
}