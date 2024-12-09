<template>
  <div>
    <form @submit.prevent="signup">
      <div class="form-group">
        <input v-model="name" class="form-control w-100" id="name" type="text" placeholder="Name" required />
      </div>
      <div class="form-group">
        <input v-model="email" class="form-control w-100" id="email" type="email" placeholder="Email" required />
      </div>
      <div class="form-group">
        <input v-model="password" class="form-control w-100" id="password" type="password" placeholder="Password" required />
      </div>
      <p :class="status ? 'text-success' : 'text-danger'" class="text-center">{{ message }}</p>
      <button type="submit" class="btn btn-primary w-100">Sign Up</button>
    </form>
    <router-link :to="'/login'">Back</router-link>
  </div>
</template>

<script>
import AuthService from '../../services/auth';
import { RegisterUser } from '../../models/auth';

const authService = new AuthService();

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      status: false,
      message: '',
    };
  },
  methods: {
    async signup() {
      const request = new RegisterUser(this.name, this.email, this.password);

      await authService.register(request)
        .then((response) => {
          this.status = response.status;
          this.message = response.message;
          if (response.status) {
            setTimeout(() => {
              this.$router.push('/login');
            }, 2000);
          }
        });
    },
  },
};
</script>

<style scoped lang="scss"></style>