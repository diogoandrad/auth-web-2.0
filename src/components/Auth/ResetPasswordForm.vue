<template>
  <div class="d-flex flex-column justify-content-center">
    <form @submit.prevent="resetPassword">
      <div class="form-group">
        <input v-model="email" class="form-control w-100" id="email" type="email" placeholder="Email" required />
      </div>
      <button type="submit" class="btn btn-primary w-100">Send</button>
    </form>
    <p v-if="error" style="color: red;">{{ error }}</p>
    <router-link :to="'/login'">Back</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      error: null,
    };
  },
  methods: {
    async resetPassword() {
      console.log('reset password for: ', this.email);
    },
  },
};
</script>

<style scoped lang="scss"></style>