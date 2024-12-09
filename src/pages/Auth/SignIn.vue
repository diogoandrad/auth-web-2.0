<template>
  <CardAuth title="Sign In">
    <SignInForm />
  </CardAuth>
</template>

<script>
import CardAuth from '@/components/Auth/CardAuth';
import SignInForm from '@/components/Auth/SignInForm';

export default {
  name: 'SignIn',
  components: {
    CardAuth,
    SignInForm,
  },
};
</script>

<style scoped lang="scss"></style>
