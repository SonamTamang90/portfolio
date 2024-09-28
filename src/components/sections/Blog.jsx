import { HiOutlineArrowUpRight } from "react-icons/hi2";
import Container from "../layout/Container";

function Blog() {
  return (
    <section>
      <Container>
        <div className="border-b border-zinc-700/40 pt-32 pb-20">
          <div className="mb-11">
            <div className="inline-block bg-primary/25 text-primary rounded-full py-2 px-6 mb-6">
              <h4 className="uppercase font-medium">Articles</h4>
            </div>
            <h2 className="text-2xl text-zinc-300 font-bold">
              Writing a articles makes me more confident
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <div className="">
              <div>
                <p className="text-xs text-zinc-400 mb-2">September 27, 2024</p>
                <h3 className="font-semibold text-zinc-300">
                  CI/CD pipeline using Github Actions
                </h3>
                <p className="text-zinc-400 mt-2 mb-4">
                  Setting up a CI/CD pipeline(continous Integration/Continuous
                  Deployment) using Github Actions to automate...
                </p>
                <button className="flex items-center gap-1 text-sm text-primary/60 hover:text-primary ">
                  <span>Read more</span> <HiOutlineArrowUpRight />
                </button>
              </div>
            </div>
            <div className="">
              <div>
                <p className="text-xs text-zinc-400 mb-2">September 27, 2024</p>
                <h3 className="font-semibold text-zinc-300">
                  Compound pattern in React Js
                </h3>
                <p className="text-zinc-400 mt-2 mb-4">
                  Setting up a CI/CD pipeline(continous Integration/Continuous
                  Deployment) using Github Actions to automate...
                </p>
                <button className="flex items-center gap-1 text-sm text-primary/60 hover:text-primary ">
                  <span>Read more</span> <HiOutlineArrowUpRight />
                </button>
              </div>
            </div>
            <div className="">
              <div>
                <p className="text-xs text-zinc-400 mb-2">September 27, 2024</p>
                <h3 className="font-semibold text-zinc-300">
                  CI/CD pipeline using Github Actions
                </h3>
                <p className="text-zinc-400 mt-2 mb-4">
                  Setting up a CI/CD pipeline(continous Integration/Continuous
                  Deployment) using Github Actions to automate...
                </p>
                <button className="flex items-center gap-1 text-sm text-primary/60 hover:text-primary ">
                  <span>Read more</span> <HiOutlineArrowUpRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Blog;
