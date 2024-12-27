// import React from "react";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// const Productinfo = () => {
//   const [products, setProducts] = useState([]);
//   const fetchproducts = async () => {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const data = await response.json();
//     // console.log(data);
//     setProducts(data);
//   };
//   useEffect(() => {
//     fetchproducts();
//   }, []);
//   const { id } = useParams();
//   console.log(id);
//   return (
//     <>
//       <div className="container mt-4">
//         <div className="row">
//           <div className="col-md-4">
//             {products.map((productId) => {
//               if (productId.id === parseInt(id)) {
//                 return (
//                   <div key={productId.id}>
//                     <img src={productId.image} alt={productId.title} />
//                   </div>
//                 );
//               }
//             })}
//           </div>
//           <div className="col-md-8">
//             <div key={productId.id}>
//               <h3>{productId.title}</h3>
//               <p>{productId.description}</p>
//               <p>Price: {productId.price}</p>
//               <p>Category: {productId.category}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Productinfo;
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const Productinfo = () => {
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const { id } = useParams();

//   const fetchProducts = async () => {
//     try {
//       const response = await fetch("https://fakestoreapi.com/products");
//       const data = await response.json();
//       setProducts(data);
//       const product = data.find((product) => product.id === parseInt(id));
//       setSelectedProduct(product);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [id]);

//   if (!selectedProduct) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mt-4">
//       <div className="row">
//         <div className="col-md-4">
//           <img
//             src={selectedProduct.image}
//             alt={selectedProduct.title}
//             className="img-fluid"
//           />
//         </div>
//         <div className="col-md-8">
//           <h3>{selectedProduct.title}</h3>
//           <p>{selectedProduct.description}</p>
//           <p>Price: ${selectedProduct.price}</p>
//           <p>Category: {selectedProduct.category}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Productinfo;
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { useCart } from "react-use-cart";

// const Productinfo = () => {
//   const { addItem, removeItem } = useCart();
//   const [product, setProduct] = useState(null);
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const fetchProduct = async () => {
//     const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//     const data = await response.json();
//     setProduct(data);
//   };

//   useEffect(() => {
//     fetchProduct();
//   }, [id]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mt-4">
//       <h4 className="text-center mb-4">Product Information</h4>
//       <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
//         Back
//       </button>
//       <div className="row">
//         <div className="col-md-5 text-center">
//           <img
//             src={product.image}
//             alt={product.title}
//             className="img-fluid rounded shadow-sm"
//             style={{ maxHeight: "400px" }}
//           />
//         </div>
//         <div className="col-md-7">
//           <div className="card shadow-sm p-4">
//             <h3 className="text-primary mb-3">{product.title}</h3>
//             <p className="text-muted">{product.description}</p>
//             <p className="fw-bold">
//               Category: <span className="text-success">{product.category}</span>
//             </p>
//             <p className="fw-bold">
//               Price: <span className="text-danger">${product.price}</span>
//             </p>
//             <div className="mt-3">
//               <button
//                 className="btn btn-primary mx-2"
//                 onClick={() => addItem(product)}
//               >
//                 Add to Cart
//               </button>
//               <button
//                 className="btn btn-sm btn-danger"
//                 onClick={() => removeItem(product.id)}
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Productinfo;
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "react-use-cart";

const Productinfo = () => {
  const { addItem, removeItem } = useCart();
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchProduct = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Fetching product details...</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Product Details</h2>
      <button
        className="btn btn-outline-secondary mb-4"
        onClick={() => navigate(-1)}
      >
        <i className="bi bi-arrow-left"></i> Back
      </button>
      <div className="row g-4">
        <div className="col-lg-5 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>
        <div className="col-lg-7">
          <div className="card border-0 shadow-sm p-4">
            <h3 className="text-dark mb-3">{product.title}</h3>
            <p className="text-muted small mb-3">{product.description}</p>
            <p className="fw-bold mb-2">
              Category:{" "}
              <span className="badge bg-success text-light">
                {product.category}
              </span>
            </p>
            <p className="fw-bold mb-3">
              Price: <span className="text-danger fs-5">${product.price}</span>
            </p>
            <div className="d-flex gap-3 mt-4">
              <button
                className="btn btn-success"
                onClick={() => addItem(product)}
              >
                <i className="bi bi-cart-plus"></i> Add to Cart
              </button>
              {/* <button
                className="btn btn-outline-danger flex-fill"
                onClick={() => removeItem(product.id)}
              >
                <i className="bi bi-trash"></i> Remove
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productinfo;
