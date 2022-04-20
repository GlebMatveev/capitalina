<script setup>
// import { RouterLink } from "vue-router";
</script>

<script>
export default {
  data() {
    return {
      sumMin: 1000,
      sumMax: 50000,
      sumValue: 10000,
      sumStep: 1000,

      termMin: 1,
      termMax: 30,
      termValue: 7,
      termStep: 1,

      loanPercent: 1,
      returnAmount: 0,
    };
  },
  computed: {
    calcReturnAmount() {
      let loanRate = this.loanPercent / 100;
      let oneDayProfit = Number(this.sumValue) * loanRate;
      return (this.returnAmount =
        oneDayProfit * Number(this.termValue) + Number(this.sumValue));
    },
  },
  mounted() {
    this.calcReturnAmount;

    // this.updatedValues;

    for (let e of document.querySelectorAll(
      'input[type="range"].slider-progress'
    )) {
      e.style.setProperty("--value", e.value);
      e.style.setProperty("--min", e.min == "" ? "0" : e.min);
      e.style.setProperty("--max", e.max == "" ? "100" : e.max);
      e.addEventListener("input", () =>
        e.style.setProperty("--value", e.value)
      );
    }
  },
};
</script>

<template>
  <!-- Calc -->
  <div class="calc">
    <h4 class="calc__heading-big">Первый займ без процентов</h4>
    <span class="calc__heading-span">Первый заем — до 15 000 ₽</span>
    <div class="calc__amount-block">
      <span class="calc__amount">{{ sumValue }} ₽</span>
    </div>
    <input
      class="calc__slider slider-progress"
      type="range"
      name="amount"
      :min="sumMin"
      :max="sumMax"
      :step="sumStep"
      v-model="sumValue"
      @input="calcReturnAmount"
    />
    <div class="calc__slider-text-wrapper">
      <p>
        {{ sumMin }}
        <!-- <span class="calc__slider-zero-span">000</span> -->
        <span class="calc__slider-sum-span">₽</span>
      </p>
      <p>{{ sumMax }}<span class="calc__slider-sum-span">₽</span></p>
    </div>
    <hr class="calc__line" />
    <div class="calc__slider-text-wrapper calc__slider-text-wrapper_text-gray">
      <p>
        На срок: <span class="calc__slider-day-span">{{ termValue }} день</span>
      </p>
      <p>6 апреля 2022</p>
    </div>
    <input
      class="calc__slider slider-progress"
      type="range"
      name="term"
      :min="termMin"
      :max="termMax"
      :step="termStep"
      v-model="termValue"
      @input="calcReturnAmount"
    />
    <div class="calc__slider-text-wrapper">
      <p>{{ termMin }} дней</p>
      <p>{{ termMax }} дней</p>
    </div>
    <div class="calc__wrap">
      <div class="calc__item">
        <h5 class="calc__heading-small">Займ</h5>
        <span class="calc__span-big">{{ sumValue }} ₽</span>
      </div>
      <div class="calc__item">
        <h5 class="calc__heading-small">К возврату</h5>
        <span class="calc__span-big">{{ returnAmount }} ₽</span>
      </div>
    </div>
    <RouterLink to="/forms">
      <button class="calc__submit" type="submit">Получить деньги</button>
    </RouterLink>
    <p class="calc__span calc__disclaimer">
      1% в день от 5 000 руб. на срок от 7 дней<br />Индивидуальные условия.
      Возможно досрочное погашение<br />
      с оплатой только за дни пользования займом.
    </p>
  </div>
</template>

<style>
.calc {
  position: absolute;
  padding: 40px 50px;
  width: 477px;
  height: 660px;
  left: 0;
  bottom: 0;
  background: #fdfdfe;
  -webkit-box-shadow: 0px 12px 88px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 12px 88px rgba(0, 0, 0, 0.16);
  border-radius: 24px;
  /*progress support*/
  /*webkit*/
}

.calc__heading-big {
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 140%;
  color: #282828;
}

.calc__heading-span {
  font-family: "Akzentica 4F";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 135%;
  color: #8a8a8a;
}

