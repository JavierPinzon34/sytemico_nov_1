<template>
  <div>
    <div class="contenedor-menu-principal">
      <div class="seccion-logotipo">
        <img src="../assets/imagenes/logotipos/Logo-Grumpyturtle-Blanco.svg" alt="">
        <b-icon-grid3x3-gap-fill scale="2"/>
      </div>
      <div class="seccion-menu">
        <button class="boton-opcion">
            <!-- <div class="icono">
                <img src="../assets/imagenes/iconos/icono-proyectos.svg" alt="">
                <img src="../assets/imagenes/iconos/icono-proyectos-azul.svg" alt="">
            </div>
            <span>Proyectos</span> -->
        </button>
        <button class="boton-opcion">
            <!-- <div class="icono">
                <img src="../assets/imagenes/iconos/icono-actividades.svg" alt="">
                <img src="../assets/imagenes/iconos/icono-actividades-azul.svg" alt="">
            </div>
            <span>Actividades</span> -->
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
          <button class="boton-opciones"></button>
          <div class="contenedor-opciones">
            <button class="boton-opcion">Opciones</button>
            <button class="boton-opcion">Salir</button>
          </div>
        </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
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

      .b-icon.bi {
        color: #151F29;
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
          top: 60px;
          right: 0;
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
