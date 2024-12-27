// import React from "react";
// import { useCart } from "react-use-cart";

// const Cart = () => {
//   const {
//     removeItem,
//     updateItemQuantity,
//     items,
//     totalItems,
//     totalUniqueItems,
//     cartTotal,
//   } = useCart();
//   console.log(items);
//   return (
//     <>
//       <div className="container">
//         <table className="table table-stripe hover">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>IMAGE</th>
//               <th>NAME</th>
//               <th>PRICE</th>
//               <th>ACTIONS</th>
//             </tr>
//                   </thead>
//                   <tbody>
//                       <tr>
//                           {items.map((cval, i) => {
//                               return (
//                                   <tr key={i}>
//                           })}
//                       </tr>
//                   </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default Cart;
import { useCart } from "react-use-cart";
import Header from "./Header";

const Cart = () => {
  const {
    removeItem,
    updateItemQuantity,
    items,
    totalItems,
    totalUniqueItems,
    cartTotal,
  } = useCart();

  return (
    <>
      <Header />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Shopping Cart</h2>
        {items.length > 0 ? (
          <>
            <p className="text-end">
              <strong>Total Items:</strong> {totalItems} |{" "}
              <strong>Unique Items:</strong> {totalUniqueItems} |{" "}
              <strong>Total Price:</strong> ${cartTotal.toFixed(2)}
            </p>
            <table className="table table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: "50px", height: "50px" }}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-primary me-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        className="btn btn-sm btn-primary ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <div className="text-center mt-4">
            <h5>Your cart is empty!</h5>
            <p>Start adding items to your cart.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
