<template>
  <div class="card_area mb-4">
    <b-card header-tag="header" class="card-area-content">
      <template #header>
        <span><img src="../assets/imagenes/iconos/Icon-col-areas.svg" alt=""> Área</span>
      </template>
      <CardAreaContent/>
    </b-card>
  </div>
</template>
<script>
import CardAreaContent from './CardAreaContent'
export default {
  components: {
    CardAreaContent
  }
}
</script>
<style lang="scss">
  .card_area {
    .card-area-content {
      height: 658px;
      border: 1px solid #F4F5F8;
      .card-header {
        background-color: #FFFFFF;
        text-align: left;
        border-bottom: 3px solid #006DA7;
        height: 47px;
        span{
          font-size: 16px;
          font-weight: 700;
        }
        img {
          margin-right: 30px;
          color: #006DA7;
        }
      }
    }
  }
</style>
