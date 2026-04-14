'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Scale, Shield, Sparkles } from "lucide-react";

export default function HeroSection() {
  const handleRegister = () => {
    window.location.href = "http://localhost:3000/register"
    // later replace with production:
    // https://app.clearwavelegal.com/register
  }

  const handleLogin = () => {
    window.location.href = "http://localhost:3000/login"
    // later replace with production:
    // https://app.clearwavelegal.com/login
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(218 60% 10%) 0%, hsl(218 55% 18%) 50%, hsl(218 50% 14%) 100%)",
      }}
    >
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Accent orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-secondary/5 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-5 py-32 md:py-0 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-secondary" />
              <span className="text-xs font-medium text-white/80">
                Built for African legal professionals
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Run your law firm
              <br />
              <span className="text-secondary">without the chaos.</span>
            </h1>

            <p className="mt-5 text-base md:text-lg text-white/60 leading-relaxed max-w-lg">
              ClearWave helps small law firms, solo practitioners, and legal
              teams manage cases, documents, deadlines, and client collaboration
              from one secure platform.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleRegister}
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full h-12 px-6 font-semibold"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <Button
                variant="outline"
                onClick={handleLogin}
                className="rounded-full h-12 px-6 border-white/20 text-white bg-white/5 hover:bg-white/10"
              >
                Sign In
              </Button>
            </div>

            <p className="mt-4 text-xs text-white/30">
              Start in minutes · Free tier available
            </p>
          </motion.div>

          {/* RIGHT SIDE VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                    <Scale className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="text-sm font-medium text-white">
                        Ndlovu v. City of Johannesburg
                      </p>
                      <p className="text-xs text-white/40">
                        Constitutional matter · Hearing Apr 15
                      </p>
                    </div>
                    <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-300 font-medium">
                      Active
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                    <Shield className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="text-sm font-medium text-white">
                        Okafor Industries Ltd.
                      </p>
                      <p className="text-xs text-white/40">
                        Contract review · Due Apr 22
                      </p>
                    </div>
                    <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-secondary/20 text-secondary font-medium">
                      Review
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                    <Scale className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="text-sm font-medium text-white">
                        Mwangi Family Trust
                      </p>
                      <p className="text-xs text-white/40">
                        Estate planning · Draft stage
                      </p>
                    </div>
                    <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-medium">
                      Draft
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-4 py-3 shadow-xl">
                <p className="text-2xl font-bold text-secondary">24</p>
                <p className="text-xs text-white/50">Active cases</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
// export default function HeroSection() {
//   const [email, setEmail] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email) setSubmitted(true);
//   };

//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex items-center overflow-hidden"
//       style={{
//         background: "linear-gradient(135deg, hsl(218 60% 10%) 0%, hsl(218 55% 18%) 50%, hsl(218 50% 14%) 100%)",
//       }}
//     >
//       {/* Subtle pattern overlay */}
//       <div className="absolute inset-0 opacity-[0.03]" style={{
//         backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//         backgroundSize: "40px 40px",
//       }} />

//       {/* Gold accent orb */}
//       <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
//       <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-secondary/5 blur-3xl" />

//       <div className="relative max-w-6xl mx-auto px-5 py-32 md:py-0 w-full">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Left — Copy */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 mb-6">
//               <Sparkles className="w-3.5 h-3.5 text-secondary" />
//               <span className="text-xs font-medium text-white/80">Built for African legal professionals</span>
//             </div>

//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
//               Run your law firm
//               <br />
//               <span className="text-secondary">without the chaos.</span>
//             </h1>

//             <p className="mt-5 text-base md:text-lg text-white/60 leading-relaxed max-w-lg">
//               ClearWave is the modern practice management platform built specifically for small African law firms, paralegals, university legal desks, and solo advocates.
//             </p>

//             {/* CTA Form */}
//             {!submitted ? (
//               <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md">
//                 <Input
//                   type="email"
//                   placeholder="Enter your work email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="bg-white/10 border-white/15 text-white placeholder:text-white/40 rounded-full px-5 h-12 focus-visible:ring-secondary"
//                   required
//                 />
//                 <Button
//                   type="submit"
//                   className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full h-12 px-6 font-semibold whitespace-nowrap"
//                 >
//                   Request Early Access
//                   <ArrowRight className="w-4 h-4 ml-2" />
//                 </Button>
//               </form>
//             ) : (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-secondary/20 border border-secondary/30"
//               >
//                 <Sparkles className="w-4 h-4 text-secondary" />
//                 <span className="text-sm font-medium text-white">You're on the list! We'll be in touch soon.</span>
//               </motion.div>
//             )}

//             <p className="mt-4 text-xs text-white/30">No credit card required · Free tier available</p>
//           </motion.div>

//           {/* Right — Visual element */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="hidden md:block"
//           >
//             <div className="relative">
//               {/* Main card */}
//               <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
//                 <div className="flex items-center gap-3 mb-5">
//                   <div className="w-3 h-3 rounded-full bg-red-400/60" />
//                   <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
//                   <div className="w-3 h-3 rounded-full bg-green-400/60" />
//                 </div>
//                 <div className="space-y-3">
//                   <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
//                     <Scale className="w-5 h-5 text-secondary" />
//                     <div>
//                       <p className="text-sm font-medium text-white">Ndlovu v. City of Johannesburg</p>
//                       <p className="text-xs text-white/40">Constitutional matter · Hearing Apr 15</p>
//                     </div>
//                     <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-300 font-medium">Active</span>
//                   </div>
//                   <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
//                     <Shield className="w-5 h-5 text-secondary" />
//                     <div>
//                       <p className="text-sm font-medium text-white">Okafor Industries Ltd.</p>
//                       <p className="text-xs text-white/40">Contract review · Due Apr 22</p>
//                     </div>
//                     <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-secondary/20 text-secondary font-medium">Review</span>
//                   </div>
//                   <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
//                     <Scale className="w-5 h-5 text-secondary" />
//                     <div>
//                       <p className="text-sm font-medium text-white">Mwangi Family Trust</p>
//                       <p className="text-xs text-white/40">Estate planning · Draft stage</p>
//                     </div>
//                     <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-medium">Draft</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating stat card */}
//               <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-4 py-3 shadow-xl">
//                 <p className="text-2xl font-bold text-secondary">24</p>
//                 <p className="text-xs text-white/50">Active cases</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }