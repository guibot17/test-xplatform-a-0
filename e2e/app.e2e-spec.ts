import { TestXplatformA0Page } from './app.po';

describe('test-xplatform-a-0 App', function() {
  let page: TestXplatformA0Page;

  beforeEach(() => {
    page = new TestXplatformA0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('xp works!');
  });
});
