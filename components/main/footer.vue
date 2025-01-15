<template>
  <VContainer :fluid="true" noGutters>
    <VRow class="contact-us-row">
      <VCol cols="12" style="height: 10px; padding-bottom: 0">
        <div class="section-title">Contact Us</div>
        <VDivider :thickness="2" length="250px"></VDivider>
      </VCol>
      <!-- <VCol style="padding-top: 0" :sm="0" :md="5"></VCol> -->
      <VCol :offset-md="5" :md="7" :sm="12" style="padding-top: 0">
        <v-container class="content">
          <VRow justify="end">
            <VCol>
              <span class="site">
                <a href="//www.frontiers.co.kr">www.frontiers.co.kr</a>
              </span>
            </VCol>
            <VCol>
              <span class="mail">
                <a href="mailto:jongju0920@kakao.com">jongju0920@kakao.com</a>
              </span>
            </VCol>
          </VRow>
          <VRow justify="end">
            <VCol
              ><span class="phone"><a href="tel:010-7607-4451">010-7607-4451</a></span></VCol
            >
            <VCol
              ><span class="fax"><a href="fax:0504-163-4451">0504-163-4451</a></span></VCol
            >
          </VRow>
        </v-container>
      </VCol>
    </VRow>
  </VContainer>
  <VFooter class="bg-grey-darken-4 d-flex flex-column align-stretch">
    <div class="pt-0 flex-1-1-100">
      <VDivider color="white mt-10 mb-3" :thickness="2" />

      FRONTIER <span class="ml-1 mr-1">|</span> 대표전화 : <a href="tel:010-7607-4451">010-7607-4451</a> <span class="ml-1 mr-1">|</span> 팩스 :
      <a href="fax:0504-163-4451">0504-163-4451</a> <span class="ml-1 mr-1">|</span> 이메일 :
      <a href="mailto:jongju0920@kakao.com">jongju0920@kakao.com</a> <br />
      주소 : 강원특별자치도 고성군 죽왕면 동해대로 5582
    </div>
  </VFooter>
</template>
<script setup lang="ts"></script>
<style lang="scss">
footer.v-footer {
  padding: 0 95px 50px 95px;

  a {
    color: #fff;
    text-decoration: none;
  }

  @media (max-width: 630px) {
    padding: 0 3vw 50px 3vw;
  }
}

.contact-us-row {
  min-height: 335px;
  background-image: url('/img/main-contact.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  padding-bottom: 0;
  // padding-left: 95px;
  // padding-top: 40px;

  padding-left: 5vh;
  padding-top: 5vh;

  @media (max-width: 630px) {
    padding-left: 1vh;
    padding-top: 1vh;
  }

  .v-divider {
    margin-top: 16px;

    @media (max-width: 630px) {
      margin-top: 0;
    }
  }

  .section-title {
    font-size: 32px;
    font-weight: 700;
  }

  .v-divider {
    opacity: 1;
  }

  .content {
    @media (max-width: 630px) {
      padding-top: 9vh;
    }

    span {
      display: flex;
      align-items: center;
      line-height: 1;
      font-size: 20px;
      font-weight: 500;
      min-width: 250px;

      a {
        color: #fff;
        text-decoration: none;
      }

      &.site {
        background: url('/icon/web-site.png') no-repeat 0 0/1.6rem;
      }

      &.mail {
        background: url('/icon/mail.png') no-repeat 0 0/1.6rem;
      }

      &.phone {
        background: url('/icon/phone.png') no-repeat 0 0/1.4rem;
      }

      &.fax {
        background: url('/icon/fax.png') no-repeat 0 0/1.6rem;
      }

      &::before {
        width: 2.6rem;
        height: 1.6rem;
        content: '';
        display: inline-flex;
      }
    }
  }
}
</style>
