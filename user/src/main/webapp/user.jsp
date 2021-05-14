<!doctype html>
<html lang="en">
<head>
<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Bootstrap CSS -->
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
	crossorigin="anonymous">

<title>User</title>
</head>
<body onload="load()">

	<section class="forms">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-12">
					<div class="card">
						<div class="card-header d-flex align-items-center">
							<h3 class="h4">User Form</h3>
						</div>
						<div class="card-body">
							<form class="form-horizontal">
								<div class="form-group row">
									<div class="col-sm-9">
										<input id="user_id" type="hidden" value="0"
											class="form-control form-control-warning">
									</div>
								</div>
								<div class="form-group row">
									<label class="col-sm-3 form-control-label">First name</label>
									<div class="col-sm-9">
										<input id="first_name" type="text" placeholder="first name"
											class="form-control form-control-warning">
									</div>
								</div>
								<div class="form-group row">
									<label class="col-sm-3 form-control-label">Last name</label>
									<div class="col-sm-9">
										<input id="last_name" type="text" placeholder="last name"
											class="form-control form-control-warning">
									</div>
								</div>
								<div class="form-group row">
									<label class="col-sm-3 form-control-label">Email</label>
									<div class="col-sm-9">
										<input id="email" type="text" placeholder="email"
											class="form-control form-control-warning">
									</div>
								</div>
								<div class="form-group row">
									<label class="col-sm-3 form-control-label">Phone</label>
									<div class="col-sm-9">
										<input id="phone" type="text" placeholder="phone"
											class="form-control form-control-warning">
									</div>
								</div>
								<div class="form-group row">
									<label class="col-sm-3 form-control-label">Username</label>
									<div class="col-sm-9">
										<input id="username" type="text" placeholder="username"
											class="form-control form-control-warning">
									</div>
								</div>
								<div class="form-group row">
									<label class="col-sm-3 form-control-label">Password</label>
									<div class="col-sm-9">
										<input id="password" type="password" placeholder="password"
											class="form-control form-control-warning">
									</div>
								</div>
								<div class="form-group row">
									<div class="col-sm-9 offset-sm-3">
										<input onclick="save()" type="button" value="Save"
											class="btn btn-primary"> <input type="reset"
											value="Reset" class="btn btn-primary">
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>

				<div class="col-lg-12">
					<div class="card">
						<div class="card-header d-flex align-items-center">
							<h3 class="h4">History</h3>
						</div>
						<div class="card-body">
							<div class="table-responsive">
								<table class="table table-hover" id="table">
									<thead>
										<tr>
											<th>#</th>
											<th>ID</th>
											<th>First name</th>
											<th>Last name</th>
											<th>Email</th>
											<th>Phone</th>
											<th>Username</th>
											<th>Password</th>
										</tr>
									</thead>
								</table>
							</div>
						</div>
					</div>
				</div>

			
			</div>
		</div>
	</section>
	<!-- Optional JavaScript; choose one of the two! -->

	<!-- Option 1: Bootstrap Bundle with Popper -->
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
		crossorigin="anonymous"></script>

	<!-- Option 2: Separate Popper and Bootstrap JS -->
	<!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
    -->
    <script src="ajax/jquery.3.2.1.min.js"></script>
	<script src="ajax/ajax.js"></script>
	<script src="ajax/User.js"></script>
	<script src="sweetalert/sw.js"></script>
</body>
</html>