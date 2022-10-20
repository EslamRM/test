<template>
  <div>
    <a
      href="#"
      class="block p-6 bg-white rounded-lg border border-gray-200 border hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <div class="flex justify-between items-center mb-3">
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {{ header }}
        </p>
        <span>
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
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
          </svg>
        </span>
      </div>
      <div class="flex justify-between items-center">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ number }}
        </h5>
        <span
          v-if="precent"
          class="bg-green-100 flex items-center text-green-500 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900"
          ><span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-3 h-3 mr-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
              />
            </svg>
          </span>
          <span> %{{ precent }} </span></span
        >
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: { header: String, number: Number, precent: Number },
  name: "number-card",
};
</script>

<style lang="stylus" scoped></style>
