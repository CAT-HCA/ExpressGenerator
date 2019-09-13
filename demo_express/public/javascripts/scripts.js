$(document).ready(() => {
	$("#loginBtn").click(() => {
		window.location.href = "/users/login";
	});

	$("#registerBtn").click(() => {
		window.location.href = "/users/register";
	});

	$("#leaguesBtn").click(() => {
		window.location.href = "/leagues";
	});

	$("#submitBtn").click(() => {
		let data = {
			email: $("#inputEmail").val(),
			password: $("#inputPassword").val(),
		};

		$.post("http://localhost:3000/users/login", data, function() {})
			.done(function(res) {})
			.done(function(res) {
				$("#inputEmail").val("");
				$("#inputPassword").val("");
			});
	});

	$.getJSON("/leagues/data", function(data) {})
		.done(function(data) {
			console.log(data);
			displayData(data);
		})
		.fail(function() {
			console.log("Error");
		});
});

function displayData(data) {
	$("#dataList").empty();

	for (let i = 0; i < data.length; i++) {
		$("#dataList").append(
			$("<li>", {
				html: data[i].Name,
			})
		);
	}
}
