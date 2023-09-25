import '../../../styles/style.css';
import RestaurantAPIDicodingSource from '../../data/restaurant-api-dicoding';

class DetailRestaurant extends HTMLElement {
  constructor(restaurant) {
    super();
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render(restaurant);
    console.log(restaurant);

    this.makeTabClickAble();
    this.loopCategory();
    this.loopMenu();
    this.loopReview();
    this.addReview(this._restaurant.id);
  }

  render(restaurant) {
    this.innerHTML = `
            <div class="card__image" id="gambar-ygewwl55ktckfw1e867">
              <span class="kota" tabindex="0">${restaurant.city}</span>
              <img
                src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}"
                alt=""
                id="detail-img"
              />
            </div>
            <div class="card__content">
              <h3 class="card__title" tabindex="0">${restaurant.name}</h3>
              <h4 class="card__rating" tabindex="0">Rating : ${restaurant.rating}</h4>
              <p>${restaurant.description}</p>
              <div class="category">  
                <ul>
                </ul>
              </div>
              <div id="btn__container">
                <button
                  type="button"
                  class="btn_tab_pane active"
                  id="menu"
                >
                  Menu
                </button>
                <button
                  type="button"
                  class="btn_tab_pane"
                  id="review"
                >
                  Review
                </button>
              </div>
              <div id="tab-category" class="tab none">
                
              </div>
              <div id="tab-menu" class="tab ">
                <div class="menu">
                  <div class="menu-makanan">
                    <h5>Makanan</h5>
                    <ul>
                    </ul>
                  </div>
                  <div class="menu-minuman">
                    <h5>Minuman</h5>
                    <ul>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="tab-review" class="tab none">
                <div class="add__review">
                  <h5>Add Review</h5>
                  <form action="" method="post" class="add_review_form">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      class="add__review__input"
                      placeholder="Masukkan Nama"
                    />
                    <textarea
                      name="review"
                      id="input_review"
                      class="add__review__input"
                      placeholder="Masukkan Review anda"
                      rows="4"
                    ></textarea>
                    <button type="button" class="add_review_btn">Submit</button>
                  </form>
                </div>
                <div class="review">
                </div>
              </div>
            </div>
    `;
  }

  openTab(evt, tabName, tabcontent, tabButton) {
    let i;
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.add('none');
    }
    for (i = 0; i < tabButton.length; i++) {
      tabButton[i].classList.remove('active');
    }
    tabName.classList.remove('none');
    evt.currentTarget.classList.add('active');
  }

  makeTabClickAble() {
    // opening tab
    const btnTabPane = this.querySelectorAll('.btn_tab_pane');
    const tabcontent = this.getElementsByClassName('tab');
    const tabButton = this.getElementsByClassName('btn_tab_pane');

    btnTabPane.forEach((btn) => {
      const tabName = this.querySelector('#tab-' + btn.id);
      btn.addEventListener('click', (event) => {
        this.openTab(event, tabName, tabcontent, tabButton);
      });
    });
  }

  loopCategory() {
    // loop category
    const category = this.querySelector('.category ul');
    this._restaurant.categories.forEach((item) => {
      category.innerHTML += `<li><a href="" class="category__item">${item.name}</a></li>`;
    });
  }

  loopMenu() {
    const menuMakanan = this.querySelector('.menu-makanan ul');
    const menuMinuman = this.querySelector('.menu-minuman ul');
    this._restaurant.menus.foods.forEach((item) => {
      menuMakanan.innerHTML += `<li>${item.name}</li>`;
    });
    this._restaurant.menus.drinks.forEach((item) => {
      menuMinuman.innerHTML += `<li>${item.name}</li>`;
    });
  }

  loopReview() {
    const review = this.querySelector('.review');
    console.log(review);
    review.innerHTML = '';
    console.log('after reset', review.innerHTML);
    // order by date desc
    this._restaurant.customerReviews.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    this._restaurant.customerReviews.forEach((item) => {
      review.innerHTML += `
        <div class="review__item">
          <h5>${item.name}</h5>
          <span class="tanggal">${item.date}</span>
          <p>${item.review}</p>
        </div>
      `;
    });
  }

  addReview(id) {
    const addReviewBtn = this.querySelector('.add_review_btn');
    const name = this.querySelector('#name');
    const review = this.querySelector('#input_review');
    addReviewBtn.addEventListener('click', (event) => {
      event.preventDefault();
      const reviewData = {
        'id': id,
        'name': name.value,
        'review': review.value,
      };

      // RestaurantAPIDicodingSource.addReview(reviewData)
      //     .then((response) => {
      //       console.log(response);
      //       name.value = '';
      //       review.value = '';
      //     }).catch((error) => {
      //       console.log(error);
      //     });

      this.loopReview();
    });
  }
  resetReview() {
    const review = this.querySelector('.review');
    review.innerHTML = '';
  };
}


customElements.define('detail-restaurant', DetailRestaurant);
