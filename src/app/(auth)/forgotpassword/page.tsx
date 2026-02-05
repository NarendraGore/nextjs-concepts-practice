import Button from "@/app/components/button/page";
import Input from "@/app/components/input/page";

function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl space-y-6">
        
        {/* Title */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-blue-600">
            Forgot Password?
          </h2>
          <p className="text-gray-500 text-sm">
            Enter your email and we’ll send you a reset link 🔐
          </p>
        </div>

        {/* Input */}
        <Input placeholder="Email address" />

        {/* Button */}
        <Button label="Send Reset Link" />

        {/* Footer links */}
        <div className="text-center text-sm text-gray-500">
          Remember your password?{" "}
          <a
            href="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
