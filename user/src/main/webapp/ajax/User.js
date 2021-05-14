function getRow() {
	var table = document.getElementById('table');
	for (var i = 0; i < table.rows.length; i++) {
		table.rows[i].onclick = function() {
			document.getElementById("user_id").value = this.cells[1].textContent;
			document.getElementById("first_name").value = this.cells[2].textContent;
			document.getElementById("last_name").value = this.cells[3].textContent;
			document.getElementById("email").value = this.cells[4].textContent;
			document.getElementById("phone").value = this.cells[5].textContent;
			document.getElementById("username").value = this.cells[6].textContent;
			document.getElementById("password").value = this.cells[7].textContent;
		};
	}
}

function getRowSearch() {
	var table = document.getElementById('idTable');
	for (var i = 0; i < table.rows.length; i++) {
		table.rows[i].onclick = function() {
			document.getElementById("user_id").value = this.cells[1].textContent;
			document.getElementById("first_name").value = this.cells[2].textContent;
			document.getElementById("last_name").value = this.cells[3].textContent;
			document.getElementById("email").value = this.cells[4].textContent;
			document.getElementById("phone").value = this.cells[5].textContent;
			document.getElementById("username").value = this.cells[6].textContent;
			document.getElementById("password").value = this.cells[7].textContent;
		};
	}
}

function getID() {
	var table = document.getElementById('table');
	for (var i = 0; i < table.rows.length; i++) {
		table.rows[i].onclick = function() {
			document.getElementById("user_id").value = this.cells[1].textContent;
		};
	}
}

function getIDserch() {
	var table = document.getElementById('idTable');
	for (var i = 0; i < table.rows.length; i++) {
		table.rows[i].onclick = function() {
			document.getElementById("user_id").value = this.cells[1].textContent;
		};
	}
}

function resetForm() {
	document.getElementById("user_id").value = "0";
	document.getElementById("first_name").value = "";
	document.getElementById("last_name").value = "";
	document.getElementById("email").value = "";
	document.getElementById("phone").value = "";
	document.getElementById("username").value = "";
	document.getElementById("password").value = "";
}

function login() {
	var username = $('#username').val();
	var password = $('#password').val();
		if(username === "" || password === ""){
			alert("Please enter username and password");
		}else{
			
			$.ajax({
				url : 'http://localhost:8080/user/webresources/UserResources/Login',
				method : 'POST',
				headers : {
					"Content-Type" : "application/json"
				},
				data : getJSON(),
				success : function(data) {
					if(data == 0){
						alert("Invalid username or password")
					}else{
						location.replace("http://localhost:8080/user/user.jsp");
					}
					
				},
				error : function(jqXHR, exception) {
					alert("error");
				}
			});
		}
	
}

function save() {
	var user_id = $('#user_id').val();
	user_id = parseInt(user_id);
	if (user_id === 0) {
		if(ValidInput()){
			$.ajax({
				url : 'http://localhost:8080/user/webresources/UserResources/User',
				method : 'POST',
				headers : {
					"Content-Type" : "application/json"
				},
				data : getJSON(),
				success : function(data) {
					$("#idTable").find("tr:gt(0)").remove();
					$("#table").find("tr:gt(0)").remove();
					load();
					resetForm();
					alert(data);
				},
				error : function(jqXHR, exception) {
					alert("error");
				}
			});
		}else{
			alert("Fill form");
		}
	}else{
		if(ValidInput()){
			$.ajax({
				url : 'http://localhost:8080/user/webresources/UserResources/User',
				method : 'PUT',
				headers : {
					"Content-Type" : "application/json"
				},
				data : getJSON(),
				success : function(data) {
					$("#idTable").find("tr:gt(0)").remove();
					$("#table").find("tr:gt(0)").remove();
					load();
					resetForm();
					alert(data);
				},
				error : function(jqXHR, exception) {
					alert("error");
				}
			});
		}else{
			alert("Fill form");
		}
	}
}

function delet(){
	getID();
	swal({
		title: "Are you sure?",
		text: "Do you realy want to Delete this?",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	})
		.then((willDelete) => {
			if (willDelete) {
				$.ajax({
					url : 'http://localhost:8080/user/webresources/UserResources/User/' + $('#user_id').val(),
					method: 'DELETE',
					success: function (resultText) {
						$("#table").find("tr:gt(0)").remove();
						$("#idTable").find("tr:gt(0)").remove();
						load();
						swal("Deleted!", {
							icon: "success",
							});
						},
						error: function (jqXHR, exception) {
							swal("fail");
						}
					});
				} else {
					swal("Safe!");
				}
			});
}

