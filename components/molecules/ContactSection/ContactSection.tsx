import ButtonLink from "../../atom/ButtonLink";

export const ContactSection = () => {
  return (
    <section id="contact">
      <h2 className={"sr-only"}>Contact Me</h2>
      <p style={{ fontSize: "4rem" }}>Let&apos;s work together</p>
      <ButtonLink href="mailto:dimas.abiyoga169@gmail.com">
        mail to: dimas.abiyoga169@gmail.com
      </ButtonLink>
    </section>
  );
};
