<template>
  <div></div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      nombre: "",
      apellido: "",
      email: "",
      nameState: null,
      lastnameState: null,
      emailState: null
    };
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    handleSubmit() {
      if (process.browser) {
        this.sendData();
        this.$store.commit("index/SET_EMAIL", this.email);
        localStorage.setItem("user_email", this.email);
      }
    }
  }
};
</script>
<style scoped></style>
