<template>
	<div class="page-wrapper-row">
		<div class="page-wrapper-top">
			<!-- BEGIN HEADER -->
			<div class="page-header">
				<!-- BEGIN HEADER TOP -->
				<div class="page-header-top">
					<div class="container">
						<!-- BEGIN LOGO -->
						<div class="page-logo">
							<a href="index.html">
								<img src="../../assets/layouts/layout3/img/logo-default.jpg" alt="logo" class="logo-default">
							</a>
						</div>
						<!-- END LOGO -->
						<!-- BEGIN RESPONSIVE MENU TOGGLER -->
						<a href="javascript:;" class="menu-toggler"></a>
						<!-- END RESPONSIVE MENU TOGGLER -->
						<!-- BEGIN TOP NAVIGATION MENU -->
						<app-top-header></app-top-header>
						<!-- END TOP NAVIGATION MENU -->

					</div>
				</div>
				<!-- END HEADER TOP -->
				<!-- BEGIN HEADER MENU -->
				<div class="page-header-menu">
					<div class="container">
						<!-- BEGIN MEGA MENU -->
						<!-- DOC: Apply "hor-menu-light" class after the "hor-menu" class below to have a horizontal menu with white background -->
						<!-- DOC: Remove data-hover="dropdown" and data-close-others="true" attributes below to disable the dropdown opening on mouse hover -->
						<div class="hor-menu  ">
							<ul class="nav navbar-nav">
								<li aria-haspopup="true" class="menu-dropdown classic-menu-dropdown">
									 <router-link :to="{ path: 'home' }">
                    Panel de Inicio
										<span class="arrow"></span>
									</router-link>
								</li>
                <li aria-haspopup="true" class="menu-dropdown classic-menu-dropdown">
                <a href="javascript:;"> Bancas
                    <span class="arrow"></span>
                  </a>
                  <ul class="dropdown-menu pull-left">
                    <li aria-haspopup="true" class=" ">
                      <router-link :to="{ path: 'bancas' }">
                        <i class="icon-bar-chart"></i> Bancas
                        <span class="badge badge-success">1</span>
                      </router-link>
                    </li>
                    <li aria-haspopup="true" class=" active">
                      <a href="dashboard_2.html" class="nav-link">
                        <i class="icon-bulb"></i> Estatus Bancas </a>
                      </li>
                      <li aria-haspopup="true" class=" ">
                        <a href="dashboard_3.html" class="nav-link  ">
                          Descargar Configuracion
                        </a>
                      </li>
                      <li aria-haspopup="true" class=" ">
                        <a href="index.html" class="nav-link  ">
                          <i class="icon-bar-chart"></i> Usuarios
                          <span class="badge badge-success">1</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li aria-haspopup="true" class="menu-dropdown classic-menu-dropdown">
                   <a href="javascript:;"> OperacionesDiarias
                    <span class="arrow"></span>
                  </a>
                  <ul class="dropdown-menu pull-left">
                    <li aria-haspopup="true" class=" ">
                     <a href="index.html" class="nav-link  ">
                      <i class="icon-bar-chart"></i> Anular Tickets
                      <span class="badge badge-success">1</span>
                    </a>
                  </li>
                  <li aria-haspopup="true" class=" active">
                   <a href="dashboard_2.html" class="nav-link  active">
                    <i class="icon-bulb"></i> Bloqueo de Jugadas </a>
                  </li>
                  <li aria-haspopup="true" class=" ">
                    <a href="dashboard_3.html" class="nav-link  ">
                     Descargar Configuracion
                   </a>
                 </li>
                 <li aria-haspopup="true" class=" ">
                  <a href="index.html" class="nav-link  ">
                    <i class="icon-bar-chart"></i> Limites
                    <span class="badge badge-success">1</span>
                  </a>
                </li>
                <li aria-haspopup="true" class=" ">
                  <a href="index.html" class="nav-link  ">
                    <i class="icon-bar-chart"></i> Monitoreo Jugadas
                    <span class="badge badge-success">1</span>
                  </a>
                </li>
                <li aria-haspopup="true" class=" ">
                  <a href="index.html" class="nav-link  ">
                    <i class="icon-bar-chart"></i> Recargas
                    <span class="badge badge-success">1</span>
                  </a>
                </li>
                <li aria-haspopup="true" class=" ">
                  <a href="index.html" class="nav-link  ">
                    <i class="icon-bar-chart"></i> Solicitudes
                    <span class="badge badge-success">1</span>
                  </a>
                </li>
                <li aria-haspopup="true" class=" ">
                  <a href="index.html" class="nav-link  ">
                    <i class="icon-bar-chart"></i> Sorteos
                    <span class="badge badge-success">1</span>
                  </a>
                </li>
              </ul>
            </li>
            <li aria-haspopup="true" class="menu-dropdown classic-menu-dropdown ">
              <a href="javascript:;"> Reportes
               <span class="arrow"></span>
             </a>
             <ul class="dropdown-menu pull-left">
               <li aria-haspopup="true" class=" ">
                <a href="layout_mega_menu_light.html" class="nav-link  "> Cuadre por Dia </a>
              </li>
              <li aria-haspopup="true" class=" ">
                <a href="layout_top_bar_light.html" class="nav-link  "> Jugadas por Bancas </a>
              </li>
            </ul>
          </li>
          <li aria-haspopup="true" class="menu-dropdown classic-menu-dropdown ">
            <a href="javascript:;"> Configuraciones
             <span class="arrow"></span>
           </a>
           <ul class="dropdown-menu pull-left">
             <li aria-haspopup="true" class=" ">
              <a href="layout_mega_menu_light.html" class="nav-link  "> Cierre Loteria </a>
            </li>
            <li aria-haspopup="true" class=" ">
              <a href="layout_top_bar_light.html" class="nav-link  "> Consorcios </a>
            </li>
            <li aria-haspopup="true" class=" ">
              <a href="layout_mega_menu_light.html" class="nav-link  "> Coletillas de Tickets </a>
            </li>
            <li aria-haspopup="true" class=" ">
              <a href="layout_top_bar_light.html" class="nav-link  "> Combinaciones Super Pale</a>
            </li>
            <li aria-haspopup="true" class=" ">
              <a href="layout_mega_menu_light.html" class="nav-link  "> Geografia </a>
            </li>
            <li aria-haspopup="true" class=" ">
              <a href="layout_top_bar_light.html" class="nav-link  "> Grupos </a>
            </li>
            <li aria-haspopup="true" class=" ">
              <a href="layout_mega_menu_light.html" class="nav-link  "> Jugadas </a>
            </li>
            <li aria-haspopup="true" class=" ">
              <a href="layout_top_bar_light.html" class="nav-link  "> Loterias</a>
            </li>
            <li aria-haspopup="true" class=" ">
              <a href="layout_mega_menu_light.html" class="nav-link  "> Pago Premio </a>
            </li>
            <li aria-haspopup="true" class=" ">
              <a href="layout_top_bar_light.html" class="nav-link  "> Precio por Juego </a>
            </li>
            <li aria-haspopup="true" class=" ">
              <a href="layout_mega_menu_light.html" class="nav-link  "> Tipo de Solicitud </a>
            </li>
            <li aria-haspopup="true" class=" ">
              <a href="layout_top_bar_light.html" class="nav-link  "> Usuarios </a>
            </li>
          </ul>
        </li>
      </ul>
    </li>

  </div>
  <!-- END MEGA MENU -->
</div>
</div>
<!-- END HEADER MENU -->
</div>
<!-- END HEADER -->
</div>
</div>
</template>

<script>
  import TopHeader from './TopHeader.vue'

  export default {
    components: { appTopHeader: TopHeader }
  }
</script>

<style>

</style>

