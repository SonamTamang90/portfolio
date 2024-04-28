/* eslint-disable react/prop-types */
function Container({ children }) {
  return (
    <div className="flex-auto">
      <div className="sm:px-8">
        <div className="w-full max-w-7xl mx-auto lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
