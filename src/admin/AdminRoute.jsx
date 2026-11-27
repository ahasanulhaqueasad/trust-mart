import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { LoaderCircle } from "lucide-react";

const AdminRoute = () => {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let active = true;

    const checkAdmin = async () => {
      try {
        const {
          data: { session },
          error: sessionError,
        } = await supabase.auth.getSession();

        if (sessionError || !session) {
          if (active) setStatus("unauthorized");
          return;
        }

        const { data: admin, error } = await supabase
          .from("admin_users")
          .select("user_id")
          .eq("user_id", session.user.id)
          .eq("role", "admin")
          .maybeSingle();

        if (error || !admin) {
          await supabase.auth.signOut();

          if (active) setStatus("unauthorized");
          return;
        }

        if (active) setStatus("authorized");
      } catch {
        if (active) setStatus("unauthorized");
      }
    };

    checkAdmin();

    return () => {
      active = false;
    };
  }, []);

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoaderCircle size={36} className="animate-spin text-green-700" />
      </div>
    );
  }

  if (status === "unauthorized") {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
