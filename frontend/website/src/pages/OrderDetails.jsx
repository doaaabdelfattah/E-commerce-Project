import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const OrderDetails = ({ order }) => {
  const [productDetails, setProductsDetails] = useState([]);
  const { products } = useSelector((state) => state.products);
  console.log("order:", order);
  console.log("product details:", productDetails);

  // ======== Get Product details
  useEffect(() => {
    // Combine orderItems with product details
    // map over ite order items
    const details = order.orderItems.map((item) => {
      // or each item get its id and find the details of that product
      const product = products.find((product) => product.id === item.productId);
      // Then include the quantity to the item
      return {
        ...item, // Include quantity and other orderItem details
        product, // Attach the product details
      };
    });
    if (details) {
      setProductsDetails(details);
    }
  }, [products, order]);

  console.log("details:", productDetails);

  return (
    <div className="flex justify-around w-full mx-auto bg-[#FAF9F7] mb-4 p-4">
      <div className="leading-relaxed mt-8 p-6inline-block text-left">
        <h2 className="text-3xl font-semibold mb-4">Order Nu. {order.id}</h2>
        <p>
          <strong>Name:</strong> {order.name}
        </p>
        <br></br>
        <p>
          <strong>Shipping Address:</strong> {order.shippingAddress1},{" "}
          {order.city}, {order.country}
        </p>
        <br></br>
        <p>
          <strong>Shipping Address 2:</strong> {order.shippingAddress2},
        </p>
        <br></br>
        <p>
          <strong>Email:</strong> {order.email}
        </p>
        <br></br>
        <p>
          <strong>Phone:</strong> {order.phone}
        </p>
      </div>
      <div className="mt-8 p-6 bg-white inline-block text-left">
        <h2 className="text-3xl font-semibold mb-4 ">Order Items:</h2>
        <ul>
          {productDetails.map((item, index) => (
            <li key={index} className="mb-2">
              {item.product ? item.product.title : "Product not found"} -
              Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderDetails;
