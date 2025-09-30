<script setup lang="ts"></script>

<template>
  <p><strong>Ruta actual:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/options">Api de opciones</RouterLink>
    <span><strong> | </strong></span>
    <RouterLink to="/composition">API de composición</RouterLink>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
