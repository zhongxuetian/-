module.exports = {
	devServer:{
		proxy:{
			'/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
                // ws: true,
                pathRewrite: {
                    '^/api': '/'   // 请求数据路径别名,这里是注意将static/mock放入public文件夹
                }
          }
		}
	}
}