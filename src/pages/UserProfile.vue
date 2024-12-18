<template>
  <div class="row">
    <div class="col-md-8">
      <user-form :model="user" :userLogged="userLogged"></user-form>
    </div>
    <div class="col-md-4">
      <user-card :user="user"></user-card>
    </div>
  </div>
</template>
<script>
import UserService from '../services/user';
import { loggedUserId } from '../utils/auth';
import UserForm from "./User/UserForm";
import UserCard from "./User/UserCard";

const userService = new UserService();

export default {
  components: {
    UserForm,
    UserCard,
  },
  data() {
    return {
      user: {
        id: "",
        name: "",
        email: "",
        profile: "",
      },
      userLogged: true
    };
  },
  methods: {
    async getUserById(userId) {
      await userService.getById(userId)
        .then(response => {
          if (response.status)
            this.user = response.data;
        });
    }
  },
  async mounted() {
    const userId = this.$route.params.id;
    await this.getUserById(userId);
    this.userLogged = this.user.id == loggedUserId;
  }
};
</script>
<style></style>
