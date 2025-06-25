import AnimatedTitle from "./AnimatedTitle";

const Story = () => {
  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm md:text-[10px] uppercase">
          the multiversal ip world
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title={"the st<b>o</b>ry of <br /> a hidden real<b>m</b>"}
            sectionId="#story"
            containerClass={"mt-5 pointer-events-none"}
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
