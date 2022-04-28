<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__flex">
        <RouterLink to="/">
          <img src="../assets/img/logo-black.png" alt="Capitalina" />
        </RouterLink>
        <div class="footer__wrap">
          <RouterLink to="/docs" class="footer__link">
            <span class="footer__text">Документация</span>
          </RouterLink>
          <a class="footer__link" href="tel:+88006008280">
            <span class="footer__text">8 (800) 600-82-80</span>
          </a>
          <RouterLink to="/forms" class="footer__button">
            <span class="footer__text footer__text-negative"
              >Получить деньги</span
            >
          </RouterLink>
        </div>
      </div>
      <hr class="footer__line" />
      <p class="footer__article">
        © 2018 - 2022. Общество с ограниченной ответственностью микрокредитная
        компания «Киберлэндинг» (ООО МКК «Киберлэндинг») / Отчет о проведении
        СОУТ. / Организация действует на основании свидетельства о внесении в
        государственный реестр МФО №1803392008777 от 07.03.2018 г. / ИНН:
        1659182700 / ОГРН: 1171690064920 / КПП: 165501001 / Адрес: 420043, г.
        Казань, ул. Вишневского, <br />д.8/35, оф. 11/1 <br />
        Сайт Банка России —
        <a
          class="footer__link-hidden"
          href="https://www.cbr.ru/"
          target="_blank"
          >https://www.cbr.ru/</a
        >, интернет-приемная Банка России —
        <a
          class="footer__link-hidden"
          href="https://www.cbr.ru/reception/"
          target="_blank"
          >https://www.cbr.ru/reception/</a
        >. Страница сайта Банка России, содержащая государственный реестр
        микрофинансовых <br />организаций —
        <a
          class="footer__link-hidden"
          href="https://www.cbr.ru/microfinance/registry/"
          target="_blank"
          >https://www.cbr.ru/microfinance/registry/</a
        >
      </p>
      <p class="footer__article">
        Организация является членом СРО «МиР» с 10.12.2021 г., юридический
        адрес: 107078, г. Москва Орликов переулок, д.5, стр.1, этаж 2, пом.11;
        <a class="footer__link-hidden" href="https://npmir.ru/" target="_blank"
          >https://npmir.ru/</a
        >. 22.11.2021 г. исключено из реестра членов <br />СРО «Единство»
        (420066, г. Казань, ул. Чистопольская, д. 16/15 офис 1,
        <a
          class="footer__link-hidden"
          href="https://sro-mfo.ru/"
          target="_blank"
          >https://sro-mfo.ru/</a
        >)
      </p>
      <p class="footer__article">
        Потребитель финансовых услуг вправе направить обращение финансовому
        уполномоченному в соответствии со статьями 15 — 19 Федерального закона
        от 4 июня 2018 года N 123-ФЗ «Об уполномоченном <br />по правам
        потребителей финансовых услуг». Официальный сайт
        <a
          class="footer__link-hidden"
          href="www.finombudsman.ru"
          target="_blank"
          >www.finombudsman.ru</a
        >, тел. 8 (800) 200-00-10, место нахождения и почтовый адрес 119017, г.
        Москва, Старомонетный переулок, дом 3
      </p>
      <p class="footer__article">
        Все права на товарный знак Capitalina® и контент сайта защищены.
        Финансовый эксперт и консультант компании — Александр Соловьев.
      </p>
      <p class="footer__article">
        Используя наш сайт, вы даете свое согласие на обработку файлов cookie
        согласно политике обработки персональных данных. Эти файлы используются
        для удобства просмотра сайта. Вы можете отказаться от использования
        cookie на основе своих демократических прав в настройках браузера.
      </p>
    </div>
  </footer>
</template>

<style>
.footer {
  /* padding: 52px; */
  background: #ffffff;
  padding-bottom: 52px;
}

.footer__flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
}

.footer__link {
  text-decoration: none;
  margin-left: 40px;
}

.footer__text {
  font-family: "Akzentica 4F";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #282828;
}

.footer__text-negative {
  color: #ffffff;
}

.footer__button {
  background: #282828;
  margin-left: 40px;
  text-decoration: none;
  padding: 16px 24px 15px;
  border: 1px solid #282828;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 10px;
}

.footer__button:hover {
  background: #0f0f0f;
}

.footer__line {
  margin: 0;
  background: #282828;
  opacity: 0.13;
  height: 1px;
  border: 0;
}

.footer__article {
  padding-top: 40px;
  font-family: "Akzentica 4F";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 135%;
  color: #282828;
  opacity: 0.5;
}

.footer__link-hidden {
  text-decoration: none;
  color: #282828;
}
</style>
