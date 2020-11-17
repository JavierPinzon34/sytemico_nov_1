<template>
  <div>
    <div class="contenedor-menu-principal">
      <div class="seccion-logotipo">
        <img src="../assets/imagenes/logotipos/Logo-Suppmail.svg" alt="">
        <img class="imgagen-wapps" src="../assets/imagenes/iconos/Icon-wapps-pradek-default.svg" alt="">
      </div>
      <!-- menus de navegacion -->
      <div class="seccion-menu">
        <router-link class="boton-opcion" to="/">
            <div class="icono">
                <img src="../assets/imagenes/iconos/Icon-tickets-default.svg" alt="">
                <img src="../assets/imagenes/iconos/Icon-tickets-activo.svg" alt="">
            </div>
            <span>Tickets</span>
        </router-link>
        <button class="boton-opcion opcion-select" @click="verOpcionesMenu">
          <div class="icono">
            <img src="../assets/imagenes/iconos/Icon-administrar-default.svg" alt="">
          </div>
          <span>Administrar</span>
          <b-icon icon="caret-down-fill" class="icono-select"></b-icon>
          <div class="contenedor-tooltip"></div>
          <div class="contenedor-opciones">
            <button class="boton-opcion">
              <img src="../assets/imagenes/iconos/Icon-admin-usuarios-menu.svg" alt="">
              Usuarios
            </button>
            <button class="boton-opcion">
              <img src="../assets/imagenes/iconos/Icon-admin-config-menu.svg" alt="">
              Configuración
            </button>
            <button class="boton-opcion">
              <img src="../assets/imagenes/iconos/Icon-admin-informes-menu.svg" alt="">
              Informes
            </button>
          </div>
        </button>
      </div>
      <div class="seccion-usuario">
        <div class="contenedor-notificaciones">
          <button class="boton-notificaciones" @click="verNotificacionesUsuario">
            <img src="../assets/imagenes/iconos/icono-campana.svg" alt="">
            <div class="numero">2</div>
          </button>
          <div class="contenedor-opciones">
            <button class="boton-opcion">
              <img src="../assets/imagenes/iconos/icono-disquet-feliz.svg" alt="">
              ¡Proyecto creado!
            </button>
            <button class="boton-opcion">
              <img src="../assets/imagenes/iconos/icono-disquet-feliz.svg" alt="">
              Programaste una actividad
            </button>
            <button class="boton-opcion">
              <img src="../assets/imagenes/iconos/icono-disquet-triste.svg" alt="">
              Actividad descartada
            </button>
            <button class="boton-opcion">
              <img src="../assets/imagenes/iconos/icono-disquet-triste.svg" alt="">
              Parqueaste una actividad
            </button>
          </div>
        </div>
        <div class="contenedor-informacion-usuarios">
          <h4>Rebeca Silver</h4>
          <span>revecasilver@mail.com</span>
        </div>
        <div class="contenedor-opciones-usuarios">
          <button class="boton-opciones" @click="verOpcionesUsuario"></button>
          <div class="contenedor-opciones">
            <button class="boton-opcion" @click="showModalProfile">Perfil</button>
            <!-- <button class="boton-opcion">Salir</button> -->
          </div>
        </div>
    </div>
    <ModalProfile/>
  </div>
  </div>
