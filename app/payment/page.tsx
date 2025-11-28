// app/payment/page.tsx
import React, { Suspense } from "react";
import PaymentClient from "./payment-client";

export default function PaymentPageWrapper() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading payment...</div>}>
      <PaymentClient />
    </Suspense>
  );
}
