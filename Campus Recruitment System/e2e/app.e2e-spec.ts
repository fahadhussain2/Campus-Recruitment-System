import { CampusRecruitmentSystem1Page } from './app.po';

describe('campus-recruitment-system1 App', function() {
  let page: CampusRecruitmentSystem1Page;

  beforeEach(() => {
    page = new CampusRecruitmentSystem1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
