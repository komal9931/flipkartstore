// import React, { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const fetchproducts = async () => {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const data = await response.json();
//     console.log(data);
//     setProducts(data);
//   };
//   useEffect(() => {
//     fetchproducts();
//   }, []);
//   if (!products) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           {products.map((product) => {
//             return (
//               <>
//                 <ProductCard
//                   id={product.id}
//                   title={product.title}
//                   description={product.description}
//                   image={product.image}
//                   category={product.category}
//                   price={product.price}
//                 />
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Header from "./Header";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchproducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchproducts();
  }, []);

  return (
    <>
      {/* Pass all products to the Header */}
      <Header products={products} />
      <div className="container">
        {loading ? (
          <div className="text-center mt-5">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <p className="mt-2">Fetching products, please wait...</p>
          </div>
        ) : (
          <div className="row mt-3">
            {products.map((product) => (
              <div className="col-md-4 mb-4" key={product.id}>
                <ProductCard
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  image={product.image}
                  category={product.category}
                  price={product.price}
                  item={product}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
