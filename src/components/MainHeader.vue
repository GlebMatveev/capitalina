<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="header">
    <div class="header__back">
      <div class="container header__flex">
        <RouterLink to="/">
          <img src="../assets/img/logo-black-white.png" alt="Capitalina" />
        </RouterLink>
        <div class="header__wrap">
          <RouterLink to="/docs" class="header__link">
            <span class="header__text">Документация</span>
          </RouterLink>
          <a class="header__link" href="tel:+88006008280">
            <span class="header__text">8 (800) 600-82-80</span>
          </a>
          <a class="header__button" href="#">
            <span class="header__text">Личный кабинет</span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
.header {
  background-color: #e68f43;
}

.header__back {
  background-color: rgba(255, 255, 255, 0.1);
}

.header__flex {
  -webkit-backdrop-filter: blur(88px);
  backdrop-filter: blur(88px);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
}

.header__link {
  text-decoration: none;
  margin-left: 40px;
}

.header__text {
  font-family: "Akzentica 4F";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #f5f6fa;
}

.header__button {
  background: #282828;
  margin-left: 40px;
  text-decoration: none;
  padding: 16px 24px 15px;
  border: 1px solid #282828;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 10px;
}

.header__button:hover {
  background: #0f0f0f;
}
</style>
