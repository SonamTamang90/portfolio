import BaseLayout from "./BaseLayout";

function MainLayout() {
  return (
    <div className="flex w-full">
      {/* main zinc background wrapper  */}
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-zinc-900 ring-1 ring-zinc-300/20 px-20"></div>
        </div>
      </div>
      {/* main zinc background wrapper  */}

      <BaseLayout />
    </div>
  );
}

export default MainLayout;
