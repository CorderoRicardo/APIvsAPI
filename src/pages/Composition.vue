<template>
  <div class="card">
    <h2>Componente con API de Composición</h2>
    <p>Contador: {{ contador }}</p>
    <p>Mensaje: <input v-model="mensaje" /></p>
    <p><strong>Mensaje Invertido (Computado):</strong> {{ mensajeInvertido }}</p>
    <button @click="incrementar">Incrementar Contador</button>
    <span>{{ test2('aaa', 'bbb') }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const ruta = ref(route.name)

function prints(text = '') {
  console.log(text)
}

// La etiqueta `<script setup>` es una sintaxis simplificada para usar la API de Composición.
// Todo lo que se define aquí está disponible directamente en el template.

// 1. `data` -> se reemplaza con `ref` o `reactive` para crear variables reactivas.
// `ref` se usa para valores primitivos (números, strings, etc.).
const contador = ref(0)
const mensaje = ref('Hola Vue')

// 2. `methods` -> se reemplaza con funciones normales.
function incrementar() {
  contador.value++ // Para acceder/modificar el valor de un `ref`, se usa .value
}

// 3. `computed` -> se reemplaza con la función `computed` importada.
const mensajeInvertido = computed(() => {
  return mensaje.value.split('').reverse().join('')
})
const test2 = computed(() => {
  return (uno = null, dos = '') => {
    if (uno) {
      return dos
    }
    return ''
  }
})

// 4. `watch` -> se reemplaza con la función `watch` importada.
watch(contador, (nuevoValor, anterior) => {
  if (nuevoValor === 5) {
    alert('¡El contador ha llegado a 5!')
    contador.value = 0
  }
  if (anterior === 1) {
    alert('Es 1')
  }
})

watch(mensaje, (nuevo) => {
  console.log(nuevo)
})

onMounted(() => {
  prints(`El componente '${String(ruta.value)}' ha sido montado`)
})
onUnmounted(() => {
  prints(`El componente '${String(ruta.value)}' se ha desmontado`)
})
</script>

<style scoped>
/* Estilos idénticos al componente anterior */
.card {
  border: 1px solid #3498db;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
  background-color: #ecf5fb;
}
input {
  margin-left: 10px;
}
button {
  margin-top: 10px;
}
</style>
