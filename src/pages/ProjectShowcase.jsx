import { useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

// ===== IMAGES =====
import c1 from "../assets/images/skysquare-angle.png";
import c2 from "../assets/images/jadhav-heights.png";
import c3 from "../assets/images/jadhav-heights.png";

import r1 from "../assets/images/sky.jpeg";
import r2 from "../assets/images/sky-square.jpeg";

import i1 from "../assets/images/infra-site.png";

// ===== DATA =====
const data = {
  commercial: {
    title: "Commercial Complex Projects",
    projects: [
      {
        name: "SkySquare Business Park",
        location: "Warje, Pune",
        area: "1,41,000 sq.ft",
        floors: "15 Floors",
        images: [c1, c2, c3],
        desc: "Premium commercial infrastructure with modern elevation and smart space planning.",
      },
      {
        name: "Jadhav Heights",
        location: "Warje, Pune",
        area: "12,500 sq.ft",
        floors: "5 Floors",
        images: [c2],
        desc: "A thoughtfully planned residential building offering comfortable living spaces, quality construction, and a peaceful neighborhood environment",
      },
    ],
  },

  residential: {
    title: "Residential Township Projects",
    projects: [
      {
        name: "Sky Square",
        location: "Warje, Pune",
        area: "1,41,000 sq.ft",
        floors: "15 Floors",
        images: [r1, r2],
        desc: "Lifestyle-focused residential apartments with premium quality construction.",
      },
    ],
  },

  industrial: {
    title: "Industrial Infrastructure Projects",
    projects: [
      {
        name: "MIDC Industrial Plant",
        location: "MIDC Zone",
        area: "3,50,000 sq.ft",
        floors: "8 Units",
        images: [i1],
        desc: "Heavy-duty industrial construction with safety compliance and durability.",
      },
    ],
  },
};

export default function ProjectShowcase() {
  const { id } = useParams();
  const section = data[id];

  if (!section) return null;

  return (
    <div className="bg-slate-950 text-white px-6 md:px-20 py-24">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-orange-500 text-center mb-20"
      >
        {section.title}
      </motion.h1>

      <div className="space-y-28">
        {section.projects.map((proj, index) => (
          <ProjectBlock key={index} proj={proj} sectionId={id} />
        ))}
      </div>
    </div>
  );
}

// ===== PROJECT BLOCK =====
function ProjectBlock({ proj, sectionId }) {
  const isIndustrial = sectionId === "industrial";
  const [view, setView] = useState("full");
  const img = proj.images[0];

  const getStyle = () => {
    switch (view) {
      case "zoom":
        return "scale-125";
      case "left":
        return "scale-125 translate-x-[-20%]";
      case "right":
        return "scale-125 translate-x-[20%]";
      default:
        return "scale-100";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="grid md:grid-cols-2 gap-14 items-center"
    >
      {/* Image Section */}
      <div>
        <div className="aspect-[16/9] bg-slate-900 rounded-xl overflow-hidden shadow-xl">
          <img
            src={img}
            className={`h-full w-full object-cover transition-all duration-700 ${
              isIndustrial ? "scale-100" : getStyle()
            }`}
          />
        </div>

        {/* Controls ONLY for commercial/residential */}
        {!isIndustrial && (
          <div className="flex gap-4 mt-5">
            {[
              { key: "full", label: "Full View" },
              { key: "zoom", label: "Zoom" },
              { key: "left", label: "Left Focus" },
              { key: "right", label: "Right Focus" },
            ].map((item, i) => (
              <button
                key={i}
                onClick={() => setView(item.key)}
                className={`px-4 py-2 text-sm rounded border transition
                ${
                  view === item.key
                    ? "bg-orange-500 border-orange-500"
                    : "bg-slate-800 border-slate-700 hover:border-orange-500"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Info Section */}
      <div>
        <h2 className="text-3xl font-bold text-orange-500">{proj.name}</h2>
        <p className="text-gray-400 mt-2">{proj.location}</p>

        <div className="grid grid-cols-2 gap-6 mt-6 text-sm">
          <div>
            <p className="text-gray-400">Total Area</p>
            <p className="font-bold">{proj.area}</p>
          </div>
          <div>
            <p className="text-gray-400">Floors</p>
            <p className="font-bold">{proj.floors}</p>
          </div>
        </div>

        <p className="mt-6 text-gray-300 leading-relaxed">{proj.desc}</p>
      </div>
    </motion.div>
  );
}
