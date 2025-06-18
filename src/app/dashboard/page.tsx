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
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!token) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [token, router]);

  const handleCopy = () => {
    if (token) {
      navigator.clipboard.writeText(token);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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

      <div className="mt-6 text-sm text-gray-700 break-all bg-white p-4 rounded shadow">
        <strong>Token:</strong>
        <div className="mt-2 flex items-center gap-2">
          <code className="bg-gray-100 p-2 rounded text-xs break-all">
            {token}
          </code>
          <button
            onClick={handleCopy}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
          >
            Copy
          </button>
          {copied && <span className="text-green-600 text-xs">Copied!</span>}
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
