import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LogOut,
  RefreshCw,
  ShoppingBag,
  Clock,
  CheckCircle,
  XCircle,
  LoaderCircle,
  ShieldCheck,
  Home,
} from "lucide-react";

import { supabase } from "../lib/supabase";

const ORDER_STATUSES = [
  "pending",
  "confirmed",
  "processing",
  "shipped",
  "delivered",
  "cancelled",
];

const STATUS_LABELS = {
  pending: "Pending",
  confirmed: "Confirmed",
  processing: "Processing",
  shipped: "Shipped",
  delivered: "Delivered",
  cancelled: "Cancelled",
};

const PAYMENT_LABELS = {
  pending: "Pending",
  verified: "Verified",
  rejected: "Rejected",
};

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState(null);

  // Fetch orders from Supabase
  const fetchOrders = useCallback(async () => {
    setError("");

    try {
      const { data, error: fetchError } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

      if (fetchError) {
        throw fetchError;
      }

      setOrders(data || []);
    } catch (err) {
      setError(err.message || "অর্ডার লোড করা যায়নি।");
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial data loading
  useEffect(() => {
    let active = true;

    const loadOrders = async () => {
      try {
        const { data, error: fetchError } = await supabase
          .from("orders")
          .select("*")
          .order("created_at", { ascending: false });

        if (fetchError) {
          throw fetchError;
        }

        if (active) {
          setOrders(data || []);
        }
      } catch (err) {
        if (active) {
          setError(err.message || "অর্ডার লোড করা যায়নি।");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    loadOrders();

    return () => {
      active = false;
    };
  }, []);

  // Refresh orders
  const handleRefresh = () => {
    setLoading(true);
    fetchOrders();
  };

  // Admin logout
  const handleLogout = async () => {
    const { error: logoutError } = await supabase.auth.signOut();

    if (logoutError) {
      setError(logoutError.message);
      return;
    }

    navigate("/admin/login", { replace: true });
  };

  // Update order information
  const updateOrder = async (orderId, updates) => {
    setUpdatingId(orderId);
    setError("");

    try {
      const { data, error: updateError } = await supabase
        .from("orders")
        .update(updates)
        .eq("id", orderId)
        .select()
        .maybeSingle();

      if (updateError) {
        throw updateError;
      }

      if (!data) {
        throw new Error("অর্ডার Update হয়নি। Admin Permission যাচাই করুন।");
      }

      setOrders((previous) =>
        previous.map((order) =>
          order.id === orderId ? { ...order, ...data } : order,
        ),
      );
    } catch (err) {
      setError(err.message || "অর্ডার Update করা যায়নি।");
    } finally {
      setUpdatingId(null);
    }
  };

  const totalOrders = orders.length;

  const pendingOrders = orders.filter(
    (order) => order.order_status === "pending",
  ).length;

  const verifiedPayments = orders.filter(
    (order) => order.payment_status === "verified",
  ).length;

  const formatDate = (date) =>
    new Date(date).toLocaleString("en-BD", {
      dateStyle: "medium",
      timeStyle: "short",
    });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-800 text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5">
          <div className="flex items-center gap-3">
            <ShieldCheck size={30} />

            <div>
              <h1 className="text-xl font-bold">Trust Mart Admin</h1>

              <p className="text-xs text-green-100">
                Order Management Dashboard
              </p>
            </div>
          </div>

          {/* Header Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-green-800 transition hover:bg-green-50"
            >
              <Home size={17} />
              Visit Website
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm transition hover:bg-white/20"
            >
              <LogOut size={17} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8">
        {/* Dashboard Title */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Order Dashboard
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              তোমার সব Customer Order এখানে দেখতে পারবে।
            </p>
          </div>

          <button
            onClick={handleRefresh}
            disabled={loading}
            className="flex items-center gap-2 rounded-lg bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-800 disabled:opacity-60"
          >
            <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-5 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Statistics */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">Total Orders</p>
              <ShoppingBag className="text-blue-600" />
            </div>

            <p className="mt-3 text-3xl font-bold text-gray-900">
              {totalOrders}
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">Pending Orders</p>
              <Clock className="text-orange-500" />
            </div>

            <p className="mt-3 text-3xl font-bold text-gray-900">
              {pendingOrders}
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">Verified Payments</p>
              <CheckCircle className="text-green-600" />
            </div>

            <p className="mt-3 text-3xl font-bold text-gray-900">
              {verifiedPayments}
            </p>
          </div>
        </div>

        {/* Orders Table */}
        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
          <div className="border-b border-gray-200 px-5 py-4">
            <h3 className="font-bold text-gray-900">All Orders</h3>
          </div>

          {loading ? (
            <div className="flex items-center justify-center gap-2 py-16 text-gray-500">
              <LoaderCircle className="animate-spin" />
              Loading orders...
            </div>
          ) : orders.length === 0 ? (
            <div className="py-16 text-center text-gray-500">
              <ShoppingBag className="mx-auto mb-3" size={36} />
              এখনো কোনো Order পাওয়া যায়নি।
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] text-left text-sm">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    <th className="px-5 py-4">Order</th>
                    <th className="px-5 py-4">Customer</th>
                    <th className="px-5 py-4">Amount</th>
                    <th className="px-5 py-4">Payment</th>
                    <th className="px-5 py-4">Transaction ID</th>
                    <th className="px-5 py-4">Order Status</th>
                    <th className="px-5 py-4">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {orders.map((order) => (
                    <tr key={order.id} className="align-top">
                      <td className="px-5 py-4">
                        <p className="font-bold text-gray-900">
                          #{order.order_number}
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          {formatDate(order.created_at)}
                        </p>
                      </td>

                      <td className="px-5 py-4">
                        <p className="font-medium text-gray-900">
                          {order.customer_name}
                        </p>

                        <p className="text-gray-500">{order.phone}</p>

                        <p className="mt-1 text-xs text-gray-500">
                          {order.district}, {order.upazila}
                        </p>
                      </td>

                      <td className="px-5 py-4 font-semibold text-gray-900">
                        ৳{Number(order.total_amount).toLocaleString("en-BD")}
                      </td>

                      <td className="px-5 py-4">
                        <p className="font-medium">
                          {order.payment_method?.toUpperCase()}
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          {PAYMENT_LABELS[order.payment_status] ||
                            order.payment_status}
                        </p>
                      </td>

                      <td className="px-5 py-4">
                        <p className="max-w-36 break-all text-gray-700">
                          {order.transaction_id || "Not provided"}
                        </p>
                      </td>

                      <td className="px-5 py-4">
                        <select
                          value={order.order_status}
                          disabled={updatingId === order.id}
                          onChange={(e) =>
                            updateOrder(order.id, {
                              order_status: e.target.value,
                            })
                          }
                          className="rounded-lg border border-gray-300 bg-white px-2 py-2 text-xs outline-none focus:border-green-600"
                        >
                          {ORDER_STATUSES.map((status) => (
                            <option key={status} value={status}>
                              {STATUS_LABELS[status]}
                            </option>
                          ))}
                        </select>
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex min-w-36 flex-col gap-2">
                          <button
                            disabled={
                              updatingId === order.id ||
                              order.payment_status === "verified"
                            }
                            onClick={() =>
                              updateOrder(order.id, {
                                payment_status: "verified",
                                order_status: "confirmed",
                              })
                            }
                            className="flex items-center justify-center gap-1 rounded-lg bg-green-700 px-3 py-2 text-xs font-medium text-white hover:bg-green-800 disabled:opacity-40"
                          >
                            <CheckCircle size={14} />
                            Verify Payment
                          </button>

                          <button
                            disabled={
                              updatingId === order.id ||
                              order.payment_status === "rejected"
                            }
                            onClick={() =>
                              updateOrder(order.id, {
                                payment_status: "rejected",
                                order_status: "cancelled",
                              })
                            }
                            className="flex items-center justify-center gap-1 rounded-lg bg-red-600 px-3 py-2 text-xs font-medium text-white hover:bg-red-700 disabled:opacity-40"
                          >
                            <XCircle size={14} />
                            Reject Payment
                          </button>

                          {updatingId === order.id && (
                            <span className="text-center text-xs text-gray-500">
                              Updating...
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
