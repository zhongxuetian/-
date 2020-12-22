// const axios = require('axios')
module.exports = {
	/**
     * @description: 获取分类列表
    */
	showList() {
		return new Promise((resolve) => {//resolve->then,reject->catch
			let aside = [
				{
					name: 'Loading',
					id: 1
				},
				{
					name: 'icon',
					id: 2
				},
				{
					name: 'pc端背景',
					id: 3
				},
				{
					name: '移动端背景',
					id: 4
				},
				{
					name: 'logo',
					id: 5
				},
				{
					name: '其他',
					id: 6
				},
			]
			// axios({
			//   url:'/api/type/list',
			//   method:'post',
			//   headers:{
			//     'Content-type':'application/json'
			//   }
			// })
			// .then( response => {
			//   console.log(response)
			// })
			resolve({
				status: 'ok',
				data: aside
			})
		})
	},


	/**
     * @description: 新增分类
    */
	add(reqData) {
		return new Promise((resolve) => {
			resolve(reqData)
		})
	
   }
}