</template>
<script>
import EventBus from '../bus'
import ModalProfile from '../components/ModalEditProfile'
export default {
  components: {
    ModalProfile
  },
  methods: {
    verNotificacionesUsuario: function () {
      // console.log('hola')
      var opciones = event.target.nextElementSibling
      var alto = opciones.children.length * 45
      console.log(opciones)

      if (opciones.clientHeight === 0) {
        opciones.style.height = alto + 'px'
      } else {
        opciones.removeAttribute('style')
      }
    },
    verOpcionesUsuario: function () {
      var opciones = event.target.nextElementSibling
      var alto = opciones.children.length * 45

      if (opciones.clientHeight === 0) {
        opciones.style.height = alto + 'px'
      } else {
        opciones.removeAttribute('style')
      }
    },
    verOpcionesMenu: function () {
      var opciones = event.target.children[4]
      var tooltip = event.target.children[3]
      var alto = opciones.children.length * 45

      if (opciones.clientHeight === 0) {
        opciones.style.height = alto + 'px'
        tooltip.style.opacity = 0
      } else {
        opciones.removeAttribute('style')
        tooltip.removeAttribute('style')
      }
    },
    showModalProfile () {
      EventBus.$emit('show-modal-profile')
    }
  }
}
</script>
<style lang="scss">
  .contenedor-menu-principal {
    width: 100%;
    height: 60px;
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    background-color: #313E4D;
    display: flex;

    .seccion-logotipo {
      width: auto;
      height: 100%;
      margin: 0;
      padding: 0 25px;
      border: 0;
      border-radius: 0;
      background: transparent;
      display: flex;
      align-items: center;

      .imgagen-wapps {
        // color: #151F29;
        margin-left: 30px;
      }
    }

    .seccion-menu {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 0;
        background: transparent;
        display: flex;
        justify-content: center;

        .boton-opcion {
            width: auto;
            max-width: 200px;
            height: 100%;
            margin: 0;
            padding: 0 20px;
            border: 0;
            border-radius: 0;
            background: transparent;
            display: flex;
            align-items: center;

            .icono {
                width: 18px;
                height: 15px;
                margin: 0 8px 0 0;
                padding: 0;
                border: 0;
                border-radius: 0;
                background: transparent;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                bottom: 1px;

                img {
                    width: 18px;
                    height: 15px;
                    margin: 0;
                    padding: 0;
                    border: 0;
                    border-radius: 0;
                    background: transparent;
                }

                & > :nth-child(2) {
                    display: none;
                }
            }

            span {
                width: auto;
                height: auto;
                margin: 0;
                padding: 0;
                border: 0;
                border-radius: 0;
                background: transparent;
                font-family: 'Mulish', sans-serif;
                font-size: 14px;
                font-weight: 400;
                color: #FFFFFF;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                transition: all 0.3s;
                pointer-events: none;
            }

            &:hover {
                background-color: #24303D;
            }
        }

        .boton-opcion.router-link-exact-active {
            background-color: #FFFFFF;

            .icono {
                & > :nth-child(1) {
                  display: none;
                }

                & > :nth-child(2) {
                  display: block;
                }
            }

            span {
                color: #099FCE;
            }
        }

        .boton-opcion.opcion-select {
            max-width: 280px;
            padding: 0 40px 0 20px;
            position: relative;

            .icono-select {
                width: 10px;
                height: 10px;
                margin: 0;
                padding: 0;
                border: 0;
                border-radius: 0;
                background: transparent;
                color: #FFFFFF;
                position: absolute;
                right: 20px;
                pointer-events: none;
            }

            .contenedor-tooltip {
              position: absolute;
              top: 50px;
              left: 35%;
            }

            .contenedor-opciones {
                width: 157px;
                height: 0px;
                margin: 0;
                padding: 0;
                border: 0;
                border-radius: 10px;
                background: transparent;
                box-shadow: 0px 3px 6px #00000029;
                overflow: hidden;
                position: absolute;
                top: 60px;
                right: 0;
                z-index: 100;
                transition: all 0.3s;

                .boton-opcion {
                    width: 100%;
                    height: 45px;
                    margin: 0;
                    padding: 0 0 0 20px;
                    border: 0;
                    border-radius: 0;
                    background-color: #FFFFFF;
                    font-family: 'Mulish', sans-serif;
                    font-size: 15px;
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

            &:hover {
                .contenedor-tooltip {
                    opacity: 1;
                }
            }
        }
    }

    .seccion-usuario {
      width: auto;
      min-width: 310px;
      height: 100%;
      margin: 0;
      padding: 0 30px;
      border: 0;
      border-radius: 0;
      background: transparent;
      display: flex;

      .contenedor-notificaciones {
        width: auto;
        height: 100%;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 0;
        background: transparent;
        display: flex;
        align-items: center;
        position: relative;

        .boton-notificaciones {
          width: 21px;
          height: 21px;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 0;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;

          img {
              width: 21px;
              height: 21px;
              margin: 0;
              padding: 0;
              border: 0;
              border-radius: 0;
              background: transparent;
              pointer-events: none;
          }

          .numero {
            width: 15px;
            height: 15px;
            margin: 0;
            padding: 0;
            border: 0;
            border-radius: 50%;
            background-color: #E65B3A;
            font-family: 'Mulish', sans-serif;
            font-size: 10px;
            font-weight: 400;
            color: #FFFFFF;
            position: absolute;
            right: -5px;
            bottom: -5px;
            z-index: 10;
            pointer-events: none;
          }
        }

      .contenedor-opciones {
        width: 250px;
        height: 0px;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 10px;
        background: transparent;
        box-shadow: 0px 3px 6px #00000029;
        overflow: hidden;
        position: absolute;
        top: 60px;
        right: 0;
        z-index: 100;
        transition: all 0.3s;

        .boton-opcion {
          width: 100%;
          height: 45px;
          margin: 0;
          padding: 0 0 0 20px;
          border: 0;
          border-radius: 0;
          background-color: #FFFFFF;
          font-family: 'Mulish', sans-serif;
          font-size: 15px;
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

      .contenedor-informacion-usuarios {
        width: auto;
        height: auto;
        margin: 0 10px 0 auto;
        padding: 12px 0;
        border: 0;
        border-radius: 0;
        background: transparent;

        h4 {
            width: 100%;
            height: auto;
            margin: 0;
            padding: 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            font-family: 'Mulish', sans-serif;
            font-size: 14px;
            font-weight: 600;
            color: #F8F9FC;
            text-align: right;
        }

        span {
          width: 100%;
          height: auto;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 0;
          background: transparent;
          font-family: 'Mulish', sans-serif;
          font-size: 12px;
          font-weight: 300;
          color: #F8F9FC;
          text-align: right;
        }
      }

      .contenedor-opciones-usuarios {
        width: 36px;
        height: 100%;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 0;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        .boton-opciones {
            width: 36px;
            min-width: 36px;
            height: 36px;
            margin: 0;
            padding: 0;
            border: 0;
            border-radius: 50%;
            background-color: #FFFFFF;
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
          top: 53px;
          right: 0;
          z-index: 100;
          transition: all 0.3s;

          .boton-opcion {
            width: 100%;
            height: 45px;
            margin: 0;
            padding: 0 0 0 20px;
            border: 0;
            border-radius: 0;
            background-color: #FFFFFF;
            font-family: 'Mulish', sans-serif;
            font-size: 15px;
            font-weight: 600;
            color: #484848;
            display: flex;
            align-items: center;
            transition: all 0.3s;

            &:hover {
              background-color: #F2F3F9;
            }
          }
        }
      }
    }
  }
</style>
