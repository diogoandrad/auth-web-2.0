<template>
  <div class="row">
    <div class="col-12">
      <card :title="''">
        <div class="">
          <base-table
            :data="users"
            :columns="columns"
            thead-classes="text-primary"
          >
          </base-table>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import { BaseTable } from "@/components";
import UserService from '../../services/user';

const tableColumns = ["Name", "Email"];
const userService = new UserService();

export default {
  components: {
    BaseTable,
  },
  data() {
    return {
      columns: [...tableColumns],
      users: [],
    };
  },
  methods: {
    async getAllUsers() {
      await userService.getAll()
        .then(response => {
          console.log(response);
          if (response.status)
            this.users = response.data;
        });
    }
  },
  mounted() {
    this.getAllUsers();
  }
};
</script>
<style></style>
