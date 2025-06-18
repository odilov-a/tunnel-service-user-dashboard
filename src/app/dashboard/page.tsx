"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const DashboardPage: React.FC = () => {
  const router = useRouter();
  const [token] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
    return null;
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [token, router]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <h2 className="text-xl text-gray-700 font-semibold">
          Checking authentication...
        </h2>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Dashboard</h1>
      <p className="text-gray-600">
        Welcome to your dashboard. Here you can view your account information
        and manage your tunnels.
      </p>
      <div className="mt-6 text-sm text-gray-500 break-all">
        <strong>Token:</strong> {token}
      </div>
    </main>
  );
};

export default DashboardPage;
