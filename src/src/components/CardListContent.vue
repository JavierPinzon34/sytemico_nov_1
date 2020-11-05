<template>
  <div class="contenedor-elemento">
    <div class="fila-proyecto" :class="{'fila-amarilla': item.text == 'Pendiente', 'fila-roja': item.text == 'Atrasado', 'fila-tinto': item.text == 'Olvidado', 'fila-morado': item.text == 'Cerrado', 'fila-verde': item.text == 'Cerrado ok'}" >
      <div class="barra-lateral">
        <img v-if="item.text === 'Abierto'" src="../assets/imagenes/iconos/Icon-devolver-ticket.svg" alt="">
      </div>
      <div class="codigo-proyecto">
        <span>T0001</span>
      </div>
      <div class="contenedor-descripcion">
        <h3 class="nombre-proyecto">Sincronización de mis archivos con la plataforma</h3>
        <p class="descripcion-proyecto"><b-badge pill variant="light"><b-icon-paperclip scale="1.5"/> <span>2</span></b-badge> Hola, es necesario dar respuesta al cliente debido a que ya se …</p>
      </div>
      <div class="contenedor-prioridad">
        <span>Alta</span>
      </div>
      <div class="contenedor-estado">
        <div class="estado">
          <div class="informacion-estado">
            <div class="badge-estado"><b-badge pill variant="light">{{ item.text }}</b-badge></div>
            <div class="hora-estado"><a href="#">01:30:06</a> / 4 hrs</div>
          </div>
        </div>
      </div>
      <div class="contenedor-fecha">
        <div class="fecha">
          <div class="informacion-fecha">
            <div class="badge-fecha"><b-badge pill variant="light"><img src="../assets/imagenes/iconos/Calendario.svg" alt=""> 31/12/20</b-badge></div>
            <div class="badge-hora"><b-badge pill variant="light"><img src="../assets/imagenes/iconos/reloj_verde.svg" alt=""> 12:01:06</b-badge></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    numero: {
      type: Number,
      default: () => 0
    }
  }
}
</script>
<style lang="scss">
.contenedor-elemento {
  border: 1px solid #f9f7f7;

  .fila-proyecto {
    width: 100%;
    height: 80px;
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    background: transparent;
    display: flex;

    .barra-lateral {
      width: 20px;
      height: 80px;
      margin: 0;
      padding: 0;
      border: 0;
      border-radius: 0;
      background-color: #0291EB;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 8px;
        height: 15px;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 0;
        background: transparent;
      }
    }

    .codigo-proyecto {
      width: 55px;
      height: 80px;
      margin: 0;
      padding: 0;
      border: 0;
      border-radius: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        color: #354861;
        font-size: 12px;
        font-weight: 600;
      }
    }

    .contenedor-descripcion {
      width: 450px;
      height: 80px;
      margin: 0;
      padding: 10px 5px;
      border: 0;
      border-radius: 0;
      background-color: #FFFFFF;
      position: relative;

      .contenedor-tooltip {
        position: absolute;
        top: 30px;
        left: 60px;
      }

      .nombre-proyecto {
        width: 100%;
        height: auto;
        margin: 8px 0 4px 0;
        padding: 0;
        border: 0;
        border-radius: 0;
        background: transparent;
        font: var(--unnamed-font-style-normal) normal bold 14px/25px Muli;
        font-size: 14px;
        font-weight: 700;
        color: #354861;
        text-align: left;
      }

      .descripcion-proyecto {
        width: 100%;
        height: auto;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 0;
        background: transparent;
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-12)/22px Muli;
        font-size: 12px;
        font-weight: 300;
        color: #484848;
        text-align: left;

        .badge {
          width: 42px;
          height: 17px;
          padding-top: 3px;
          margin-right: 5px;

          .b-icon.bi {
            color: #39C5C8;
          }

          span {
            font-size: 12px;
            font-weight: 300;
            color: #484848;
          }
        }
      }
    }

    .contenedor-prioridad {
      width: 135px;
      height: 80px;
      margin: 0;
      padding: 0;
      border: 0;
      border-radius: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        color: #464E5A;
        font-size: 12px;
        font-weight: 500;
      }
    }

    .contenedor-estado {
      width: 134px;
      min-width: 134px;
      height: 80px;
      margin: 0;
      padding: 0;
      border: 0;
      border-radius: 0;
      background-color: #FFFFFF;

      .estado {
        width: 100%;
        height: auto;
        margin: 0;
        padding: 12px 0 0 0;
        border: 0;
        border-radius: 0;
        background: transparent;
        display: flex;

        .informacion-estado {
          width: 100%;
          height: auto;
          margin: 0 0 0 0px;
          padding: 0;
          border: 0;
          border-radius: 0;
          background: transparent;

          .badge-estado {
            width: 100%;
            height: auto;
            margin: 0;
            padding: 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            text-align: center;

            .badge {
              background-color: #0291EB;
              font-size: 12px;
              font-weight: 400;
              color: #FFFFFF;
              width: 84px;
              height: 20px;
              padding-top: 4px;
            }
          }

          .hora-estado {
            width: 100%;
            height: auto;
            margin: 10px 0 0 0;
            padding: 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            font-size: 12px;
            font-weight: 400;
            color: #484848;
            text-align: center;
            position: relative;
            bottom: 2px;

            a {
              color: #0291EB;
            }
          }
        }
      }

      // parte inferior del cards secion del avatar
      .barra-progreso {
        width: 100%;
        height: 6px;
        margin: 15px 0 0 0;
        padding: 0;
        border: 0;
        border-radius: 2px;
        background-color: #F4F5F8;

        .progreso {
          width: 50%;
          height: 6px;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 2px;
          background-color: #0291EB;
        }
      }
    }

    .contenedor-fecha {
      width: 134px;
      min-width: 134px;
      height: 80px;
      margin: 0;
      padding: 0;
      border: 0;
      border-radius: 0;
      background-color: #FFFFFF;

      .fecha {
        width: 100%;
        height: auto;
        margin: 0;
        padding: 12px 0 0 0;
        border: 0;
        border-radius: 0;
        background: transparent;
        display: flex;

        .informacion-fecha {
          width: 100%;
          height: auto;
          margin: 0 0 0 0px;
          padding: 0;
          border: 0;
          border-radius: 0;
          background: transparent;

          .badge-fecha {
            width: 100%;
            height: auto;
            margin: 0 0 5px 0;
            padding: 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            text-align: center;

            .badge {
              background-color: #F5F9FF;
              font-size: 12px;
              font-weight: 500;
              color: #484848;
              width: 80px;
              height: 17px;
              padding-top: 3px;

              img {
                width: 8px;
                height: 10px;
                display: inline-block;
                vertical-align: unset;
              }
            }
          }

          .badge-hora {
            width: 100%;
            height: auto;
            margin: 0;
            padding: 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            text-align: center;

            .badge {
              background-color: #F5F9FF;
              font-size: 12px;
              font-weight: 500;
              color: #484848;
              width: 80px;
              height: 17px;
              padding-top: 3px;

              img {
                display: inline-block;
                vertical-align: unset;
                width: 10px;
                height: 10px;
              }
            }
          }
        }
      }

      // parte inferior del cards secion del avatar
      .barra-progreso {
        width: 100%;
        height: 6px;
        margin: 15px 0 0 0;
        padding: 0;
        border: 0;
        border-radius: 2px;
        background-color: #F4F5F8;

        .progreso {
          width: 50%;
          height: 6px;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 2px;
          background-color: #34ACE0;
        }
      }
    }

    .contenedor-opciones-proyectos {
      width: 70px;
      height: 80px;
      margin: 0;
      padding: 0;
      border: 0;
      border-radius: 0;
      background-color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      // boton de puntos derecha
      .boton-opciones {
        width: 36px;
        height: 36px;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 50%;
        background: transparent;

        img {
          width: auto;
          height: auto;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 0;
          background: transparent;
          pointer-events: none;
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
        top: 50px;
        right: 40px;
        z-index: 10;
        transition: all 0.3s;

        .boton-opcion {
          width: 100%;
          height: 40px;
          margin: 0;
          padding: 0 0 0 20px;
          border: 0;
          border-radius: 0;
          background-color: #FFFFFF;
          font-family: 'Mulish', sans-serif;
          font-size: 14px;
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
  }

  // colores fila
  .fila-proyecto.fila-roja {
    .barra-lateral {
      background-color: #EB3637;
    }

    .contenedor-estado {
      .estado {
        .informacion-estado {
          .badge-estado {
            .badge {
              background-color: #EB3637;
            }
          }
          .hora-estado {
            a {
              color: #EB3637;
            }
          }
        }
      }
    }
  }

  .fila-proyecto.fila-amarilla {
    .barra-lateral {
      background-color: #FCA213;
    }

    .contenedor-estado {
      .estado {
        .informacion-estado {
          .badge-estado {
            .badge {
              background-color: #FCA213;
            }
          }
          .hora-estado {
            a {
              color: #FCA213;
            }
          }
        }
      }
    }
  }

  .fila-proyecto.fila-tinto {
    .barra-lateral {
      background-color: #740000;
    }

    .contenedor-estado {
      .estado {
        .informacion-estado {
          .badge-estado {
            .badge {
              background-color: #740000;
            }
          }
          .hora-estado {
            a {
              color: #740000;
            }
          }
        }
      }
    }
  }

  .fila-proyecto.fila-morado {
    .barra-lateral {
      background-color: #A6AAB2;
    }
    .codigo-proyecto {
      span {
        color: #A6AAB2;
      }
    }
    .contenedor-descripcion {
      .nombre-proyecto {
        color: #A6AAB2;
      }
      .descripcion-proyecto {
        color: #A6AAB2;
        .badge {
          .b-icon.bi {
            color: #A6AAB2;
          }
          span {
            color: #A6AAB2;
          }
        }
      }
    }
    .contenedor-prioridad {
      span {
        color: #A6AAB2;
      }
    }
    .contenedor-estado {
      .estado {
        .informacion-estado {
          .badge-estado {
            .badge {
              background-color: #6C2CFD;
            }
          }
          .hora-estado {
            color: #A6AAB2;
            a {
              color: #A6AAB2;
            }
          }
        }
      }
    }
    .contenedor-fecha {
      .fecha {
        .informacion-fecha {
          .badge-fecha {
            .badge {
              color: #A6AAB2;
              img {
                color: #A6AAB2;
              }
            }
          }
          .badge-hora {
            .badge {
              color: #A6AAB2;
              img {
                color: #A6AAB2;
              }
            }
          }
        }
      }
    }
  }

  .fila-proyecto.fila-verde {
    .barra-lateral {
      background-color: #A6AAB2;
    }
    .codigo-proyecto {
      span {
        color: #A6AAB2;
      }
    }
    .contenedor-descripcion {
      .nombre-proyecto {
        color: #A6AAB2;
      }
      .descripcion-proyecto {
        color: #A6AAB2;
        .badge {
          .b-icon.bi {
            color: #A6AAB2;
          }
          span {
            color: #A6AAB2;
          }
        }
      }
    }
    .contenedor-prioridad {
      span {
        color: #A6AAB2;
      }
    }
    .contenedor-estado {
      .estado {
        .informacion-estado {
          .badge-estado {
            .badge {
              background-color: #01CC19;
            }
          }
          .hora-estado {
            color: #A6AAB2;
            a {
              color: #A6AAB2;
            }
          }
        }
      }
    }
    .contenedor-fecha {
      .fecha {
        .informacion-fecha {
          .badge-fecha {
            .badge {
              color: #A6AAB2;
              img {
                color: #A6AAB2;
              }
            }
          }
          .badge-hora {
            .badge {
              color: #A6AAB2;
              img {
                color: #A6AAB2;
              }
            }
          }
        }
      }
    }
  }
}
</style>
