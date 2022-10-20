<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50">
    <div class="p-11 rounded-md mt-4 text-left bg-white border">
      <h3 class="text-2xl font-bold text-center">Login to your account</h3>
      <div class="mt-4">
        <div>
          <label class="block" for="email">Email</label>
          <input
            type="text"
            placeholder="Email"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            v-model="user.email"
          />
        </div>
        <div class="mt-4">
          <label class="block">Password</label>
          <input
            type="password"
            placeholder="Password"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            v-model="user.password"
          />
        </div>
        <div class="flex items-baseline justify-between">
          <button
            class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
            @click="login()"
          >
            Login
          </button>
          <a href="#" class="text-sm text-blue-600 hover:underline"
            >Forgot password?</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login-page",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch("Login", this.user).then((res) => {
          console.log(res);
          this.user = "";
          this.$router.push("/");
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
