const Footer = () => {
  return (
    <footer className="relative mt-4 w-full border-t border-(--primary-color) pt-10 text-sm shadow-sm">
      {/* Gradient trắng từ dưới lên */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-64 w-full bg-linear-to-t from-white via-white/80 to-transparent" />

      {/* Nội dung */}
      <div className="relative z-10 grid grid-cols-1 gap-8 px-2 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <h2 className="font-logo mb-4 text-3xl text-(--text-color)">
            Tahi Design
          </h2>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            voluptates minus aspernatur accusamus illo architecto.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold">Tiêu đề</h3>
          <ul className="space-y-2">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold">Tiêu đề</h3>
          <ul className="space-y-2">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 mt-7 bg-(--primary-color) py-2 text-center text-(--text-color)">
        © 2026 Tahi Design. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
