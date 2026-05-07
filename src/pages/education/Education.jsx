import React, { useState } from "react";
import { Search, Filter, TrendingUp, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BLOG_CATEGORIES, MOCK_ARTICLES } from "../../constants/educationData";
import ArticleCard from "../../components/education/ArticleCard";
import FeaturedArticle from "../../components/education/FeaturedArticle";
import WeeklyUpdates from "../../components/education/WeeklyUpdates";

const Education = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featured = MOCK_ARTICLES.find((a) => a.featured);
  const trending = MOCK_ARTICLES.slice(1, 4);

  const filteredArticles = MOCK_ARTICLES.filter((article) => {
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      article.title.toLowerCase().includes(searchLower) ||
      article.excerpt.toLowerCase().includes(searchLower) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchLower));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-2xl"
        >
          <span className="text-red-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4 block">Knowledge Repository</span>
          <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-[1] mb-6">
            Health <span className="text-gray-300">Hub.</span>
          </h1>
          <p className="text-gray-500 font-medium text-lg max-w-md leading-relaxed">
            Expert resources on emergency care, disease prevention, and public wellness.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:w-96 relative group"
        >
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-black transition-colors" />
          <input
            type="text"
            placeholder="Search symptoms, diseases, or guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border-2 border-gray-100 rounded-2xl py-4 pl-14 pr-6 outline-none focus:border-black focus:ring-8 focus:ring-black/5 transition-all text-sm font-medium shadow-sm"
          />
        </motion.div>
      </div>

      {!searchQuery && activeCategory === "All" && <FeaturedArticle article={featured} />}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-12">
        {/* Main Content Area */}
        <div className="lg:col-span-8">
          {/* Category Filter */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">Categories</h3>
              <span className="text-[10px] font-bold text-gray-300">{filteredArticles.length} Articles Found</span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-6 py-2.5 rounded-xl text-xs font-bold border-2 transition-all ${
                    activeCategory === cat
                      ? "bg-black text-white border-black shadow-lg shadow-black/20"
                      : "bg-white text-gray-500 border-gray-100 hover:border-gray-200 hover:text-black"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </AnimatePresence>
          </div>

          {filteredArticles.length === 0 && (
            <div className="py-20 text-center bg-gray-50 rounded-3xl border border-dashed border-gray-200">
              <p className="text-gray-500 font-medium">No articles found matching your criteria.</p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
          {/* Weekly Updates (Sidebar Card) */}
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" /> Trending
            </h3>
            <div className="space-y-6">
              {trending.map((item, i) => (
                <div key={item.id} className="flex gap-4 group cursor-pointer">
                  <span className="text-3xl font-black text-gray-100 group-hover:text-black transition-colors duration-300">
                    0{i + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-sm leading-tight mb-2 line-clamp-2">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-tight">
                      <span>{item.author}</span>
                      <span>•</span>
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-8 py-3 rounded-xl border border-gray-200 text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white hover:border-black transition-all">
              View All Rankings
            </button>
          </div>

          <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
            <h3 className="text-red-600 font-black uppercase text-[10px] tracking-[0.15em] mb-4">Urgent Warning</h3>
            <h4 className="text-xl font-bold text-red-900 mb-4 leading-tight">
              Cholera Outbreak Prevention Protocol
            </h4>
            <p className="text-red-700/70 text-sm mb-6 leading-relaxed">
              New cases reported. Immediate water sanitation and hygiene measures are required in affected areas.
            </p>
            <button className="flex items-center gap-2 text-red-600 text-xs font-black uppercase tracking-widest hover:gap-3 transition-all">
              Read Protocol <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </aside>
      </div>

      <div className="mt-20">
        <WeeklyUpdates />
      </div>
    </div>
  );
};

export default Education;
