import Navbar from "@/components/layout/Navbar";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-48 pb-20 px-6 max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-heading font-bold mb-6">Let's Collaborate</h1>
        <p className="text-muted text-lg mb-12">
          Currently open to research collaborations, speaking engagements, and technical discussions on AI safety.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <Mail />, name: "Email", href: "mailto:your@email.com" },
            { icon: <Github />, name: "GitHub", href: "https://github.com/rahulkiran2222" },
            { icon: <Linkedin />, name: "LinkedIn", href: "#" },
            { icon: <Twitter />, name: "X", href: "#" },
          ].map((social) => (
            <a 
              key={social.name}
              href={social.href}
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-white/5 hover:border-accent transition-all"
            >
              {social.icon}
              <span className="text-sm font-medium">{social.name}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
