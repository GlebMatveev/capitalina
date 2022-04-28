<script>
import FormsForm from "@/components/FormsForm.vue";

export default {
  components: {
    FormsForm,
  },
};
</script>

<template>
  <!-- Top part of page -->
  <section class="form__top">
    <div class="form__container">
      <h4 class="form__heading-main">
        Регистрация для получения <br />первого займа
      </h4>
    </div>
  </section>

  <FormsForm />
</template>

<style>
.form__top {
  background: url(../assets/img/form/side-back.png);
  background-repeat: no-repeat;
  background-size: 100%;
}

.form__container {
  margin: 0 auto;
  max-width: 776px;
  padding-left: 15px;
  padding-right: 15px;
}

.form__heading-main {
  padding-top: 48px;
  padding-bottom: 416px;
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 52px;
  color: #ffffff;
}
</style>
