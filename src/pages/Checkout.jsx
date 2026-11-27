import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
  Copy,
  CreditCard,
  MapPin,
  Package,
  ShoppingBag,
  User,
  LoaderCircle,
} from "lucide-react";

import SEO from "../components/common/SEO";
import { useCart } from "../context/useCart";

const PAYMENT_NUMBER = "01838041204";
const DELIVERY_FEE = 0;

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();

  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    district: "",
    upazila: "",
    address: "",
    paymentMethod: "bkash",
    transactionId: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [successOrder, setSuccessOrder] = useState(null);
  const [copied, setCopied] = useState(false);

  const totalAmount = cartTotal + DELIVERY_FEE;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const copyPaymentNumber = async () => {
    try {
      await navigator.clipboard.writeText(PAYMENT_NUMBER);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setFormMessage("নম্বর কপি করা যায়নি। নিজে কপি করুন।");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormMessage("");

    if (cartItems.length === 0) {
      setFormMessage("আপনার কার্টে কোনো পণ্য নেই।");
      return;
    }

    if (!/^01[3-9]\d{8}$/.test(formData.phone.trim())) {
      setFormMessage("সঠিক ১১ সংখ্যার মোবাইল নম্বর দিন।");
      return;
    }

    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      setFormMessage("সার্ভার কনফিগারেশন পাওয়া যায়নি।");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${supabaseUrl}/functions/v1/rapid-processor`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
          },
          body: JSON.stringify({
            customerName: formData.customerName,
            phone: formData.phone,
            district: formData.district,
            upazila: formData.upazila,
            address: formData.address,
            paymentMethod: formData.paymentMethod,
            transactionId: formData.transactionId,
            items: cartItems.map((item) => ({
              id: item.id,
              quantity: item.quantity,
            })),
          }),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "অর্ডার জমা দেওয়া যায়নি। আবার চেষ্টা করুন।",
        );
      }

      if (!result.success || !result.order?.orderNumber) {
        throw new Error("সার্ভার থেকে সঠিক অর্ডার তথ্য পাওয়া যায়নি।");
      }

      setSuccessOrder(result.order);
      clearCart();
    } catch (error) {
      setFormMessage(
        error.message || "সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Checkout | Trust Mart"
        description="Trust Mart থেকে আপনার পছন্দের পণ্য অর্ডার করুন।"
        path="/checkout"
      />

      <section className="min-h-screen bg-[#f8faf7] py-12 lg:py-16">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          {successOrder ? (
            <div className="mx-auto max-w-xl rounded-3xl bg-white p-8 text-center shadow-sm md:p-12">
              <CheckCircle size={64} className="mx-auto mb-5 text-green-600" />

              <h1 className="mb-3 text-2xl font-bold text-[#173f2b] md:text-3xl">
                অর্ডার সফলভাবে জমা হয়েছে!
              </h1>

              <p className="mb-6 leading-7 text-gray-600">
                আপনার অর্ডারটি গ্রহণ করা হয়েছে। পেমেন্ট যাচাইয়ের পর আমাদের টিম
                আপনার সঙ্গে যোগাযোগ করবে।
              </p>

              <div className="mb-6 rounded-xl bg-[#f1f7f1] p-5">
                <p className="mb-2 text-sm text-gray-600">আপনার Order Number</p>

                <p className="text-2xl font-bold text-[#1d5638]">
                  #{successOrder.orderNumber}
                </p>

                <p className="mt-4 text-sm text-gray-600">মোট অর্ডার মূল্য</p>

                <p className="text-xl font-bold text-[#1d5638]">
                  ৳{Number(successOrder.totalAmount).toLocaleString("en-IN")}
                </p>

                <p className="mt-3 text-sm font-medium text-orange-600">
                  পেমেন্ট যাচাইয়ের অপেক্ষায়
                </p>
              </div>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-xl bg-[#1d5638] px-6 py-3 font-semibold text-white transition hover:bg-[#173f2b]"
              >
                <ShoppingBag size={18} />
                আরও পণ্য দেখুন
              </Link>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="mx-auto max-w-xl rounded-3xl bg-white p-10 text-center shadow-sm">
              <ShoppingBag size={56} className="mx-auto mb-5 text-gray-400" />

              <h1 className="mb-3 text-2xl font-bold text-[#173f2b]">
                আপনার কার্ট খালি
              </h1>

              <p className="mb-6 text-gray-600">
                অর্ডার করার জন্য প্রথমে কার্টে পণ্য যোগ করুন।
              </p>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-xl bg-[#1d5638] px-6 py-3 font-semibold text-white hover:bg-[#173f2b]"
              >
                <ShoppingBag size={18} />
                পণ্য দেখুন
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-10">
                <Link
                  to="/cart"
                  className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-[#1d5638] hover:underline"
                >
                  <ArrowLeft size={17} />
                  কার্টে ফিরে যান
                </Link>

                <h1 className="text-3xl font-bold text-[#173f2b] md:text-4xl">
                  Checkout
                </h1>

                <p className="mt-2 text-gray-600">
                  আপনার ডেলিভারি ও পেমেন্টের তথ্য পূরণ করুন।
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-8 lg:grid-cols-3"
              >
                <div className="space-y-8 lg:col-span-2">
                  {/* Customer Information */}
                  <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
                    <div className="mb-6 flex items-center gap-3">
                      <User className="text-[#1d5638]" />

                      <h2 className="text-xl font-bold text-[#173f2b]">
                        কাস্টমারের তথ্য
                      </h2>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                          আপনার নাম *
                        </label>

                        <input
                          type="text"
                          name="customerName"
                          value={formData.customerName}
                          onChange={handleChange}
                          placeholder="আপনার সম্পূর্ণ নাম"
                          minLength={2}
                          maxLength={100}
                          required
                          className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#1d5638]"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                          মোবাইল নম্বর *
                        </label>

                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="01XXXXXXXXX"
                          pattern="01[3-9][0-9]{8}"
                          maxLength={11}
                          required
                          className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#1d5638]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Delivery Information */}
                  <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
                    <div className="mb-6 flex items-center gap-3">
                      <MapPin className="text-[#1d5638]" />

                      <h2 className="text-xl font-bold text-[#173f2b]">
                        ডেলিভারি ঠিকানা
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                          জেলা *
                        </label>

                        <input
                          type="text"
                          name="district"
                          value={formData.district}
                          onChange={handleChange}
                          placeholder="আপনার জেলা"
                          required
                          className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#1d5638]"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                          উপজেলা / থানা *
                        </label>

                        <input
                          type="text"
                          name="upazila"
                          value={formData.upazila}
                          onChange={handleChange}
                          placeholder="আপনার উপজেলা"
                          required
                          className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#1d5638]"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                          সম্পূর্ণ ঠিকানা *
                        </label>

                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="বাসা/গ্রাম, রাস্তা, এলাকার নাম লিখুন"
                          minLength={5}
                          required
                          rows={4}
                          className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#1d5638]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
                    <div className="mb-6 flex items-center gap-3">
                      <CreditCard className="text-[#1d5638]" />

                      <h2 className="text-xl font-bold text-[#173f2b]">
                        পেমেন্ট তথ্য
                      </h2>
                    </div>

                    <p className="mb-4 text-sm text-gray-600">
                      নিচের যেকোনো একটি Personal Account-এ Send Money করুন।
                    </p>

                    <div className="mb-6 grid grid-cols-2 gap-4">
                      <label
                        className={`cursor-pointer rounded-xl border-2 p-4 text-center transition ${
                          formData.paymentMethod === "bkash"
                            ? "border-pink-500 bg-pink-50"
                            : "border-gray-200"
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="bkash"
                          checked={formData.paymentMethod === "bkash"}
                          onChange={handleChange}
                          className="sr-only"
                        />

                        <span className="font-bold text-pink-600">bKash</span>

                        <span className="mt-1 block text-xs text-gray-500">
                          Personal
                        </span>
                      </label>

                      <label
                        className={`cursor-pointer rounded-xl border-2 p-4 text-center transition ${
                          formData.paymentMethod === "nagad"
                            ? "border-orange-500 bg-orange-50"
                            : "border-gray-200"
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="nagad"
                          checked={formData.paymentMethod === "nagad"}
                          onChange={handleChange}
                          className="sr-only"
                        />

                        <span className="font-bold text-orange-600">Nagad</span>

                        <span className="mt-1 block text-xs text-gray-500">
                          Personal
                        </span>
                      </label>
                    </div>

                    <div className="mb-6 rounded-xl bg-[#f1f7f1] p-5">
                      <p className="mb-2 text-sm font-medium text-gray-600">
                        Send Money করুন এই নম্বরে
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="text-2xl font-bold tracking-wide text-[#173f2b]">
                          {PAYMENT_NUMBER}
                        </span>

                        <button
                          type="button"
                          onClick={copyPaymentNumber}
                          className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-[#1d5638] shadow-sm hover:bg-gray-50"
                        >
                          <Copy size={16} />
                          {copied ? "কপি হয়েছে" : "Copy"}
                        </button>
                      </div>

                      <p className="mt-4 text-sm leading-6 text-gray-600">
                        ১. আপনার নির্বাচিত পেমেন্ট মাধ্যম থেকে Send Money করুন।
                        <br />
                        ২. পেমেন্টের পর পাওয়া Transaction ID নিচে লিখুন।
                        <br />
                        ৩. পেমেন্ট যাচাইয়ের পর অর্ডার নিশ্চিত করা হবে।
                      </p>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Transaction ID *
                      </label>

                      <input
                        type="text"
                        name="transactionId"
                        value={formData.transactionId}
                        onChange={handleChange}
                        placeholder="আপনার Transaction ID লিখুন"
                        minLength={5}
                        maxLength={30}
                        required
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 uppercase outline-none focus:border-[#1d5638]"
                      />
                    </div>
                  </div>

                  {formMessage && (
                    <div
                      role="alert"
                      className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700"
                    >
                      {formMessage}
                    </div>
                  )}
                </div>

                {/* Order Summary */}
                <div className="h-fit rounded-2xl bg-white p-6 shadow-sm lg:sticky lg:top-24">
                  <div className="mb-6 flex items-center gap-3">
                    <Package className="text-[#1d5638]" />

                    <h2 className="text-xl font-bold text-[#173f2b]">
                      অর্ডার সারাংশ
                    </h2>
                  </div>

                  <div className="mb-5 space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between gap-3"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-14 w-14 rounded-lg object-cover"
                          />

                          <div className="min-w-0">
                            <p className="truncate text-sm font-semibold text-gray-800">
                              {item.name}
                            </p>

                            <p className="text-xs text-gray-500">
                              ৳{Number(item.price).toLocaleString("en-IN")} ×{" "}
                              {item.quantity}
                            </p>
                          </div>
                        </div>

                        <p className="shrink-0 text-sm font-bold text-[#173f2b]">
                          ৳
                          {(Number(item.price) * item.quantity).toLocaleString(
                            "en-IN",
                          )}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 border-t border-gray-100 pt-5">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Subtotal</span>
                      <span>৳{cartTotal.toLocaleString("en-IN")}</span>
                    </div>

                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Delivery Charge</span>
                      <span>৳{DELIVERY_FEE}</span>
                    </div>

                    <p className="text-xs leading-5 text-gray-500">
                      ডেলিভারি চার্জ ঠিকানা অনুযায়ী পরে নিশ্চিত করা হবে।
                    </p>

                    <div className="flex justify-between border-t border-gray-100 pt-4 text-lg font-bold text-[#173f2b]">
                      <span>সর্বমোট</span>
                      <span>৳{totalAmount.toLocaleString("en-IN")}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1d5638] px-5 py-4 font-bold text-white transition hover:bg-[#173f2b] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <LoaderCircle size={20} className="animate-spin" />
                        অর্ডার জমা হচ্ছে...
                      </>
                    ) : (
                      <>
                        <ShoppingBag size={20} />
                        অর্ডার কনফার্ম করুন
                      </>
                    )}
                  </button>

                  <p className="mt-4 text-center text-xs leading-5 text-gray-500">
                    আপনার তথ্য নিরাপদে সংরক্ষণ করা হবে।
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Checkout;
