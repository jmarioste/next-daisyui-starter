import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const HomePage: NextPage = () => {
  return (
    <div className="container">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl my-8">Welcome to NextJS DaisyUI Starter</h1>
          <Link className="btn btn-primary" href="/dashboard">
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
