<template>
	<div class="row">
		<div class="row">

			<div class="portlet light">

				<div class="portlet-title">
					<div class="caption">
						<span class="caption-subject uppercase">Full Name : </span>
						<span class="caption-subject bold uppercase font-dark">Soto, Cesar, </span>
						<span class="caption-subject">DOB : </span>
						<span class="caption-subject bold uppercase font-dark"> 1/20/1941, </span>
						<span class="caption-subject">Gender : </span>
						<span class="caption-subject bold uppercase font-dark">Male</span>
					</div>
					<div class="actions">
						<div class="btn-group btn-group-devided">
							<a  class="btn btn-transparent blue btn-outline btn-circle btn-sm">
								<i class="fa fa-plus"></i> View Patient Details
							</a>
						</div>
					</div>
				</div>

				<div class="portlet-body">
					<table class="table  table-striped">
						<tbody>
							<tr>
								<td> <span class="primary-link">Case Number</span> </td>
								<td>
									<div id="pulsate-regular" style="padding: 5px; outline: rgba(191, 28, 86, 0.65) solid 1px; box-shadow: rgba(191, 28, 86, 0.65) 0px 0px 4px; outline-offset: 7px;"> <span class="bold">FIG17-011818 </span></div>
								</td>
								<td><span class="primary-link">Specimen ID:</span> </td>
								<td><span class="bold">N/A</span></td>
								<td><span class="primary-link">Ordering Physician:</span> </td>
								<td>	<span class="bold">Drew Locandro, M.D.</span> 
								</td>
							</tr>
							<tr>
								<td>
									<span class="primary-link">Case Type</span> 
								</td>
								<td>
									<span class="bold">Immunohistochemistry</span> 
								</td>
								<td><span class="primary-link">MRN:</span> </td>
								<td><span class="bold">5640</span> </td>
								<td><span class="primary-link">Treating Physician:</span> </td>
								<td><span class="bold"></span> </td>
							</tr>
							<tr>
								<td>
									<span class="primary-link">Case Status:</span> 
								</td>
								<td>
									<span class="bold">Pending - In Laboratory</span> 
								</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
					</table>

				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<div class="portlet light">
					<div class="portlet-title">
						<div class="caption">
						<i class="fa fa-bell-o"></i>Case Actions </div>
							<div class="actions">
								<div class="btn-group btn-group-devided">
									<a  class="btn btn-transparent blue btn-outline btn-circle btn-sm">
										<i class="fa fa-plus"></i> Request Aditional Testing
									</a>
								</div>
							</div>
						</div>
						<div class="portlet-body">
							<tabs :options="{ useUrlFragment: false }">
								<tab name="Reports">
									<table class="table table-hover table-light table-tags" >
										<thead>
											<tr>
												<th class="sorting">Signed Date</th>
												<th class="sorting">Version</th>
												<th class="sorting">PDF</th>
												<th class="sorting">Word</th>
												<th class="sorting">Text</th>
											</tr>
										</thead>

										<tbody>
											<tr>
												<td>asdfasdf</td>
												<td>asdfasdf</td>
												<td>asdfasdf</td>
												<td>asdf</td>
												<td>asdfad</td>
											</tr>
										</tbody>
									</table>
								</tab>
								<tab name="Case Testing">
									<table class="table table-hover table-light table-tags" >
										<thead>
											<tr>
												<th class="sorting">Specimen ID</th>
												<th class="sorting">Specimen Type</th>
												<th class="sorting">Transport</th>
												<th class="sorting">Tests</th>
											</tr>
										</thead>

										<tbody>
											<tr>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
											</tr>
										</tbody>
									</table>
								</tab>
								<tab name="Concurrent Cases">
									<table class="table table-hover table-light table-tags" >
										<thead>
											<tr>
												<th class="sorting"></th>
												<th class="sorting">CSI Case Number</th>
												<th class="sorting">Case Type</th>
												<th class="sorting">Accession Date</th>
												<th class="sorting">Completed Date</th>
												<th class="sorting">Notes</th>
											</tr>
										</thead>

										<tbody>
											<tr>
												<td><input type="checkbox" ></td>
												<td>asdfasdf</td>
												<td>asdfasdf</td>
												<td>asdfasdf</td>
												<td>asdf</td>
												<td>asdfad</td>
											</tr>
											<tr>
												<td><input type="checkbox" ></td>
												<td>asdfasdf</td>
												<td>asdfasdf</td>
												<td>asdfasdf</td>
												<td>asdf</td>
												<td>asdfad</td>
											</tr>
										</tbody>
									</table>
									<button type="button" class="btn btn-primary btn-default">
										Batch Save
									</button>
								</tab>
								<tab name="Patient History">
									<div class="alert alert-dismissable alert-warning">
										No Patient History <a href="#" class="alert-link">Refresh</a>
									</div>
								</tab>
								<tab name="Case Notations">
									<div class="row">

										<div class="alert alert-dismissable alert-warning">
											<button type="button" class="close" data-dismiss="alert" aria-hidden="true">
												×
											</button>
											There are no notations for this case <a href="#" class="alert-link">Refresh</a>
										</div>

										<div class="col-md-12">
											<form role="form">
												<div class="form-group">

													<label for="exampleInputEmail1">
														Comment :
													</label>
													<textarea class="form-control" rows="3" placeholder="What's up?"></textarea>
												</div>
												<button type="button" class="btn btn-primary">
													Save Notation
												</button>
											</form>
										</div>
									</div>

								</tab>
							</tabs>
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
			mounted () {

			},
			methods: {
			}
		}
	</script>

	<style>
		.tabs-component {
			margin: 1em 0;
		}

		.tabs-component-tabs {
			border: solid 1px #ddd;
			border-radius:  6px;
			margin-bottom: 5px;
		}

		@media (min-width: 700px) {
			.tabs-component-tabs {
				border: 0;
				align-items: stretch;
				display: flex;
				justify-content: flex-start;
				margin-bottom: -1px;
			}
		}

		.tabs-component-tab {
			color: #999;
			font-size: 14px;
			font-weight: 600;
			margin-right: 0;
			list-style: none;
		}

		.tabs-component-tab:not(:last-child) {
			border-bottom: dotted 1px #ddd;
		}

		.tabs-component-tab:hover {
			color: #666;
		}

		.tabs-component-tab.is-active {
			color: #000;
		}

		@media (min-width: 700px) {
			.tabs-component-tab {
				background-color: #fff;
				border: solid 1px #ddd;
				border-radius: 3px 3px 0 0;
				margin-right: .5em;
				transform: translateY(2px);
				transition: transform .3s ease;
			}

			.tabs-component-tab.is-active {
				border-bottom: solid 1px #fff;
				z-index: 2;
				transform: translateY(0);
			}
		}

		.tabs-component-tab-a {
			align-items: center;
			color: inherit;
			display: flex;
			padding: .75em 1em;
			text-decoration: none;
		}

		.tabs-component-panels {
			padding: 4em 0;
		}

		@media (min-width: 700px) {
			.tabs-component-panels {
				border-top-left-radius: 0;
				background-color: #fff;
				border: solid 1px #ddd;
				border-radius: 0 6px 6px 6px;
				box-shadow: 0 0 10px rgba(0, 0, 0, .05);
				padding: 4em 2em;
			}
		}
	</style>
