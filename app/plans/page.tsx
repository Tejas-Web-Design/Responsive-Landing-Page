"use client";

import Link from "next/link";

const plans = {
  "299": {
    name: "Basic Plan",
    price: 299,
    description: "Best for starters",
    features: ["Unlimited Tasks",
      "AI Prioritization",
      "Priority support",
      "Cloud Sync"],
  },
  "3999": {
    name: "Premium Plan",
    price: 3999,
    description: "Best for professionals",
    features: ["Unlimited tasks and projects",
      "Team collaboration tools",
      "Priority support",
      "Advanced analytics",
      "Custom integrations"],
  },
};

export default function PlansPage() {
  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-10 text-center">Choose Your Plan</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {Object.entries(plans).map(([key, plan]) => (
          <div key={key} className="border p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold">{plan.name}</h2>
            <p className="text-gray-600 mt-1">{plan.description}</p>

            <p className="text-4xl font-extrabold mt-4">
              ₹{plan.price}
            </p>

            <ul className="mt-4 space-y-2 text-gray-700">
              {plan.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>

            <Link
              href={`/payment?plan=${key}`}
              className="mt-6 block w-full bg-black text-white py-3 text-center rounded-lg"
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
