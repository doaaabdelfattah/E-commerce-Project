import Header from "../components/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../redux/reducers/orderSlice";

const OrderHistory = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const orderHistory = useSelector((state) => state.order.history);
  console.log("id in order", userId);
  console.log("order History", orderHistory);

  useEffect(() => {
    dispatch(getOrders({ userId }));
  }, [dispatch, userId]);

  return (
    <div>
      <Header />
      <div className="w-[85%] lg:w[90%] mx-auto flex justify-center mt-8">
        <h1 className="text-3xl text-center"> order History </h1>
      </div>
    </div>
  );
};

export default OrderHistory;
