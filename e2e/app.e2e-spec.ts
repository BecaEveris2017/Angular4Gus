import { MyFirstAppAngular4Page } from './app.po';

describe('my-first-app-angular4 App', () => {
  let page: MyFirstAppAngular4Page;

  beforeEach(() => {
    page = new MyFirstAppAngular4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
