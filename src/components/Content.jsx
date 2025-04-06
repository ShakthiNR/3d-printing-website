import React from "react";
import { FiTerminal } from "react-icons/fi";
import { IoGiftOutline } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";

const Content = () => {
  return (
    <main className="content container">
      <section className="content-section-1">
        Bring your ideas to life with our high-quality 3D printing services.
        Whether you need{" "}
        <span style={{ color:"oklch(71.7% 0.1648 250.79360374054167)" }}>functional prototypes</span> or{" "}
        <span style={{color:"oklch(69.87% 0.2037 309.51)" }}>personalized gifts </span>, we turn your
        vision into reality with precision and creativity.
      </section>
      <section className="content-section-2">
        <h4>3D Printing Services</h4>
        <p style={{ margin: "0.5rem 0 1rem 0", color: "#a1a1a1" }}>
          We specialize in high-quality 3D printing for prototypes and
          personalized gifts. Our services include:
        </p>
        <ol>
          <p className="center-icon">
            <FiTerminal />
            Custom Prototyping
          </p>
          <p className="content-section-2-p">
            From concept to reality, we help innovators, designers, and
            businesses create accurate, functional prototypes for testing and
            development.
          </p>
          <br />
          <p className="center-icon">
            <MdOutlineDesignServices />
            Custom Design & Printing
          </p>
          <p className="content-section-2-p">
            Have an idea but need a 3D model? Our expert designers can create
            digital models and print them with high-quality materials.
          </p>
          <br />
          <p className="center-icon">
            <IoGiftOutline />
            Personalized Gifting
          </p>
          <p className="content-section-2-p">
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
      <section className="content-section-3">
        <span style={{ color: "#fff" }}>Why Choose Us? </span>We
        use advanced 3D printing technology to deliver precise, durable, and
        high-quality prints. With fast turnaround times, we ensure <span style={{ color:"oklch(71.7% 0.1648 250.79360374054167)"}}> quick
        delivery </span>  without compromising quality. Bring your ideas to life with
        <span style={{color:"oklch(69.87% 0.2037 309.51)"}}> fully customized designs </span> crafted to match your vision. Ready to transform your
        ideas into reality? &nbsp;
        <a  style={{
          color: "#fff",
          opacity: "0.8",
        }} href="mailto:roopsroopsroops17@gmail.com">Reach out to us</a> for
        custom 3D printing services!
      </section>
    </main>
  );
};
