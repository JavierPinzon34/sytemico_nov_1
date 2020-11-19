<template>
  <div class="card_area mb-4">
    <b-card header-tag="header" class="card-area-content">
      <template #header>
        <b-row>
          <b-col class="content-title">
            <span><img src="../assets/imagenes/iconos/Icon-col-areas.svg" alt=""> Área</span>
          </b-col>
          <b-col class="content-button">
            <button class="boton-opciones" @click="showModalArea">
              <img class="img-top" src="../assets/imagenes/iconos/nueva-area.svg" alt="">
              <img class="img-down" src="../assets/imagenes/iconos/nueva-area-activo.svg" alt="">
            </button>
          </b-col>
        </b-row>
      </template>
      <CardAreaContent class="mb-2" v-for="(item, index) in cardContent" :item="item" :key="index" :numero="index"/>
    </b-card>
    <ModalArea/>
  </div>
</template>
<script>
import CardAreaContent from './CardAreaContent'
import ModalArea from '../components/ModalNewArea'
import EventBus from '../bus'
export default {
  components: {
    CardAreaContent,
    ModalArea
  },
  data () {
    return {
      cardContent: [
        {
          value: '1',
          text: 'Soporte',
          tickets: '100',
          cardContent: [
            { value: '1', text: 'Abierto' },
            { value: '2', text: 'Abierto' },
            { value: '3', text: 'Pendiente' },
            { value: '4', text: 'Atrasado' },
            { value: '5', text: 'Olvidado' },
            { value: '6', text: 'Cerrado' },
            { value: '7', text: 'Cerrado ok' }
          ]
        },
        {
          value: '2',
          text: 'Comercial',
          tickets: '22',
          cardContent: [
            { value: '1', text: 'Abierto' },
            { value: '2', text: 'Abierto' },
            { value: '6', text: 'Cerrado' },
            { value: '7', text: 'Cerrado ok' }
          ]
        },
        {
          value: '4',
          text: 'Logistica',
          tickets: '48',
          cardContent: [
            { value: '6', text: 'Cerrado' },
            { value: '7', text: 'Cerrado ok' },
            { value: '1', text: 'Abierto' },
            { value: '2', text: 'Abierto' }
          ]
        },
        {
          value: '5',
          text: 'Contabilidad',
          tickets: '10',
          cardContent: [
            { value: '3', text: 'Pendiente' },
            { value: '4', text: 'Atrasado' },
            { value: '5', text: 'Olvidado' },
            { value: '6', text: 'Cerrado' },
            { value: '7', text: 'Cerrado ok' }
          ]
        },
        {
          value: '6',
          text: 'Gerencia',
          tickets: '5',
          cardContent: [
            { value: '1', text: 'Abierto' },
            { value: '2', text: 'Abierto' },
            { value: '3', text: 'Pendiente' },
            { value: '4', text: 'Atrasado' }
          ]
        },
        {
          value: '7',
          text: 'Administración',
          tickets: '34',
          cardContent: [
            { value: '1', text: 'Abierto' },
            { value: '2', text: 'Abierto' },
            { value: '4', text: 'Atrasado' },
            { value: '5', text: 'Olvidado' },
            { value: '7', text: 'Cerrado ok' }
          ]
        },
        {
          value: '8',
          text: 'PQRS',
          tickets: '203',
          cardContent: [
            { value: '1', text: 'Abierto' },
            { value: '3', text: 'Pendiente' },
            { value: '4', text: 'Atrasado' },
            { value: '6', text: 'Cerrado' }
          ]
        },
        {
          value: '8',
          text: 'Ventas',
          tickets: '65',
          cardContent: [
            { value: '1', text: 'Abierto' },
            { value: '2', text: 'Abierto' },
            { value: '3', text: 'Pendiente' },
            { value: '4', text: 'Atrasado' },
            { value: '5', text: 'Olvidado' },
            { value: '6', text: 'Cerrado' },
            { value: '7', text: 'Cerrado ok' }
          ]
        }
      ]
    }
  },
  methods: {
    showModalArea () {
      EventBus.$emit('show-modal-area')
    }
  }
}
</script>
<style lang="scss">
  .card_area {
    .card-area-content {
      border: 1px solid #F4F5F8;
      .card-header {
        background-color: #FFFFFF;
        text-align: left;
        border-bottom: 3px solid #006DA7;
        height: 47px;
        span{
          font-size: 16px;
          font-weight: 700;
        }
        img {
          //margin-right: 30px;
          color: #006DA7;
        }
        .content-button {
          text-align: right;
          .boton-opciones {
            width: 25px;
            height: 25px;
            margin: 0;
            padding: 0;
            border: unset;
            //border-radius: 50%;
            background: transparent;
            .img-top {
              position: absolute;
              z-index: 999;
            }
            .img-down {
              width: 24px;
              height: 24px;
            }
            &:hover {
              .img-top{
                display: none;
              }
            }
          }
        }
      }
    }
  }
</style>
