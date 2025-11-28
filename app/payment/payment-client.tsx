// app/payment/payment-client.tsx
"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useMemo } from "react";

const plans = {
  "299": {
    name: "Basic Plan",
    price: 299,
    features: [
      "Unlimited Tasks",
      "AI Prioritization",
      "Priority support",
      "Cloud Sync",
    ],
  },
  "3999": {
    name: "Premium Plan",
    price: 3999,
    features: [
      "Unlimited tasks and projects",
      "Team collaboration tools",
      "Priority support",
      "Advanced analytics",
      "Custom integrations",
    ],
  },
} as const;

type PlanId = keyof typeof plans;

export default function PaymentClient() {
  const params = useSearchParams();
  const selectedPlan = (params?.get("plan") ?? "") as PlanId;

  const plan = useMemo(() => plans[selectedPlan], [selectedPlan]);

  if (!plan) {
    return <div className="p-10 text-center">Invalid plan selected.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      {/* Back */}
      <div className="max-w-5xl mx-auto mb-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-black"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT */}
        <div className="bg-white p-8 border rounded-xl shadow-sm">
          <h1 className="text-2xl font-bold mb-6">Complete Your Purchase</h1>

          {/* Account Info */}
          <div className="space-y-4 mb-8">
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input className="w-full border p-3 rounded-lg" placeholder="you@example.com" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Full Name</label>
              <input className="w-full border p-3 rounded-lg" placeholder="John Doe" />
            </div>
          </div>

          {/* Payment Details */}
          <div className="border-t pt-6">
            <p className="text-sm font-semibold mb-4">Payment Details</p>

            <input
              className="w-full border p-3 rounded-lg mb-4"
              placeholder="Card Number"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                className="border p-3 rounded-lg"
                placeholder="MM/YY"
              />
              <input
                className="border p-3 rounded-lg"
                placeholder="CVC"
              />
            </div>
          </div>

          {/* Redirect to payment options or start payment flow */}
          <button
            onClick={() => (window.location.href = `/payment-options?plan=${selectedPlan}`)}
            className="w-full mt-8 bg-black text-white py-3 rounded-lg font-semibold"
          >
            Complete Purchase
          </button>

          <p className="text-center text-xs mt-3 text-gray-500">
            Your payment information is secure and encrypted.
          </p>
        </div>

        {/* RIGHT */}
        <div className="bg-white p-8 border rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

          <div className="mb-6 pb-6 border-b">
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <span className="text-2xl font-bold">₹{plan.price}</span>
            </div>
            <p className="text-sm text-gray-500">Billed once</p>
          </div>

          <div className="mb-6 pb-6 border-b">
            <p className="uppercase text-xs font-semibold text-gray-500 mb-3">Whats Included</p>
            <ul className="space-y-2">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-black">✔</span>
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-medium">₹{plan.price}.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Tax</span>
              <span className="font-medium">₹0.00</span>
            </div>
          </div>

          <div className="pt-4 border-t">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total due today</span>
              <span className="text-2xl font-bold">₹{plan.price}.00</span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-100 rounded-lg text-center">
            <p className="font-semibold">30-day money-back guarantee</p>
            <p className="text-sm text-gray-600">Cancel anytime, no questions asked</p>
          </div>
        </div>
      </div>
    </div>
  );
}
