<template>
  <div class="container">
    <WidgetsHeader />
    <div class="content">
      <slot />
    </div>
    <div class="footer">this is footer</div>
    <!-- <Footer class="footer" /> -->
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--bg);
}

// .content,
// .footer {
//   margin: 0 auto;
// }

.content {
  flex: 1 0 auto;
}
</style>
