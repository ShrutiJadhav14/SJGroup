import { motion } from "framer-motion";
import { useRef } from "react";

// ===== Images =====
import skyAngle from "../assets/images/sky-square.jpeg";
import resAngle from "../assets/images/residency-angle.png";
import infraSite from "../assets/images/infra-site.png";
import jadhavheight from "../assets/images/jadhav-heights.png";
import MeghSparsh from "../assets/images/MeghSparsh.png";

// ===== Completed Projects Data =====
const brochureProjects = [
  ,{
     location: "Warje",
    name: "SKYSQURE",
    area: "1,41,000",
    floors: "15",
    units: "104",
    image: skyAngle,
  },
  {
    location: "Warje",
    name: "Jadhav Heights",
    area: "12,500",
    floors: "5",
    units: "18",
    image: jadhavheight,
  },
  
  {
    location: "Hadapsar",
    name: "Meghsparsh",
    area: "8,317",
    floors: "4",
    units: "16",
    image: MeghSparsh,
  },
  {
    location: "Ambegaon",
    name: "Chintamani Residency",
    area: "19,500",
    floors: "5",
    units: "35",
    image: resAngle,
  },
  {
    location: "Karvenagar",
    name: "Royal Associates",
    area: "4,000",
    floors: "4",
    units: "16",
    image: skyAngle,
  },
  {
    location: "Wakad",
    name: "Chaitanya Height",
    area: "4,500",
    floors: "4",
    units: "08",
    image: infraSite,
  },
];

export default function Projects() {
  const handleMouseMove = (e, el) => {
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `scale(1.05) rotateX(${y * 8}deg) rotateY(${x * -8}deg)`;
  };

  const handleLeave = (el) => {
    el.style.transform = "scale(1) rotateX(0) rotateY(0)";
  };

  return (
    <div className="relative bg-slate-950 text-white px-6 md:px-20 py-28 overflow-hidden">

      {/* ===== Cinematic Glow Background ===== */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-orange-500/20 blur-[180px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-500/20 blur-[180px] rounded-full animate-pulse" />

      {/* ===== Heading ===== */}
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-24 relative z-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide">
          Our <span className="text-orange-500">Completed Projects</span>
        </h1>
        <div className="h-[2px] w-24 bg-orange-500 mx-auto mt-6 animate-pulse" />
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          A showcase of our finest construction works delivered with precision,
          quality, and trust across Pune.
        </p>
      </motion.div>

      {/* ===== Projects Grid ===== */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 perspective-[1200px] relative z-10">
        {brochureProjects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12, duration: 0.9 }}
            viewport={{ once: true, amount: 0.3 }}
            className="transform-gpu"
          >
            <div
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleLeave(e.currentTarget)}
              style={{ transition: "transform 0.25s ease" }}
              className="relative h-[430px] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer border border-transparent hover:border-orange-500/40 hover:shadow-orange-500/20"
            >
              {/* Image */}
            <div className="absolute inset-0 bg-slate-900 flex items-center justify-center p-6">
               <motion.img
                src={proj.image}
                alt={proj.name}
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0 h-full w-full object-contain"
              />
              </div>


              {/* Details Overlay */}{/* Soft bottom fade for readability */}
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

{/* Plain Text Direct on Image */}
<div className="absolute bottom-6 left-6 z-10 text-white 
translate-y-6 group-hover:translate-y-0 transition duration-500">

  <p className="text-orange-400 font-semibold tracking-widest text-sm drop-shadow-lg">
    {proj.location}
  </p>

  <h3 className="text-3xl font-bold mt-1 drop-shadow-2xl">
    {proj.name}
  </h3>

  <div className="mt-5 flex gap-8 text-sm text-gray-200">
    <div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-bold text-white text-lg drop-shadow-lg"
      >
        {proj.area}
      </motion.p>
      <p className="opacity-80">Sq.ft</p>
    </div>

    <div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-bold text-white text-lg drop-shadow-lg"
      >
        {proj.floors}
      </motion.p>
      <p className="opacity-80">Floors</p>
    </div>

    <div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-bold text-white text-lg drop-shadow-lg"
      >
        {proj.units}
      </motion.p>
      <p className="opacity-80">Units</p>
    </div>
  </div>
</div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
