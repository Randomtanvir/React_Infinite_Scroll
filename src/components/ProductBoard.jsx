import { useEffect, useRef, useState } from "react";
import Loader from "./Loader";
import ProductCart from "./ProductCart";
import axios from "axios";

const productsPerPage = 10;
const ProductBoard = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
            page * productsPerPage
          }`
        );
        const data = await response.data.products;
        if (data.length === 0) {
          setHasMore(false);
        } else {
          setProducts((prevProducts) => [...prevProducts, ...data]);
          setPage((prevPage) => prevPage + 1);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const onIntersection = (items) => {
      const loaderItem = items[0];

      if (loaderItem.isIntersecting && hasMore) {
        getProduct();
      }
    };

    const observer = new IntersectionObserver(onIntersection);

    if (observer && loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    return () => {
      if (observer) observer.disconnect();
    };
  }, [page, hasMore]);
  return (
    <div>
      <h1 className="text-center text-3xl text-teal-400">Product</h1>

      <div className="grid grid-cols-5 gap-8 px-[10%]">
        {products.map((product) => (
          <ProductCart
            key={product.id}
            brand={product.brand}
            img={product.thumbnail}
            description={product.description}
            title={product.title}
          />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center items-center " ref={loaderRef}>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default ProductBoard;
