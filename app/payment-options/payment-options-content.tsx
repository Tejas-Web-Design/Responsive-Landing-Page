"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PaymentOptionsContent() {
  const params = useSearchParams();
  const plan = params.get("plan");

  const [method, setMethod] = useState("");

  const handlePay = () => {
    alert("This is a sample payment mode for a responsive landing page!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">

      <div className="max-w-5xl mx-auto mb-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-black"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl border shadow-sm">

        <h1 className="text-2xl font-bold mb-6">Chosen Payment Method</h1>

        <p className="text-gray-600 mb-6">
          You are paying for the{" "}
          <strong>
            {plan === "299" ? "Basic Plan (₹299)" : "Premium Plan (₹3999)"}
          </strong>
        </p>

        <div className="space-y-4">

          <div
            className={`p-4 border rounded-lg cursor-pointer ${
              method === "gpay" ? "border-black bg-gray-100" : "hover:bg-gray-50"
            }`}
            onClick={() => setMethod("gpay")}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold">Google Pay</span>
              <img src="/payment/gpay.jpg" className="h-8 w-auto object-contain" />
            </div>
          </div>

          <div
            className={`p-4 border rounded-lg cursor-pointer ${
              method === "phonepe" ? "border-black bg-gray-100" : "hover:bg-gray-50"
            }`}
            onClick={() => setMethod("phonepe")}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold">PhonePe</span>
              <img
                src="/payment/phonepe.jpg"
                className="h-8 w-auto object-contain"
              />
            </div>
          </div>

          <div
            className={`p-4 border rounded-lg cursor-pointer ${
              method === "paytm" ? "border-black bg-gray-100" : "hover:bg-gray-50"
            }`}
            onClick={() => setMethod("paytm")}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold">Paytm</span>
              <img src="/payment/paytm.png" className="h-8 w-auto object-contain" />
            </div>
          </div>

          <div
            className={`p-4 border rounded-lg cursor-pointer ${
              method === "netbanking" ? "border-black bg-gray-100" : "hover:bg-gray-50"
            }`}
            onClick={() => setMethod("netbanking")}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold">Net Banking</span>
              <img
                src="/payment/netbanking.png"
                className="h-8 w-auto object-contain opacity-60"
              />
            </div>
          </div>

        </div>

        <button
          disabled={!method}
          onClick={handlePay}
          className="w-full mt-8 bg-black text-white py-3 rounded-lg font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Proceed to Pay
        </button>

      </div>
    </div>
  );
}
