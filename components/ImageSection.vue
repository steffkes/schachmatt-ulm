<template>
  <div
    class="mt-6 fixed"
    :style="{
      'min-height': '50vh',
      'background-image': 'url(' + url + ')',
      'background-size': 'cover',
      'background-position':
        (position.x ?? '50') + '% ' + (position.y ?? '50') + '%',
    }"
  ></div>
  <section class="section pt-2">
    <div class="container is-max-desktop">
      <p class="has-text-grey-light">
        <slot></slot>
      </p>
    </div>
  </section>
</template>

<style scoped>
.fixed {
  background-attachment: fixed;
}

@supports (-webkit-touch-callout: inherit) {
  .fixed {
    background-attachment: scroll;
  }
}
</style>

<script setup>
defineProps(["url", "position"]);
</script>
