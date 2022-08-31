import Image from "../asset/Food-removebg-preview.png";

const HeroSection = () => {
  const heroSection = document.createElement("section");
  heroSection.className = "hero-section";

  heroSection.innerHTML = `
  <div class="hero-container">
    <div class="header-cta">
      <h1 class="hero-header">Food you Love</h1>
      <p class="hero-description">
        Learn how to get you best meal prepared by you at yours
      </p>
      <a class="get-started" href="#">Get started</a>
    </div>
    <div class="hero-image">
  <img src= ${Image} alt="image-hero" />
</div>
  </div>
  
  `;

  return heroSection;
};

export default HeroSection;
