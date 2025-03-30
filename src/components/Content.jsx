import React from "react";

const Content = () => {
  return (
    <main className="content container">
      <section className="content-section-1">
        Bring your ideas to life with our high-quality 3D printing services.
        Whether you need functional prototypes or personalized gifts, we turn
        your vision into reality with precision and creativity.
      </section>
      <section className="content-section-1">
    
          <h4>3D Printing Services</h4>
          <p style={{ marginBottom: "0.5rem"}}>
            We specialize in high-quality 3D printing for prototypes and
            personalized gifts. Our services include:
          </p>
          <ol>
            <li>Custom Prototyping</li>
            <p>
              From concept to reality, we help innovators, designers, and
              businesses create accurate, functional prototypes for testing and
              development.
            </p>
            <li>Custom Design & Printing</li>

            <p>
              Have an idea but need a 3D model? Our expert designers can create
              digital models and print them with high-quality materials.
            </p>
            <li>Personalized Gifting</li>
            <p>
              Make every occasion special with customized 3D-printed gifts. From
              engraved keychains to unique home decor, we craft one-of-a-kind
              items tailored to your needs.
            </p>
          </ol>
      </section>
    </main>
  );
};

export default Content;

export const LastContent = () => {
  return (
    <main className="content container">
      <section className="">
        Why Choose Us? High-Quality Prints – We use advanced 3D printing
        technology to ensure precision and durability. Fast Turnaround – Get
        your prototypes and gifts printed quickly without compromising quality.
        Custom Designs – Bring your ideas to life with fully customized 3D
        designs. Eco-Friendly Materials – Choose from a variety of sustainable
        and high-quality materials. <a href="mailto:someone@example.com">Reach out to us</a> for custom 3D printing services! 
      </section>
    </main>
  );
};
