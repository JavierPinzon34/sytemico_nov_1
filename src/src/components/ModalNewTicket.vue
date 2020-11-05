<template>
 <b-modal id="modal-1" title="BootstrapVue" size="lg" hide-footer hide-header>
   <!-- modal para crear nuevo ticket -->
    <div class="contenido-modal">
      <div class="contenido-header">
        <div class="icono">
          <img src="../assets/imagenes/iconos/Icono-modal.svg" alt="">
        </div>
        <div class="titulo">
          Crear nuevo ticket
        </div>
      </div>
      <div class="contenido-body">
        <div class="codigo">
          T0001
        </div>
        <div class="form-datos">
          <b-form-group
            id="groupname"
            label="Nombre completo del usuario"
            label-for="name"
          >
            <b-form-input id="name" v-model="name" placeholder="Samantha Garner"/>
          </b-form-group>
          <b-form-group
            id="groupemail"
            label="Email"
            label-for="email"
          >
            <b-form-input id="imal" v-model="email" placeholder="samanthagarner@mail.com"/>
          </b-form-group>
        </div>
        <div class="contenido-asunto">
          <model-select
            :options="options1"
            v-model="item1"
            placeholder="Asunto"
          />
          <h5>Sincronización de mis archivos con la plataforma</h5>
        </div>
        <div class="contenido-prioridad">
          <model-select
            :options="options2"
            v-model="item2"
            placeholder="Prioridad"
          />
          <h5>Alta <span>(Tiempo promedio de respuesta: 4 horas)</span></h5>
        </div>
        <div class="comentario">
          <b-form-textarea
            id="textarea"
            v-model="text"
            rows="5"
            max-rows="5"
          />
        </div>
      </div>
      <div class="contenido-adjuntar">
        <div class="titulo-adjuntar">
          <b-row class="contenedor-titulo">
            <b-col md="6">
              <span>Adjuntar archivo</span>
            </b-col>
            <b-col md="6" class="text-right">
              <b-button variant="outline-info">Adjuntar</b-button>
            </b-col>
          </b-row>
          <b-progress :value="value" max="100" class="mb-3"></b-progress>
        </div>
        <div class="archivo-adjunto">
          <div class="adjunto">
            archivo_adjunto2.jpg
          </div>
          <div class="adjunto">
            archivo_adjunto1.jpg
          </div>
        </div>
        <div class="text-center boton-crear">
          <b-button variant="info">Crear</b-button>
        </div>
      </div>
      <div class="encabezado">
        <button class="boton-cerrar" @click="hideModal()">
          <img src="../assets/imagenes/iconos/icono-cerrar.svg" alt="">
        </button>
      </div>
    </div>
  </b-modal>
