<template>
  <b-card class="card_details">
    <b-row>
      <b-col>
        <b-card-text class="title_text"><span>Soporte</span> </b-card-text>
      </b-col>
      <b-col>
        <b-card-text class="body_text"><b-badge pill variant="light"><img src="../assets/imagenes/iconos/Icon-tickets-contador.svg" alt=""> <span>100</span></b-badge></b-card-text>
      </b-col>
    </b-row>
  </b-card>
</template>
<style lang="scss">
  .card_details {
    height: 60px;
    box-shadow: 0px 3px 6px #0000001A;
    border-radius: 5px;
    border: 1px solid #D1D5E9;
    .card-body {
      padding: 17px;
      .title_text{
        text-align: left;
        span {
          font-size: 14px;
          font-weight: 700;
        }
      }
      .body_text {
        text-align: right;
        .badge {
          width: 50px;
          height: 17px;
        }
        .b-icon.bi {
          color: #00B8BD;
        }
        span {
          color: #484848;
          font-size: 12px;
          font-weight: 500;
        }
      }
    }
  }
</style>
