<template>
	<div>
		<div class="portlet light">
			<div class="portlet-title">
				<div class="caption">
					<i class="fa fa-bell-o"></i>Case List	 </div>
					<div class="tools">
						<a href="javascript:;" class="collapse" data-original-title="" title=""> </a>
						<a href="#portlet-config" data-toggle="modal" class="config" data-original-title="" title=""> </a>
						<a href="javascript:;" class="reload" data-original-title="" title=""> </a>
					</div>
				</div>
				<div class="portlet-body">
					<div class="table-responsive">
						<table class="table  table-striped">
							<thead>
								<tr>
									<th></th>
									<th><span class="primary-link">CSI Case Number</span></th>
									<th> <span class="primary-link">Patient's Last Name</span></th>
									<th> <span class="primary-link">Patients' First Name</span></th>
									<th> <span class="primary-link">Case Type </span></th>
									<th> <span class="primary-link">Case Status </span></th>
									<th> <span class="primary-link">Specimen ID </span></th>
									<th> <span class="primary-link">Recive Date </span></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td> <input type="checkbox"> </td>
									<td @click="viewCaseDetail('FIG17-011818')"> <a>FIG17-011818</a> </td>
									<td> Soto </td>
									<td> Cesar </td>
									<td> Metasystem Fish Global </td>
									<td> Pending </td>
									<td> <a href="#">B-17-247</a> </td>
									<td> 11/6/2017 </td>
								</tr>
								<tr>
									<td> <input type="checkbox"> </td>
									<td> <a href="#">CG17-010343</a> </td>
									<td> Madia </td>
									<td> Lena </td>
									<td> Cytogenetics</td>
									<td> Pending </td>
									<td> <a href="#">M17-15259</a> </td>
									<td> 11/6/2017 </td>
								</tr>
								<tr>
									<td> <input type="checkbox"> </td>
									<td> <a href="#">FG17-011856</a> </td>
									<td> Bross </td>
									<td> Sharon </td>
									<td> FLOW Global </td>
									<td> Client Approval Required </td>
									<td> <a href="#">B-17-247</a> </td>
									<td> 11/6/2017 </td>
								</tr><tr>
								<td> <input type="checkbox"> </td>
								<td> <a href="#">MOL17-011536</a> </td>
								<td> Mores </td>
								<td> Robert </td>
								<td> Molecular </td>
								<td> Completed </td>
								<td> <a href="#">B-17-247</a> </td>
								<td> 11/6/2017 </td>
							</tr><tr>
							<td> <input type="checkbox"> </td>
							<td> <a href="#">FG17-011830</a> </td>
							<td> Cotton </td>
							<td> Barbara </td>
							<td>FLOW Global </td>
							<td> Pending </td>
							<td> <a href="#">B-17-247</a> </td>
							<td> 11/6/2017 </td>
						</tr><tr>
						<td> <input type="checkbox"> </td>
						<td> <a href="#">IHC17-008229</a> </td>
						<td> Soto </td>
						<td> Cesar </td>
						<td> Immunohistochemistry </td>
						<td> Pending </td>
						<td> <a href="#">B-17-247</a> </td>
						<td> 11/6/2017 </td>
					</tr><tr>
					<td> <input type="checkbox"> </td>
					<td> <a href="#">FIG17-011818</a> </td>
					<td> Matos </td>
					<td> Alan </td>
					<td> Metasystem Fish Global </td>
					<td> Pending </td>
					<td> <a href="#">B-17-247</a> </td>
					<td> 11/6/2017 </td>
				</tr><tr>
				<td> <input type="checkbox"> </td>
				<td> <a href="#">CG17-019093</a> </td>
				<td> Jhon </td>
				<td> Doe </td>
				<td> Cytogenetics</td>
				<td> Pending </td>
				<td> <a href="#">902-15259</a> </td>
				<td> 11/6/2017 </td>
			</tr><tr>
			<td> <input type="checkbox"> </td>
			<td> <a href="#">FIG17-011920</a> </td>
			<td> Hernandez </td>
			<td> Juan </td>
			<td> Metasystem Fish Global </td>
			<td> Conditional Reflex </td>
			<td> <a href="#">N/A</a> </td>
			<td> 11/6/2017 </td>
		</tr>
	</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</template>


<script>
	export default {
		components: {
		},
		methods: {
			viewCaseDetail (id) {
				this.$router.push({ name: 'Details', params: { id: id }});
			}
		},
		save (e) {
			// console.log('Save pressed')
		}
	}
</script>

<style>
	a {
		cursor: pointer;
	}
	.container-fluid { 
		padding-top: 40px 
	}
	/* 3D TEST*/
	#cover {
		background-color: #1F3335;
		margin-bottom: 40px;
	}
	#cover canvas {
		display: block;
		width: 60%;
		margin: 0 auto;
	}
	.col-group {
		padding: 0 36px;
	}
	.col-group:after {
		display: table;
		clear: both;
		content: " ";
	}
	.col-group .col-group {
		padding: 0;
	}
	.col-group [class*="col-"] {
		min-height: 1px;
		box-sizing: border-box;
	}
	.col-group [class*="push-"],
	.col-group [class*="pull-"] {
		position: relative;
	}
	#cover .col-12 {
		position: relative;
		background: radial-gradient(circle closest-side at 51%, #00757F 0%, #00757F 26%, #1f3335 140%);
	}
	.fullpage {
		overflow: hidden;
		#cover {
			height: 150%;
			.col-12 {
				position:relative;
				background: -webkit-radial-gradient(circle closest-side at 50%, @color-base 0%, @color-base 26%, fade(@color-base-darker, 100) 100%);
				background: -moz-radial-gradient(circle closest-side at 50%, @color-base 0%, @color-base 26%, fade(@color-base-darker, 100) 100%);
				background: -o-radial-gradient(circle closest-side at 50%, @color-base 0%, @color-base 26%, fade(@color-base-darker, 100) 100%);
				background: -ms-radial-gradient(circle closest-side at 50%, @color-base 0%, @color-base 26%, fade(@color-base-darker, 100) 100%);
				background: radial-gradient(circle closest-side at 50%, @color-base 0%, @color-base 26%, fade(@color-base-darker, 100) 100%);
				height: 1000px;
			}
		}
	}
</style>
