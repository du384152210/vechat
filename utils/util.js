const compareDate = (d) => {
	let old = new Date(d);
	let now = new Date();
	
	let oldDate = old.getTime();
	let h = old.getHours();
	let m = old.getMinutes();
	let Y = old.getFullYear();
	let M = old.getMonth() + 1;
	let D = old.getDate() - 2;
	
	let newDate = old.getTime();
	let nh = now.getHours();
	let nm = now.getMinutes();
	let nY = now.getFullYear();
	let nM = now.getMonth() + 1;
	let nD = now.getDate();
	
	h = h < 10 ? '0' + h : h;
	m = m < 10 ? '0' + m : m;
	// 当天时间
	if(D === nD && M === nM && Y === nY) {
		return h+':'+m
	}
	// 前天
	if(D+1 === nD && M === nM && Y === nY) {
		return '昨天' + h+':'+m
	}
	// 大于两天
	else {
		return Y + '/'+M+'/'+D;
	}
	
}

const formatDate = (d) => {
	let time = new Date(d);
	let h = time.getHours();
	let m = time.getMinutes();
	let s = time.getSeconds();
	let Y = time.getFullYear();
	let M = time.getMonth() + 1;
	let D = time.getDate();
	return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s
}

// 上传服务器
const uploadFile = async(files) => {
  let i = 0;
  let resList = [];
  while(i < files.length) {
    wx.showLoading({
      title: '加载中',
    })
    console.log(files);
    let a = await new Promise((resolve, reject) => {
	console.log(files[i]);
      wx.uploadFile({
        url: 'http://localhost:3000/upload',
        filePath: files[i],
        name: 'file',
        success (res) {
          ++i
		  console.log(res)
          resList.push(JSON.parse(res.data).src);
          resolve(i)
        },
        fail (error) {
          reject(error);
        },
        complete() {

        }
      })
    })
    i = a;
  }
  uni.hideLoading({
    success: (res) => {
      uni.showToast({
        title: '上传成功',
      })
    },
  })
  return resList;
}

const chooseMedia = (mediaType, count) => {
	return new Promise((resolve, reject) => {
		uni.chooseMedia({
			count,
			mediaType,
			sourceType: ['album', 'camera'],
			maxDuration: 30,
			camera: 'back',
			success: (res) => {
				if(count === 1) {
					resolve(res.tempFiles[0])
				}else {
					resolve(res.tempFiles)
				}
			}
		})
	})
}


const showToast = (title, type, callback) => {
	uni.showToast({
		title,
		icon: !type ? 'none' : '',
		success: () => {
			if(callback && typeof callback === 'function') {
				setTimeout(() => {
					callback()
				},500)
			}
		}
	})
}
export {
	compareDate,
	showToast,
	formatDate,
	uploadFile,
	chooseMedia
}