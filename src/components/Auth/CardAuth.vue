<template>
  <div class="bg-main">
    <div class="auth-card">
      <div class="dx-card content">
        <div class="header">
          <div class="title">
            {{ title }}
          </div>
          <div class="description">
            {{ description }}
          </div>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped lang="scss">
.bg-main {
  display: flex;
  position: fixed;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.auth-card {
  display: flex;
  height: 68%;
  width: 26%;
  border-radius: 8px;
  border: 1px solid #d1ffc1;
  box-shadow: 0 4px 6px rgb(170, 232, 141);

  @media screen and (max-width: 991px) {
    min-width: 80%;
  }

  :deep(.dx-button-text) {
    text-transform: none;
  }

  .dx-card {
    margin: auto auto;
    padding: 24px;
    flex-grow: 0;
    width: 84%;
    max-width: 84%;
    border-radius: 8px;

    &.content {
      height: auto;
    }

    .screen-x-small & {
      width: 100%;
      height: 100%;
      max-width: 100%;
      border-radius: 0;
      box-shadow: none;
      margin: 0;
      border: 0;
      flex-grow: 1;
    }

    .header {
      margin-top: 24px;
      margin-bottom: 44px;

      .title {
        color: white;
        text-align: center;
        line-height: 24px;
        font-weight: 400px;
        font-size: 24px;
      }

      .description {
        text-align: center;
        line-height: 16px;
        font-size: 12px;
        margin-top: 28px;
      }
    }
  }
}
</style>
