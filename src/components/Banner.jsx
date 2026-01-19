import bannerIMG1 from "/images/banner1.jpg";
import bannerIMG2 from "/images/banner2.jpg";
import bannerIMG3 from "/images/banner3.jpg";
import bannerIMG4 from "/images/banner4.jpg";

const images = [bannerIMG1, bannerIMG2, bannerIMG3, bannerIMG4];

const Banner = () => {
  return (
    <section className="h-[300px] overflow-hidden border border-r-0 border-l-0 border-(--primary-color)">
      <div className="marquee flex w-max gap-0.5">
        {[...images, ...images].map((img, i) => (
          <img key={i} src={img} className="h-[300px] w-auto object-contain" />
        ))}
      </div>

      <style>
        {`
          .marquee {
            animation: marquee 20s linear infinite;
          }

          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Banner;
