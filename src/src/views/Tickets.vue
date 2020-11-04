<template>
  <div class="tickets">
    <b-row class="search_tickets">
      <b-col class="contenedor-menu-segundario">
        <!-- <model-select
          class="select_content"
          :options="options"
          v-model="item"
          placeholder="Buscar ticket"
        /> -->
        <div class="contenedor-buscador">
          <div class="buscador">
            <input type="search" placeholder="Buscar...">
            <img src="../assets/imagenes/iconos/icono-lupa.svg" alt="">
          </div>
        </div>
      </b-col>
      <b-col class="text-right">
        <b-button variant="outline-info">Nuevo ticket</b-button>
      </b-col>
    </b-row>
  </div>
</template>
<script>
/* import { ModelSelect } from 'vue-search-select' */
export default {
  /* components: {
    ModelSelect
  }, */
  data () {
    return {
      options: [
        { value: '1', text: 'Entidad 1' },
        { value: '2', text: 'Entidad 2' }
      ],
      item: {
        value: '',
        text: ''
      }
    }
  }
}
</script>
<style lang="scss">
  .tickets {
    background-color: #F8F9FC;
    padding: 15px;
    .search_tickets{
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
          padding: 0 0 0 260px;
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
