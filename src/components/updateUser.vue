<template>
  <div
    tabindex="-1"
    aria-hidden="true"
    class="bg-gray-500/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center items-center"
  >
    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-toggle="authentication-modal"
          @click="closeUserModal()"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="py-6 px-6 lg:px-8 text-left">
          <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Add New User
          </h3>
          <div class="space-y-4">
            <div>
              <label
                for="file"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Uplaod Avatar</label
              >
              <input
                type="file"
                name="file"
                id="file"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required=""
              />
            </div>
            <div>
              <label
                for="f_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >First Name</label
              >
              <input
                type="text"
                name="f_name"
                id="f_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required=""
                v-model="userInfo.first_name"
              />
            </div>
            <div>
              <label
                for="l_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Last Name</label
              >
              <input
                type="text"
                name="l_name"
                id="l_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required=""
                v-model="userInfo.last_name"
              />
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Your email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required=""
                v-model="userInfo.email"
              />
            </div>
            <button
              type="submit"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              @click="update_user(userInfo.id)"
            >
              Update User
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "add-user",
  props: {
    id: Number,
  },
  data() {
    return {
      userInfo: "",
    };
  },
  methods: {
    async update_user(id) {
      try {
        await this.$store
          .dispatch("update_user", id, this.userInfo)
          .then((res) => {
            console.log(res);
            this.closeUserModal();
            this.userInfo = "";
          });
      } catch (err) {
        console.log(err);
      }
    },
    async getUser(id) {
      try {
        await this.$store.dispatch("get_user", id).then((res) => {
          this.userInfo = res;
        });
      } catch (err) {
        console.log(err);
      }
    },
    closeUserModal() {
      this.$emit("closeModal", false);
    },
  },
  created() {
    this.getUser(this.id);
  },
};
</script>

<style lang="stylus" scoped></style>
