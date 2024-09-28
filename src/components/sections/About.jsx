import Container from "../layout/Container";

function About() {
  return (
    <section id="about">
      <Container>
        <div className="border-b border-zinc-700/40 pt-32 pb-20">
          {/* section heading */}
          <div className="mb-8">
            <div className="inline-block bg-primary/25 text-primary rounded-full py-2 px-6 mb-6">
              <h4 className="uppercase font-medium">About</h4>
            </div>
            <h2 className="text-2xl text-zinc-300 font-bold">More about me</h2>
          </div>
          {/* /section heading */}

          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            {/* about image */}
            <div className="lg:pl-20">
              <div className="max-w-xs px-2.5 lg:max-w-none">
                <img
                  src="about-pic.webp"
                  alt="Beautiful sunset towards evening, Western Australia"
                  className="rotate-3 rounded-2xl object-cover bg-zinc-800"
                />
              </div>
            </div>
            {/* /about image */}

            {/* about text */}
            <div className="lg:order-first lg:row-span-2">
              <div className="space-y-7 text-sm text-zinc-400 tracking-wider">
                <p>
                  I am a Software Engineer with over 8 years of experience,
                  specializing in building high-performance, visually appealing,
                  and user-friendly frontend applications. My focus is on
                  merging design with functionality to create seamless, engaging
                  digital experiences.
                </p>
                <p>
                  With expertise in HTML, CSS, JavaScript (ES6+), React, and
                  Tailwind CSS, I stay on top of the latest tools and frameworks
                  to deliver cutting-edge solutions that consistently meet user
                  and business needs.
                </p>
                <p>
                  When I'm not coding, you’ll likely find me exploring the
                  outdoors on a hike, playing soccer, or whipping up something
                  new in the kitchen.
                </p>
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
