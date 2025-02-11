<template>
  <VRow class="maps-wrap" no-gutters>
    <VCol class="mb-10">
      <span>강원특별자치도 고성군 토성면 용원로 650-11, 1층</span>
    </VCol>
    <VCol :cols="12" align="center">
      <!-- <div class="map-container"> -->
      <div id="map" style="width: 90%; height: 55vh"></div>
      <!-- </div> -->
    </VCol>
  </VRow>
</template>
<script lang="ts" setup>
const map = shallowRef()

useHead({
  script: [{ type: 'text/javascript', src: 'https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=y1fjmf6ydu' }],
})

onMounted(async () => {
  await getObjectAsync(() => globalThis.naver)

  map.value = new globalThis.naver.maps.Map('map', {
    center: new globalThis.naver.maps.LatLng(37.3663172, 127.1066211),
    zoom: 18,
  })

  const marker = new globalThis.naver.maps.Marker({
    position: new globalThis.naver.maps.LatLng(37.365979, 127.1067124),
    map: map.value,
  })

  const contentString = [
    '<div class="iw_inner">',
    '   <h3>(주) 프런티어</h3>',
    '   <p>강원특별자치도 고성군 토성면 용원로 650-11, 1층<br />',

    '       tel: <a href="tel:010-7607-4451">010-7607-4451</a><br />',
    '       e-mail: <a href="mailto:jongju0920@kakao.com">jongju0920@kakao.com</a>',
    '   </p>',
    '</div>',
  ].join('')

  const infoWindow = new globalThis.naver.maps.InfoWindow({
    content: contentString,
    // maxWidth: 478,
  })

  globalThis.naver.maps.Event.addListener(marker, 'click', function (e) {
    if (infoWindow.getMap()) {
      infoWindow.close()
    } else {
      infoWindow.open(map.value, marker)
    }
  })

  infoWindow.open(map.value, marker)
})

const getObjectAsync = (fn: () => any) => {
  return new Promise<any>(resolve => {
    const obj = fn()

    if (obj) {
      resolve(obj)
      return
    }

    const findObj = () => {
      const obj = fn()

      if (obj) {
        resolve(obj)
        return
      }

      setTimeout(() => findObj(), 100)
    }

    setTimeout(() => findObj(), 100)
  })
}
</script>

<style lang="scss">
.maps-wrap {
  .iw_inner {
    padding: 10px;
    text-align: left;

    h3 {
      font-weight: 600;
      margin: 40px 0 18px 0;
    }

    p {
      margin-bottom: 20px;
    }
  }
}
</style>
