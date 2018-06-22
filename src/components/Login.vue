<template>
<div class="auth">
  <h2>{{ label }}</h2>
  <form @submit.prevent="handleSubmit">
  <p class="signup">
    <a href="" @click.prevent="type = isSignUp ? 'signIn' : 'signUp'">
      {{
        isSignUp
          ? "Already a user? Click here to sign in"
          : "New? Click here to sign up!"
      }}
    </a>
  </p>
    <FormControl v-if="isSignUp" label="Name">
      <input required v-model="credentials.name">
    </FormControl>

    <FormControl label="Email:">
      <input required v-model="credentials.email">
    </FormControl>

    <FormControl label="Password:">
      <input :type="show ? 'text' : 'password' " v-model="credentials.password">
      <button @click="show = !show" type="button" class="show-btn">
        {{ show ? 'Hide' : 'Show' }}
      </button>
    </FormControl>
    <FormControl>
        <button type="submit" class="submit-btn">
          {{ label }}
        </button>
    </FormControl>
    <pre class="error" v-show="error">{{ error }}</pre>
  </form>
</div>
</template>

<script>
import FormControl from './FormControl';
import { signUp, signIn } from '../services/api';
/* eslint-disable-next-line */
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
      if(!emailRegex.test(this.credentials.email)) {
        this.error = 'email not valid';
        return;
      }
      this.error = null;
      const action = this.isSignUp ? signUp : signIn;
      action(this.credentials)
        .then(user => {
          this.onUser(user);
          this.$router.push('/user');
        })
        .catch(err => this.error = err);
    }
  }
};
</script>

<style>
form {
  object-fit: contain;
  width: 300px;
  margin: auto;
  margin-bottom: 10px;
  text-align: left;
  padding: 20px 0px 20px 20px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.show-btn {
  margin-left: 6px;
}

.submit-btn {
  margin-top: 6px;
}

.signup {
  font-weight: bold;
  margin-bottom: 10px;
}

.error {
  color: red;
}
</style>
