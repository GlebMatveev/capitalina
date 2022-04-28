<script>
export default {
  data() {
    return {
      formData: {
        fName: "",
        fLastName: "",
        fPatronymic: "",
        fBirthday: "",
        fMale: "",
        fBirthPlace: "",
        fPassportNumber: "",
        fPassportCode: "",
        fPassportDate: "",
        fPassportDivision: "",
        fEmail: "",
        fPhone: "",
        fPhoneCode: "",
        fPhoneVerify: true,
        fAgreement: false,
      },
      permissionSend: false,
    };
  },
  methods: {
    sendFormData() {
      if (this.checkPermissionSend()) {
        console.log("разрешено");
      } else {
        console.log("запрещено");
      }
    },

    checkPermissionSend() {
      if (this.formData.fPhoneVerify && this.formData.fAgreement) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<template>
  <!-- Main part of page -->
  <section class="form__bottom">
    <div class="form__container">
      <form class="form__wrap" action="#">
        <fieldset class="form__set">
          <h5 class="form__legend">Основные данные</h5>
          <ul class="form__list">
            <li class="form__item">
              <label>
                <input
                  class="form__input"
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Имя*"
                  required
                  v-model="formData.fName"
                />
              </label>
            </li>
            <li class="form__item">
              <label>
                <input
                  class="form__input"
                  type="text"
                  id="last_name"
                  name="user_last_name"
                  placeholder="Фамилия*"
                  required
                  v-model="formData.fLastName"
                />
              </label>
            </li>
            <li class="form__item">
              <label>
                <input
                  class="form__input"
                  type="text"
                  id="patronym"
                  name="user_patronym"
                  placeholder="Отчество*"
                  required
                  v-model="formData.fPatronymic"
                />
              </label>
            </li>
            <li class="form__item">
              <!-- <input class="form__input form__input-noCalend" type="date" id="birthday" name="user_birthday" required>
                <label class="form__label-date"><span>Дата рождения*</span></label> -->
              <input
                class="form__input textbox-n"
                placeholder="Дата рождения*"
                type="text"
                onfocus="(this.type='date')"
                onblur="(this.type='text')"
                id="birthday"
                v-model="formData.fBirthday"
              />
            </li>
            <li class="form__item form__item-genderFlex">
              <span class="form__radio-span">Пол*</span>
              <input
                class="form__radio-custom"
                name="gender"
                id="gender-male"
                type="radio"
                value="male"
                checked
                v-model="formData.fMale"
              />
              <label for="gender-male">Мужской</label>
              <input
                class="form__radio-custom"
                name="gender"
                id="gender-female"
                type="radio"
                value="female"
                v-model="formData.fMale"
              />
              <label for="gender-female">Женский</label>
            </li>
            <li class="form__item">
              <label>
                <input
                  class="form__input"
                  type="text"
                  id="place_of_birth"
                  name="user_place_of_birth"
                  placeholder="Место рождения*"
                  required
                  v-model="formData.fBirthPlace"
                />
              </label>
            </li>
          </ul>
        </fieldset>
        <fieldset class="form__set">
          <h5 class="form__legend">Паспортные данные</h5>
          <ul class="form__list">
            <li class="form__item">
              <input
                class="form__input"
                type="text"
                id="passport_number"
                name="user_passport_number"
                placeholder="Серия и номер*"
                required
                v-model="formData.fPassportNumber"
              />
            </li>
            <li class="form__item">
              <input
                class="form__input"
                type="text"
                id="passport_code"
                name="user_passport_code"
                placeholder="Код подразделения*"
                required
                v-model="formData.fPassportCode"
              />
            </li>
            <li class="form__item">
              <!-- <input class="form__input" type="date" id="passport_date" name="user_passport_date" required> -->
              <input
                class="form__input textbox-n"
                placeholder="Дата выдачи*"
                type="text"
                onfocus="(this.type='date')"
                onblur="(this.type='text')"
                id="passport-date"
                v-model="formData.fPassportDate"
              />
            </li>
            <li class="form__item">
              <input
                class="form__input"
                type="text"
                id="passport_division"
                name="user_passport_division"
                placeholder="Кем выдан*"
                required
                v-model="formData.fPassportDivision"
              />
            </li>
          </ul>
        </fieldset>
        <fieldset class="form__set">
          <h5 class="form__legend">Контактные данные</h5>
          <ul class="form__list">
            <li class="form__item">
              <label
                ><input
                  class="form__input"
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="E-mail*"
                  required
                  v-model="formData.fEmail"
              /></label>
            </li>
            <li class="form__item form__item-flex">
              <input
                class="form__input form__input-phone"
                type="tel"
                id="phone"
                name="user_phone"
                placeholder="Телефон*"
                required
                v-model="formData.fPhone"
              />
              <button class="form__button-phone">Отправить&nbsp;код</button>
              <input
                class="form__input form__input-code"
                type="text"
                id="phone-code"
                name="phone-code"
                placeholder="Код из СМС*"
                required
                v-model="formData.fPhoneCode"
              />
            </li>
          </ul>
        </fieldset>
        <fieldset class="form__set">
          <h5 class="form__legend">Соглашение</h5>
          <input
            class="form__checkbox-custom"
            type="checkbox"
            id="consent"
            name="consent"
            required
            v-model="formData.fAgreement"
          />
          <label for="consent"
            ><span class="form__consent"
              >Настоящим подтверждаю, что ознакомлен с
              <a class="form__consent-bold" href="#" target="_blank"
                >Согласием на обработку персональных данных</a
              ></span
            ></label
          >
          <input
            class="form__button"
            value="Зарегистрироваться"
            type="submit"
            @click="sendFormData"
          />
        </fieldset>
      </form>
    </div>
  </section>
</template>

<style>
.form__bottom {
  height: 1200px;
  position: relative;
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

.form__wrap {
  position: absolute;
  top: -370px;
}

.form__set {
  padding: 24px 32px 40px 32px;
  margin-bottom: 16px;
  background: #ffffff;
  -webkit-box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.04);
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.04);
  border-radius: 24px;
  border: none;
}

.form__legend {
  padding-bottom: 24px;
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 140%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #282828;
}

.form__list {
  list-style: none;
}

.form__item {
  width: 100%;
  padding-bottom: 16px;
}

.form__item :focus {
  border: 2px solid #e68f43;
  outline: none;
  outline-offset: -4px;
}

.form__item:last-child {
  padding-bottom: 0;
}

.form__item-genderFlex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.form__input {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  padding: 20px 24px;
  max-width: 712px;
  border: 1px solid transparent;
  background: #eff0f4;
  color: #282828;
  border-radius: 12px;
  font-family: "Akzentica 4F";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.form__input::-webkit-input-placeholder {
  font-family: "Akzentica 4F";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: #8a8a8a;
}

.form__input:-ms-input-placeholder {
  font-family: "Akzentica 4F";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  color: #8a8a8a;
}

.form__input::-ms-input-placeholder {
  font-family: "Akzentica 4F";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  color: #8a8a8a;
}

.form__input::placeholder {
  font-family: "Akzentica 4F";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #8a8a8a;
}

.form__input:focus {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #e68f43;
}

.form__input-noCalend {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.form__input-noCalend::-webkit-calendar-picker-indicator {
  opacity: 0;
}

.form__label-date {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  padding: 20px 24px;
  max-width: 712px;
  border: none;
  background: #eff0f4;
  color: #282828;
  border-radius: 12px;
  font-family: "Akzentica 4F";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.form__item-flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.form__radio-span {
  margin-right: 7px;
  font-family: "Akzentica 4F";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #8a8a8a;
}

.form__radio-custom {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.form__radio-custom + label {
  margin-left: 25px;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: "Akzentica 4F";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  color: #282828;
}

.form__radio-custom + label::before {
  content: "";
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  background: url(../assets/img/form/radio-before.svg);
  border-radius: 50%;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
}

.form__radio-custom:checked + label::before {
  background-image: url(../assets/img/form/radio.svg);
}

.form__radio-custom:disabled + label::before {
  background-color: #e9ecef;
}

.form__input-phone {
  width: 70%;
  position: relative;
}

.form__button-phone {
  position: absolute;
  margin-top: 6px;
  margin-left: 364px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 16px 18px;
  border: none;
  background: #e68f43;
  border-radius: 10px;
  font-family: "Akzentica 4F";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
}

.form__input-code {
  width: 28%;
}

.form__checkbox-custom {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.form__checkbox-custom + label {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.form__checkbox-custom + label::before {
  content: "";
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  border: 2px solid #e68f43;
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
}

.form__checkbox-custom:checked + label::before {
  border-color: #e68f43;
  background-color: #ffffff;
  background-image: url(../assets/img/form/check.svg);
}

.form__consent {
  font-family: "Akzentica 4F";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #8a8a8a;
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none;
  -webkit-box-ordinal-group: 2;
  -ms-flex-order: 1;
  order: 1;
  -ms-flex-positive: 0;
  flex-grow: 0;
}

.form__consent-bold {
  text-decoration: none;
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #282828;
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none;
  -webkit-box-ordinal-group: 2;
  -ms-flex-order: 1;
  order: 1;
  -ms-flex-positive: 0;
  flex-grow: 0;
}

.form__button {
  margin-top: 32px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  padding: 16px;
  border: none;
  background: #e68f43;
  border-radius: 20px;
  font-family: "Akzentica 4F";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 180%;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #ffffff;
  text-align: center;
}

.form__button:disabled {
  background: #8a8a8a;
}
</style>
