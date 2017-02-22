import { NgDiaryPage } from './app.po';

describe('ng-diary App', function() {
  let page: NgDiaryPage;

  beforeEach(() => {
    page = new NgDiaryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
