<template>
  <div class="page-head">
    <div class="container">
      <!-- BEGIN PAGE TITLE -->
      <div class="page-title">
        <h1>{{ name }}
          <small>{{ details }}</small>
        </h1>
      </div>
      <!-- END PAGE TITLE -->
      <div class="page-toolbar" v-if="name === 'Dashboard'">
        <!-- BEGIN THEME PANEL -->
        <div :class="{'btn-group btn-theme-panel':true,  'open': showFilter}" >
            <a href="javascript:;" class="btn dropdown-toggle" data-toggle="dropdown" aria-expanded="false" @click="showFilter = !showFilter">
                <i class="fa fa-filter">Filter</i>
            </a>
            <div class="dropdown-menu theme-panel pull-right dropdown-custom hold-on-click">
              <div class="row">
                  <div class="col-md-12 col-sm-12 col-xs-12">
                    <vue-rangedate-picker 
                      v-model="filterDates" 
                       @selected="onDateSelected" righttoleft="true" i18n="EN">
                    </vue-rangedate-picker>
                  </div>
              </div>
            </div>
        </div>
        <!-- END THEME PANEL -->
      </div>
    </div>
  </div>
</template>

<script>
import VueRangedatePicker from "vue-rangedate-picker";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    VueRangedatePicker
  },
  computed: {
    ...mapGetters(["filterDates"]),
    name() {
      return this.getItem().name;
    },
    details() {
      return this.getItem().description;
    }
  },
  data() {
    return {
      showFilter: false,
      selectedDate: {
        start: "",
        end: ""
      }
    };
  },

  methods: {
    ...mapActions(["setFilterDates", "filterDashboardData"]),
    onDateSelected: function(daterange) {
      // this.selectedDate = daterange;
      console.log(daterange.end, daterange.start);

      let payload = {
        end: daterange.end,
        start: daterange.start
      };

      this.setFilterDates(payload);
      // this.filterDashboardData(payload);
    },
    getItem() {
      let matched = this.$route.matched.filter(item => item.name);
      let item = matched[matched.length - 1];
      return item;
    }
  }
};
</script>
<style>
.btn-theme-panel {
  margin-top: 25px;
}

.btn-theme-panel .btn {
  opacity: 0.6;
  filter: alpha(opacity=60);
  padding: 0 6px;
}

.btn-theme-panel .btn > i {
  font-size: 24px;
  color: #acbac6;
}

.btn-theme-panel .btn:hover,
.btn-theme-panel.open .btn {
  opacity: 1;
  filter: alpha(opacity=100);
}

.theme-panel {
  z-index: 1000;
  min-width: 675px;
  padding: 20px 10px;
  font-family: "Open Sans", sans-serif;
}

.theme-panel h3 {
  margin: 8px 0;
  font-size: 15px;
  padding-left: 12px;
}

.theme-panel .seperator {
  border-left: 1px solid #eff2f4;
}

.theme-panel .theme-colors {
  list-style: none;
  padding: 0;
  margin: 0;
}

.theme-panel .theme-colors > li.theme-color {
  padding: 8px 12px;
}

.theme-panel .theme-colors > li.theme-color.active,
.theme-panel .theme-colors > li.theme-color:hover {
  background: #f5f7f8;
}

.theme-panel .theme-colors > li.theme-color > .theme-color-view {
  float: left;
  margin-top: 0;
  margin-right: 8px;
  display: inline-block;
  border-radius: 10px !important;
  height: 20px;
  width: 20px;
}

.theme-panel .theme-colors > li.theme-color > .theme-color-name {
  display: inline-block;
  color: #777;
  font-size: 14px;
  font-weight: 300;
}

.theme-panel
  .theme-colors
  > li.theme-color.theme-color-default
  .theme-color-view {
  background: #32c5d2;
}

.theme-panel
  .theme-colors
  > li.theme-color.theme-color-red-sunglo
  .theme-color-view {
  background: #e26a6a;
}

.theme-panel
  .theme-colors
  > li.theme-color.theme-color-red-intense
  .theme-color-view {
  background: #e35b5a;
}

.theme-panel
  .theme-colors
  > li.theme-color.theme-color-blue-hoki
  .theme-color-view {
  background: #67809f;
}

.theme-panel
  .theme-colors
  > li.theme-color.theme-color-blue-steel
  .theme-color-view {
  background: #4b77be;
}

.theme-panel
  .theme-colors
  > li.theme-color.theme-color-green-haze
  .theme-color-view {
  background: #44b6ae;
}

.theme-panel
  .theme-colors
  > li.theme-color.theme-color-purple-plum
  .theme-color-view {
  background: #8775a7;
}

.theme-panel
  .theme-colors
  > li.theme-color.theme-color-purple-studio
  .theme-color-view {
  background: #8e44ad;
}

.theme-panel
  .theme-colors
  > li.theme-color.theme-color-yellow-orange
  .theme-color-view {
  background: #f2784b;
}

.theme-panel
  .theme-colors
  > li.theme-color.theme-color-yellow-crusta
  .theme-color-view {
  background: #f3c200;
}

.theme-panel .theme-settings {
  list-style: none;
  padding: 0;
  margin: 0;
}

.theme-panel .theme-settings > li {
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 300;
  color: #777;
}

.theme-panel .theme-settings > li .form-control {
  color: #777;
  margin-top: -3px;
  float: right;
}

@media (max-width: 767px) {
  .theme-panel {
    left: 20px;
    right: 20px;
    min-width: 285px;
  }

  .theme-panel .seperator {
    border: 0;
  }

  .theme-panel .theme-settings .form-control {
    width: 105px !important;
  }
}
</style>
