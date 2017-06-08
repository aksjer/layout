import { LayoutPage } from './app.po';

describe('layout App', () => {
  let page: LayoutPage;

  beforeEach(() => {
    page = new LayoutPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
