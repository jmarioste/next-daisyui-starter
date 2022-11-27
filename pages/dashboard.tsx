import Link from "next/link";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="container">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl">Dashboard</h1>

          <Link className="btn btn-primary" href="/">
            Go to Index Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
