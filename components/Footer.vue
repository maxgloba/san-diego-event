<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <img src="@/assets/img/logo.svg" />
        <p class="footer-copyright">All Rights Reserved - Geekout {{ new Date().getFullYear() }}</p>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  background: #230d2d;
  padding: 30px 0;
  font-size: 18px;
  line-height: 21px;
  font-weight: 400;
  color: #ffffff;
  @media (min-width: 768px) {
    padding: 40px 0;
  }
  &-content {
    display: flex;
    align-items: center;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }
    img {
      width: 100%;
      max-height: 70px;
      margin-bottom: 30px;
      max-width: 80px;
      @media (min-width: 768px) {
        margin-bottom: 0;
        max-width: 130px;
      }
    }
  }
  p {
    margin: 0;
  }
  &-copyright {
    width: 100%;
    text-align: center;
  }
}

.page-sdreplays{
  .footer {
    margin-bottom: 0;
  }
}
</style>