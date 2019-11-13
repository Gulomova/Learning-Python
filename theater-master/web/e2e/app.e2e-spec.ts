import { GameappPage } from './app.po';

describe('gameapp App', () => {
  let page: GameappPage;

  beforeEach(() => {
    page = new GameappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
