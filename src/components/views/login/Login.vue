    <template>
    <div>
        <!-- BEGIN LOGO -->
        <div class="logo">
            <a href="index.html">
                <img src="../../../assets/global/README.png" height="150" alt="" /> 
            </a>
        </div>
        <!-- END LOGO -->
        <!-- BEGIN LOGIN -->
        <div class="content">
            <!-- BEGIN LOGIN FORM -->
            <form  class="login-form" @submit.prevent="login" >
                <h3 class="form-title font-green">Sign In</h3>
                <div class="alert alert-danger display-hide">
                    <button class="close" data-close="alert"></button>
                    <span> Enter any username and password. </span>
                </div>
                <div class="form-group">
                    <!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
                    <label class="control-label visible-ie8 visible-ie9">Username</label>
                    <input class="form-control form-control-solid placeholder-no-fix" type="text" v-model="user.username" autocomplete="off" placeholder="Username" name="username" /> 
                </div>
                <div class="form-group">
                    <label class="control-label visible-ie8 visible-ie9">Password</label>
                    <input class="form-control form-control-solid placeholder-no-fix" type="password" v-model="user.password" autocomplete="off" placeholder="Password" name="password" /> 
                </div>
                <div class="form-actions">
                    <button type="submit" class="btn green uppercase">Login</button>
                    <label class="rememberme check mt-checkbox mt-checkbox-outline">
                        <input type="checkbox" name="remember" value="1" />Remember
                        <span></span>
                    </label>
                    <a href="javascript:;" id="forget-password" class="forget-password">Forgot Password?</a>
                </div>
                <div class="create-account">
                    <p>
                        <a href="javascript:;" id="register-btn" class="uppercase">Create an account</a>
                    </p>
                </div>
            </form>
            <!-- END LOGIN FORM -->
        </div>
    </div>
</template>

<script>
require("../../../assets/layouts/layout3/css/login.css");
export default {
  validators: {
    email: function(val) {
      return /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(val);
    }
  },
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  route: {
    activate: function(transition) {
      this.token ? transition.redirect("/") : transition.next();
    }
  },
  created() {
    this.$store.dispatch("logout");
    document.body.className = "login";
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.user);
    }
  }
};
</script>
