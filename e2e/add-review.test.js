
Feature('Add Review Restaurant');

Before(({I}) => {
  I.amOnPage('/#/detail/rqdv5juczeskfw1e867');
});

Scenario('Add Review Restaurant', async ({I}) => {
  I.seeElement('#review');
  I.click('#review');

  I.seeElement('#name');
  I.fillField('#name', 'E2E Testing');
  I.seeElement('#input_review');
  I.fillField('#input_review', 'isi E2E Testing');
  I.seeElement('.add_review_btn');
  I.click('.add_review_btn');

  I.seeElement('.review__item');
  I.see('Review Berhasil ditambahkan', '.toast');

  I.see('E2E Testing', '.review__item h5');
  I.see('isi E2E Testing', '.review__item p');
});


