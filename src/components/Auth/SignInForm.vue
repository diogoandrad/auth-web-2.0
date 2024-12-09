<template>
  <div class="d-flex flex-column justify-content-center">
    <form @submit.prevent="login">
      <div class="form-group">
        <input v-model="email" class="form-control w-100" id="email" type="email" placeholder="Email" required />
      </div>
      <div class="form-group">
        <input v-model="password" class="form-control w-100" id="password" type="password" placeholder="Password" required />
      </div>
      <p :class="status ? 'text-success' : 'text-danger'" class="text-center">{{ message }}</p>
      <button type="submit" class="btn btn-primary w-100">Sign In</button>
    </form>
    <router-link :to="'/reset-password'">Forgot password?</router-link>
    <button type="button" class="btn btn-dark mt-4" @click="goToSignUp">Sign Up</button>
  </div>
</template>

<script>
import AuthService from '../../services/auth';
import { LoginUser } from '../../models/auth';

const authService = new AuthService();

export default {
  data() {
    return {
      email: '',
      password: '',
      status: false,
      message: '',
    };
  },
  methods: {
    goToSignUp() {
      this.$router.push("/signup")
    },
    async login() {
      const request = new LoginUser(this.email, this.password);

      await authService.login(request)
        .then((response) => {
          this.status = response.status;
          this.message = response.message;
          if (response.status) {
            setTimeout(() => {
              this.$router.push('/');
            }, 2000);
          }
        });
    },
  },
};
</script>

<style scoped lang="scss"></style>