function deletSearch(){
	getIDserch();
	swal({
		title: "Are you sure?",
		text: "Do you realy want to Delete this?",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	})
		.then((willDelete) => {
			if (willDelete) {
				$.ajax({
					url : 'http://localhost:8080/user/webresources/UserResources/User/' + $('#user_id').val(),
					method: 'DELETE',
					success: function (resultText) {
						$("#table").find("tr:gt(0)").remove();
						$("#idTable").find("tr:gt(0)").remove();
						load();
						swal("Deleted!", {
							icon: "success",
							});
						},
						error: function (jqXHR, exception) {
							swal("fail");
						}
					});
				} else {
					swal("Safe!");
				}
			});
}

function load() {
	$.ajax({
		url : 'http://localhost:8080/user/webresources/UserResources/Users',
		method : 'GET',
		headers : {
			Accept : "application/json",
			"Content-Type" : "application/json"
		},
		success : function(data, textStatus, errorThrown) {
			var items = [];
			$.each(data.user,function(key, val) {
				var index = key + 1;
				items.push("<tr>");
				items.push("<td>" + index + "</td>");
				items.push("<td>" + val.user_id + "</td>");
				items.push("<td>" + val.first_name + "</td>");
				items.push("<td>" + val.last_name + "</td>");
				items.push("<td>" + val.email + "</td>");
				items.push("<td>" + val.phone + "</td>");
				items.push("<td>" + val.username + "</td>");
				items.push("<td>" + val.password + "</td>");
				items.push("<td><button onclick='getRow()' type='button' class='btn btn-info btn-fill'>Edit</button></td>");
				items.push("<td><button onclick='delet()' type='button' class='btn btn-danger btn-fill'>Delete</button></td>");
				items.push("</tr>");
			});
		$("<tbody/>", {
			html : items.join("")
		}).appendTo("#table");
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert("Ajax request fail");
		},
		timeout : 120000,
	});
}

function getJSON() {
	return JSON.stringify({
		"user_id" : $('#user_id').val(),
		"first_name" : $('#first_name').val(),
		"last_name" : $('#last_name').val(),
		"email" : $('#email').val(),
		"phone" : $('#phone').val(),
		"username" : $('#username').val(),
		"password" : $('#password').val(),
	});
}

function ValidInput(){
	var user_id = $('#user_id').val();
	var first_name = $('#first_name').val();
	var last_name = $('#last_name').val();
	var email = $('#email').val();
	var phone = $('#phone').val();
	var username = $('#username').val();
	var password = $('#password').val();
	var user_id = $('#user_id').val();
	var first_name = $('#first_name').val();
	var last_name = $('#last_name').val();
	var email = $('#email').val();
	var phone = $('#phone').val();
	var username = $('#username').val();
	var password = $('#password').val();
	if(user_id === "" || first_name === "" || last_name === "" || email === "" || phone === "" || username === "" || password === ""){
		return false;
	}else{
		return true;
	}
	return true;
}

function search(){
$("#idTable").find("tr:gt(0)").remove();
	var searchID = $('#searchID').val();
	if(searchID === ""){
		alert("Please Enter ID")
	}else{
	$.ajax({
		url : 'http://localhost:8080/user/webresources/UserResources/User/' + searchID,
		method : 'GET',
		headers : {
			Accept : "application/json",
			"Content-Type" : "application/json"
		},
		success : function(data, textStatus, errorThrown) {
			var items = [];
			$.each(data,function(key, val) {
				var index = key + 1;
				items.push("<tr>");
				items.push("<td>" + index + "</td>");
				items.push("<td>" + val.user_id + "</td>");
				items.push("<td>" + val.first_name + "</td>");
				items.push("<td>" + val.last_name + "</td>");
				items.push("<td>" + val.email + "</td>");
				items.push("<td>" + val.phone + "</td>");
				items.push("<td>" + val.username + "</td>");
				items.push("<td>" + val.password + "</td>");
				items.push("<td><button onclick='getRow()' type='button' class='btn btn-info btn-fill'>Edit</button></td>");
				items.push("<td><button onclick='delet()' type='button' class='btn btn-danger btn-fill'>Delete</button></td>");
				items.push("</tr>");
			});
		$("<tbody/>", {
			html : items.join("")
		}).appendTo("#idTable");
	},
		error : function(jqXHR, textStatus, errorThrown) {
			alert("Ajax request fail");
		},
		timeout : 120000,
		});
	}
}