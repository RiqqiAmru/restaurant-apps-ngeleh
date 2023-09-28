const Hero = {
  render: async () => {
    return `
    <section id="hero">
      <h1
        tabindex="0"
        aria-label="Ngeleh is javanese language for hungry, 
        this is a website to booking a Indonesian restaurant"
      >
        Ngeleh
      </h1>
      <div>
      <input type="search" id="search-restaurant" placeholder="Search restaurant" />
      </div>
    </section>
    `;
  },
};

export default Hero;
