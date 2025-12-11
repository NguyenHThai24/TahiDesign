import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <main>
      <section>Chi tiết sản phẩm ID: {id}</section>
    </main>
  );
};

export default ProductDetail;
