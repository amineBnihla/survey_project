<template>
  <form class="w-full">
    <div class="flex flex-col gap-10">
      <InputField
        type-input="email"
        label="E-mail"
        v-model="login.email"
        id="email"
      />
      <InputField
        type-input="password"
        label="Password"
        v-model="login.password"
        id="password"
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
        Sign in
      </button>
    </div>
  </form>
</template>


<script setup>
import { ref } from "vue";
import InputField from "../components/inputField.vue";
const login = ref({
  email: "",
  password: "",
});
</script>

<style>
</style>
