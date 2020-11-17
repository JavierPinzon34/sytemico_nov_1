<template>
  <div class="tickets">
    <b-row class="search_tickets">
      <b-col md="3"></b-col>
      <b-col md="5" class="contenedor-menu-segundario">
        <!-- buscador de ticket -->
        <div class="contenedor-buscador">
          <div class="buscador">
            <input type="search" placeholder="Buscar...">
            <img src="../assets/imagenes/iconos/icono-lupa.svg" alt="">
          </div>
        </div>
      </b-col>
      <!-- Boton crear nuevo ticket -->
      <b-col md="4" class="text-right">
        <b-button variant="outline-info" @click="showModal()">Nuevo ticket</b-button>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col md="3">
        <CardArea/>
      </b-col>
      <b-col md="9">
        <div v-if="showCard">
          <CardList/>
        </div>
        <div v-else>
          <CardTicket/>
        </div>
      </b-col>
    </b-row>
    <ModalNewTicket/>
  </div>
</template>
<script>
import CardArea from '../components/CardArea'
import CardList from '../components/CardList'
import CardTicket from '../components/CardTicket'
import EventBus from '../bus'
import ModalNewTicket from '../components/ModalNewTicket'
/* import { ModelSelect } from 'vue-search-select' */
export default {
  components: {
    // ModelSelect
    CardArea,
    CardList,
    CardTicket,
    ModalNewTicket
  },
  data () {
    return {
      showCard: true,
      options: [
        { value: '1', text: 'Entidad 1' },
        { value: '2', text: 'Entidad 2' }
      ],
      item: {
        value: '',
        text: ''
      }
    }
  },
  methods: {
    showModal () { // evento para abrir la modal de nuevo ticket
      EventBus.$emit('show-modal')
    }
  }
}
</script>
<style lang="scss">
  .tickets {
    background-color: #F8F9FC;
    padding: 15px;
    min-height: 658px;
    .search_tickets{
      // clases para el encabezado de la pagina
      .contenedor-menu-segundario {
        width: 100%;
        height: auto;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 0;
        background: transparent;
        display: flex;
        .contenedor-buscador {
          width: 300px;
          height: 100%;
          margin: 0;
          padding: 0 0 0 15px;
          border: 0;
          border-radius: 0;
          background: transparent;
          display: flex;
          align-items: center;
          .buscador {
            width: auto;
            height: auto;
            margin: 0;
            padding: 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            position: relative;
            input {
              width: 222px;
              height: 29px;
              margin: 0;
              padding: 0 0 0 14px;
              border: 1px solid #D1D5E9;
              border-radius: 5px;
              background-color: #FFFFFF;
              &::placeholder {
                font-family: 'Mulish', sans-serif;
                font-size: 14px;
                font-weight: 400;
                color: #A6AAB2;
              }
            }
            img {
              width: 16px;
              height: 17px;
              margin: 0;
              padding: 0;
              border: 0;
              border-radius: 0;
              background: transparent;
              position: absolute;
              top: 6px;
              right: 11.5px;
            }
          }
        }
      }
      .btn {
        width: 152px;
        height: 30px;
        padding: 2px;
        color: #00B8BD;
        border: 1px solid #00B8BD;
        &:hover{
          color: white;
        }
      }
    }
  }
</style>
