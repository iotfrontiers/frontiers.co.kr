<template>
  <div>
    <VRow no-gutters>
      <VCol :cols="12">
        <p class="mb-2">고객과 함께 성장하고 신뢰받는</p>

        <p class="font-weight-black">Computing Innovation Partner</p>
      </VCol>
    </VRow>
    <VRow class="mb-13 mt-6">
      <VCol :cols="12">
        <img src="/img/corp-intro.png" />
      </VCol>
    </VRow>
    <VRow>
      <VCol :cols="12" md="" xl="" sm="">
        <p>
          프런티어는 “사람과 기술”을 중시하는 사상을 가지고 2019년 설립되었으며, 신뢰도 높은 IT제품을 기반으로 고객과 함께 성장해 왔습니다. 최근
          글로벌 환경에서 불확실성과 복잡성이 더해지는 가운데 클라우드,인공지능, 빅데이터 등 최신 IT 기술이 산업 전반에 활용 되는 디지털 대전환의
          도전에 직면해 있습니다.
        </p>
        <br />
        <p>
          고객 비즈니스도 4차 산업혁명 등 IT 트랜드의 새로운 변화에 유연하고 민첩하게 대응하기 위해서는 미래 혁신을 선도할 수 있는 기업 가치와
          경쟁력을 지속적으로 강화해야 합니다.
        </p>
      </VCol>
      <v-divider class="ms-2 me-2 mt-4 mb-4" :vertical="false" v-if="mobile"></v-divider>
      <v-divider class="ms-2 me-2 mt-4 mb-4" :vertical="true" v-if="!mobile"></v-divider>
      <VCol :cols="12" md="" xl="" sm="">
        <p>
          저희는 고객의 요구를 깊게 충분히 이해하고, 당사의 기술을 통한 고객 니즈에 신속하게 대응할 수 있는 독창적인 서비스로 고객에게 신뢰 받는
          기업으로 자리 매김 하고자 합니다. 프런티어와 함께하는 고객님들에게 최고의 서비스를 제공하고자 노력하겠습니다.
        </p>
        <br />
        <p>
          또한 저희는 'IoT' 기술을 접목한 디스플레이와 스마트 팩토리 자동화 사업을 영위하고 있으며 S/W & H/W개발 사업을 통해 다양한 고객들의 만족을
          드리고 있습니다. 저희는 끊임없는 혁신과 기술을 바탕으로 기업가치를 제공하여 고객, 직원이 모두 만족하는 지속가능 기업으로 성장하기 위해 모든
          역량을 집중할 것 입니다.
        </p>
        <br />
        <p style="text-align: right; padding-right: 15px" class="font-weight-bold">대표이사 정규용</p>
      </VCol>
    </VRow>
  </div>
</template>
<script lang="ts" setup>
import { useDisplay } from 'vuetify'

const { xs: mobile } = useDisplay()
</script>
