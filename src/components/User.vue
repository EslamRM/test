<template>
  <div
    class="flex justify-center items-center z-20 fixed top-0 bottom-0 left-0 w-full h-full bg-gray-500/50"
  >
    <div
      class="rounded-3xl overflow-hidden shadow-xl my-3 bg-gray-100 relative"
    >
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
      <img src="https://i.imgur.com/dYcYQ7E.png" class="w-full" />
      <div class="flex justify-center -mt-8">
        <img
          :src="user.avatar"
          class="rounded-full border-solid border-white border-2 -mt-3"
        />
      </div>
      <div class="text-center px-3 pb-6 pt-2">
        <h3 class="text-gray-900 text-sm bold font-sans">
          {{ user.first_name }} {{ user.last_name }}
        </h3>
        <p class="mt-2 font-sans font-light text-gray-500">
          {{ user.email }}
        </p>
      </div>
      <div class="flex justify-center pb-3 text-gray-900">
        <div class="text-center border-gray-900 border-r pr-5">
          <svg
            @click="delete_user(user.id)"
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
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </div>
        <div class="text-center ml-5">
          <svg
            @click="showUserModal()"
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-modal",
  props: {
    id: Number,
  },
  data() {
    return {
      user: "",
    };
  },
  methods: {
    closeUserModal() {
      this.$emit("closeModal", false);
    },
    showUserModal() {
      this.$emit("showModal", true);
    },
    async getUser(id) {
      try {
        await this.$store.dispatch("get_user", id).then((res) => {
          this.user = res;
          console.log(res);
        });
      } catch (err) {
        console.log(err);
      }
    },
    async delete_user(id) {
      try {
        await this.$store.dispatch("delete_user", id).then((res) => {
          this.closeUserModal();
          console.log(res);
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.getUser(this.id);
  },
};
</script>

<style lang="stylus" scoped></style>
