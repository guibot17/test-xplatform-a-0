import { browser, element, by } from 'protractor';

export class TestXplatformA0Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('xp-root h1')).getText();
  }
}
