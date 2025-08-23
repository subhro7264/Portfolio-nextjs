"use client";
import { Suspense, lazy } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Home = lazy(() => import("./pages/Home/Home"));

export default function HomePage() {
  return (
    <>
      <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <AiOutlineLoading3Quarters className="animate-spin text-4xl text-blue-500" />
        </div>
      }
    >
        <Home />
      </Suspense>
    </>
  );
}
