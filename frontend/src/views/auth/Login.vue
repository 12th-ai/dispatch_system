<template>
  <div class="authentication-bg min-vh-100">
    <div class="bg-overlay bg-light"></div>
    <div class="container">
      <div class="d-flex flex-column min-vh-100 px-3 pt-4">
        <div class="row justify-content-center my-auto">
          <div class="col-md-8 col-lg-6 col-xl-5">
            <div class="mb-4 pb-2">
              <router-link to="/" class="d-block auth-logo">
                <img src="@/assets/images/logo1.png" alt="" class="auth-logo-dark me-start h-16">

              </router-link>
            </div>

            <div class="card" style="width:500px">
              <div class="card-body p-4">
                <div class="text-center mt-2">
                  <h5>Welcome Back!</h5>
                  <p class="text-muted">Sign in to continue to Abyride.</p>
                </div>
                <div class="p-2 mt-4">
                  <form @submit.prevent="handleLogin">
                    <div class="mb-3">
                      <label class="form-label" for="username">Username</label>
                      <div class="position-relative input-custom-icon">
                        <input type="text" class="form-control" id="username" placeholder="Enter username" v-model="username">
                        <span class="bx bx-user"></span>
                      </div>
                    </div>

                    <div class="mb-3">
                      <div class="float-end">
                        <router-link to="/forgot-password" class="text-muted text-decoration-underline">Forgot password?</router-link>
                      </div>
                      <label class="form-label" for="password-input">Password</label>
                      <div class="position-relative auth-pass-inputgroup input-custom-icon">
                        <span class="bx bx-lock-alt"></span>
                        <input type="password" class="form-control" id="password-input" placeholder="Enter password" v-model="password">
                        <button type="button" class="btn btn-link position-absolute h-100 end-0 top-0" id="password-addon" @click="togglePasswordVisibility">
                          <i :class="passwordVisible ? 'mdi mdi-eye-off-outline' : 'mdi mdi-eye-outline'"></i>
                        </button>
                      </div>
                    </div>

                    <div class="form-check py-1">
                      <input type="checkbox" class="form-check-input" id="auth-remember-check" v-model="rememberMe">
                      <label class="form-check-label" for="auth-remember-check">Remember me</label>
                    </div>

                    <div class="mt-3">
                      <button class="btn btn-primary w-100 waves-effect waves-light"   type="submit">Log In

                    
                      </button>
                    
                    </div>

                

                    <div class="mt-4 text-center">
                      <p class="mb-0">Don't have an account? <router-link to="/register" class="fw-medium text-primary">Sign up now</router-link></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

     <AuthFooter />
      </div>
    </div>
  </div>
</template>

<script>
import AuthFooter from '@/components/AuthFooter.vue';


export default {
  components: {
    AuthFooter
  },
      name: "LoginComponent",
      data() {
          return {
              username: '',
              password: '',
              rememberMe: false,
              passwordVisible: false,
          };
      },
      computed: {
          currentYear() {
              return new Date().getFullYear();
          }
      },
      methods: {
          handleLogin() {
              console.log('Login attempted:', {
                  username: this.username,
                  password: this.password,
                  rememberMe: this.rememberMe
              });
          },
          togglePasswordVisibility() {
              this.passwordVisible = !this.passwordVisible;
              const passwordInput = document.getElementById('password-input');
              passwordInput.type = this.passwordVisible ? 'text' : 'password';
          },
      },
  };
</script>

<style scoped>
  /* Add any additional scoped styles here */
</style>