import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">404 - Không tìm thấy trang</h1>
      <Link to="/" className="text-blue-500 underline">
        Quay về trang chủ
      </Link>
      ;
    </>
  );
};

export default NotFoundPage;
