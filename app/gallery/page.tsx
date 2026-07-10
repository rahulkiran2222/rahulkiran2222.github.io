import Navbar from "@/components/layout/Navbar";

const events = [
  {
    title: "Stanford AI Safety Program",
    date: "2024",
    location: "Palo Alto, CA",
    description: "Collaborating with researchers on adversarial robustness benchmarks."
  },
  {
    title: "Google Startup School",
    date: "2022",
    location: "Virtual / Remote",
    description: "Discussing AI infrastructure and sustainable scaling."
  }
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl font-heading font-bold mb-12">Field Work & Events</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl bg-card border border-white/5">
              <div className="aspect-video bg-slate-800 flex items-center justify-center text-slate-500 font-mono text-xs">
                [ Event Photo ]
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-accent font-mono text-xs uppercase tracking-widest">{event.date}</span>
                  <span className="text-muted text-xs">{event.location}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
