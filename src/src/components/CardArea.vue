<template>
  <div class="card_area">
    <b-card header-tag="header">
      <template #header>
        <span><b-icon-list-task scale="2"/> Área</span>
      </template>
      <b-card class="card_details">
        <b-row>
          <b-col>
            <b-card-text class="title_text"><span>Soporte</span> </b-card-text>
          </b-col>
          <b-col>
            <b-card-text class="body_text"><b-badge pill variant="light"><b-icon-tag-fill/> <span>100</span></b-badge></b-card-text>
          </b-col>
        </b-row>
      </b-card>
    </b-card>
  </div>
</template>
<style lang="scss">
  .card_area {
    .card-header {
      background-color: #FFFFFF;
      text-align: left;
      border-bottom: 3px solid #006DA7;
      height: 47px;
      span{
        font-size: 16px;
        font-weight: 700;
      }
      .b-icon.bi {
        margin-right: 30px;
        color: #006DA7;
      }
    }
    .card-body {
      .card_details {
        box-shadow: 0px 3px 6px #0000001A;
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
  }
</style>
