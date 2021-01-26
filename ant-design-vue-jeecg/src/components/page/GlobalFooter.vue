<template>
  <div class="footer">
    <div class="copyright">
      Copyright &copy; 2020 <a href="https://www.bistu.edu.cn" target="_blank">北京信息科技大学</a> 出品
      <span>京ICP备 <a href="http://beian.miit.gov.cn/">2020040667</a> 号</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LayoutFooter"
  }
</script>

<style lang="less" scoped>
  .footer {
    padding: 0 16px;
    margin: 24px 0 24px;
    text-align: center;

    .links {
      margin-bottom: 8px;

      a {
        color: rgba(0, 0, 0, .45);

        &:hover {
          color: rgba(0, 0, 0, .65);
        }

        &:not(:last-child) {
          margin-right: 40px;
        }
      }
    }
    .copyright {
      color: rgba(0, 0, 0, .45);
      font-size: 14px;
    }
  }
</style>