<template>
  <div class="card_ticket mb-npm run ">
    <b-card header-tag="header">
      <template #header>
        <span><img src="../assets/imagenes/iconos/Icon-col-tickets.svg" alt=""> Tickets</span>
      </template>
    </b-card>
    <div class="body-tickets">
      <div class="content-ticket">
        <div class="head-content">
          <div class="image">
            <img src="../assets/imagenes/iconos/Personaje-Suppmail.svg" alt="">
          </div>
          <div class="title">
            <h4>Ahora ya estas listo para resolver</h4>
            <h4>solicitudes de atención al cliente</h4>
          </div>
        </div>
        <div class="line">
          <h2></h2>
        </div>
        <div class="footer-content">
          <div class="title">
            <div class="mb-2 mt-4">
              <span>Si tienes alguna solicitud escrita o verbal por resolver,</span>
            </div>
            <div class="mb-4">
              <span>puedes crear un ticket y asignarlo</span>
            </div>
            <div>
              <b-button @click="showModal">Nuevo ticket</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalNewTicket/>
  </div>
</template>
<script>
import EventBus from '../bus'
import ModalNewTicket from '../components/ModalNewTicket'
export default {
  components: {
    ModalNewTicket
  },
  methods: {
    showModal () { // evento para abrir la modal de nuevo ticket
      EventBus.$emit('show-modal')
    }
  }
}
</script>
<style lang="scss">
  .card_ticket {
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
    .body-tickets {
      height: 580px;
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: center;
      .content-ticket {
        .head-content {
          padding: 0 100px 20px 100px;
          .title {
            padding-top: 10px;
          }
        }
        .line {
           h2 {
             height: 1px;
             background-color: #00B8BD;
           }
        }
        .footer-content {
          span {
            color: #A6AAB2;
            font-size: 16px;
            font-weight: 300;
          }
          button {
            width: 169px;
            height: 45px;
            background-color: #00B8BD;
            border-radius: 6px;
            border: unset;
            font-size: 16px;
            font-weight: 300;
          }
        }
      }
    }
  }
</style>
