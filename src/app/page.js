'use client'
import dynamic from 'next/dynamic';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Home = dynamic(() => import("./pages/Home"), {
  ssr: false, // Optional: disable server-side rendering
  loading: () => <div className="flex items-center justify-center h-20">
  <div className="w-8 h-8 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
</div>, 
});




export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
