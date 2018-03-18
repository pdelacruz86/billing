<template>
 <div class="row page-404-full-page">
            <div class="col-md-12 page-404">
                <div class="number font-blue"> <i class="fa fa-cloud-download"></i> </div>
                <div class="details">
                    <h3>Oops! Coming soon...</h3>
                    <p> We are about to go live with this feature so watch this space.
                        <br/>
                          <router-link :to="{ path: '/' }">
                    Return home
                  </router-link> or try the search bar below. </p>
                    <form action="#">
                        <div class="input-group input-medium">
                            <input type="text" class="form-control" placeholder="keyword...">
                            <span class="input-group-btn">
                                <button type="submit" class="btn blue">
                                    <i class="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                        <!-- /input-group -->
                    </form>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  components: {},
  mounted() {},
  methods: {
    focusSearch() {}
  }
};
</script>

<style>
.page-404-full-page {
  overflow-x: hidden;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fafafa !important;
}
.page-404 {
  text-align: center;
}

@media (min-width: 992px) .col-md-12 {
  width: 100%;
}

.page-404 .number {
  position: relative;
  top: 35px;
  display: inline-block;
  margin-top: 0;
  margin-bottom: 10px;
  color: #7bbbd6;
  text-align: right;
}
.page-404 .number,
.page-500 .number {
  letter-spacing: -10px;
  line-height: 128px;
  font-size: 128px;
  font-weight: 300;
}
.font-red {
  color: #e7505a !important;
}

.page-404 .details {
  padding-top: 0;
  text-align: left;
}

.page-404 .details,
.page-500 .details {
  margin-left: 40px;
  display: inline-block;
}

.page-404-full-page .page-404,
.page-500-full-page .page-500 {
  margin-top: 100px;
}
.page-404 {
  text-align: center;
}
</style>
