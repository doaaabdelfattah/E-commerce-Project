import Header from "../components/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../redux/reducers/orderSlice";

const OrderHistory = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  console.log("id in order", userId);

  useEffect(() => {
    dispatch(getOrders({ userId }));
  }, []);

  return (
    <div>
      <Header />
      <div className="w-[85%] lg:w[90%] mx-auto flex mt-8">
        <h1> order History </h1>
      </div>
    </div>
  );
};

export default OrderHistory;
