export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      content:
        "TaskFlow has transformed how our team manages projects. The intuitive interface makes it easy to stay organized and productive.",
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      content:
        "Finally, a task manager that doesn't get in the way. TaskFlow helps me focus on what matters without unnecessary complexity.",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      content:
        "Our team's productivity has increased significantly since switching to TaskFlow. It's simple, powerful, and just works.",
    },
  ]

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Loved by Teams Everywhere
          </h2>
          <p className="text-muted-foreground text-lg text-balance">See what our users have to say about TaskFlow</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground font-semibold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                    {testimonial.content}
             </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}