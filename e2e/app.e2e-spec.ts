import { AppPage } from './app.po';

describe('search-hotels App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Search Page', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Search Hotel');
  });
});
