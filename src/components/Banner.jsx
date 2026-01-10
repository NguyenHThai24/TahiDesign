import bannerIMG from "/images/banner.png";

const images = [bannerIMG, bannerIMG, bannerIMG, bannerIMG];

const Banner = () => {
  return (
    <section className="h-[300px] overflow-hidden">
      <div
        className="flex w-max gap-4"
        style={{
          animation: "marquee 30s linear infinite",
        }}
      >
        {[bannerIMG, bannerIMG, bannerIMG, bannerIMG, bannerIMG, bannerIMG].map(
          (img, i) => (
            <img
              key={i}
              src={img}
              className="h-[300px] w-auto object-contain"
            />
          ),
        )}
      </div>

      <style>
        {`
      @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
    `}
      </style>
    </section>
  );
};

export default Banner;
