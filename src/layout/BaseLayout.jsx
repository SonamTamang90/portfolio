/* eslint-disable react/prop-types */
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

function BaseLayout({ children }) {
  return (
    <div className="flex w-full">
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-zinc-900 ring-1 ring-zinc-300/20 px-20"></div>
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default BaseLayout;
