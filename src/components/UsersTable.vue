<template>
  <div class="overflow-x-auto relative sm:rounded-lg w-full">
    <table
      class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-b"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="p-4">
            <div class="flex items-center">
              <div
                class="rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                :class="
                  deleted_users.length > 1
                    ? 'text-white bg-blue-600 cursor-pointer'
                    : 'text-gray-400 bg-gray-200'
                "
                @click="delete_multiple(deleted_users)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="5"
                  stroke="currentColor"
                  class="w-5 h-5 p-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </div>
            </div>
          </th>
          <th scope="col" class="py-3 px-6">Name</th>
          <th scope="col" class="py-3 px-6">Email</th>
          <th scope="col" class="py-3 px-6">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="text-xs bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          v-for="(user, index) in displayedUsers"
          :key="index"
        >
          <td class="p-4 w-4">
            <div class="flex items-center">
              <input
                v-model="deleted_users"
                :value="user.id"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:bg-indigo-200 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="checkbox-table-search-1" class="sr-only"
                >checkbox</label
              >
            </div>
          </td>
          <th
            scope="row"
            class="flex items-center py-4 px-3 text-gray-900 whitespace-nowrap dark:text-white cursor-pointer"
            @click="(showUser = true), (user_id = user.id)"
          >
            <img
              class="w-10 h-10 rounded-full"
              :src="user.avatar"
              alt="Jese image"
            />
            <div class="pl-3">
              <div class="text-gray-800 font-semibold">
                {{ user.first_name }} {{ user.last_name }}
              </div>
              <div class="font-normal text-gray-500">
                {{ user.email }}
              </div>
            </div>
          </th>
          <td class="py-4 px-6">React Developer</td>
          <td class="py-4 px-6">
            <div class="flex justify-start items-center">
              <svg
                @click="delete_user(user.id)"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-4 h-4 mr-5 cursor-pointer hover:text-indigo-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
              <svg
                @click="(showUpdate = true), (user_id = user.id)"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-4 h-4 cursor-pointer hover:text-indigo-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="flex items-center justify-between mx-4 my-3">
      <div>
        <button
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Previous
        </button>
      </div>
      <div class="text-sm">
        <p>Page {{ page }} of {{ pages.length + 1 }}</p>
      </div>
      <div>
        <button
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Next
        </button>
      </div>
    </div>
    <UpdateUser
      v-if="showUpdate"
      @close-modal="close_user_modal($event)"
      :id="user_id"
    />
    <User
      v-if="showUser"
      @close-modal="close_user_modal($event)"
      @show-modal="show_user_modal($event)"
      :id="user_id"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import User from "./User.vue";
import UpdateUser from "./updateUser.vue";
export default {
  name: "users-table",
  components: { User, UpdateUser },
  data() {
    return {
      showUser: false,
      showUpdate: false,
      user_id: null,
      deleted_users: [],
      page: 1,
      perPage: 6,
      pages: [],
      Users: [],
    };
  },
  methods: {
    async UsersTable() {
      try {
        await this.$store.dispatch("get_users_list").then((res) => {
          this.Users = Object.values(res);
          console.log(res);
        });
      } catch (err) {
        console.log(err);
      }
    },
    async delete_user(id) {
      try {
        await this.$store.dispatch("delete_user", id).then((res) => {
          console.log(res);
        });
      } catch (err) {
        console.log(err);
      }
    },
    async delete_multiple(ids) {
      try {
        await this.$store.dispatch("delete_multiple_user", ids).then((res) => {
          console.log(res);
        });
      } catch (err) {
        console.log(err);
      }
    },
    close_user_modal(event) {
      this.showUser = event;
      this.showUpdate = event;
    },
    show_user_modal(event) {
      this.showUpdate = event;
    },
    setPages() {
      let numberOfPages = Math.ceil(this.users.length / this.perPage);
      console.log(numberOfPages);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(users) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return users.slice(from, to);
    },
  },
  created() {
    console.log(this.users);
    this.UsersTable();
    if (this.$route.params.id) {
      this.showUser = true;
      this.user_id = this.$route.params.id;
    }
  },
  computed: {
    ...mapState(["users"]),
    displayedUsers() {
      return this.paginate(this.Users);
    },
  },
  watch: {
    getPages() {
      this.setPages();
    },
  },
};
</script>

<style lang="stylus" scoped></style>
