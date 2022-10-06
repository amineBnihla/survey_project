<template>
  <form class="w-full" @submit.prevent="register">
    <div class="flex flex-col gap-10">
      <InputField
        type-input="username"
        label="User Name"
        v-model="user.user_name"
        id="username"
      />
      <InputField
        type-input="email"
        label="E-mail"
        v-model="user.email"
        id="email"
      />
      <InputField
        type-input="password"
        label="Password"
        v-model="user.password"
        id="password"
      />
      <InputField
        type-input="password"
        label="password Confirmation"
        v-model="user.password_confirmation"
        id="password_confirmation"
      />

      <button
        class="
          bg-primary
          text-white
          block
          py-2
          mt-5
          rounded-md
          hover:bg-primary/90
        "
      >
        Sign up
      </button>
    </div>
  </form>
</template>


<script setup>
import { ref } from "vue";
import InputField from "../components/inputField.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const user = ref({
  user_name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

function register() {
  store
    .dispatch("register", user.value)
    .then((res) => {
      //router.push({ name: "Dashboard" });
      console.log(res);
    })
    .catch((err) => {
      console.log("heello", err);
    });
}
</script>

<style>
</style>
