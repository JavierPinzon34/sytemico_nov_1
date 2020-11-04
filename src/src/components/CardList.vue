<template>
  <div class="card_list">
    <b-card header-tag="header">
      <template #header>
        <span><b-icon-tag-fill scale="2"/> Listado de tickets</span>
      </template>
      <b-card-text>Header and footers</b-card-text>
    </b-card>
  </div>
</template>
<style lang="scss">
  .card_list {
    .card-header {
      background-color: #FFFFFF;
      text-align: left;
      border-bottom: 3px solid #0094D1;
      height: 47px;

      span{
        font-size: 16px;
        font-weight: 700;
      }

      .b-icon.bi {
        margin-right: 30px;
        color: #0094D1;
      }
    }
  }
</style>
