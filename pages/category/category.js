// pages/category/category.js
const app=getApp()
//console.log(app.globalData.userInfo)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'hello world',
    list:[],
    imgPath:''
  },
  handleChangeImg(){
    wx.chooseImage({
      complete: (res) => {
        console.log(res);
        const path=res.tempFilePaths[0]
          this.setData({
            imgPath:path
          })
      },
    })
  },
  handleBtnClick(){
    console.log('点击了')
    console.log(app.globalData.userInfo)
    this.setData({
      message : '你好，我是'+app.globalData.userInfo.nickName
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: 'http://localhost:8080/mini/list',
    //   success:(res)=>{
    //     console.log(res.data.data);
    //     this.setData({
    //       list:res.data.data
    //     })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})