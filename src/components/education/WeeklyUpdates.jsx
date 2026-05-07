import React from "react";
import { AlertCircle, Activity, Wind, AlertTriangle, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { DISEASE_UPDATES } from "../../constants/educationData";

const iconMap = {
  AlertTriangle: AlertTriangle,
  Activity: Activity,
  Wind: Wind,
  AlertCircle: AlertCircle,
};

const WeeklyUpdates = () => {
  return (
    <section className="bg-black text-white p-8 rounded-3xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-3">
              Weekly Disease Update <Activity className="w-6 h-6 text-red-500" />
            </h2>
            <p className="text-gray-400 text-sm mt-1">Real-time health alerts and seasonal trends</p>
          </div>
          <button className="text-sm font-medium flex items-center gap-2 hover:text-gray-300 transition-colors">
            View All Updates <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DISEASE_UPDATES.map((update, idx) => (
            <motion.div
              key={update.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] uppercase font-bold px-3 py-1 rounded-full ${
                  update.severity === "Critical" ? "bg-red-500/20 text-red-400 border border-red-500/30" :
                  update.severity === "Moderate" ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30" :
                  "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                }`}>
                  {update.severity}
                </span>
                <span className="text-[10px] text-gray-500 flex items-center gap-1 font-medium">
                  <Calendar className="w-3 h-3" /> {update.date}
                </span>
              </div>
              
              <h4 className="font-bold text-lg mb-2">{update.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                {update.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeeklyUpdates;
