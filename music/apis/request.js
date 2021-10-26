// const baseUrl = 'http://8.134.68.161:3001'
const baseUrl = 'https://www.meleshop.top'
// const baseUrl = 'http://localhost:3001'
const request = (url = '', data = {}, type = 'GET') => {
	return new Promise((resolve, reject) => {

		uni.request({

			method: type,

			url: baseUrl + url,

			data: data

		}).then((response) => {

			setTimeout(function() {

				uni.hideLoading();

			}, 200);

			let [error, res] = response;

			resolve(res.data);

		}).catch(error => {

			let [err, res] = error;

			reject(err)

		})

	});

}

export default request