.calc__amount-block {
  margin-top: 24px;
  margin-bottom: 18px;
  background-color: #eff0f4;
  border-radius: 20px;
  padding: 14px 14px;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.calc__amount {
  padding: 14px auto;
  font-family: "Akzentica 4F";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 140%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  text-align: center;
  color: #e68f43;
}

.calc__slider-text-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  font-family: "Akzentica 4F";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 180%;
  color: #e68f43;
}

.calc__slider-text-wrapper_text-gray {
  color: #8a8a8a;
}

.calc__slider-zero-span {
  margin-left: 3px;
}

.calc__slider-sum-span {
  margin-left: 5px;
  color: #8a8a8a;
}

.calc__slider-day-span {
  font-weight: 700;
}

.calc__line {
  margin: 24px 0;
  height: 1px;
  border: 0;
  background-color: #8a8a8a;
  opacity: 0.2;
}

.calc__wrap {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 7px;
  margin: 32px 0;
}

.calc__item {
  padding: 12px 24px;
  background-color: #eff0f4;
  border-radius: 20px;
}

.calc__heading-small {
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
  color: #e68f43;
}

.calc__span {
  font-family: "Akzentica 4F";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 125%;
  text-align: center;
  color: #8a8a8a;
}

.calc__span-big {
  font-family: "Akzentica 4F";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 180%;
  color: #8a8a8a;
}

.calc__submit {
  width: 100%;
  padding: 16px 0;
  margin-bottom: 24px;
  border: none;
  border-radius: 20px;
  background-color: #e68f43;
  font-family: "Akzentica 4F";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 180%;
  color: #ffffff;
}

.calc__submit:hover {
  background-color: #d9751d;
}

.calc__disclaimer {
  display: inline-block;
  width: 100%;
  opacity: 0.6;
}

.calc input[type="range"].calc__slider {
  height: 30px;
  width: 100%;
  -webkit-appearance: none;
}

.calc input[type="range"].calc__slider.slider-progress {
  --range: calc(var(--max) - var(--min));
  --ratio: calc((var(--value) - var(--min)) / var(--range));
  --sx: calc(0.5 * 40px + var(--ratio) * (100% - 40px));
}

.calc input[type="range"].calc__slider:focus {
  outline: none;
}

.calc input[type="range"].calc__slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-image: url(../assets/img/calc/chevrons.svg),
    -webkit-gradient(linear, left top, left bottom, from(#e68f43), to(#e68f43));
  background-image: url(../assets/img/calc/chevrons.svg),
    linear-gradient(#e68f43, #e68f43);
  background-position: center;
  background-repeat: no-repeat, repeat;
  background-size: auto, cover;
  border: 6px solid #ffffff;
  -webkit-box-shadow: 0 6px 16px #0000001f;
  box-shadow: 0 6px 16px #0000001f;
  margin-top: calc(6px * 0.5 - max(40px * 0.5, 6px));
}

.calc input[type="range"].calc__slider::-webkit-slider-runnable-track {
  height: 6px;
  border: none;
  border-radius: 20px;
  background: #f5f6fa;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.calc input[type="range"].calc__slider::-webkit-slider-thumb:hover {
  background-image: url(../assets/img/calc/chevrons.svg),
    -webkit-gradient(linear, left top, left bottom, from(#d9751d), to(#d9751d));
  background-image: url(../assets/img/calc/chevrons.svg),
    linear-gradient(#d9751d, #d9751d);
  background-position: center;
  background-repeat: no-repeat, repeat;
  background-size: auto, cover;
}

.calc input[type="range"].calc__slider::-webkit-slider-thumb:active {
  background-image: url(../assets/img/calc/chevrons.svg),
    -webkit-gradient(linear, left top, left bottom, from(#d9751d), to(#d9751d));
  background-image: url(../assets/img/calc/chevrons.svg),
    linear-gradient(#d9751d, #d9751d);
  background-position: center;
  background-repeat: no-repeat, repeat;
  background-size: auto, cover;
}

.calc
  input[type="range"].calc__slider.slider-progress::-webkit-slider-runnable-track {
  background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#e68f43),
        to(#e68f43)
      )
      0 / var(--sx) 100% no-repeat,
    #f5f6fa;
  background: linear-gradient(#e68f43, #e68f43) 0 / var(--sx) 100% no-repeat,
    #f5f6fa;
}
</style>
