"use client";

import Image from "next/image";

const FounderStory = () => {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* Text */}
        <div className="fade-up">
          <h2 className="text-3xl font-bold mb-4">Why care.xyz Was Created</h2>
          <p className="text-neutral/80 leading-relaxed mb-4">
            care.xyz was born from a simple realization: families deserve peace of mind
            when it comes to caring for their loved ones.
          </p>
          <p className="text-neutral/80 leading-relaxed">
            Watching children and elderly family members struggle to find consistent,
            trustworthy care inspired us to build a platform where compassion meets
            professionalism.
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full h-[360px] rounded-3xl overflow-hidden shadow-md fade-up">
          <Image
            src="/about/founder.png"
            alt="Founder story"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default FounderStory;
