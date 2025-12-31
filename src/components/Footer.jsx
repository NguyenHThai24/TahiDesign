const Footer = () => {
  return (
    <footer className="w-full bg-(--background-color) pt-10 text-sm mt-2 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 sm:px-8 lg:px-16">
        {/* Cột logo và mô tả */}
        <div className="lg:col-span-2">
          <h2 className="font-logo text-3xl text-(--text-color) mb-4">
            Tahi Design
          </h2>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            voluptates minus aspernatur accusamus illo architecto, quam voluptas
            odio tenetur sed ullam quisquam corrupti maxime.
          </p>
        </div>

        {/* Cột 1 */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Tiêu đề</h3>
          <ul className="space-y-2">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>

        {/* Cột 2 */}
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
      <div className="mt-7 text-center border-t py-2 bg-(--text-color) text-white">
        © 2026 Tahi Design. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
