import { Button } from "@/components/ui/button"
import { CheckIcon } from 'lucide-react'
import Link from "next/link"


export function PricingSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Start managing your tasks more efficiently today. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
  
  {/* 299 PLAN FIRST */}
  <div className="border border-border rounded-lg p-8 bg-card hover:shadow-lg transition-shadow">
    <h3 className="text-2xl font-semibold mb-2"> Basic </h3>

    <div className="mb-6">
      <span className="text-5xl font-bold">₹299</span>
      <span className="text-muted-foreground text-lg">/month</span>
    </div>

     <Link href="/payment?plan=299" className="block mt-6">
      <Button className="w-full mb-8" size="lg"> Get Started </Button>
     </Link>

    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <div className="bg-primary text-primary-foreground rounded-full p-1 mt-0.5">
          <CheckIcon className="w-3 h-3" />
        </div>
        <span className="text-foreground leading-relaxed">Unlimited Tasks</span>
      </div>

      <div className="flex items-start gap-3">
        <div className="bg-primary text-primary-foreground rounded-full p-1 mt-0.5">
          <CheckIcon className="w-3 h-3" />
        </div>
        <span className="text-foreground leading-relaxed">AI Prioritization</span>
      </div>

      <div className="flex items-start gap-3">
        <div className="bg-primary text-primary-foreground rounded-full p-1 mt-0.5">
          <CheckIcon className="w-3 h-3" />
        </div>
        <span className="text-foreground leading-relaxed">Priority support</span>
      </div>

      <div className="flex items-start gap-3">
        <div className="bg-primary text-primary-foreground rounded-full p-1 mt-0.5">
          <CheckIcon className="w-3 h-3" />
        </div>
        <span className="text-foreground leading-relaxed">Cloud Sync</span>
      </div>
    </div>
  </div>

  {/* 799 PLAN NEXT */}
  <div className="border border-border rounded-lg p-8 bg-card hover:shadow-lg transition-shadow">
    <h3 className="text-2xl font-semibold mb-2">Professional</h3>

    <div className="mb-6">
      <span className="text-5xl font-bold">₹3999</span>
      <span className="text-muted-foreground text-lg">/month</span>
    </div>

    <Link href="/payment?plan=3999" className="block mt-6">
      <Button className="w-full mb-8" size="lg"> Get Started </Button>
    </Link>

    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <div className="bg-primary text-primary-foreground rounded-full p-1 mt-0.5">
          <CheckIcon className="w-3 h-3" />
        </div>
        <span className="text-foreground leading-relaxed">Unlimited tasks and projects</span>
      </div>

      <div className="flex items-start gap-3">
        <div className="bg-primary text-primary-foreground rounded-full p-1 mt-0.5">
          <CheckIcon className="w-3 h-3" />
        </div>
        <span className="text-foreground leading-relaxed">Team collaboration tools</span>
      </div>

      <div className="flex items-start gap-3">
        <div className="bg-primary text-primary-foreground rounded-full p-1 mt-0.5">
          <CheckIcon className="w-3 h-3" />
        </div>
        <span className="text-foreground leading-relaxed">Priority support</span>
      </div>

      <div className="flex items-start gap-3">
        <div className="bg-primary text-primary-foreground rounded-full p-1 mt-0.5">
          <CheckIcon className="w-3 h-3" />
        </div>
        <span className="text-foreground leading-relaxed">Advanced analytics</span>
      </div>

      <div className="flex items-start gap-3">
        <div className="bg-primary text-primary-foreground rounded-full p-1 mt-0.5">
          <CheckIcon className="w-3 h-3" />
        </div>
        <span className="text-foreground leading-relaxed">Custom integrations</span>
      </div>
    </div>
  </div>

</div>


      </div>
    </section>
  )
}