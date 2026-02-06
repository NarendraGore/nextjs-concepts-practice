// import Button from "@/app/components/button/page";
// import Input from "@/app/components/input/page";

// function RegisterPage() {
//   return (
//     <div className="flex min-h-screen items-center justify-center">
//       <div className="w-full max-w-sm space-y-4 rounded-lg bg-white p-6 shadow">
//         <h2 className="text-xl font-bold text-center">Register</h2>
//         <Input placeholder="Email" />
//         <Input type="password" placeholder="Password" />
//         <Button
//           label="Register"
//           className="w-full bg-purple-600 hover:bg-purple-700"
//         />
//       </div>
//     </div>
//   );
// }

// export default RegisterPage;


import Button from "@/app/components/button/page";
import Input from "@/app/components/input/page";

function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100">
      
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl space-y-6">
        
        {/* Title */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-purple-600">
            Create Account
          </h2>
          <p className="text-gray-500 text-sm">
            Join us and get started today ✨
          </p>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          <Input placeholder="Email address" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm password" />
        </div>

        {/* Button */}
        <Button label="Register" />

        {/* Footer text */}
        <p className="text-center text-sm text-gray-500">
          Already have an account?
          <a
            href="/login"
            className="text-purple-600 font-medium hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;



export function generateMetadata() {
  return {
    title: "Register - NextPractice",
    description: "Create a new account and explore our products.",
  };
} 