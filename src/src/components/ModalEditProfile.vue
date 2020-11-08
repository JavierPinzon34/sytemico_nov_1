<template>
 <b-modal id="modal-profile" title="BootstrapVue" size="md" hide-footer hide-header>
   <!-- modal para crear nuevo ticket -->
    <div class="contenido-modal">
      <div class="contenido-header">
        <div class="icono">
          <img src="../assets/imagenes/iconos/Icono-modal.svg" alt="">
        </div>
        <div class="titulo">
          Editar perfil
        </div>
      </div>
      <div class="contenido-body">
        <div class="form-datos">
          <b-form-group
            id="groupname"
            label="Contraseña actual"
            label-for="password"
          >
            <b-form-input
              id="password"
              v-model="password"
              type="password"
              />
          </b-form-group>
          <b-form-group
            id="groupname"
            label="Nueva contraseña"
            label-for="new-password"
          >
            <b-form-input
              id="new-password"
              v-model="new_password"
              type="password"
              />
          </b-form-group>
          <b-form-group
            id="groupname"
            label="Confirmar nueva contraseña"
            label-for="confirm-password"
          >
            <b-form-input
              id="confirm-password"
              v-model="confirm_password"
              type="password"
              />
          </b-form-group>
        </div>
      </div>
      <div class="contenido-adjuntar">
        <div class="titulo-adjuntar">
          <b-row class="contenedor-titulo">
            <b-col md="6">
              <span>Imagen de perfil</span>
            </b-col>
            <b-col md="6" class="text-right">
              <b-button variant="outline-info" @click="changeFoto">Adjuntar</b-button>
            </b-col>
          </b-row>
          <div v-if="!foto" class="content-adjunto">
            <div class="icono-adjunto">
              <img src="../assets/imagenes/iconos/Img-perfil-adjuntar.svg" alt="">
            </div>
            <div class="texto-adjunto">
              <span>Ajuntar una fotografia como imagen de perfil</span>
            </div>
          </div>
        </div >
        <div
          v-if="foto"
          class="archivo-adjunto">
          <div class="adjunto">
            mifotodeperfil.jpg
          </div>
        </div>
        <div class="text-center boton-crear">
          <b-button variant="info">Editar</b-button>
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
export default {
  data () {
    return {
      confirm_password: '',
      password: '',
      new_password: '',
      foto: true
    }
  },
  methods: {
    hideModal () {
      this.$bvModal.hide('modal-profile')
    },
    changeFoto () { // cambiar el diseño del a modal
      if (this.foto === true) {
        this.foto = false
      } else {
        this.foto = true
      }
    }
  },
  created () {
    // se crea el evento que abre la modal
    EventBus.$on('show-modal-profile', () => {
      this.$bvModal.show('modal-profile')
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
          padding-top: 15px;
          padding-bottom: 50px !important;
          border-radius: 0 0 10px 10px;
          .titulo-adjuntar {
            padding-left: 40px;
            padding-right: 29px;
            margin-bottom: 30px;
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
