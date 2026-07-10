import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section Placeholder */}
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
