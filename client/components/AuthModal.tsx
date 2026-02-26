import { useState, useEffect } from "react";

interface AuthModalProps {
  onClose: () => void;
  type: "signin" | "signup";
}

export default function AuthModal({ onClose, type }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">(type);

  useEffect(() => {
    setActiveTab(type);
  }, [type]);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      
      {/* ================= MAIN CONTAINER ================= */}
      {/* <div className="relative w-full max-w-[940px] 
                      md:h-[736px] 
                      bg-white rounded-xl overflow-hidden shadow-2xl
                      flex flex-col md:flex-row "> */}
                     <div
  className="relative w-full max-w-[940px] h-[500px] md:h-[736px] 
             bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
>
                    
        {/* ================= LEFT PANEL ================= */}
        {/* <div className="relative w-full md:w-1/2 
                        md:h-full 
                        bg-gradient-to-br from-[#060B14] to-[#0F1A2E] 
                        text-white p-8 md:p-10"> */}
<div className="hidden md:flex relative w-1/2 
                bg-gradient-to-br from-[#060B14] to-[#0F1A2E] 
                text-white p-8 md:p-10">

          {/* Blur Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-[600px] h-[600px] bg-[#2264EC] opacity-40 blur-[120px] rounded-full -top-40 -left-40"></div>
          </div>

          <div className="relative z-10">

            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
  <img src="/mediapindlogo.svg" alt="Media Pind Logo" className="w-12 h-12" />

  {/* <h1 className="text-lg font-bold">
    Media <span className="text-blue-400">Pind</span>
  </h1> */}
</div>

            {/* Dynamic Heading */}
            {activeTab === "signup" ? (
              <>
                <div className="relative">
  <h2 className="text-2xl md:text-3xl font-bold leading-snug text-white">
    Join the world's<br/> largest network of
    <span className="text-blue-500 block">NRI influencers.</span>
  </h2>

  <p className="text-sm text-white/40 mt-4">
    500+ verified creators. 30+ countries. Go live in 72 hours.
  </p>
</div>
              </>
            ) : (
              <>
                <div className="relative">
  <h2 className="text-2xl md:text-3xl font-bold leading-snug text-white">
    Welcome back to <br />
    the world's largest
    <span className="text-blue-500 block">
      NRI creator network.
    </span>
  </h2>

  <p className="text-sm text-white/40 mt-4">
    Manage campaigns, browse creators,<br/> and track ROI — all in one dashboard.
  </p>
</div>
              </>
            )}

            {/* Stats Box */}
           <div className="mt-8  mb-6 bg-white/5 border border-white/10 p-4 flex justify-between text-center text-xs font-bold rounded-xl">
  <div>
    <p className="text-lg text-white font-bold">1K+</p>
    <p className="text-white/40">CREATORS</p>
  </div>
  <div>
    <p className="text-lg text-white font-bold">750+</p>
    <p className="text-white/40">CAMPAIGNS</p>
  </div>
  <div>
    <p className="text-lg text-white font-bold">30+</p>
    <p className="text-white/40">COUNTRIES</p>
  </div>
</div>



<div className="w-full max-w-md bg-white/5 border border-white/10 rounded-xl p-2 flex items-center justify-between">
  {/* Creator Info */}
  <div className="flex items-center gap-3">
    {/* Avatar */}
    <div className="w-8 h-8  bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
      P
    </div>

    {/* Name & Details */}
    <div className="flex flex-col">
      <span className="text-white font-bold text-sm">Priya Sharma</span>
      <span className="text-white/40 text-xs"> Finance · 2.4M reach</span>
    </div>
  </div>

  {/* Live Badge */}
  <div className="flex items-center gap-1 bg-green-200/30 border border-green-300 rounded px-2 py-0.5">
    <div className="w-1.5 h-1.5 rounded-full bg-green-300"></div>
    <span className="text-green-300 text-[9px] font-bold">Live</span>
  </div>
</div>



<div className="w-full max-w-md bg-white/5 border border-white/10 rounded-xl p-2 flex items-center justify-between mt-3">
  {/* Brand Info */}
  <div className="flex items-center gap-3">
    {/* Avatar */}
    <div className="w-8 h-8  bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
      T
    </div>

    {/* Name & Details */}
    <div className="flex flex-col">
      <span className="text-white font-bold text-sm">Toyota Canada</span>
      <span className="text-white/40 text-xs">Brand Partner · 12 campaigns</span>
    </div>
  </div>

  {/* Metric Badge */}
  <div className="flex items-center justify-center bg-blue-400/20 border border-blue-300 rounded px-2 py-0.5">
    <span className="text-blue-300 text-xs font-bold">4.9%</span>
  </div>
</div>



<div className="w-full max-w-md bg-white/5 border border-white/10 rounded-xl p-2 flex items-center justify-between mt-3">
  {/* Creator Info */}
  <div className="flex items-center gap-3">
    {/* Avatar */}
    <div className="w-8 h-8  bg-gradient-to-br from-pink-600 to-pink-600 flex items-center justify-center text-white font-bold text-sm">
      N
    </div>

    {/* Name & Details */}
    <div className="flex flex-col">
      <span className="text-white font-bold text-sm">Neha Rajput</span>
      <span className="text-white/40 text-xs"> Finance · 1.6M reach</span>
    </div>
  </div>

  {/* Live Badge */}
  <div className="flex items-center gap-1 bg-green-200/30 border border-green-300 rounded px-2 py-0.5">
    <div className="w-1.5 h-1.5 rounded-full bg-green-300"></div>
    <span className="text-green-300 text-[9px] font-bold">Live</span>
  </div>
</div>


            {/* Quote */}
            <p className="mt-6 text-xs italic text-white/40">
              "Signing up took 5 minutes. My first campaign was live in 3 days."
            </p>
          </div>

          
        </div>

        {/* ================= RIGHT PANEL ================= */}
        {/* <div className="w-full md:w-1/2 bg-white p-6 md:p-10 flex flex-col"> */}
        {/* <div className="w-full md:w-1/2 bg-white p-6 md:p-10 flex flex-col"> */}
        <div className="w-full md:w-1/2 bg-white p-6 md:p-10 flex flex-col overflow-auto md:overflow-visible">

          {/* Toggle */}
          <div className="flex bg-blue-50 rounded-md mb-6 relative">
            <button
              onClick={() => setActiveTab("signin")}
              className={`flex-1 py-2 text-sm font-bold rounded-md transition ${
                activeTab === "signin"
                  ? "bg-white border border-gray-200 text-gray-900"
                  : "text-gray-500"
              }`}
            >
              Sign In
            </button>

            <button
              onClick={() => setActiveTab("signup")}
              className={`flex-1 py-2 text-sm font-bold rounded-md transition ${
                activeTab === "signup"
                  ? "bg-white border border-gray-200 text-gray-900"
                  : "text-gray-500"
              }`}
            >
              Create Account
            </button>
          </div>

          {/* ================= FORM CONTENT ================= */}

          {activeTab === "signup" ? (
            <>
              <div className="w-[200px] h-[30px] bg-[#EFF6FF] border border-[#DBEAFE] rounded mb-5 flex items-center px-2 rounded-[20px]">
  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
  <span className="text-[11px] font-bold text-[#2264EC]">
    1,000+ creators live right now
  </span>
</div>
              <h3 className="text-2xl font-bold mb-0">
                Create your <span className="text-blue-600">free</span> account
              </h3>

              <p className="text-[12px] text-gray-500 mb-6">
                Join as a brand to run campaigns, or as a creator to get partnered.
              </p>
              <div className="flex gap-4 mb-4">

    <div className="w-full max-w-md mx-auto space-y-4 p-4">
      {/* Social Login Buttons */}
      <div className="flex gap-2">
        <button className="flex-1 py-2 bg-white border border-gray-300 rounded-xl font-semibold text-sm hover:bg-gray-50">
          Google
        </button>
        <button className="flex-1 py-2 bg-white border border-gray-300 rounded-xl font-semibold text-sm hover:bg-gray-50">
          LinkedIn
        </button>
      </div>

      {/* Separator */}
      <div className="text-center text-gray-400 text-xs">Or fill in your details</div>

      {/* Name Inputs */}
     <div className="flex gap-2 w-full">
  {/* First Name */}
  <div className="flex-1 rounded-[15.5px] border border-gray-300 px-3 py-2 flex flex-col gap-1">
    <label className="text-blue-600 text-[10px] font-medium">First Name</label>
    <input
      type="text"
      defaultValue="Jennifer"
      className="w-full text-gray-500 text-[12px] font-medium focus:outline-none"
    />
  </div>

  {/* Last Name */}
  <div className="flex-1 rounded-[15.5px] border border-gray-300 px-3 py-2 flex flex-col gap-1">
    <label className="text-blue-600 text-[10px] font-medium">Last Name</label>
    <input
      type="text"
      defaultValue="Maddy"
      className="w-full text-gray-500 text-[12px] font-medium focus:outline-none"
    />
  </div>
</div>

      {/* Email */}
       <div className="relative w-full space-y-[12px]">

  {/* EMAIL FIELD */}
  <div
    className="w-full h-[53px]
               flex justify-between items-center
               px-[12px] pt-[7px] pb-[9px]
               rounded-[15.29px]
               border-[0.76px] border-[#D9DBE9]">

    {/* Left Content */}
    <div className="flex flex-col gap-[4.59px] w-full px-[7.64px]">

      <label className="text-[#2264EC] text-[10px] font-medium">
        Email Address
      </label>

      <input
        type="email"
        placeholder="jennifermaddy@gmail.com"
        className="w-full
                   text-[14px]
                   font-medium
                   text-black/60
                   bg-transparent
                   outline-none"
      />
    </div>

    {/* Mail Icon */}
    <div className="w-[18.34px] h-[18.34px] flex items-center justify-center flex-shrink-0">
      <svg viewBox="0 0 18 18" className="w-full h-full">
        <rect
          x="2"
          y="4"
          width="14"
          height="11"
          rx="2"
          stroke="rgba(34,100,236,0.8)"
          strokeWidth="1.15"
          fill="none"
        />
        <path
          d="M4 6L9 10L14 6"
          stroke="rgba(34,100,236,0.8)"
          strokeWidth="1.15"
          fill="none"
        />
      </svg>
    </div>
  </div>


  {/* PASSWORD FIELD */}
  <div
    className="w-full h-[53px]
               flex justify-between items-center
               px-[12px] pt-[7px] pb-[9px]
               rounded-[15.17px]
               border-[0.76px] border-[#D9DBE9]">

    {/* Left Content */}
    <div className="flex flex-col gap-[4px] w-full px-[7.58px]">

      <label className="text-[#2264EC] text-[10.62px] font-medium">
        Password
      </label>

      <input
        type="password"
        placeholder="********"
        className="w-full
                   text-[16.69px]
                   font-medium
                   text-black/50
                   bg-transparent
                   outline-none"
      />
    </div>

    {/* Eye Icon */}
    <div className="w-[18px] h-[18px] flex items-center justify-center flex-shrink-0">
      <svg viewBox="0 0 18 18" className="w-full h-full">
        <path
          d="M1.5 9C1.5 9 4.5 3.75 9 3.75C13.5 3.75 16.5 9 16.5 9C16.5 9 13.5 14.25 9 14.25C4.5 14.25 1.5 9 1.5 9Z"
          stroke="rgba(34,100,236,0.8)"
          strokeWidth="1.15"
          fill="none"
        />
        <circle
          cx="9"
          cy="9"
          r="2.25"
          stroke="rgba(34,100,236,0.8)"
          strokeWidth="1.15"
          fill="none"
        />
      </svg>
    </div>
  </div>

   <div
    className="w-full h-[53px]
               flex justify-between items-center
               px-[12px] pt-[7px] pb-[9px]
               rounded-[15.17px]
               border-[0.76px] border-[#D9DBE9]">

    {/* Left Content */}
    <div className="flex flex-col gap-[4px] w-full px-[7.58px]">

      <label className="text-[#2264EC] text-[10.62px] font-medium">
        Re-Enter Password
      </label>

      <input
        type="password"
        placeholder="********"
        className="w-full
                   text-[16.69px]
                   font-medium
                   text-black/50
                   bg-transparent
                   outline-none"
      />
    </div>

    {/* Eye Icon */}
    <div className="w-[18px] h-[18px] flex items-center justify-center flex-shrink-0">
      <svg viewBox="0 0 18 18" className="w-full h-full">
        <path
          d="M1.5 9C1.5 9 4.5 3.75 9 3.75C13.5 3.75 16.5 9 16.5 9C16.5 9 13.5 14.25 9 14.25C4.5 14.25 1.5 9 1.5 9Z"
          stroke="rgba(34,100,236,0.8)"
          strokeWidth="1.15"
          fill="none"
        />
        <circle
          cx="9"
          cy="9"
          r="2.25"
          stroke="rgba(34,100,236,0.8)"
          strokeWidth="1.15"
          fill="none"
        />
      </svg>
    </div>
  </div>

</div>
     

      {/* Terms Checkbox */}
      {/* <label className="flex items-center gap-2 text-sm text-gray-500">
        <input type="checkbox" className="accent-blue-600" />
        I agree to <span className="text-blue-600 font-semibold">Terms of Service</span> and{" "}
        <span className="text-blue-600 font-semibold">Privacy Policy</span>
      </label> */}
      <label className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
  <input type="checkbox" className="accent-blue-600" />
  I agree to <span className="text-blue-600 font-semibold">Terms of Service</span> and{" "}
  <span className="text-blue-600 font-semibold">Privacy Policy</span>
</label>

      {/* Submit Button */}
      <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-700 to-blue-400 text-white font-bold">
        Create Free Account
      </button>

      {/* Sign In Link */}
      <div className="text-center text-gray-500 text-sm">
        Already have an account? <span className="text-blue-600 font-semibold cursor-pointer">Sign in →</span>
      </div>
    </div>


</div>
          
            </>
          ) : (
            <>
            {/* Info Bar Below Tabs */}
<div className="w-[200px] h-[30px] bg-[#EFF6FF] border border-[#DBEAFE] rounded mb-6 flex items-center px-2 rounded-[20px]">
  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
  <span className="text-[11px] font-bold text-[#2264EC]">
    1,000+ creators live right now
  </span>
</div>
             <h3 className="text-2xl font-bold mb-2 leading-snug">
  <span className="text-[#0F172A]">Sign </span>
  <span className="text-[#2264EC]">in</span>
  <span className="text-[#0F172A]"> to your account</span>
</h3>

<p className="text-[13px] text-[#64748B] font-normal mb-6">
  Access your dashboard, campaigns & creator connections.
</p>


{/* Social Login Buttons */}
<div className="flex gap-4 mb-4">

  {/* Google Button */}
  <button
    className="w-1/2 h-[38px] bg-white 
               border-[1.5px] border-[#D9DBE9] 
               rounded-md 
               text-[#1E293B] text-[13px] font-semibold 
               hover:border-[#2264EC] transition"
  >
    Google
  </button>

  {/* LinkedIn Button */}
  <button
    className="w-1/2 h-[38px] bg-white 
               border-[1.5px] border-[#D9DBE9] 
               rounded-md 
               text-[#1E293B] text-[13px] font-semibold 
               hover:border-[#2264EC] transition"
  >
    LinkedIn
  </button>

</div>

{/* Divider Text */}
<div className="text-center text-[11px] text-[#94A3B8] font-medium mb-4">
  or continue with email
</div>

             
             <div className="relative w-full space-y-[12px]">

  {/* EMAIL FIELD */}
  <div
    className="w-full h-[53px]
               flex justify-between items-center
               px-[12px] pt-[7px] pb-[9px]
               rounded-[15.29px]
               border-[0.76px] border-[#D9DBE9]">

    {/* Left Content */}
    <div className="flex flex-col gap-[4.59px] w-full px-[7.64px]">

      <label className="text-[#2264EC] text-[10px] font-medium">
        Email Address
      </label>

      <input
        type="email"
        placeholder="jennifermaddy@gmail.com"
        className="w-full
                   text-[14px]
                   font-medium
                   text-black/60
                   bg-transparent
                   outline-none"
      />
    </div>

    {/* Mail Icon */}
    <div className="w-[18.34px] h-[18.34px] flex items-center justify-center flex-shrink-0">
      <svg viewBox="0 0 18 18" className="w-full h-full">
        <rect
          x="2"
          y="4"
          width="14"
          height="11"
          rx="2"
          stroke="rgba(34,100,236,0.8)"
          strokeWidth="1.15"
          fill="none"
        />
        <path
          d="M4 6L9 10L14 6"
          stroke="rgba(34,100,236,0.8)"
          strokeWidth="1.15"
          fill="none"
        />
      </svg>
    </div>
  </div>


  {/* PASSWORD FIELD */}
  <div
    className="w-full h-[53px]
               flex justify-between items-center
               px-[12px] pt-[7px] pb-[9px]
               rounded-[15.17px]
               border-[0.76px] border-[#D9DBE9]">

    {/* Left Content */}
    <div className="flex flex-col gap-[4px] w-full px-[7.58px]">

      <label className="text-[#2264EC] text-[10.62px] font-medium">
        Password
      </label>

      <input
        type="password"
        placeholder="********"
        className="w-full
                   text-[16.69px]
                   font-medium
                   text-black/50
                   bg-transparent
                   outline-none"
      />
    </div>

    {/* Eye Icon */}
    <div className="w-[18px] h-[18px] flex items-center justify-center flex-shrink-0">
      <svg viewBox="0 0 18 18" className="w-full h-full">
        <path
          d="M1.5 9C1.5 9 4.5 3.75 9 3.75C13.5 3.75 16.5 9 16.5 9C16.5 9 13.5 14.25 9 14.25C4.5 14.25 1.5 9 1.5 9Z"
          stroke="rgba(34,100,236,0.8)"
          strokeWidth="1.15"
          fill="none"
        />
        <circle
          cx="9"
          cy="9"
          r="2.25"
          stroke="rgba(34,100,236,0.8)"
          strokeWidth="1.15"
          fill="none"
        />
      </svg>
    </div>
  </div>

</div>

<div className="relative w-full">
  {/* Checkbox + Forgot Password */}
  <div className="flex justify-between items-center mb-4 mt-5">
    <label className="flex items-center gap-2 cursor-pointer">
      <input 
        type="checkbox" 
        className="w-4 h-4 accent-blue-600 rounded-sm" 
      />
      <span className="text-gray-500 text-[10px]">Keep me signed in for 30 days</span>
    </label>
    <div className="text-blue-600 text-[10px] font-medium cursor-pointer">
      Forgot password?
    </div>
  </div>

  {/* Sign In Button */}
  <button className="w-full py-3 rounded-xl text-white font-bold bg-gradient-to-r from-blue-700 to-blue-400">
    Sign in to Media Pind
  </button>
</div>
              

              <p className="text-center text-sm text-gray-500 mt-4">
                Don’t have an account?{" "}
                <span
                  onClick={() => setActiveTab("signup")}
                  className="text-blue-600 font-semibold cursor-pointer"
                >
                  Create one →
                </span>
              </p>
            </>
          )}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
        >
          ✕
        </button>
      </div>
    </div>
  );
}