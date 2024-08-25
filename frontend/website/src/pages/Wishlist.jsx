import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/product/ProductCard';
import { fetchWishlistItems, removeProductFromWishList } from '../redux/reducers/wishListSlice';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Wishlist() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.wishlist);
  
  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    dispatch(fetchWishlistItems(userId));
  }, [dispatch, userId]);

  const handleRemove = (productId) => {
    dispatch(removeProductFromWishList({ userId, productId }));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Header />
      {items.length > 0 ? (
        items.map((products) => (
          <ProductCard product={products} />
        ))
      ) : (
        <div>No items in wishlist</div>
      )}
      <Footer />
    </>
  );
}

export default Wishlist;