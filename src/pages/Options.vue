<template>
  <div class="card">
    <h2>Componente con API de Opciones</h2>
    <p>Contador: {{ contador }}</p>
    <p>Mensaje: <input v-model="mensaje" /></p>
    <p><strong>Mensaje Invertido (Computado):</strong> {{ mensajeInvertido }}</p>
    <button @click="incrementar">Incrementar Contador</button>
    <span>{{ test('aaa', 'bbb') }}</span>
  </div>
</template>

<script lang="ts">
export default {
  // 1. `data`: Aquí se declaran todas las propiedades reactivas del componente.
  data() {
    return {
      contador: 0,
      mensaje: 'Hola Vue',
      ruta: this.$route.name,
    }
  },

  // 2. `methods`: Contiene las funciones que modifican el estado o realizan acciones.
  methods: {
    incrementar() {
      this.contador++
    },
    prints(text = '') {
      console.log(text)
    },
  },

  created() {
    this.prints(`El componente '${String(this.ruta)}' ha sido creado`)
  },
  mounted() {
    this.prints(`El componente '${String(this.ruta)}' ha sido montado`)
  },
  unmounted() {
    this.prints(`El componente '${String(this.ruta)}' se ha desmontado`)
  },
  // 3. `computed`: Propiedades cuyo valor se calcula a partir de otras propiedades reactivas.
  computed: {
    mensajeInvertido() {
      return this.mensaje.split('').reverse().join('')
    },
    test() {
      // variable computada con parametros
      return (uno = null, dos = '') => {
        if (uno) {
          return dos
        }
        return ''
      }
    },
  },

  // 4. `watch`: Observa cambios en una propiedad reactiva y ejecuta una función como respuesta.
  watch: {
    contador(nuevoValor, anterior) {
      if (nuevoValor === 5) {
        alert('¡El contador ha llegado a 5!')
        this.contador = 0
      }
      if (anterior === 1) {
        alert('Es 1')
      }
    },
  },
}
</script>

<style scoped>
.card {
  border: 1px solid #42b983;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
  background-color: #f0fdf4;
}
input {
  margin-left: 10px;
}
button {
  margin-top: 10px;
}
</style>
