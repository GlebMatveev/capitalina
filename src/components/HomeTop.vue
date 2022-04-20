<template>
  <section class="top">
    <div class="container">
      <div class="top__wrap">
        <h1 class="top__heading">
          Быстрые займы<br />
          <span class="top__heading top__heading-accented">онлайн</span>
        </h1>
        <span class="top__text"
          >Бесплатно для новых клиентов при погашении займа в срок</span
        >
        <ul class="top__list">
          <li class="top__list-item">Заполните заявку на сайте</li>
          <li class="top__list-item">Узнайте решение через несколько минут</li>
          <li class="top__list-item">Получите деньги на свою карту</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style>
.top {
  background: url(../assets/img/top/top-back.png),
    -webkit-gradient(linear, left top, left bottom, from(#e68f43), to(#b1580a));
  background: url(../assets/img/top/top-back.png),
    linear-gradient(180deg, #e68f43 0%, #b1580a 100%);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% auto;
}

.top__wrap {
  max-width: 520px;
  padding: 90px 0 522px 0;
}

.top__heading {
  display: inline-block;
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 110%;
  color: #f5f6fa;
}

.top__heading-accented {
  color: #282828;
}

.top__text {
  display: inline-block;
  font-family: "Akzentica 4F";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 120%;
  color: #ffffff;
  margin-top: 16px;
  margin-bottom: 48px;
}

.top__list {
  list-style: none;
  list-style-image: url(../assets/img/top/check.png);
  font-family: "Akzentica 4F";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 180%;
  color: #ffffff;
  padding-left: 30px;
}

.top__list-item {
  padding-left: 15px;
}

@media (max-width: 1440px) {
  .top {
    background-size: auto auto;
  }
}
</style>
