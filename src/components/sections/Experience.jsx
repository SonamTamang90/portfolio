import Container from "../layout/Container";

function Experience() {
  return (
    <section id="experience">
      <Container>
        <div className="border-b border-zinc-700/40 pt-32 pb-20">
          {/* section heading */}
          <div className="mb-16">
            <div className="inline-block bg-primary/25 text-primary rounded-full py-2 px-6 mb-6">
              <h4 className="uppercase font-medium">Experience</h4>
            </div>
            <h2 className="text-4xl text-zinc-300 font-bold">
              {/* Additional Information about Myself */}
              Embarking on my professional journey
            </h2>
          </div>
          {/* /section heading */}

          {/* work experience details */}
          <div className="space-y-20">
            {/* company one and role detail */}
            <div className="md:border-l md:border-zinc-700/40 md:pl-6">
              <div className="grid max-w-4xl grid-cols-1 items-baseline md:grid-cols-4 gap-y-8">
                <h3 className="text-sm text-zinc-400">Feb 2021 - Oct 2022</h3>
                <div className="md:col-span-3 md:pr-12">
                  <a
                    href="https://selisegroup.com/"
                    target="_blank"
                    className="flex items-center text-base font-semibold tracking-tight text-zinc-300 transition hover:text-primary cursor-pointer"
                  >
                    <span className="inline-block mr-2">
                      Selise Digital Platforms ·
                    </span>
                    <span>UI Engineer</span>
                  </a>
                  <p className="relative z-10 mt-2 text-zinc-400">
                    Managed the development, styling, and deployment of
                    high-quality websites and design systems ensuring
                    responsiveness and cross-platform compatibility for a
                    diverse client base.
                  </p>
                </div>
              </div>
            </div>
            {/* /company one and role detail */}

            {/* company two and role detail */}
            <div className="md:border-l md:border-zinc-700/40 md:pl-6">
              <div className="grid max-w-4xl grid-cols-1 items-baseline md:grid-cols-4 gap-y-8">
                <h3 className="text-sm text-zinc-400">Nov 2015 - Jan 2021</h3>
                <div className="md:col-span-3 md:pr-12">
                  <a
                    href="https://telcobilling.selcomm.net/"
                    target="_blank"
                    className="flex items-center text-base font-semibold tracking-tight text-zinc-300 transition hover:text-primary cursor-pointer"
                  >
                    <span className="inline-block mr-2">
                      Select Software Pty Ltd ·
                    </span>
                    <span>Software Developer</span>
                  </a>
                  <p className="relative z-10 mt-2 text-zinc-400">
                    Worked as a QA Engineer, leading quality assurance
                    initiatives and directly engaging with Select Software
                    Solutions Pty Ltd(a Multirational Client), a prominent
                    player in the Telecommunications and Information Technology
                    <br />
                    sector.
                  </p>
                </div>
              </div>
            </div>
            {/* /company two and role detail */}

            {/* company three and role detail */}
            <div className="md:border-l md:border-zinc-700/40 md:pl-6">
              <div className="grid max-w-4xl grid-cols-1 items-baseline md:grid-cols-4 gap-y-8">
                <h3 className="text-sm text-zinc-400">Feb 2021 - Oct 2022</h3>
                <div className="md:col-span-3 md:pr-12">
                  <a
                    href="https://www.athang.com/public/w"
                    target="_blank"
                    className="flex items-center text-base font-semibold tracking-tight text-zinc-300 transition hover:text-primary cursor-pointer"
                  >
                    <span className="inline-block mr-2">Athang ICT ·</span>
                    <span>Software Developer</span>
                  </a>
                  <p className="relative z-10 mt-2 text-zinc-400">
                    Collaborated on the design and enhancement of WordPress
                    themes, employing HTML, CSS, and PHP, to deliver a visually
                    attractive and mobile-responsive website tailored to the
                    needs of a local travel agency client.
                  </p>
                </div>
              </div>
            </div>
            {/* /company three and role detail */}
          </div>
          {/* /work experience details */}
        </div>
      </Container>
    </section>
  );
}

export default Experience;
