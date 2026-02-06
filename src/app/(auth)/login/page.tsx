
import Button from "@/app/components/button/page";
import Input from "@/app/components/input/page";
import Link from "next/link";

function LoginPage() {


  console.log(process.env.NODE_ENV);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl space-y-6">
     
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-blue-600">
            Welcome Back
          </h2>
          <p className="text-gray-500 text-sm">
            Please login to your account
          </p>
        </div>

   
        <div className="space-y-4">
          <Input placeholder="Email address" />
          <Input type="password" placeholder="Password" />
        </div>

       
        <Button label="Login" />

       
        <div className="flex justify-between text-sm text-gray-500">
          <Link href="/forgotpassword" className="hover:text-blue-600 transition">
            Forgot password?
          </Link>
          <Link href="/register" className="hover:text-blue-600 transition">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

export function generateMetadata() {
  return {
    title: "Login - NextPractice",
    description: "Access your account and explore our products.",
  };
} 
