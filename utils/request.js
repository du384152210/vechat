const base_url = 'http://localhost:3000';

const http = (obj) => {
	console.log(obj)
  return new Promise((resolve, reject) => {
    if(!obj.hideLoading) {
      uni.showLoading({
        title: '加载中',
      })
    }
    uni.request({
      url: (base_url + obj.url).trim(),
      method: obj.method || 'GET',
      data: obj.data,
      header: {
        'content-type': obj.method === 'POST' ? 'application/json' : 'application/json',
        'Authorization': uni.getStorageSync('token')
      },
      success: res => {
        uni.hideLoading()
        switch(res.statusCode) {
          case 200, 201: 
          resolve([null,res.data]);
            break;
          case 400: 
            uni.showToast({
              title: res.data.message,
              icon: 'none'
            })
          default: 
          resolve([null, res.data]);
            break;
        }
        resolve(res)
      },
      fail: err => {
        uni.hideLoading()
        resolve([err, undefined])
      }
    })
  })
}

export default http