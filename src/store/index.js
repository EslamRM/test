import auth from "../fake_api/auth";
import users from "../fake_api/users";
import { createStore } from "vuex";
import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";
export default createStore({
  state: {
    users: null,
    user: null,
    auth_user: null,
  },
  getters: {
    users_list(state) {
      return state.users;
    },
  },
  mutations: {
    AUTH_USER(state, data) {
      state.auth_user = data;
    },
    GET_UESERS(state, data) {
      state.users = data;
    },
    GET_UESER(state, data) {
      state.user = data;
    },
    ADD_UESER(state, data) {
      const id = uuidv4();
      const user = { id, ...data };
      state.users[id] = user;
    },
  },
  actions: {
    // login
    Login({ commit }, data) {
      return new Promise((resolve, reject) => {
        try {
          setTimeout(() => resolve(auth), 500);
          const user = {
            email: data.email,
            first_name: auth.data.user.first_name,
            last_name: auth.data.user.last_name,
            avatar: auth.data.user.avatar,
          };
          commit("AUTH_USER", user);
        } catch (error) {
          reject(error);
        }
      });
    },
    // List of users
    get_users_list({ commit }) {
      return new Promise((resolve, reject) => {
        try {
          const usersObject = users.data.reduce((obj, item) => {
            obj[item.id] = item;
            return obj;
          }, {});
          setTimeout(() => resolve(usersObject), 500);
          commit("GET_UESERS", usersObject);
        } catch (error) {
          reject(error);
        }
      });
    },
    // Obtain a user
    get_user({ commit, state }, id) {
      return new Promise((resolve, reject) => {
        const user = state.users[id];
        if (user) {
          setTimeout(() => resolve(user), 50);
          commit("GET_UESER", user);
        } else {
          setTimeout(() => reject(new Error("User not found")), 50);
        }
      });
    },
    // Create a user
    create_user({ commit }, data) {
      return new Promise((resolve, reject) => {
        const avatar = faker.image.avatar();
        if (data.first_name && data.last_name && data.email) {
          data = { avatar, ...data };
          commit("ADD_UESER", data);
          setTimeout(() => resolve("Sucess"), 150);
        } else {
          reject(new Error("Not all information provided"));
        }
      });
    },
    // update a user
    update_user({ state }, id, data) {
      new Promise((resolve, reject) => {
        if (state.users[id]) {
          state.users[id] = { ...state.users[id], ...data };
          setTimeout(() => resolve(true), 50);
        } else {
          setTimeout(() => reject(new Error("User not found")), 50);
        }
      });
    },
    // delete a user
    delete_user({ state }, id) {
      new Promise((resolve, reject) => {
        const { [id]: user, ...rest } = state.users;
        if (user) {
          state.users = { ...rest };
          setTimeout(() => resolve(true), 50);
        } else {
          setTimeout(() => reject(new Error("User not found")), 50);
        }
      });
    },
    // delete a user
    delete_multiple_user({ state }, ids) {
      new Promise((resolve, reject) => {
        if (ids) {
          ids.forEach((e) => delete state.users[e]);
          setTimeout(() => resolve(true), 50);
        } else {
          setTimeout(() => reject(new Error("User not found")), 50);
        }
      });
    },
  },
  modules: {},
});
