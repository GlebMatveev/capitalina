<template>
  <section class="questions">
    <div class="questions__wrap">
      <div class="questions__container-wrap container">
        <div class="questions__container">
          <h3 class="questions__header">
            Срочные онлайн займы в
            <span class="questions__header-black">Capitalina</span>
          </h3>
          <p class="questions__text">
            У вас возникли финансовые затруднения? Мы поможем взять быстрый
            микрозайм через интернет под 1% в день.<br />
            Вы получите необходимую денежную сумму, а обращение останется
            конфиденциальным.
          </p>
          <p class="questions__text">
            Для того, чтобы подать заявку в микрофинансовую компанию, вам не
            нужны справки о доходе,<br />копии документов или поручители.
          </p>
          <p class="questions__text">
            Capitalina finance упрощает процедуру онлайн получения денег. Анкеты
            заемщиков рассматривает автоматическая система,<br />что исключает
            риск человеческой ошибки и утечки данных. Деньги будут отправлены
            вам уже через 1 минуту после принятия<br />положительного решения!
          </p>
          <p class="questions__text">
            В нашей системе предусмотрена срочная обработка переводов и
            платежей. Помните, что сроки и порядок зачисления<br />средств на
            Ваш счет зависит только от банка, выпустившего вашу карту».
          </p>
          <div class="accordeon">
            <div class="accordeon__item">
              <input type="checkbox" id="tab1" name="tab-group" />
              <label for="tab1" class="accordeon__title"
                >Как мне оформить микрозайм?</label
              >
              <div class="accordeon__content">
                <p class="accordeon__text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit ratione nulla error quo ipsa libero sapiente harum.
                  Sed suscipit repellendus quasi culpa natus. Amet illum quam,
                  expedita qui nemo eveniet?
                </p>
              </div>
            </div>
            <div class="accordeon__item">
              <input type="checkbox" id="tab2" name="tab-group" />
              <label for="tab2" class="accordeon__title"
                >Как погасить займ?</label
              >
              <div class="accordeon__content">
                <p class="accordeon__text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit ratione nulla error quo ipsa libero sapiente harum.
                  Sed suscipit repellendus quasi culpa natus. Amet illum quam,
                  expedita qui nemo eveniet?
                </p>
              </div>
            </div>
            <div class="accordeon__item">
              <input type="checkbox" id="tab3" name="tab-group" />
              <label for="tab3" class="accordeon__title"
                >Что будет, если я просрочу платёж?</label
              >
              <div class="accordeon__content">
                <p class="accordeon__text">
                  Принцип нашей компании – доброжелательное отношение к
                  клиентам. Мы индивидуально подходим <br />к жизненным
                  трудностям каждого заемщика.
                </p>
                <p class="accordeon__text">
                  Обратитесь в нашу службу поддержки по бесплатному номеру
                  <span class="accordeon__text-bold">8 800 505-07-75</span>
                  <br />и мы обязательно найдем выход из сложившегося положения.
                </p>
              </div>
            </div>
            <div class="accordeon__item">
              <input type="checkbox" id="tab4" name="tab-group" />
              <label for="tab4" class="accordeon__title"
                >Могу ли я продлить платежи?</label
              >
              <div class="accordeon__content">
                <p class="accordeon__text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit ratione nulla error quo ipsa libero sapiente harum.
                  Sed suscipit repellendus quasi culpa natus. Amet illum quam,
                  expedita qui nemo eveniet?
                </p>
              </div>
            </div>
            <div class="accordeon__item">
              <input type="checkbox" id="tab5" name="tab-group" />
              <label for="tab5" class="accordeon__title"
                >В чем разница между займом и кредитом?</label
              >
              <div class="accordeon__content">
                <p class="accordeon__text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit ratione nulla error quo ipsa libero sapiente harum.
                  Sed suscipit repellendus quasi culpa natus. Amet illum quam,
                  expedita qui nemo eveniet?
                </p>
              </div>
            </div>
          </div>
          <a href="index.html">
            <img src="../assets/img/logo-white-black.png" alt="Capitalina" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.questions__wrap {
  background: #e5e5e5;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#e5e5e5),
    to(#fdfdfe)
  );
  background: linear-gradient(180deg, #e5e5e5 0%, #fdfdfe 100%);
}

.questions__container-wrap {
  background: radial-gradient(
    158.63% 158.36% at 1.83% 0%,
    #e68f43 0%,
    #b1580a 100%
  );
  border-radius: 24px;
}

.questions__container {
  padding: 56px 64px;
  margin-bottom: 124px;
  background: url(../assets/img/questions/questions-back1.png);
  background-repeat: no-repeat;
  background-position: top right;
}

.questions__header {
  padding-bottom: 6px;
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 600;
  font-size: 42px;
  line-height: 120%;
  color: #ffffff;
}

.questions__header-black {
  color: #282828;
}

.questions__text {
  padding-top: 20px;
  font-family: "Akzentica 4F";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 135%;
  color: #ffffff;
}

.accordeon {
  padding-top: 48px;
  padding-bottom: 48px;
}

.accordeon__item input {
  display: none;
}

.accordeon__content {
  display: none;
}

.accordeon__item {
  padding: 21px 32px;
  margin-bottom: 8px;
  background: #ffffff;
  border-radius: 20px;
}

.accordeon__title {
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #282828;
  opacity: 0.8;
  cursor: pointer;
}

.accordeon__title:hover {
  color: #d1711e;
}

.accordeon__title::after {
  content: url(../assets/img/questions/accordeon-closed.svg);
  float: right;
}

.accordeon__content {
  padding-top: 21px;
}

.accordeon__item :checked + .accordeon__title {
  color: #e38b3f;
}

.accordeon__item :checked + .accordeon__title::after {
  content: url(../assets/img/questions/accordeon-opened.svg);
}

.accordeon__item :checked ~ .accordeon__content {
  display: block;
}

.accordeon__text {
  padding-bottom: 24px;
  font-family: "Akzentica 4F";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #282828;
  opacity: 0.5;
}

.accordeon__text-bold {
  font-weight: 700;
}
</style>
