<!-- eslint-disable vue/no-mutating-props -->
<template>
  <card>
    <h5 slot="header" class="title">Edit Profile</h5>
    <div class="row">
      <div class="col-md-6 pr-md-1">
        <base-input
          label="Name"
          v-model="model.name"
          placeholder="Name"
        >
        </base-input>
      </div>
      <div class="col-md-6 pl-md-1">
        <base-input
          label="Email"
          v-model="model.email"
          placeholder="Email"
        >
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <label>Profile</label>
        <select class="form-control" v-model="model.profile">
          <option value="Admin">Admin</option>
          <option value="Developer">Developer</option>
        </select>
      </div>
    </div>
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
    <button type="button" class="btn btn-primary mt-4" @click="editUser">Save</button>
  </card>
</template>
<script>
export default {
  props: {
    model: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    editUser() {
      // To do
    }
  }
};
</script>
<style></style>
