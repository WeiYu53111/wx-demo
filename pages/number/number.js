// pages/number/number.js
Page({

  num1:0,
  num2:0,

  change(e){
    this[e.currentTarget.id] = Number(e.detail.value)
  },


  compare(){
    console.log("用户点击了比较按钮")
    var str = "两数相等"
    if(this.num1 > this.num2){
      str = "第一个数大"
    }else if (this.num1 < this.num2){
      str = "第二个数大"
    }
    this.setData({result:str})

  },

  /**
   * 页面的初始数据
   */
  data: {
    result :""
  },


  onPageScroll() {
    console.log("页面正在滚动")
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    console.log("页面加载")

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log("监听页面初次渲染完成")
    /* wx.navigateTo({
      url: '/pages/logs/logs?name=1&age=3',
    })  */
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log("监听页面显示")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("监听页面隐藏")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log("Unload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log("监听用户下拉动作")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log("页面上拉触底事件的处理函数")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    console.log("用户点击右上角分享")
  }
})