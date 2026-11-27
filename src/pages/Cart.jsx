import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  ShoppingBag,
  CreditCard,
} from "lucide-react";

import SEO from "../components/common/SEO";
import { useCart } from "../context/useCart";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    cartTotal,
  } = useCart();

  const formatPrice = (price) => `৳${Number(price).toLocaleString("en-BD")}`;

  return (
    <>
      <SEO
        title="শপিং কার্ট | Trust Mart"
        description="Trust Mart-এর শপিং কার্টে আপনার পছন্দের পণ্যগুলো দেখুন, পরিমাণ পরিবর্তন করুন এবং অর্ডারের জন্য প্রস্তুত হোন।"
        path="/cart"
      />

      <section
        className="py-12 lg:py-20 bg-[#f8faf7] min-h-[60vh]"
        aria-label="শপিং কার্ট"
      >
        <div className="container mx-auto px-4 lg:px-8">
          {/* Page Heading */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1d5638]/10 text-[#1d5638] mb-4">
              <ShoppingCart size={30} aria-hidden="true" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-[#173f2b]">
              আপনার শপিং কার্ট
            </h1>

            <p className="text-gray-600 mt-3">
              আপনার পছন্দের পণ্যগুলো এখানে দেখতে পারবেন।
            </p>
          </div>

          {cartItems.length === 0 ? (
            /* Empty Cart */
            <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 text-center">
              <ShoppingBag
                size={64}
                className="mx-auto text-gray-300 mb-5"
                aria-hidden="true"
              />

              <h2 className="text-2xl font-bold text-[#173f2b] mb-3">
                আপনার কার্ট এখন খালি!
              </h2>

              <p className="text-gray-600 leading-7 mb-7">
                এখনো কোনো পণ্য কার্টে যোগ করেননি। আমাদের পণ্যসমূহ থেকে আপনার
                পছন্দের পণ্য নির্বাচন করুন।
              </p>

              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-[#173f2b] hover:bg-[#1d5638] text-white px-7 py-3 rounded-xl font-semibold transition-colors"
              >
                <ShoppingBag size={19} aria-hidden="true" />
                পণ্য দেখুন
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-5">
                <div className="flex items-center justify-between">
                  <p className="text-gray-600 font-medium">
                    মোট {cartCount}টি পণ্য
                  </p>

                  <button
                    type="button"
                    onClick={clearCart}
                    className="flex items-center gap-2 text-red-500 hover:text-red-700 text-sm font-semibold transition-colors"
                  >
                    <Trash2 size={17} aria-hidden="true" />
                    কার্ট খালি করুন
                  </button>
                </div>

                {cartItems.map((item) => (
                  <article
                    key={item.id}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5"
                  >
                    <div className="flex flex-col sm:flex-row gap-5">
                      {/* Product Image */}
                      <div className="w-full sm:w-32 h-40 sm:h-32 shrink-0 rounded-xl overflow-hidden bg-[#f5f6ef]">
                        <img
                          src={item.image}
                          alt={item.name}
                          title={item.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between gap-3">
                          <div>
                            <h2 className="text-lg font-bold text-[#173f2b]">
                              {item.name}
                            </h2>

                            {item.unit && (
                              <p className="text-sm text-gray-500 mt-1">
                                প্রতি {item.unit}
                              </p>
                            )}
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            aria-label={`${item.name} কার্ট থেকে সরান`}
                            title="পণ্য সরান"
                            className="text-red-500 hover:text-red-700 h-fit p-2"
                          >
                            <Trash2 size={19} aria-hidden="true" />
                          </button>
                        </div>

                        <p className="text-[#1d5638] font-bold text-xl mt-3">
                          {formatPrice(item.price)}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              disabled={item.quantity <= 1}
                              aria-label={`${item.name} এর পরিমাণ কমান`}
                              className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
                            >
                              <Minus size={16} aria-hidden="true" />
                            </button>

                            <span
                              className="w-12 text-center font-semibold text-gray-800"
                              aria-live="polite"
                            >
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              aria-label={`${item.name} এর পরিমাণ বাড়ান`}
                              className="w-10 h-10 flex items-center justify-center hover:bg-gray-100"
                            >
                              <Plus size={16} aria-hidden="true" />
                            </button>
                          </div>

                          <p className="font-bold text-[#173f2b]">
                            {formatPrice(Number(item.price) * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}

                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-[#1d5638] hover:text-[#173f2b] font-semibold transition-colors"
                >
                  <ArrowLeft size={18} aria-hidden="true" />
                  আরও পণ্য কিনুন
                </Link>
              </div>

              {/* Order Summary */}
              <aside className="lg:col-span-1">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-28">
                  <h2 className="text-xl font-bold text-[#173f2b] mb-6">
                    অর্ডারের সারসংক্ষেপ
                  </h2>

                  <div className="space-y-4 text-gray-600">
                    <div className="flex justify-between gap-3">
                      <span>মোট পণ্য</span>
                      <span className="font-semibold text-gray-800">
                        {cartCount}টি
                      </span>
                    </div>

                    <div className="flex justify-between gap-3">
                      <span>পণ্যের মূল্য</span>
                      <span className="font-semibold text-gray-800">
                        {formatPrice(cartTotal)}
                      </span>
                    </div>

                    <div className="flex justify-between gap-3">
                      <span>ডেলিভারি চার্জ</span>
                      <span className="text-sm text-gray-500">
                        পরবর্তীতে নির্ধারিত হবে
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-dashed border-gray-200 my-5" />

                  <div className="flex justify-between items-center gap-3">
                    <span className="text-lg font-bold text-[#173f2b]">
                      সর্বমোট
                    </span>

                    <span className="text-2xl font-bold text-[#1d5638]">
                      {formatPrice(cartTotal)}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 mt-3 leading-6">
                    ডেলিভারি চার্জ Checkout করার সময় যোগ করা হবে।
                  </p>

                  {/* Checkout Button */}
                  <Link
                    to="/checkout"
                    className="mt-7 w-full flex items-center justify-center gap-2 bg-[#1d5638] hover:bg-[#173f2b] text-white py-4 rounded-xl font-bold transition-colors"
                  >
                    <CreditCard size={20} aria-hidden="true" />
                    Checkout করুন
                  </Link>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    bKash ও Nagad-এর মাধ্যমে পেমেন্টের ব্যবস্থা রয়েছে।
                  </p>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
