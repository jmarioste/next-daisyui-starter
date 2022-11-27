import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Custom403: NextPage = () => {
  const session = useSession();
  return (
    <div className="container">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl my-8">403 - Unauthorized</h1>
          <Link className="btn btn-primary" href="/">
            Go to Index
          </Link>

          <div className="card shadow-md">
            <div className="card-body">
              <p>Session Data:</p>
              <pre>{JSON.stringify(session, null, 4)}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom403;
