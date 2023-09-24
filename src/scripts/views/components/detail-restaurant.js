import '../../../styles/style.css';


class DetailRestaurant extends HTMLElement {
  constructor(restaurant) {
    super();
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render(restaurant);
  };

  render(restaurant) {
    this.innerHTML = `
            <div class="card__image" id="gambar-ygewwl55ktckfw1e867">
              <span class="kota" tabindex="0">Balikpapan</span>
              <img
                src="https://restaurant-api.dicoding.dev/images/medium/05"
                alt=""
                id="detail-img"
              />
            </div>
            <div class="card__content">
              <h3 class="card__title" tabindex="0">Istana Emas</h3>
              <h4 class="card__rating" tabindex="0">Rating : 4.5</h4>
              
              <div id="btn__container">
                <button
                  type="button"
                  class="btn_tab_pane active"
                  id="description"
                >
                  Description
                </button>
                <button
                  type="button"
                  class="btn_tab_pane"
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
              <div id="tab-description" class="tab">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                omnis nulla earum sed reiciendis quidem repellendus voluptate
                incidunt! Omnis, vitae. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Assumenda repellendus laudantium libero
                officia necessitatibus quaerat officiis in, reiciendis dolorum
                atque, voluptates harum rerum tenetur ipsam reprehenderit eaque
                veniam quibusdam fugiat porro perferendis a! Quasi vero nihil
                beatae, deleniti quo ipsa consequuntur aperiam, unde at sit
                adipisci obcaecati perferendis explicabo dolore.
                <div class="category">
                <ul>
                  <li><a href="" class="category__item">padang</a></li>
                  <li><a href="" class="category__item">padang</a></li>
                  <li><a href="" class="category__item">padang</a></li>
                </ul>
              </div>
              </div>
              <div id="tab-menu" class="tab none">
                <div class="menu">
                  <div class="menu-makanan">
                    <h5>Makanan</h5>
                    <ul>
                      <li>Nasi goreng aaaaaaaaaaa</li>
                      <li>Kangkung</li>
                      <li>Tempe</li>
                    </ul>
                  </div>
                  <div class="menu-minuman">
                    <h5>Minuman</h5>
                    <ul>
                      <li>Air Kali</li>
                      <li>Air kolah</li>
                      <li>Air saja</li>
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
                  <div class="review__item">
                    <h5>Andi</h5>
                    <span>13 jan 2029</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, voluptatum.
                    </p>
                  </div>
                  <div class="review__item">
                    <h5>Budi</h5>
                    <span class="tanggal">13 jan 2029</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, voluptatum.
                    </p>
                  </div>
                  <div class="review__item">
                    <h5>Caca</h5>
                    <span>13 jan 2029</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, voluptatum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
    `;
  }
}

customElements.define('detail-restaurant', DetailRestaurant);
