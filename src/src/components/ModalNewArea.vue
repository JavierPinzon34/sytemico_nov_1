<template>
 <b-modal id="modal-area" title="BootstrapVue" size="md" hide-footer hide-header>
   <!-- modal para crear nuevo ticket -->
    <div class="contenido-modal-area">
      <div class="contenido-header">
        <div class="icono">
          <img src="../assets/imagenes/iconos/Icono-modal.svg" alt="">
        </div>
        <div class="titulo">
          Crear nueva área
        </div>
      </div>
      <div class="border-content">
        <div class="border-custom"></div>
      </div>
      <div class="contenido-body">
        <div class="form-datos">
          <b-form-group
            id="groupname"
            label="Nombre del área"
            label-for="name"
          >
            <b-form-input
              id="name"
              v-model="name"
              />
          </b-form-group>
        </div>
      </div>
      <div class="contenido-adjuntar">
        <div class="titulo-adjuntar">
          <b-row class="contenedor-titulo">
            <b-col md="6">
              <span>Más opciones</span>
            </b-col>
            <b-col md="6" class="text-right">
              <b-button v-if="options" variant="outline-info" @click="changeOptions">
                <img src="../assets/imagenes/iconos/Sin-seleccionar-abajo.svg" alt="">
              </b-button>
              <b-button v-else variant="outline-info" @click="changeOptions">
                <img src="../assets/imagenes/iconos/Sin-seleccionar-arriba.svg" alt="">
              </b-button>
            </b-col>
          </b-row>
        </div>
      </div>
      <div v-if="!options" class="contenido-asunto">
        <div class="form-datos">
          <b-form-group
            id="groupname"
            label="Definir “Asuntos” para elegir al crear un ticket de esta área *"
            label-for="name"
          >
            <b-form-input
              id="name1"
              v-model="asunto1"
              placeholder="Ayuda con instalación de software"
              />
            <b-form-input
              id="name2"
              v-model="asunto2"
              />
          </b-form-group>
        </div>
      </div>
      <div class="boton-crear">
        <b-button variant="info">Crear</b-button>
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
export default {
  data () {
    return {
      name: '',
      asunto1: '',
      asunto2: 'Sincronización de mis archivos con la plataforma',
      options: false
    }
  },
  methods: {
    hideModal () {
      this.$bvModal.hide('modal-area')
    },
    changeOptions () { // cambiar el diseño del a modal
      if (this.options === true) {
        this.options = false
      } else {
        this.options = true
      }
    }
  },
  created () {
    // se crea el evento que abre la modal
    EventBus.$on('show-modal-area', () => {
      this.$bvModal.show('modal-area')
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
      .contenido-modal-area {
        background: #FFFFFF;
        border-radius: 10px 100px 10px 10px;
        padding-bottom: 50px;
        .contenido-header {
          display: flex;
          padding: 14px 14px 0 14px;
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
        .border-content {
          padding-left: 32px;
          padding-right: 33px;
          .border-custom {
            border-top: 1px solid #DCDCDC;
          }
        }
        .contenido-body {
          padding: 14px;
          margin: 8px 15px 8px 8px;
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
                &:focus{
                  box-shadow: unset;
                  // box-shadow:0 0 5px #00B8BD; sirve para haceruna sombra
                  border: 2px solid #00B8BD;
                }
              }

            }
          }
        }
        .contenido-adjuntar {
          background-color: #F8F9FC;
          margin-bottom: 15px;
          .titulo-adjuntar {
            .contenedor-titulo {
              padding: 5px 25px 5px 25px;
              margin-bottom: 10px;
              span {
                font-size: 14px;
                color: #484848;
                font-weight: 500;
              }
              .btn {
                width: 17px;
                height: 17px;
                margin: 0;
                padding: 0;
                border: 0;
                border-radius: 0;
                background: transparent;
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: 3px;
                right: 5px;
                img {
                  width: 30px;
                  height: 30px;
                  margin: 0;
                  padding: 0;
                  border: 0;
                  border-radius: 0;
                  background: transparent;
                }

                /* &:hover{
                  color: white;
                } */
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
          .content-adjunto {
            text-align: center;
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
        }
        .contenido-asunto {
          padding: 0 14px 0 14px;
          margin: 8px 15px 8px 8px;
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
                margin-bottom: 10px;
                color: #464E5A;
                &::placeholder {
                  color: #A6AAB2;
                }
                &:focus{
                  box-shadow: unset;
                  // box-shadow:0 0 5px #00B8BD; sirve para haceruna sombra
                  border: 2px solid #00B8BD;
                }
              }
            }
          }
        }
        .boton-crear {
          text-align: center;
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
