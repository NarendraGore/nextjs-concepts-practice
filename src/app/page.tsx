"use client";

import { useRouter } from "next/navigation";
import Button from "./components/button/page";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="text-center space-y-8 p-10 bg-white rounded-2xl shadow-xl max-w-md w-full">
        
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-blue-600 italic">
          Welcome to Next.js
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg">
          Build fast, modern & scalable web apps 🚀
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <Button
            label="Login"
            onClick={() => router.push("/login")}
          />

          <Button
            label="Register"
            onClick={() => router.push("/register")}
          />
        </div>
      </div>
    </div>
  );
}