</template>
<script>
import EventBus from '../bus'
import { ModelSelect } from 'vue-search-select'
export default {
  components: {
    ModelSelect
  },
  data () {
    return {
      name: '',
      email: '',
      text: 'Hola, es necesario dar respuesta al cliente debido a',
      item1: '',
      item2: '',
      options1: [
        { value: '1', text: 'Baja' },
        { value: '2', text: 'Media' },
        { value: '3', text: 'Alta' }
      ],
      options2: [
        { value: '1', text: 'Baja' },
        { value: '2', text: 'Media' },
        { value: '3', text: 'Alta' }
      ],
      value: 60
    }
  },
  methods: {
    hideModal () {
      this.$bvModal.hide('modal-1')
    }
  },
  created () {
    EventBus.$on('show-modal', () => {
      this.$bvModal.show('modal-1')
    })
  }
}
</script>
<style lang="scss">
  .modal {
    .modal-content {
      border-radius: 10px;
      .modal-body {
        border-radius: 10px;
        background: #00b8bd;
        padding: unset;
      }
      .contenido-modal {
        background: #FFFFFF;
        border-radius: 10px 100px 10px 10px;
        .contenido-header {
          display: flex;
          padding: 14px;
          .icono {
            height: 49.45px;
            width: auto;
            margin: 8px;
          }
          .titulo {
            height: 49.45px;
            width: 90%;
            margin: 8px;
            display: flex;
            align-content: center;
            align-items: center;
            color: #484848;
            font-size: 20px;
            font-weight: 600;
          }
        }
        .contenido-body {
          padding: 14px;
          margin: 8px 15px 8px 8px;
          .codigo {
            padding-left: 14px;
            font-size: 12px;
            color: #0291EB;
            font-weight: 700;
          }
          .form-datos {
            margin-top: 15px;
            margin-bottom: 25px;
            .form-group {
              label {
                font-size: 12px;
                color: #00BABE;
                margin-bottom: 4px;
              }
              input {
                height: 40px;
              }
            }
          }
          .contenido-asunto {
            display: flex;
            margin-bottom: 10px;
            .ui.selection.dropdown {
              width: 109px;
              height: 30px;
              padding: 7px;
              .text {
                width: 100%;
                text-align: left;
                color: #464E5A;
                font-size: 12px;
                font-weight: 400;
              }
            }
            .ui.fluid.dropdown>.dropdown.icon {
              padding: 7px;
              color: #A6AAB2;
            }
            .ui.search.selection.dropdown>input.search {
              width: 109px;
              height: 30px;
            }
            h5 {
              font-size: 14px;
              color: #464E5A;
              margin-left: 20px;
              padding-top: 6px;
              font-weight: bold;
            }
          }
          .contenido-prioridad {
            display: flex;
            margin-bottom: 20px;
            .ui.selection.dropdown {
              width: 109px;
              height: 30px;
              padding: 7px;
              .text {
                width: 100%;
                text-align: left;
                color: #464E5A;
                font-size: 12px;
                font-weight: 400;
              }
            }
            .ui.fluid.dropdown>.dropdown.icon {
              padding: 7px;
              color: #A6AAB2;
            }
            .ui.search.selection.dropdown>input.search {
              width: 109px;
              height: 30px;
            }
            h5 {
              font-size: 14px;
              color: #464E5A;
              margin-left: 20px;
              padding-top: 6px;
              font-weight: bold;
              span {
                font-size: 12px;
                color: #A6AAB2;
                margin-left: 10px;
                font-weight: 400;
              }
            }
          }
          .comentario {
            margin-bottom: 15px;
            box-shadow: 0px 3px 6px #00000014;
            border: 1px solid #00B8BD;
            border-radius: 5px;
            font-size: 14px;
            color: #464E5A;
          }
        }
        .contenido-adjuntar {
          background-color: #F8F9FC;
          padding-top: 15px;
          padding-bottom: 40px;
          border-radius: 0 0 10px 10px;
          .titulo-adjuntar {
            padding-left: 40px;
            padding-right: 29px;
            .contenedor-titulo {
              margin-bottom: 10px;
              span {
                font-size: 14px;
                color: #484848;
                font-weight: 500;
              }
              .btn {
                width: 152px;
                height: 30px;
                color: #00B8BD;
                padding: 2px;
                border: 1px solid #00B8BD;

                &:hover{
                  color: white;
                }
              }
            }
            .progress {
              height: 8px;
              background-color: #FFFFFF;
              .progress-bar {
                background-color: #39C5C8;
              }
            }
          }
          .archivo-adjunto {
            margin-bottom: 20px;
            .adjunto {
              padding-left: 40px;
              padding-right: 29px;
              height: 52px;
              padding-top: 10px;
              &:hover {
                background-color: #F5F9FF;
                border-top: 1px solid #e0e0e0;
                border-bottom: 1px solid #e0e0e0;
              }
            }
          }
          .boton-crear {
            .btn {
              width: 169px;
              height: 45px;
              background-color: #00B8BD;
              border-radius: 6px;
              border: 1px solid #00B8BD;
              font-size: 16px;
              font-weight: 600;
            }
          }
        }
        .encabezado {
          height: 77px;
          right: 0;
          top: 0;
          margin: 0;
          padding: 0 35px;
          border: 0;
          border-radius: 0;
          background: transparent;
          position: absolute;
          h2 {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            border: 0;
            border-bottom: 1px solid #DCDCDC;
            border-radius: 0;
            background: transparent;
            font-family: 'Mulish', sans-serif;
            font-size: 20px;
            font-weight: 700;
            color: #464E5A;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .boton-cerrar {
            width: 30px;
            height: 30px;
            margin: 0;
            padding: 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 14px;
            right: 17px;
            img {
              width: 30px;
              height: 30px;
              margin: 0;
              padding: 0;
              border: 0;
              border-radius: 0;
              background: transparent;
            }
          }
        }
      }
    }
  }
</style>
