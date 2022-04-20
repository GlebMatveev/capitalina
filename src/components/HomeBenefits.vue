<template>
  <section class="benefits">
    <div class="benefits__flex container">
      <div class="benefits__info">
        <h3 class="benefits__heading">
          Перимущества<br />
          получить займ<br />
          в нашей компании
        </h3>
        <span class="benefits__colorSpan-big">90%<br /></span>
        <span class="benefits__colorSpan">одобрений</span>
      </div>
      <table class="benefits__table">
        <tr>
          <td>
            <img src="../assets/img/benefits/clock.png" alt="clock" />
            <span class="benefits__span"
              >Деньги за 1 минуту<br />после одобрения</span
            >
          </td>
          <td>
            <img src="../assets/img/benefits/calendar.png" alt="calendar" />
            <span class="benefits__span">Продление<br />без штрафов</span>
          </td>
          <td>
            <img src="../assets/img/benefits/security.png" alt="security" />
            <span class="benefits__span"
              >Безопасность<br />персональных данных</span
            >
          </td>
        </tr>
        <tr>
          <td>
            <img src="../assets/img/benefits/24-hours.png" alt="24-hours" />
            <span class="benefits__span"
              >Погашение займа<br />24 часа без комиссии</span
            >
          </td>
          <td>
            <img src="../assets/img/benefits/discount.png" alt="discount" />
            <span class="benefits__span"
              >Премиум услуги для<br />постоянных клиентов</span
            >
          </td>
          <td>
            <img src="../assets/img/benefits/like.png" alt="like" />
            <span class="benefits__span">Улучшение кредитной<br />истории</span>
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>
<style>
.benefits__flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 100px 0;
  background: url(../assets/img/benefits/benefits-back.png);
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-repeat: no-repeat;
}

.benefits__heading {
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 600;
  font-size: 46px;
  line-height: 120%;
  color: #282828;
}

.benefits__table {
  border-collapse: collapse;
  border: 3px solid white;
}

.benefits__table td {
  border: 2px dashed grey;
  padding: 31px;
}

.benefits__span {
  font-family: "Akzentica 4F";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: grey;
}

.benefits__colorSpan-big {
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 130%;
  color: #e68f43;
}

.benefits__colorSpan {
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  color: #e68f43;
}
</style>
