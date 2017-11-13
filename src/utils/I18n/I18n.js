import en from './languages/en';
import tr from './languages/tr';

class I18n {
  constructor(language) {
    this.language = language;
    this.data = { en, tr };
  }

  get(key, ...params) {
    let translatedString = this.data[this.language][key] || key;
    const paramsLength = params.length;

    for (let paramIndex = 0; paramIndex < paramsLength; paramIndex++) {
      const param = params[paramIndex];
      translatedString = translatedString.replace(`{${paramIndex}}`, param);
    }

    return translatedString;
  }
}

const i18n = new I18n('en');

export default i18n;
