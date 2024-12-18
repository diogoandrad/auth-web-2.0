<!-- eslint-disable vue/no-mutating-props -->
<template>
  <card>
    <h5 slot="header" class="title">Edit Profile</h5>
    <form @submit.prevent="editUser">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label>Name</label>
          <input class="form-control" type="text" placeholder="Name" v-model="model.name" required>
        </div>
        <div class="form-group col-md-6">
          <label>Email</label>
          <input class="form-control" type="email" placeholder="Email" v-model="model.email" required>
        </div>
      </div>
      <!-- <div class="form-row">
        <div class="form-group col-md-12">
          <label>Profile</label>
          <select class="form-control" v-model="model.profile" required>
            <option value="Admin">Admin</option>
            <option value="Developer">Developer</option>
          </select>
        </div>
      </div> -->
      <!-- <div class="row">
        <div class="col-md-12">
          <base-input
            label="Address"
            v-model="model.address"
            placeholder="Home Address"
          >
          </base-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 pr-md-1">
          <base-input
            label="City"
            v-model="model.city"
            placeholder="City"
          >
          </base-input>
        </div>
        <div class="col-md-4 px-md-1">
          <base-input
            label="Country"
            v-model="model.country"
            placeholder="Country"
          >
          </base-input>
        </div>
        <div class="col-md-4 pl-md-1">
          <base-input
            label="Postal Code"
            placeholder="ZIP Code"
          >
          </base-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <base-input>
            <label>About Me</label>
            <textarea
              rows="4"
              cols="80"
              class="form-control"
              placeholder="Here can be your description"
              v-model="model.about"
            >
            </textarea>
          </base-input>
        </div>
      </div> -->
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="button" class="btn btn-danger ml-2" :hidden="userLogged" @click.prevent="deleteUser">Delete</button>
    </form>
  </card>
</template>
<script>
import UserService from '@/services/user';

const userService = new UserService();

export default {
  props: {
    model: {
      type: Object,
      default: () => {
        return {};
      },
    },
    userLogged: {
      type: Boolean,
      default: () => {
        return true;
      },
    }
  },
  data() {
    return {};
  },
  methods: {
    async editUser() {
      await userService.update(this.model.id, this.model)
        .then((response) => {
          this.$notify({
            message: response.message,
            horizontalAlign: "center",
            verticalAlign: "top",
            type: response.status ? "success" : "danger",
            timeout: 2000,
            showClose: false
          });
        });
    },
    async deleteUser() {
      await userService.delete(this.model.id)
        .then((response) => {
          this.$notify({
            message: response.message,
            horizontalAlign: "center",
            verticalAlign: "top",
            type: response.status ? "success" : "danger",
            timeout: 2000,
            showClose: false
          });
          if (response.status) this.$router.push('/users');
        });
    }
  }
};
</script>
<style></style>
