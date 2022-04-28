<script>
import HomeCalc from "@/components/HomeCalc.vue";

export default {
  components: {
    HomeCalc,
  },
};
</script>

<template>
  <section class="get-loan">
    <div class="get-loan__wrapper">
      <div class="container">
        <div class="get-loan__top">
          <HomeCalc />

          <div class="get-loan__payments">
            <h3 class="get-loan__heading-big">
              Удобно получать и погашать займы
            </h3>
            <div class="get-loan__block">
              <div class="get-loan__image-block">
                <img src="../assets/img/payments/visa.png" alt="visa" />
              </div>
              <div class="get-loan__image-block">
                <img src="../assets/img/payments/yumoney.png" alt="yumoney" />
              </div>
              <div class="get-loan__image-block">
                <img src="../assets/img/payments/mir.png" alt="mir" />
              </div>
              <div class="get-loan__image-block">
                <img
                  src="../assets/img/payments/mastercard.png"
                  alt="mastercard"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="get-loan__bottom">
          <h3 class="get-loan__heading-big">Как получить займ?</h3>
          <div class="get-loan__wrap">
            <div class="get-loan__item">
              <img src="../assets/img/get-loan/phone.png" alt="Phone" />
              <h5 class="get-loan__heading-small">1. Заполните анкету</h5>
              <span class="get-loan__text"
                >Паспортные данные, номер телефона
              </span>
            </div>
            <div class="get-loan__item">
              <img src="../assets/img/get-loan/invoice.png" alt="Invoice" />
              <h5 class="get-loan__heading-small">2. Ожидайте ответа</h5>
              <span class="get-loan__text">Вы получите e-mail и SMS</span>
            </div>
            <div class="get-loan__item">
              <img src="../assets/img/get-loan/wallet.png" alt="Wallet" />
              <h5 class="get-loan__heading-small">3. Получите мгновенно</h5>
              <span class="get-loan__text">На банковскую карту или ЮMoney</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.get-loan {
  background: #fdfdfe;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(27.45%, #fdfdfe),
    to(#e5e5e5)
  );
  background: linear-gradient(180deg, #fdfdfe 27.45%, #e5e5e5 100%);
}

.get-loan__wrapper {
  background: url(../assets/img/get-loan/get-loan-back.png);
  background-position: top;
  padding: 130px 0 124px 0;
}

.get-loan__top {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  position: relative;
}

.get-loan__payments {
  width: 477px;
}

.get-loan__block {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding-top: 32px;
}

.get-loan__image-block {
  background: #eff0f4;
  border-radius: 12px;
  width: 108px;
  height: 80px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.get-loan__heading-big {
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 600;
  font-size: 46px;
  line-height: 64px;
  color: #282828;
}

.get-loan__bottom {
  margin-top: 127px;
}

.get-loan__wrap {
  padding-top: 29px;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 26px;
}

.get-loan__item {
  background: #fafafc;
  border-radius: 20px;
  padding: 32px;
}

.get-loan__heading-small {
  padding: 32px 0 8px 0;
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #282828;
}

.get-loan__text {
  font-family: "Akzentica 4F";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 180%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #8a8a8a;
}
</style>
