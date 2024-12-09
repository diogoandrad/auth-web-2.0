<template>
  <CardAuth
    title="Reset Password"
    :description="description"
  >
    <ResetPasswordForm />
  </CardAuth>
</template>

<script>
import CardAuth from '@/components/Auth/CardAuth';
import ResetPasswordForm from '@/components/Auth/ResetPasswordForm';

export default {
  name: 'ResetPassword',
  components: {
    CardAuth,
    ResetPasswordForm,
  },
  data() {
    return {
      description: 'Please enter the email address that you used to register, and we will send you a link to reset your password via Email.',
    };
  },
};
</script>

<style scoped lang="scss"></style>
