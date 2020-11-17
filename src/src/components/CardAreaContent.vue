<template>
  <b-card class="card_details" :class="{'is-active': item.key == keyCard}" @click="changeInfo(item ,numero)">
    <b-row>
      <b-col>
        <b-card-text class="title_text"><span>{{ item.text }}</span> </b-card-text>
      </b-col>
      <b-col>
        <b-card-text class="body_text">
          <b-badge pill variant="light">
            <img src="../assets/imagenes/iconos/Icon-tickets-contador.svg" alt="">
            <span>{{ item.tickets }}</span>
          </b-badge>
          <!-- boton de puntos del lado derecho -->
          <button class="boton-opciones" @click="verOpcionesProyecto">
              <img src="../assets/imagenes/iconos/icono-opciones-gris.svg" alt="">
          </button>
          <div class="contenedor-opciones">
            <button class="boton-opcion">
              <img src="../assets/imagenes/iconos/icono-lapiz.svg" alt="">
              Editar
            </button>
            <button class="boton-opcion">
              <img src="../assets/imagenes/iconos/icono-archivar.svg" alt="">
              Archivar
            </button>
            <button class="boton-opcion">
              <img src="../assets/imagenes/iconos/icono-caneca.svg" alt="">
              Eliminar
            </button>
          </div>
        </b-card-text>
      </b-col>
    </b-row>
  </b-card>
</template>
<script>
import EventBus from '../bus'
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    numero: {
      type: Number,
      default: () => 0
    }
  },
  data () {
    return {
      isPick: false,
      keyCard: ''
    }
  },
  created () {
    EventBus.$on('card-select', (item) => {
      this.keyCard = item
    })
  },
  methods: {
    verOpcionesProyecto: function () {
      if (this.isPick) {
        this.isPick = false
      } else {
        this.isPick = true
      }
      var opciones = event.target.nextElementSibling
      // console.log(opciones)
      var alto = opciones.children.length * 40

      if (opciones.clientHeight === 0) {
        opciones.style.height = alto + 'px'
      } else {
        opciones.removeAttribute('style')
      }
    },
    changeInfo (item, numero) {
      item.key = numero
      this.selected = numero
      EventBus.$emit('change-card', (item))
      EventBus.$emit('card-select', (numero))
    }
  }
}
</script>
<style lang="scss">
  .card_details {
    height: 60px;
    box-shadow: 0px 3px 6px #0000001A;
    border-radius: 5px;
    border: 1px solid #D1D5E9;
    .card-body {
      padding: 17px;
      .title_text{
        text-align: left;
        span {
          font-size: 14px;
          font-weight: 700;
        }
      }
      .body_text {
        text-align: right;
        .badge {
          width: 50px;
          height: 17px;
        }
        .b-icon.bi {
          color: #00B8BD;
        }
        span {
          color: #484848;
          font-size: 12px;
          font-weight: 500;
        }
        .boton-opciones {
          width: 10px;
          height: 22px;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 50%;
          background: transparent;
          img {
            width: auto;
            height: auto;
            margin: 0;
            padding: 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            pointer-events: none;
          }
        }
        .contenedor-opciones {
          width: 150px;
          height: 0px;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 10px;
          background: transparent;
          box-shadow: 0px 3px 6px #00000029;
          overflow: hidden;
          position: absolute;
          top: 30px;
          right: 15px;
          z-index: 10;
          transition: all 0.3s;

          .boton-opcion {
            width: 100%;
            height: 40px;
            margin: 0;
            padding: 0 0 0 20px;
            border: 0;
            border-radius: 0;
            background-color: #FFFFFF;
            font-family: 'Mulish', sans-serif;
            font-size: 14px;
            font-weight: 600;
            color: #484848;
            display: flex;
            align-items: center;
            transition: all 0.3s;

            img {
              width: 18px;
              height: 15px;
              margin: 0 10px 0 0;
              padding: 0;
              border: 0;
              border-radius: 0;
              background: transparent;
            }

            &:hover {
              background-color: #F2F3F9;
            }
          }
        }
      }
    }
    .col {
      padding-right: 5px;
    }
  }
  .is-active {
    border: 1px solid #0094D1;
    background-color: #F5F9FF;
  }
</style>
