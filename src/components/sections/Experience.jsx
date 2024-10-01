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
            <h2 className="text-2xl text-zinc-300 font-bold">
              {/* Additional Information about Myself */}
              Working Period
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
                    <span>Software Engineer</span>
                  </a>
                  <p className="relative z-10 mt-2 text-zinc-400">
                    Engineered innovative websites, design systems, and digital
                    experiences, delivering exceptional results across diverse
                    projects and for a variety of clients. Utilized cutting-edge
                    technologies and methodologies to execute high-quality
                    solutions that exceed client expectations.
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
                    Leveraged expertise in C# and VB.NET to develop and
                    implement SOAP-based web services for telecommunication
                    companies, specifically focusing on billing solutions.
                    Utilized PostCSS for testing to ensure robustness and
                    accuracy.
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
                <h3 className="text-sm text-zinc-400">May 2014 - May 2015</h3>
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
                    Spearheaded the design and enhancement of WordPress themes,
                    employing HTML, CSS, and PHP to deliver visually attractive
                    and mobile-responsive websites tailored to the needs of a
                    local travel agency client.
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
