import Container from "../layout/Container";
import { FaRegEnvelope, FaSquarePhone, FaMapLocation } from "react-icons/fa6";

function Contact() {
  return (
    <section id="contact">
      <Container>
        <div className="py-32">
          {/* section heading */}
          <div className="mb-16">
            <div className="inline-block bg-primary/25 text-primary rounded-full py-2 px-6 mb-6">
              <h3 className="uppercase font-medium">Contact Me</h3>
            </div>
            <p className="text-base font-medium text-zinc-100 ">
              Here are the some of things I've build
            </p>
          </div>
          {/* /section heading */}

          <div className="flex gap-16">
            {/* contact details */}
            <div className="w-96">
              <ol className="space-y-8">
                <li className="flex gap-4">
                  <FaRegEnvelope className="w-6 h-6 text-zinc-400" />
                  <div>
                    <h4 className="text-sm font-medium text-zinc-300">Email</h4>
                    <p className="text-sm text-zinc-400">
                      stamang.mrbhutan90@gmail.com
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <FaSquarePhone className="w-6 h-6 text-zinc-400" />
                  <div>
                    <h4 className="text-sm font-medium text-zinc-300">Phone</h4>
                    <p className="text-sm text-zinc-400">61 - 0432572176</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <FaMapLocation className="w-6 h-6 text-zinc-400" />
                  <div>
                    <h4 className="text-sm font-medium text-zinc-300">
                      Address
                    </h4>
                    <p className="text-sm text-zinc-400">Perth, WA</p>
                  </div>
                </li>
              </ol>
            </div>
            {/* /contact details */}

            {/* contact form */}
            <div className="w-full">
              <form className="space-y-8">
                <div>
                  <label className="block text-zinc-400 mb-3">Name</label>
                  <input
                    type="email"
                    placeholder=""
                    aria-label="Email address"
                    required=""
                    className="w-full bg-zinc-700/[0.15] text-zinc-200 border border-zinc-700 focus:border-teal-400 focus:ring-teal-400/10 focus:outline-none rounded-md p-3"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-3">Email</label>
                  <input
                    type="email"
                    placeholder=""
                    aria-label="Email address"
                    required=""
                    className="w-full bg-zinc-700/[0.15] text-zinc-200 border border-zinc-700 focus:border-teal-400 focus:ring-teal-400/10 focus:outline-none rounded-md p-3"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-3">Message</label>
                  <textarea
                    type="email"
                    placeholder=""
                    aria-label="Email address"
                    required=""
                    className="w-full bg-zinc-700/[0.15] text-zinc-200 border border-zinc-700 focus:border-teal-400 focus:ring-teal-400/10 focus:outline-none rounded-md p-3"
                  />
                </div>
              </form>
            </div>
            {/* /contact form */}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
