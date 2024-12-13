<template>
  <div class="row">
    <div class="col-md-8">
      <edit-profile-form :model="user"></edit-profile-form>
    </div>
    <div class="col-md-4">
      <user-card :user="user"></user-card>
    </div>
  </div>
</template>
<script>
import UserService from '../services/user';
import { loggedUserId } from '../utils/auth';
import EditProfileForm from "./Profile/EditProfileForm";
import UserCard from "./Profile/UserCard";

const userService = new UserService();

export default {
  components: {
    EditProfileForm,
    UserCard,
  },
  data() {
    return {
      user: {
        name: "",
        email: "",
        profile: "",
      },
    };
  },
  methods: {
    async getUserById() {
      await userService.getById(loggedUserId)
        .then(response => {
          if (response.status)
            this.user = response.data;
        });
    }
  },
  mounted() {
    this.getUserById();
  }
};
</script>
<style></style>
