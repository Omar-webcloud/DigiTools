import { FaPlay } from 'react-icons/fa6';

const Hero = () => (
  <section className="relative pt-24 pb-24 overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
    <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
      <div className="lg:w-1/2 text-left">
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold mb-8 ring-1 ring-primary/20 ring-inset">
          All New AI-Powered Productivity Tools
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-8 tracking-tighter text-gray-900">
          Supercharge Your <br />
          <span className="text-primary">Digital Workflow</span>
        </h1>
        <p className="text-gray-500 text-base md:text-lg mb-10 leading-relaxed max-w-lg font-medium">
          Access premium AI tools, design assets, templates and productivity software all in one place. Start creating today for free.
        </p>
        <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4 md:gap-6">
          <button className="btn btn-primary rounded-full px-8 md:px-10 h-12 md:h-14 w-full sm:w-auto text-white shadow-2xl shadow-primary/30 border-none font-bold text-base md:text-lg">Browse Products</button>
          <button className="flex items-center gap-3 w-full sm:w-auto justify-center font-bold text-gray-900 hover:text-primary transition-colors group px-4 py-2">
            <span className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-md ring-8 ring-gray-50 group-hover:ring-primary/10 transition-all">
              <FaPlay className="text-primary text-sm translate-x-0.5" />
            </span>
            Learn More
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 relative">
        <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <img src="/banner.png" alt="Hero Illustration" className="w-full rounded-2xl shadow-xl transition-transform duration-1000" />
      </div>
    </div>
  </section>
);

export default Hero;
