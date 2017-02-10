import { CoinToolsPage } from './app.po';

describe('coin-tools App', function() {
  let page: CoinToolsPage;

  beforeEach(() => {
    page = new CoinToolsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
