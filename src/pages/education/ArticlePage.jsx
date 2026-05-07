import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Clock, User, ArrowLeft, Share2, Facebook, Twitter, Link as LinkIcon, Bookmark, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { MOCK_ARTICLES } from "../../constants/educationData";
import ArticleCard from "../../components/education/ArticleCard";

const ArticlePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = MOCK_ARTICLES.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [article]);

  if (!article) return (
    <div className="pt-40 pb-40 text-center">
      <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-gray-100">
        <ArrowLeft className="w-8 h-8 text-gray-300" />
      </div>
      <h1 className="text-3xl font-black tracking-tight mb-4 leading-none">Article Not Found</h1>
      <p className="text-gray-500 font-medium mb-10 max-w-sm mx-auto">The resource you're looking for might have been moved or doesn't exist anymore.</p>
      <Link 
        to="/education" 
        className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform active:scale-95"
      >
        <ArrowLeft className="w-5 h-5" /> Back to Platform
      </Link>
    </div>
  );

  const relatedArticles = MOCK_ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[65vh] min-h-[550px] w-full mt-16">
        <div className="absolute inset-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-black/30"></div>
        </div>
        
        <div className="absolute bottom-12 left-0 right-0 px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="bg-white/90 backdrop-blur-xl p-8 md:p-14 rounded-[3rem] shadow-2xl border border-white/50 inline-block w-full"
          >
            <div className="flex items-center justify-between mb-8">
              <Link to="/education" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black/40 hover:text-black transition-colors">
                <ArrowLeft className="w-4 h-4" /> Platform Repository
              </Link>
              <div className="flex items-center gap-3">
                <span className="bg-black text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                  {article.category}
                </span>
                {article.medicallyReviewed && (
                  <span className="bg-green-50 text-green-600 border border-green-100 text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3" /> Medically Verified
                  </span>
                )}
              </div>
            </div>
            
            <h1 className="text-3xl md:text-6xl font-black tracking-tighter mb-10 leading-[1] max-w-4xl">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-8 pt-10 border-t border-gray-100">
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gray-100 border-2 border-white overflow-hidden shadow-sm">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${article.author}`} alt={article.author} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-tighter leading-none mb-1 text-gray-400">Author</p>
                    <p className="text-sm font-black tracking-tight">{article.author}</p>
                  </div>
                </div>

                {article.medicallyReviewed && (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-50 border-2 border-white flex items-center justify-center shadow-sm">
                      <ShieldCheck className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-tighter leading-none mb-1 text-gray-400">Reviewer</p>
                      <p className="text-sm font-black tracking-tight text-green-700">{article.reviewer}</p>
                    </div>
                  </div>
                )}

                <div className="h-8 w-[1px] bg-gray-100 hidden lg:block"></div>

                <div className="flex flex-col">
                  <p className="text-[10px] font-black uppercase tracking-tighter leading-none mb-1 text-gray-400">Published</p>
                  <p className="text-xs font-bold">{article.date} • {article.readTime}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 bg-gray-50 text-black px-6 py-3 rounded-2xl font-bold text-xs hover:bg-black hover:text-white transition-all active:scale-95 border border-gray-100">
                  <Share2 className="w-4 h-4" /> Share
                </button>
                <button className="p-3.5 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-all active:scale-90 bg-white">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 pt-12 pb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-grow w-full">
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            <style dangerouslySetInnerHTML={{ __html: `
              .article-content p {
                margin-bottom: 2rem;
                color: #4b5563;
                line-height: 1.8;
                font-size: 1.125rem;
              }
              .article-content h3 {
                font-size: 1.875rem;
                font-weight: 900;
                margin-top: 3rem;
                margin-bottom: 1.5rem;
                letter-spacing: -0.025em;
                color: #111827;
              }
            ` }} />
            
            <div className="mt-16 pt-12 border-t border-gray-100 flex flex-wrap gap-3">
              {article.tags.map(tag => (
                <span key={tag} className="bg-gray-50 text-gray-400 px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white cursor-pointer transition-all border border-gray-100">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="mt-12 p-8 rounded-3xl bg-gray-50 border border-gray-100 text-center">
              <h4 className="font-black uppercase tracking-[0.2em] text-[10px] mb-8">Share this knowledge</h4>
              <div className="flex justify-center gap-4">
                <button className="flex items-center gap-3 bg-white border border-gray-100 px-6 py-3 rounded-2xl font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-95">
                  <Facebook className="w-4 h-4 text-[#1877F2]" /> Facebook
                </button>
                <button className="flex items-center gap-3 bg-white border border-gray-100 px-6 py-3 rounded-2xl font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-95">
                  <Twitter className="w-4 h-4 text-[#1DA1F2]" /> Twitter
                </button>
                <button className="flex items-center gap-3 bg-white border border-gray-100 px-6 py-3 rounded-2xl font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-95">
                  <LinkIcon className="w-4 h-4 text-gray-500" /> Copy Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-black font-black uppercase tracking-[0.2em] text-[10px] mb-4 block">Recommended Reading</span>
              <h2 className="text-3xl font-black tracking-tight">Expand Your Knowledge</h2>
            </div>
            <Link to="/education" className="font-bold text-sm underline underline-offset-8">View Repository</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map(art => (
              <ArticleCard key={art.id} article={art} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
