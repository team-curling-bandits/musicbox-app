<template>
<div class="auth">
  <h2>{{ label }}</h2>
  <p>
    <a href="" @click.prevent="type = isSignUp ? 'signIn' : 'signUp'">
      {{
        isSignUp
          ? "Already a user? Click here to sign in"
          : "New? Click here to sign up!"
      }}
    </a>
  </p>
  <form @submit.prevent="handleSubmit">
    <FormControl v-if="isSignUp" label="Name">
      <input required v-model="credentials.name">
    </FormControl>

    <FormControl label="Email">
      <input required v-model="credentials.email">
    </FormControl>

    <FormControl label="Password">
      <input :type="show ? 'text' : 'password' " v-model="credentials.password">
      <button @click="show = !show" type="button">
        {{ show ? 'Hide' : 'Show' }}
      </button>
    </FormControl>
    <FormControl>
        <button type="submit">
          {{ label }}
        </button>
    </FormControl>
  </form>
  <pre class="error" v-show="error">{{ error }}</pre>
</div>
</template>

<script>
import FormControl from './FormControl';
export default {
  components: {
    FormControl
  },
  data() {
    return {
      credentials: {
        email: '',
        password: '',
        name: ''
      },
      show: false,
      type: 'signIn',
      error: null,
    };
  },
  props: ['onUser'],
  computed: {
    isSignUp() {
      return this.type === 'signUp';
    },
    label() {
      return this.isSignUp ? 'Sign Up' : 'Sign In';
    }
  },
  methods: {
    handleSubmit() {
      console.log('submit');
    }
  }
};
</script>

<style>

</style>
