import Link from "next/link";
import React from "react";

export default function DocsPage() {
  return (
    <main className="min-h-screen px-6 py-10 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Documentation</h1>

      <div className="mb-6">
        <Link
          href="/register"
          className="text-blue-600 hover:underline block mb-2"
        >
          👉 Go to Register
        </Link>
        <Link
          href="/login"
          className="text-blue-600 hover:underline block mb-4"
        >
          👉 Go to Login
        </Link>
      </div>

      <p className="text-gray-700 mb-4">
        Welcome to the <strong>MyTunnel</strong> User Dashboard documentation
        page. Here you will find everything you need to get started using the
        tunnel CLI and dashboard.
      </p>

      <section className="bg-white rounded shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-2">📦 Installation</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>npm install -g mytunnel-cli</code>
        </pre>
      </section>

      <section className="bg-white rounded shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-2">🚀 Usage</h2>
        <p className="mb-2">To expose your local server using MyTunnel CLI:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
            mytunnel -s {"<subdomain>"} -p {"<localPort>"} -t {"<token>"}
          </code>
        </pre>
        <p className="text-sm mt-2 text-gray-500">
          Example: <code>mytunnel -s akbar -p 3000 -t your_token_here</code>
        </p>
      </section>

      <section className="bg-white rounded shadow p-6">
        <h2 className="text-xl font-semibold mb-2">📚 Contents</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Getting Started</li>
          <li>API Reference</li>
          <li>FAQ</li>
          <li>Support</li>
        </ul>
      </section>
    </main>
  );
}
