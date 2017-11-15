<template>
	<div class="row">
		<div class="row">

			<div class="portlet light">


				<div class="portlet-body">
					<table class="table  table-striped">
						<tbody>
							<tr>
								<td> <span class="primary-link">Patient: </span> </td>
								<td>
									<span class="bold">Doe, John</span>
								</td>
								<td><span class="primary-link">DOB:</span> </td>
								<td><span class="bold">5/6/1980</span></td>
								<td><span class="primary-link">Gender:</span> </td>
								<td>	<span class="bold">M</span> 
								</td>
								<td><span class="primary-link">Client:</span> </td>
								<td>	<span class="bold">C500 - CSI Sales</span> 
								</td>
							</tr>
							<tr>
								<td><span class="primary-link">Accession ID:</span> </td>
								<td><span class="bold">852109</span> </td>
								<td>
									<span class="primary-link">Patient ID:</span> 
								</td>
								<td>
									<span class="bold">543679</span> 
								</td>
								
								<td><span class="primary-link">Accession Date :</span> </td>
								<td><span class="bold">3/5/2017</span> </td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
					</table>

				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-7">
				<div class="portlet light">
					<div class="portlet-title">
						<div class="caption font-green-sharp">
							<i class="icon-share font-green-sharp"></i>
							<span class="caption-subject"> Cases Associated</span>
						</div>
						<div class="actions">
							<div class="btn-group">
								<a class="btn btn-circle btn-default " href="javascript:;" data-toggle="dropdown">
									<i class="fa fa-user"></i> Select All Billing Type
									<i class="fa fa-angle-down"></i>
								</a>
								<ul class="dropdown-menu pull-right">
									<li>
										<a href="javascript:;">
											<i class="fa fa-pencil"></i> Edit </a>
										</li>
										<li>
											<a href="javascript:;">
												<i class="fa fa-trash-o"></i> Delete </a>
											</li>
											<li>
												<a href="javascript:;">
													<i class="fa fa-ban"></i> Ban </a>
												</li>
												<li class="divider"> </li>
												<li>
													<a href="javascript:;"> Make admin </a>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div class="portlet-body">
									<table class="table table-striped" >
										<thead>
											<tr>
												<th class="col-xs-3">Case Number</th>
												<th class="col-xs-3"> Billing type</th>
												<th class="col-xs-3"><input type="checkbox"> Medicare</th>
												<th class="col-xs-3"><input type="checkbox"> Inpatient</th>
											</tr>
										</thead>

										<tbody>
											<tr>
												<td>FG17-008754</td>
												<td>
													<select>
														<option>Pick One</option>	
														<option>Direct</option>	
														<option>Split</option>	
														<option>Other</option>	
													</select>
												</td>
													<td><input type="checkbox" name=""></td>
												<td><input type="checkbox" name=""></td>
											</tr>
											<tr>
												<td>FG17-008754</td>
												<td>
													<select>
														<option>Pick One</option>	
														<option>Direct</option>	
														<option>Split</option>	
														<option>Other</option>	
													</select>
												</td>
												<td><input type="checkbox" name=""></td>
												<td><input type="checkbox" name=""></td>
											</tr>
											<tr>
												<td>FG17-008754</td>
												<td>
													<select>
														<option>Pick One</option>	
														<option>Direct</option>	
														<option>Split</option>	
														<option>Other</option>	
													</select>
												</td>
													<td><input type="checkbox" name=""></td>
												<td><input type="checkbox" name=""></td>
											</tr>
											<tr>
												<td>FG17-008754</td>
												<td>
													<select>
														<option>Pick One</option>	
														<option>Direct</option>	
														<option>Split</option>	
														<option>Other</option>	
													</select>
												</td>
												<td><input type="checkbox" name=""></td>
												<td><input type="checkbox" name=""></td>
											</tr>
										</tbody>
									</table>
									<div class="row text-right">
										<input type="button" class="btn btn-success" value="Save">
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-5">
							<div class="portlet light">
								<div class="portlet-title">
									<div class="caption font-green-sharp">
										<i class="icon-speech font-green-sharp"></i>
										<span class="caption-subject"> Missing Information</span>
									</div>

								</div>
								<div class="portlet-body">
									<table class="table table-striped" >
										<tbody>
											<tr>
												<td>
													<select>
														<option>Pick One</option>	
														<option>Missing information 1</option>	
														<option>Missing information 2</option>	
														<option>Missing information 3</option>	
														<option>Missing information 4</option>	
														<option>Missing information 5</option>	
														<option>Other</option>	
													</select>
												</td>
												<td>
													<textarea rows="3" cols="38" class="form-control" placeholder="notes..."></textarea> 
												</td>
												<td>
													<input type="button" class="btn btn-success" value="Add">
												</td>
											</tr>
											<tr> 
												<td>Missing information 1</td>
												<td>this is a note</td>
											</tr>
											<tr> 
												<td>Missing information 3</td>
												<td>this is a note</td>
											</tr>
											<tr> 
												<td>Missing information 6</td>
												<td>this is a note</td>
											</tr>
											<tr> 
												<td>Missing information 1</td>
												<td>this is a note</td>
											</tr>
										</tbody>
									</table>
									<div class="row text-right">

									<input type="button" class="button btn-info" value="New Search" @click="focusSearch">
									</div>
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
						focusSearch() {
							document.getElementById("inputSearch").focus()
							document.getElementById("inputSearch").value = ""
      						this.$router.push({ path: '/blank'});
						}
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
