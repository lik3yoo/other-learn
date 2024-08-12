const path = require("path")
const fs = require("fs")

fs.readFile("./index.html", "utf8", function(err, dataStr) {
	if(err) {
		console.log("读取文件失败")
	}else {
		getCss(dataStr)
		getScript(dataStr)
		getHtml(dataStr)
	}
})

const getCss = (str) => {
	let reg = /<style>[\s\S]*<\/style>/
	let css = reg.exec(str)[0]
	let newCss = css.replace("\<style\>", "").replace("\<\/style\>", "")

	// TODO 判断文件夹是否存在,存在添加文件不存在创建文件夹

	//fs.readdir("./target/", function(err, files) {
	//	if(err) {
	//		fs.mkdir("./target/", function(err) {
	//			if(err) {
	//				console.log("创建文件夹失败")
	//			}else {
	//				console.log("创建文件夹成功")
	//
	//			}
	//		})
	//	}
	//})
	fs.writeFile('./target/index.css', newCss, function(err) {
		if(err) {
			console.log('写入文件失败')
		}
	})
}

const getScript = (str) => {
	let reg = /<script>[\s\S]*<\/script>/
	let js = reg.exec(str)[0]
	let newJs = js.replace("\<script\>", "").replace("\<\/script\>", "")

	fs.writeFile('./target/index.js', newJs, function(err) {
		if(err) {
			console.log('写入文件失败')
		}
	})
}

const getHtml = (str) => {
	let regJs = /<script>[\s\S]*<\/script>/
	let regCss = /<style>[\s\S]*<\/style>/

	let newHtml = str.replace(regCss, `<link rel="stylesheet" href="./index.css">"`).replace(regJs, `<script src="./index.js"></script>`)

	fs.writeFile('./target/index.html', newHtml, function(err) {
		if(err) {
			console.log('写入文件失败')
		}
	})
}