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
        <b-dropdown id="dropdown-1" class="boton-opcion">
          <template #button-content>
            <img class="mr-2" src="../assets/imagenes/iconos/Icon-administrar-default.svg" alt="">
            <span class="mr-1">Administrar </span>
          </template>
          <b-dropdown-item>
            <img class="mr-3" src="../assets/imagenes/iconos/Icon-admin-usuarios-menu.svg" alt="">
            <span>Usuarios</span>
          </b-dropdown-item>
          <b-dropdown-item>
            <img class="mr-3" src="../assets/imagenes/iconos/Icon-admin-config-menu.svg" alt="">
            <span>Configuración</span>
          </b-dropdown-item>
          <b-dropdown-item>
            <img class="mr-3" src="../assets/imagenes/iconos/Icon-admin-informes-menu.svg" alt="">
            <span>Informes</span>
          </b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="seccion-usuario">
        <div class="contenedor-notificaciones">
          <b-dropdown id="dropdown-1" class="boton-opcion" no-caret>
            <template #button-content>
              <img src="../assets/imagenes/iconos/icono-campana.svg" alt="">
              <b-badge pill variant="danger">2</b-badge>
            </template>
            <b-dropdown-item>
              <img src="../assets/imagenes/iconos/icono-disquet-feliz.svg" alt="">
              <span>¡Proyecto creado!</span>
            </b-dropdown-item>
            <b-dropdown-item>
              <img src="../assets/imagenes/iconos/icono-disquet-feliz.svg" alt="">
              <span>Programaste una actividad</span>
            </b-dropdown-item>
            <b-dropdown-item>
              <img src="../assets/imagenes/iconos/icono-disquet-triste.svg" alt="">
              <span>Actividad descartada</span>
            </b-dropdown-item>
            <b-dropdown-item>
              <img src="../assets/imagenes/iconos/icono-disquet-triste.svg" alt="">
              <span>Parqueaste una actividad</span>
            </b-dropdown-item>
          </b-dropdown>
        </div>
        <div class="contenedor-informacion-usuarios">
          <h4>Rebeca Silver</h4>
          <span>revecasilver@mail.com</span>
        </div>
        <div class="contenedor-opciones-usuarios">
          <b-dropdown id="dropdown-1" class="boton-opciones" no-caret>
            <b-dropdown-item class="boton-opcion" @click="showModalProfile">
              <span>Perfil</span>
            </b-dropdown-item>
          </b-dropdown>
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

        ul {
          top: 9px !important;
          left: -21px !important;
          padding: unset;
          width: 186px;
          height: 153px;
          li {
            height: 50px;
            width: 100%;
            vertical-align: .100em;
            .dropdown-item {
              height: 50px;
              padding-top: 14px;
              padding-bottom: 14px;
              span {
                color: #464E5A;
                font-size: 14px;
                font-weight: 600;
              }
              &:active {
                background-color: #F5F9FF;
              }
            }
          }
        }

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

            .btn {
              background-color: transparent;
              border: unset;
              &::after {
                vertical-align: .100em;
              }
              &:focus {
                border: unset;
                box-shadow: unset;
              }
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
        .btn {
          background-color: transparent;
          border: unset;
          .badge {
            top: 6px;
            left: -6px;
            font-size: 9px;
          }
          &:focus {
            box-shadow: unset;
          }
        }
        ul {
          top: 9px !important;
          left: -235px !important;
          padding: unset;
          width: 260px;
          height: 203px;
          transition: all 0.5s;
          li {
            height: 50px;
            width: 100%;
            vertical-align: .100em;
            .dropdown-item {
              height: 50px;
              padding-top: 14px;
              padding-bottom: 14px;
              span {
                color: #464E5A;
                font-size: 14px;
                font-weight: 600;
              }
              &:active {
                background-color: #F5F9FF;
              }
            }
            img {
              width: 18px;
              height: 15px;
              margin: 0 10px 0 0;
              padding: 0;
              border: 0;
              border-radius: 0;
              background: transparent;
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

          .btn {
            border-radius: 50%;
            background-color: #FFFFFF;
            &:focus {
              box-shadow: unset;
            }
          }
          ul {
            top: 5px !important;
            left: -30px !important;
            padding: unset;
            height: 43px;
            min-width: 20px;
            width: 110px;
            li {
              height: 42px;
              vertical-align: .100em;
              .dropdown-item {
                height: 40px;
                padding-top: 9px;
                padding-bottom: 9px;
                span {
                  color: #464E5A;
                  font-size: 14px;
                  font-weight: 600;
                }
                &:active {
                  background-color: #F5F9FF;
                }
                &:hover {
                  border-radius: 10px;
                }
              }
            }
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
