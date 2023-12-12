export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-transparent  h-[100vh] w-full">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-20 md:h-52 w-80 md:w-80 top-24 md:top-52 rounded-full absolute -left-40 blur-3xl"></div>
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-40 md:h-52 w-40 md:w-52 bottom-0 md:bottom-32 rounded-full absolute blur-3xl right-0 md:right-28"></div>

      {/* Hero section */}
      <section className="flex flex-col  items-center justify-center w-full h-96">
        <h1 className="text-center text-3xl md:text-5xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-slate-700 to-slate-900 p-1">
          Revolutionize
        </h1>
        <h1 className="text-center text-3xl md:text-5xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-slate-700 to-slate-900 m-1">
          Your Business with
        </h1>
        <h1 className="text-center text-4xl md:text-6xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 p-1">
          TheCoderWiz
        </h1>

        <div className="flex flex-col items-center justify-center m-2">
          <h3 className="text-center text-md md:text-lg font-extralight ">
            With our cloud-based solution, you can access powerful tools
          </h3>
          <h3 className="text-center text-md md:text-lg font-extralight ">
            and resources from anywhere at any time
          </h3>
        </div>

        <div>
          <button className="h-11 w-32 bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-white hover:border-2 hover:border-violet-800 hover:from-white hover:to-white hover:text-slate-900 rounded-3xl text-center font-semibold text-slate-50 m-2 ease-out duration-200">
            Explore
          </button>
          <button className="h-11 w-32 bg-gradient-to-r from-white to-white border-2 rounded-3xl border-violet-800 text-center font-semibold text-slate-900 m-2 hover:from-blue-500 hover:to-purple-500 hover:border-none hover:text-white ease-out duration-200">
            Pricing
          </button>
        </div>
      </section>
    </div>
  );
}
