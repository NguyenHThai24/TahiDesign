const Footer = () => {
  return (
    <footer className="relative w-full pt-10 text-sm shadow-sm">
      {/* Gradient trắng từ dưới lên */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-64 bg-linear-to-t from-white via-white/80 to-transparent z-0" />

      {/* Nội dung */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-2">
        <div className="lg:col-span-2">
          <h2 className="font-logo text-3xl text-(--text-color) mb-4">
            Tahi Design
          </h2>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            voluptates minus aspernatur accusamus illo architecto.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Tiêu đề</h3>
          <ul className="space-y-2">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Tiêu đề</h3>
          <ul className="space-y-2">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 mt-7 text-center py-2 bg-(--primary-color) text-(--text-color)">
        © 2026 Tahi Design. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
