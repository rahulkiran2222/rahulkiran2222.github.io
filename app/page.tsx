import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section Placeholder */}
      {/* Recognition Section for app/page.tsx */}
<section className="py-20 px-6 border-t border-white/5 bg-white/[0.02]">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-center font-mono text-xs text-muted uppercase tracking-[0.3em] mb-12">
      Research & Recognition
    </h2>
    <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
      {/* Replace these with actual logos later */}
      <span className="text-xl font-bold">Stanford</span>
      <span className="text-xl font-bold">Google</span>
      <span className="text-xl font-bold">IEEE</span>
      <span className="text-xl font-bold">ArXiv</span>
    </div>
  </div>
</section>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6">
            Rahul Kiran
          </h1>
          <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto leading-relaxed">
            Building open-source AI research in <span className="text-white">Foundation Models</span>, 
            <span className="text-white"> AI Safety</span>, and 
            <span className="text-white"> Responsible AI Systems</span>.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="bg-accent text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-all">
              View Research
            </button>
            <button className="border border-white/10 bg-white/5 px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all">
              Read Blog
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
