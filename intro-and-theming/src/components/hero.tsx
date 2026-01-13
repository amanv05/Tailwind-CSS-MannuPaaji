const Hero = () => {
  return (
    <>
      <div className="my-40 flex w-full flex-col items-center justify-center">
        <h1 className="font-primary max-w-2xl bg-linear-to-b from-neutral-50 to-neutral-500 bg-clip-text text-center text-7xl leading-tight font-bold tracking-tight text-transparent">
          Unleash the power of intuitive finance.
        </h1>
        <p className="font-primary mx-auto mt-10 max-w-3xl text-center text-xl text-neutral-500 selection:bg-white">
          Say goodbye to the <span className="text-primary">outdated</span> financial tools. Every small business
          owner, regardless of the background, can now manage their business
          <span className="text-primary"> like a pro.</span> Simple. Intuitive. And never boring.
        </p>
        <div className="font-primary mt-8 flex justify-center w-full max-w-lg">
          <input type="text" className="border border-neutral-600 rounded-xl mr-4 placeholder:text-neutral-500 text-white px-4 flex-1 focus:outline-none focus:ring-1 focus:ring-primary transition duration-200" placeholder="Enter your email"></input>
          <button className="relative rounded-xl border border-neutral-700  text-white px-4 py-2 cursor-pointer">
            <div className="absolute -bottom-px inset-x-0 w-full h-px bg-linear-to-r from-transparent via-primary to-transparent"></div>
            Join Waitlist</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
