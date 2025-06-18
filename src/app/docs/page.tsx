import Link from "next/link";
import React from "react";

export default function DocsPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Documentation</h1>
      <Link href="/register" style={{ display: "block", marginBottom: "1rem" }}>
        Go to Regiter
      </Link>
      <Link href="/login" style={{ display: "block", marginBottom: "1rem" }}>
        Go to Login
      </Link>
      <p>
        Welcome to the Tunnel Service User Dashboard documentation page. Here
        you'll find guides and references to help you get started.
      </p>
      <ul>
        <li>Getting Started</li>
        <li>API Reference</li>
        <li>FAQ</li>
        <li>Support</li>
      </ul>
    </main>
  );
}
