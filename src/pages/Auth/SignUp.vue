<template>
  <CardAuth title="Sign Up">
    <SignUpForm />
  </CardAuth>
</template>

<script>
import CardAuth from '@/components/Auth/CardAuth';
import SignUpForm from '@/components/Auth/SignUpForm';

export default {
  name: 'SignUp',
  components: {
    CardAuth,
    SignUpForm,
  },
};
</script>

<style scoped lang="scss"></style>
