import Container from "../layout/Container";

function About() {
  return (
    <section className="pt-36">
      <Container>
        <div className="mb-8">
          <div className="inline-block bg-primary/25 text-primary rounded-full py-2 px-6 mb-6">
            <h3 className="uppercase font-medium">About</h3>
          </div>
          <p className="text-base font-medium text-zinc-100 ">
            Thank you for time to learn more about me.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <img
                src="about-pic.png"
                alt="Beautiful sunset towards eveing Western Australia"
                className="rotate-3 rounded-2xl object-cover bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <div className=" space-y-7 text-base text-zinc-400">
              <p>
                I’ve loved making things for as long as I can remember, and
                wrote my first program when I was 6 years old, just two weeks
                after my mom brought home the brand new Macintosh LC 550 that I
                taught myself to type on.
              </p>
              <p>
                I spent the next few summers indoors working on a rocket design,
                while I recovered from the multiple surgeries it took to fix my
                badly broken legs.
              </p>
              <p>
                Thank you for taking the time to learn more about me. I look
                forward to the possibility of connecting and exploring how we
                can create value together.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
