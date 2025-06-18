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

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm"
        >
          Logout
        </button>
      </div>

      <p className="text-gray-600 mb-6">
        Welcome to your dashboard. Here you can view your account information,
        copy your token, and use it to expose your local services using our CLI.
      </p>

      <div className="mb-8 text-sm text-gray-700 break-all bg-white p-4 rounded shadow">
        <strong>🔐 Your Token:</strong>
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

      <section className="bg-white rounded shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          📘 How to Use Your Token
        </h2>
        <p className="text-gray-700 mb-2">
          After installing the{" "}
          <code className="bg-gray-100 px-1">mytunnel-cli</code> globally:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
          <code>npm install -g mytunnel-cli</code>
        </pre>
        <p className="text-gray-700 mb-2">
          You can start tunneling your local project using the following
          command:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
            mytunnel -s your-subdomain -p 3000 -t your-token-here
          </code>
        </pre>
        <p className="text-gray-600 text-sm mt-2">
          Replace <code>your-subdomain</code> with a unique name and{" "}
          <code>3000</code> with your local port.
        </p>
      </section>
    </main>
  );
};

export default DashboardPage;
