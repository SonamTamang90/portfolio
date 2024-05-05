import Container from "../layout/Container";

function About() {
  return (
    <section id="about">
      <Container>
        <div className="border-b border-zinc-700/40 pt-32 pb-20">
          {/* section heading */}
          <div className="mb-16">
            <div className="inline-block bg-primary/25 text-primary rounded-full py-2 px-6 mb-6">
              <h4 className="uppercase font-medium">About</h4>
            </div>
            <h2 className="text-2xl text-zinc-300 font-bold">
              {/* Additional Information about Myself */}
              More about my background
            </h2>
          </div>
          {/* /section heading */}

          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            {/* about image */}
            <div className="lg:pl-20">
              <div className="max-w-xs px-2.5 lg:max-w-none">
                <img
                  src="about-pic.webp"
                  alt="Beautiful sunset towards eveing Western Australia"
                  className="rotate-3 rounded-2xl object-cover bg-zinc-800"
                />
              </div>
            </div>
            {/* /about image */}

            {/* about text */}
            <div className="lg:order-first lg:row-span-2">
              <div className=" space-y-7 text-base text-zinc-400">
                <p>
                  With <strong className="text-zinc-300">seven years</strong> of
                  experience in HTML, CSS, and JavaScript, I am deeply
                  passionate about infusing creativity into the digital space. I
                  possess an insatiable appetite for new challenges and
                  opportunities for personal and professional growth.
                </p>
                <p>
                  I am proficient in modern web development library like React,
                  and I combine my technical prowess with a strong understanding
                  of UI/UX design principles. This enables me to craft visually
                  appealing and user-friendly websites that resonate with
                  audiences.
                </p>
                <p>
                  When I'm not at my desk, I am probably hiking in nature,
                  playing soccer, and experimenting with cooking.
                </p>

                {/* <p>
                  I am excited about the prospect of contributing my skills and
                  expertise to new projects, always eager to push boundaries and
                  exceed expectations.
                </p> */}
              </div>
            </div>
            {/* /about text */}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
