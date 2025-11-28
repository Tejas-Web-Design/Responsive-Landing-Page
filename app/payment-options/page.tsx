

import { Suspense } from "react";
import PaymentOptionsContent from "./payment-options-content"

export default function PaymentOptionsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
      <PaymentOptionsContent />
    </Suspense>
  );
}
