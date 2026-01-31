import { Link } from "react-router-dom";
import notFound from "../assets/not-found.png";

function NotFoundPage() {
  return (
    <section className="flex h-full flex-col items-center justify-center gap-4">
      <img src={notFound} alt="" width={500} />
      <Link to={"/"} className="title text-3xl font-bold">
        Back to Home
      </Link>
    </section>
  );
}
export default NotFoundPage;
