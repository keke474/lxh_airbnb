import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHomeGoodPriceData, getHomeHighScoreData, getHomeDiscountData, getHomeHotRecoData, getLongforData, getPlusData } from '@/services'

// 一个异步请求,发送多个网络请求
// export const fetchHomeData = createAsyncThunk('fetchdata', async (payload) => {
//   const res = await getHomeHighScoreData()
//   return res
// })

// export const fetchHomeData = createAsyncThunk('fetchdata', async (payload) => {

//   const res1 = await getHomeGoodPriceData()

//   const res2 = await getHomeHighScoreData()

//   return { res1, res2 }
// })

export const fetchHomeData = createAsyncThunk(
  'fetchdata',
  (payload, { dispatch }) => {
    getHomeGoodPriceData().then(res => {
      dispatch(changeGoodPriceInfoAction(res))
    })
    getHomeHighScoreData().then(res => {
      dispatch(changeHighScoreAction(res))
    })
    getHomeDiscountData().then(res => {
      dispatch(changeDiscountAction(res))
    })
    getHomeHotRecoData().then(res => {
      dispatch(changeHotRecoAction(res))
    })
    getLongforData().then(res => {
      dispatch(changeLongforInfoAction(res))
    })
    getPlusData().then(res => {
      dispatch(changePlusInfoAction(res))
    })
  })

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction (state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreAction (state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountAction (state, { payload }) {
      state.discountInfo = payload
    },
    changeHotRecoAction (state, { payload }) {
      state.recommendInfo = payload
    },
    changeLongforInfoAction (state, { payload }) {
      state.longforInfo = payload
    },
    changePlusInfoAction (state, { payload }) {
      state.plusInfo = payload
    },
  },
})
export const {
  changeGoodPriceInfoAction,
  changeHighScoreAction,
  changeDiscountAction,
  changeHotRecoAction,
  changeLongforInfoAction,
  changePlusInfoAction,
} = homeSlice.actions
export default homeSlice.reducer


