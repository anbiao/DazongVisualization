<template>
  <div class="redirect-button-wrapper">
    <dv-decoration-11 style="width:200px;height:60px;">
      <a-button type="link" href="/sensitive">
        全国风险态势感知
      </a-button>
    </dv-decoration-11>
    <dv-decoration-11 style="width:200px;height:60px;">
      <a-button type="link" href="/sensitive/data/">
        区域风险态势感知
      </a-button>
    </dv-decoration-11>
  </div>
</template>

<script>
export default {
  name: 'redirectButton'
}
</script>

<style lang="less">
.redirect-button-wrapper {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: -24px;
  height: 60px;
  width: calc(100% - 20px);
  padding: 0 20%;

  .ant-btn-link {
    color: white;
    font-weight: 600;
  }
}
</style>