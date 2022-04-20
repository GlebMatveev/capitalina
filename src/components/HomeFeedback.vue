<template>
  <section class="feedback">
    <div class="feedback__wrapper">
      <div class="container feedback__container">
        <h3 class="feedback__heading">Наши клиенты о нас</h3>
        <div class="feedback__carousel">
          <div class="feedback__item">
            <div class="feedback__item-top">
              <img src="../assets/img/feedback/user-1.png" alt="Photo" />
              <h5 class="feedback__name">Светлана К.</h5>
            </div>
            <p class="feedback__text">
              Моя жена просто обожает Apple, и я решил порадовать ее новым
              айфоном. Мне не хватало 9000 рублей. Заявку одобряли слишком
              долго, целых 40 минут, зато я получил беспроцентный займ!
            </p>
          </div>
          <div class="feedback__item">
            <div class="feedback__item-top">
              <img src="../assets/img/feedback/user-2.png" alt="Photo" />
              <h5 class="feedback__name">Андрей С.</h5>
            </div>
            <p class="feedback__text">
              Были на отдыхе в Турции, но немного не подрассчитали с деньгами.
              Спасибо Capitalina, заняли денег, чтобы вернуться домой. А так как
              займ был пятый по счету, так еще и с хорошей скидкой!
            </p>
          </div>
          <div class="feedback__item">
            <div class="feedback__item-top">
              <img src="../assets/img/feedback/user-3.png" alt="Photo" />
              <h5 class="feedback__name">Константин Б.</h5>
            </div>
            <p class="feedback__text">
              Зашли с дочкой в зоомагазин, и ей захотелось кролика. Кролик,
              клетка, корм стоили 2 500 рублей. Capitalina быстро одобрили
              заявку, и счастливый ребенок получил нового друга.
            </p>
          </div>
        </div>
        <div class="feedback__partners">
          <div class="feedback__logo-wrapper">
            <img src="../assets/img/partners/robokassa.svg" alt="Robokassa" />
          </div>
          <div class="feedback__logo-wrapper">
            <img src="../assets/img/partners/paypal.svg" alt="Paypal" />
          </div>
          <div class="feedback__logo-wrapper">
            <img src="../assets/img/partners/belcart.svg" alt="Belcart" />
          </div>
          <div class="feedback__logo-wrapper">
            <img src="../assets/img/partners/westun.svg" alt="Western Union" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.feedback {
  background-color: #e5e5e5;
}

.feedback__wrapper {
  background: url(../assets/img/feedback/feedback-back.png);
  background-position: bottom;
  background-repeat: no-repeat;
  padding-top: 124px;
  padding-bottom: 154px;
}

.feedback__heading {
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 600;
  font-size: 42px;
  line-height: 120%;
  color: #282828;
  padding-bottom: 24px;
}

.feedback__carousel {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 102px;
}

.feedback__item {
  padding: 32px;
  background: #fafafc;
  border-radius: 20px;
}

.feedback__item-top {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-bottom: 20px;
}

.feedback__name {
  padding-left: 24px;
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #282828;
}

.feedback__text {
  font-family: "Akzentica 4F";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #8a8a8a;
}

.feedback__partners {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.feedback__logo-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-right: 2px dashed #8a8a8a;
}

.feedback__logo-wrapper:last-child {
  border-right: none;
}
</style>
