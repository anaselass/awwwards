const BentoCard = ({ src, title, descreption }) => {
  return (
    <div className="relative size-full ">
      <video
        src={src}
        loop
        autoPlay
        muted
        className="absolute left-0 top-0 size-full object-cover object-center"
      />

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font-b">{title}</h1>
          {descreption && (
            <p className="mt-3 max-w-80 text-xs md:text-base">{descreption}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>

          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in an IP-rich product universe where players,
            agentic AI and blockchain lead the new economic paradigm.
          </p>
        </div>

        <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[64vh]">
          <BentoCard
            src="/videos/feature-1.mp4"
            title={
              <>
                radia<b>n</b>t
              </>
            }
            descreption="The game of games app transforming moments across Web2 & Web3 titles into rewards"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
