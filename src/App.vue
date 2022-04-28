<script setup>
// import { RouterLink, RouterView } from "vue-router";
import { RouterView } from "vue-router";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
</script>

<template>
  <MainHeader />
  <RouterView />
  <!-- <RouterView v-slot="{ Component }">
    <Transition name="slide-fade">
      <Component :is="Component" />
    </Transition>
  </RouterView> -->

  <MainFooter />
</template>
<style>
.fade-enter-active {
  transition: 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

@font-face {
  font-family: "TT Firs Neue";
  src: url("./assets/fonts/TTfirst/TTFirsNeue-Regular.eot");
  src: local("TT Firs Neue Regular"), local("TTFirsNeue-Regular"),
    url("./assets/fonts/TTfirst/TTFirsNeue-Regular.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/TTfirst/TTFirsNeue-Regular.woff2") format("woff2"),
    url("./assets/fonts/TTfirst/TTFirsNeue-Regular.woff") format("woff"),
    url("./assets/fonts/TTfirst/TTFirsNeue-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "TT Firs Neue";
  src: url("./assets/fonts/TTfirst/TTFirsNeue-DemiBold.eot");
  src: local("TT Firs Neue DemiBold"), local("TTFirsNeue-DemiBold"),
    url("./assets/fonts/TTfirst/TTFirsNeue-DemiBold.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/TTfirst/TTFirsNeue-DemiBold.woff2") format("woff2"),
    url("./assets/fonts/TTfirst/TTFirsNeue-DemiBold.woff") format("woff"),
    url("./assets/fonts/TTfirst/TTFirsNeue-DemiBold.ttf") format("truetype");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "Akzentica 4F";
  src: url("./assets/fonts/Akzentica4F/Akzentica4F.eot");
  src: local("Akzentica 4F"), local("Akzentica4F"),
    url("./assets/fonts/Akzentica4F/Akzentica4F.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/Akzentica4F/Akzentica4F.woff2") format("woff2"),
    url("./assets/fonts/Akzentica4F/Akzentica4F.woff") format("woff"),
    url("./assets/fonts/Akzentica4F/Akzentica4F.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Akzentica 4F";
  src: url("./assets/fonts/Akzentica4F/Akzentica4F-Bold.eot");
  src: local("Akzentica 4F Bold"), local("Akzentica4F-Bold"),
    url("./assets/fonts/Akzentica4F/Akzentica4F-Bold.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/Akzentica4F/Akzentica4F-Bold.woff2") format("woff2"),
    url("./assets/fonts/Akzentica4F/Akzentica4F-Bold.woff") format("woff"),
    url("./assets/fonts/Akzentica4F/Akzentica4F-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
}

.visually-hidden {
  position: fixed;
  -webkit-transform: scale(0);
  transform: scale(0);
}

* {
  margin: 0;
  padding: 0;
}

.container {
  margin: 0 auto;
  max-width: 1173px;
  padding-left: 15px;
  padding-right: 15px;
}
</style>
