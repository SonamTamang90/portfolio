import Container from "../layout/Container";
import Slider from "../ui/Slider";
function Work() {
  return (
    <section id="work" className="py-11">
      <Container>
        <div className="mb-16">
          <div className="inline-block bg-primary/25 text-primary rounded-full py-2 px-6 mb-6">
            <h4 className="uppercase font-medium">Portfolio</h4>
          </div>
          <h2 className="text-2xl text-zinc-300 font-bold">Selected Work</h2>
        </div>
      </Container>
      <div className="sm:px-8">
        <div className="w-full max-w-7xl mx-auto lg:px-8">
          <Slider />
        </div>
      </div>
    </section>
  );
}

export default Work;
