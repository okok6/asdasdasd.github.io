function baseurl() {
	let u = window.location.protocol + "//" + window.location.host;
	$(".baseurl").each(function(i, e) {
		$(e).text(u);
	})
}

function seturl() {
	let u = window.location.protocol + "//" + window.location.host + "/";
	$("#data_url").val(u);
}

function loadaccount() {
	$.ajax({
		url: $("#data_url").val() + "api/user/index",
		type: "post",
		// async: false,
		beforeSend: function(request) {
			request.setRequestHeader("token", $.cookie("token"));
		},
		success: function(result) {
			if (result.code == 1) {
				let d = result.data.welcome;
				$("#secretkey").text(d.secretkey);
			}
		}
	});
}
