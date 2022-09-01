<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-10 col-xl-8 mx-auto">
        <MapComponent />
      </div>
    </div>
  </div>
</template>

<script>
import MapComponent from '@/components/MapComponent';

export default {
  name: "MapPage",
  components: {
    MapComponent
  }
}
</script>

