<template>
  <div class="flex w-full">
    <sidebar-nav
      @closeSide="close_sidbare($event)"
      :class="showSidebar ? 'flex' : 'hidden'"
    />
    <div class="flex flex-col p-3 md:p-7 ml-auto w-full md:w-4/5">
      <div class="header flex items-center justify-between">
        <h5
          class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Users
        </h5>
        <div class="flex justify-center items-center">
          <add-user />
          <!-- Toggle Sidebar in mobile -->
          <div>
            <button
              type="button"
              class="md:hidden text-gray-500 bg-gray-100 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="authentication-modal"
              @click="showSidebar = true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- end -->
        </div>
      </div>
      <Navbar />
      <div
        class="flex space-y-5 sm:space-y-0 space-x-0 sm:space-x-5 items-center w-full my-7 flex-col sm:flex-row"
      >
        <number-card
          class="w-full sm:basis-1/3"
          :header="'Total Users'"
          :number="2 + ',' + 430"
          :precent="20"
        />
        <number-card
          class="w-full sm:basis-1/3"
          :header="'Users'"
          :number="1 + ',' + 210"
          :precent="15"
        />
        <number-card
          class="w-full sm:basis-1/3"
          :header="'Acive'"
          :number="316"
        />
      </div>
      <Filter />
      <div class="border">
        <users-table />
      </div>
    </div>
  </div>
</template>

<script>
import numberCard from "@/components/numberCard.vue";
import sidebarNav from "@/components/sidebarNav.vue";
import UsersTable from "@/components/UsersTable.vue";
import AddUser from "@/components/AddUser.vue";
import Navbar from "../components/navbar.vue";
import Filter from "../components/filter.vue";
export default {
  name: "home-page",
  data() {
    return {
      showSidebar: false,
    };
  },
  components: {
    numberCard,
    sidebarNav,
    UsersTable,
    AddUser,
    Navbar,
    Filter,
  },
  methods: {
    close_sidbare(event) {
      this.showSidebar = event;
    },
  },
};
</script>

<style lang="stylus" scoped></style>
