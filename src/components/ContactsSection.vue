<template>
  <div>
    <section id="contacts" class="contacts">
      <div v-for="(title, i) in titles" :key="i" class="contacts__title">
        <h1>{{ $t(title.title) }}</h1>
      </div>

      <div class="container contacts__content">
        <form class="form">
          <div v-for="(item, i) in formItems" :key="i" class="form__item">
            <input
              :name="item.name"
              class="form__input"
              :type="item.type"
              :placeholder="$t(item.placeholder)"
              :required="item.required"
              v-model="formData[item.name]"
            />
          </div>
          <div class="form__item">
            <textarea
              name="message"
              class="form__input"
              type="text"
              :placeholder="$t('contactsSectionTranslate.msg')"
              required
              rows="5"
              style="height: auto"
              v-model="formData.message"
            ></textarea>
          </div>
          <button type="submit">{{ $t('contactsSectionTranslate.send') }}</button> </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titles: [
        {
          title: 'contactsSectionTranslate.contactsTitle',
        },
      ],
      formItems: [
        {
          name: 'user__name',
          type: 'text',
          placeholder: 'contactsSectionTranslate.name',
          required: true,
        },
        {
          name: 'user__email',
          type: 'email',
          placeholder: 'contactsSectionTranslate.email',
          required: true,
        },
      ],
      formData: {
        user__name: '',
        user__email: '',
        message: '',
      },
    }
  },
}
</script>

<style>
.form__input {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--bs-body-color);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: var(--bs-body-bg);
  background-clip: padding-box;
  border: var(--bs-border-width) solid var(--bs-border-color);
  border-radius: var(--bs-border-radius);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.form__item:hover {
  border: 1px solid #0a8b9ac8;
  transform: scale(1.1) translateY(0.1px);
  color: #000000c8;
}
.contacts h1 {
  margin-top: 50px;
  text-align: center;
  font-size: 40px;
}
.form {
  margin-top: 20px;
}
.form button {
  margin-top: 20px;
  background: #0a8b9ac8;
  border: 1px solid #bebebe;
  border-radius: 8px;
  width: 100% !important;
  cursor: pointer;
  box-sizing: border-box;
  color: #fff;
  padding: 10px 30px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 32px;
  transition: 0.5s;
}
.form button:hover {
  background: #58c10d;
  color: #ffffff;
  transform: scale(1.1) translateY(-10px);
}

.form__item {
  border: 1px solid rgb(169, 169, 169);
  border-radius: 20px;
  padding: 20px;
  margin-top: 20px;
}
.form__item ::placeholder {
  font-size: 20px;
}
@media (max-width: 991.99px) {
  .contacts__content {
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 767.99px) {
  .contacts__content h1 {
    font-size: 32px;
    text-align: center;
  }
  .contacts__content {
    text-align: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>



