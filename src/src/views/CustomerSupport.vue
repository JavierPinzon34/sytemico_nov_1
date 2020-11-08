<template>
  <div class="atencion-cliente text-center">
    <div class="contendor-informacion">
      <img src="../assets/imagenes/iconos/Img-agregar-area.svg" alt="">
      <div class="texto">
        <span>Hola, crea un área para <br>iniciar con la atención al cliente</span>
        <div class="boton">
          <b-button @click="showModalArea">Nueva área</b-button>
        </div>
      </div>
    </div>
    <ModalArea/>
  </div>
</template>
<script>
import EventBus from '../bus'
import ModalArea from '../components/ModalNewArea'
export default {
  components: {
    ModalArea
  },
  methods: {
    showModalArea () {
      EventBus.$emit('show-modal-area')
    }
  }
}
</script>
<style lang="scss">
  .atencion-cliente {
    min-width: 100%;
    min-height: 90vh;
    display: flex;
    align-content: center;
    align-items: center;
    .contendor-informacion {
      min-width: 100%;
      .texto {
        margin-top: 30px;
        span {
          color: #354861;
          font-size: 20px;
        }
      }
      .boton {
        margin-top: 30px;
        .btn {
          width: 169px;
          height: 45px;
          background-color: #00B8BD;
          border-radius: 6px;
          border: 1px solid #00B8BD;
        }
      }
    }
  }
</style>
