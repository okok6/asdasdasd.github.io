$(document).ready(function () {
	// 读取LocalStorage中的username值
	var username = localStorage.getItem('username')
	var email = localStorage.getItem('email')

	if (username && email) {
		// 如果username存在，则显示登录div，隐藏注册div，并将username值赋给login_username
		$('#login_div').hide()
		$('#register_div').hide()
		$('#acctount_detail').show()
		$('#btn_logout').show()
		$('#acctount_title').show()
		$('#btn_logout').show()
		$('#buy_title').show()
		$('#buy_hisdoty').show()
		// let d = result.data.welcome
		$('#username').text(username)
		$('#email').text(email)
		$('#logintime').text(time)
		// $('#createtime').text(time)
		// $('#loginip').text(d.loginip)
		$('#money').text(0 + ' USDT')
	} else {
		// 如果username不存在，则隐藏登录div，显示注册div
		$('#login_div').hide()
		$('#register_div').show()
	}
})

function chanagediv(v) {
	if (v == 'register') {
		$('#login_div').hide()
		$('#register_div').show()
	} else if (v == 'login') {
		$('#login_div').show()
		$('#register_div').hide()
	}
}
let currentTime = new Date()
let year = currentTime.getFullYear() //获取年份
let month = currentTime.getMonth() + 1 //获取月份，注意要加1，因为月份从0开始
let date = currentTime.getDate() //获取日期
let hours = currentTime.getHours() //获取小时
let minutes = currentTime.getMinutes() //获取分钟
let seconds = currentTime.getSeconds() //获取秒钟
let time = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds

function register() {
	let username = $('#reg_username').val()
	let email = $('#reg_email').val()
	let password = $('#reg_password').val()
	if (!username || !email || !password) {
		alert('请输入完整信息！')
	} else if (!/^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+$/.test(email)) {
		alert('请填写正确的邮箱！')
	} else {
		localStorage.setItem('username', username)
		localStorage.setItem('email', email)
		localStorage.setItem('password', password)

		$('#login_div').hide()
		$('#register_div').hide()
		$('#acctount_detail').show()
		$('#btn_logout').show()
		$('#acctount_title').show()
		$('#btn_logout').show()
		$('#buy_title').show()
		$('#buy_hisdoty').show()
		// let d = result.data.welcome
		$('#username').text(username)
		$('#email').text(email)
		$('#logintime').text(time)
		// $('#createtime').text(time)
		// $('#loginip').text(d.loginip)
		$('#money').text(0 + ' USDT')
		// $('#secretkey').text(d.secretkey)
		// 验证通过，进行下一步逻辑处理
		// ...
	}
	// $.ajax({
	// 	url: $("#data_url").val() + "api/user/registerex",
	// 	data: {
	// 		username: username,
	// 		email: email,
	// 		password: password,
	// 	},
	// 	type: "post",
	// 	success: function(result) {
	// 		if (result.code == 0) {
	// 			layer.msg(result.msg);
	// 		} else {
	// 			$.cookie("token", result.data.userinfo.token);
	// 			layer.msg(result.msg, function() {
	// 				location.reload();
	// 			});
	// 		}
	// 	}
	// });
}

function login() {
	let username = $('#login_username').val()
	let password = $('#login_password').val()

	// if (username != '' && password != '') {
	// 	$.ajax({
	// 		url: $('#data_url').val() + 'api/user/login',
	// 		data: {
	// 			account: username,
	// 			password: password,
	// 		},
	// 		type: 'post',
	// 		success: function (result) {
	// 			layer.msg(result.msg)
	// 			if (result.code == 1) {
	// 				$.cookie('token', result.data.userinfo.token)
	// 				location.reload()
	// 			}
	// 		},
	// 	})
	// } else {
	// 	layer.msg('请输入账户密码')
	// }
}

function logout() {
	location.href = 'b.html'

	// $.ajax({
	// 	url: $('#data_url').val() + 'api/user/logout',
	// 	beforeSend: function (request) {
	// 		request.setRequestHeader('token', $.cookie('token'))
	// 	},
	// 	type: 'post',
	// 	success: function (result) {
	// 		layer.msg(result.msg)
	// 		if (result.code == 1) {
	// 			location.reload()
	// 		}
	// 	},
	// })
}

// function loadaccount() {
// 	$.ajax({
// 		url: $('#data_url').val() + 'api/user/index',
// 		type: 'post',
// 		async: false,
// 		beforeSend: function (request) {
// 			request.setRequestHeader('token', $.cookie('token'))
// 		},
// 		success: function (result) {
// 			if (result.code == 1) {
// 				$('#login_div').hide()
// 				$('#register_div').hide()
// 				$('#acctount_detail').show()
// 				$('#btn_logout').show()
// 				$('#acctount_title').show()
// 				$('#btn_logout').show()
// 				$('#buy_title').show()
// 				$('#buy_hisdoty').show()
// 				let d = result.data.welcome
// 				$('#username').text(d.username)
// 				$('#email').text(d.email)
// 				$('#logintime').text(getLocalTime(d.logintime * 1000))
// 				$('#createtime').text(getLocalTime(d.createtime * 1000))
// 				$('#loginip').text(d.loginip)
// 				$('#money').text(d.money + ' USDT')
// 				$('#secretkey').text(d.secretkey)
// 			}
// 		},
// 	})
// }
