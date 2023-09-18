import Hero from "../components/hero";

const Favourite = {
  async render() {
    return `
  <article>
    ${await Hero.render()}
    <section id="menu">
    favorite
    </section>
  </article>`;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Favourite;
