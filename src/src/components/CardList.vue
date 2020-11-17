<template>
  <div class="card_list mb-npm run ">
    <b-card header-tag="header">
      <template #header>
        <span><img src="../assets/imagenes/iconos/Icon-col-tickets.svg" alt=""> Listado de tickets</span>
      </template>
      <div class="header_content">
        <div class="text_ticket">
          <span>Ticket</span>
        </div>
        <div class="text_descripcion">
          <span>Descripción</span>
        </div>
        <div class="text_prioridad">
          <!-- Buscador Prioridad-->
            <model-select
              class="select_content"
              :options="options1"
              v-model="item"
              placeholder="Prioridad"
            />
        </div>
        <div class="text_estado">
          <!-- Buscador Estado-->
            <model-select
              class="select_content"
              :options="options2"
              v-model="item2"
              placeholder="Estado"
            />
        </div>
        <div class="text_fecha">
          <!-- Buscador Fecha-->
            <model-select
              class="select_content"
              :options="options3"
              v-model="item3"
              placeholder="Fecha"
            />
        </div>
      </div>
      <div>
        <CardListContent v-for="(item, index) in cardContent" :item="item" :key="index" :numero="index"/>
      </div>
    </b-card>
  </div>
</template>
<script>
import EventBus from '../bus'
import { ModelSelect } from 'vue-search-select'
import CardListContent from './CardListContent'
export default {
  components: {
    ModelSelect,
    CardListContent
  },
  data () {
    return {
      showcontent: false,
      options1: [
        { value: '1', text: 'Baja' },
        { value: '2', text: 'Media' },
        { value: '3', text: 'Alta' }
      ],
      options2: [
        { value: '1', text: 'Abierto' },
        { value: '2', text: 'Pendiente' },
        { value: '3', text: 'Atrasado' },
        { value: '4', text: 'Castigado' },
        { value: '5', text: 'Cerrado' },
        { value: '6', text: 'Cerrado ok' }
      ],
      options3: [
        { value: '1', text: 'Desde' },
        { value: '2', text: 'Hasta' }
      ],
      item: {
        value: '',
        text: ''
      },
      item2: {
        value: '',
        text: ''
      },
      item3: {
        value: '',
        text: ''
      },
      group: [],
      cardContent: []
    }
  },
  created () {
    EventBus.$on('change-content-lsit', (item) => {
      this.cardContent = item.cardContent
      this.group = item
    })
  },
  methods: {
    onGroupsChange (e) {
      console.log({ e })
    }
  }
}
</script>
<style lang="scss">
  .card_list {
    .card {
      border: 1px solid #F4F5F8;
      .card-header {
        background-color: #FFFFFF;
        text-align: left;
        border-bottom: 3px solid #0094D1;
        height: 47px;
        span{
          font-size: 16px;
          font-weight: bold;
        }
        img {
          margin-right: 30px;
          color: #0094D1;
        }
      }
      .card-body {
        padding: unset;
        .header_content {
          padding: 8px 8px 8px 30px;
          background-color: #FFFFFF;
          display: flex;
          .text_ticket {
            width: 45px;
            margin: 0;
            padding: 0;
            border: 0;
            border-radius: 0;
            display: flex;
            align-items: center;
            // justify-content: center;
            text-align: left;
            span {
              color: #A6AAB2;
              font-size: 12px;
              font-weight: 500;
            }
          }
          .text_descripcion {
            width: 450px;
            margin-left: 8px;
            padding: 0;
            border: 0;
            border-radius: 0;
            display: flex;
            align-items: center;
            // justify-content: center;
            text-align: left;
            span {
              color: #A6AAB2;
              font-size: 12px;
              font-weight: 500;
            }
          }
          .text_prioridad {
            width: 128px;
            margin-left: 8px;
            padding: 0;
            border: 0;
            border-radius: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: left;
            span {
              color: #A6AAB2;
              font-size: 12px;
              font-weight: 500;
            }
          }
          .text_estado {
            width: 128px;
            margin-left: 8px;
            padding: 0;
            border: 0;
            border-radius: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: left;
            span {
              color: #A6AAB2;
              font-size: 12px;
              font-weight: 500;
            }
          }
          .text_fecha {
            width: 128px;
            margin-left: 8px;
            padding: 0;
            border: 0;
            border-radius: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: left;
            span {
              color: #A6AAB2;
              font-size: 12px;
              font-weight: 500;
            }
          }
          .ui.selection.dropdown {
            height: 30px;
            width: 109px;
            padding: 7px;
            .text {
              width: 100%;
              text-align: center;
              color: #A6AAB2;
              font-size: 12px;
              font-weight: 500;
            }
          }
          .ui.fluid.dropdown>.dropdown.icon {
            padding: 7px;
            color: #A6AAB2;
          }
          .ui.search.selection.dropdown>input.search {
            height: 30px;
            padding: 7px;
          }
        }
      }
    }
  }
</style>
