<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <NuxtLayout>
    <section class="section">
      <div class="container is-max-desktop">
        <h1 class="title">
          Die 1. Edition Schachmatt Ulm fand am 08.02.2025 statt
        </h1>
        <p class="mb-6">Die aufgeraufene Seite existiert nicht (mehr).</p>
        <button @click="handleError" class="button">
          Bring mich zur Startseite
        </button>
        <p class="mt-6 has-text-grey-lighter">
          Fehler {{ error?.statusCode }}
          <span v-if="error?.statusMessage"> / {{ error.statusMessage }} </span>
        </p>
      </div>
    </section>
  </NuxtLayout>
</template>
