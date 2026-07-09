import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

// Import all project JSONs
const projectModules = import.meta.glob("../content/projects/*.json", {
  eager: true,
});
const allProjects = Object.values(projectModules).map(
  (mod) => mod.default || mod,
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = allProjects.find((p) => p.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6">
        {/* Background Gradients */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] mix-blend-screen animate-blob"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="text-8xl mb-6">🔍</div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Project Tidak Ditemukan
          </h1>
          <p className="text-slate-500 dark:text-white/50 mb-8">
            Project dengan slug{" "}
            <code className="text-primary font-mono">"{slug}"</code> tidak ada.
          </p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
          >
            <i className="ri-arrow-left-line"></i> Kembali ke Portfolio
          </Link>
        </motion.div>
      </div>
    );
  }

  const hasGithub = project.github && project.github !== "#";

  return (
    <div className="min-h-screen pb-20">
      {/* Background Gradients */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] mix-blend-screen animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        {project.image ? (
          <>
            <img
              src={`/images/projects/${project.image}`}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
            <i className="ri-code-s-slash-line text-8xl text-white/30"></i>
          </div>
        )}

        {/* Title overlay on hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-10"
        >
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <i className="ri-arrow-right-s-line"></i>
              <Link
                to="/#projects"
                className="hover:text-white transition-colors"
              >
                Projects
              </Link>
              <i className="ri-arrow-right-s-line"></i>
              <span className="text-white/90">{project.title}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
              {project.title}
            </h1>
          </div>
        </motion.div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 mt-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Main Content */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-7 bg-gradient-to-b from-primary to-secondary rounded-full inline-block"></span>
              Tentang Project
            </h2>
            <p className="text-slate-600 dark:text-white/70 text-lg leading-relaxed text-justify mb-8">
              {project.description}
            </p>

            {/* Tech Stack — shown if available */}
            {project.tech && project.tech.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full inline-block"></span>
                  Teknologi
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="glass px-4 py-1.5 rounded-full text-sm font-medium text-primary border border-primary/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* GitHub Link */}
            <div className="mt-10 pt-8 border-t border-gray-200 dark:border-white/10">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-3">
                <span className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full inline-block"></span>
                Source Code
              </h3>
              {hasGithub ? (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 glass border border-white/10 hover:border-primary/50 rounded-2xl px-6 py-4 text-slate-700 dark:text-white hover:text-primary transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                    <i className="ri-github-fill text-xl text-white"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                      Lihat di GitHub
                    </p>
                    <p className="text-sm text-slate-500 dark:text-white/50 truncate max-w-[250px]">
                      {project.github}
                    </p>
                  </div>
                  <i className="ri-external-link-line ml-auto text-slate-400 group-hover:text-primary transition-colors"></i>
                </motion.a>
              ) : (
                <div className="inline-flex items-center gap-3 glass border border-white/10 rounded-2xl px-6 py-4 opacity-50 cursor-not-allowed">
                  <div className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center">
                    <i className="ri-github-fill text-xl text-white"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      Repository Private
                    </p>
                    <p className="text-sm text-slate-500 dark:text-white/50">
                      Source code tidak tersedia untuk publik
                    </p>
                  </div>
                  <i className="ri-lock-line ml-auto text-slate-400"></i>
                </div>
              )}
            </div>

            {/* Back button */}
            <div className="mt-10 pt-8 border-t border-gray-200 dark:border-white/10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 glass text-slate-900 dark:text-white hover:text-slate-600 font-medium py-2 px-5 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                >
                  <i className="ri-arrow-left-line"></i>
                  <span>Kembali</span>
                </Link>
              </motion.div>
            </div>
          </motion.article>

          {/* Sidebar — Project Lainnya */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-1"
          >
            <div className="sticky top-28 space-y-4">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg flex items-center gap-2">
                <span className="w-1 h-5 bg-gradient-to-b from-primary to-secondary rounded-full inline-block"></span>
                Project Lainnya
              </h3>

              {allProjects
                .filter((p) => p.slug !== project.slug)
                .map((other, i) => (
                  <motion.div
                    key={other.slug}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  >
                    <Link
                      to={`/projects/${other.slug}`}
                      className="flex gap-3 glass border border-gray-200 dark:border-white/10 hover:border-primary/40 rounded-xl p-3 group transition-all duration-300 hover:shadow-md hover:shadow-primary/10"
                    >
                      {/* Thumbnail */}
                      <div className="w-20 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200 dark:bg-white/10">
                        {other.image ? (
                          <img
                            src={`/images/projects/${other.image}`}
                            alt={other.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <i className="ri-code-s-slash-line text-2xl text-slate-400"></i>
                          </div>
                        )}
                      </div>
                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-900 dark:text-white text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2 mb-1">
                          {other.title}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-white/40 line-clamp-2 leading-relaxed">
                          {other.description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}

              {/* Semua Project button */}
              <Link
                to="/#projects"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-0.5 transition-all duration-300 text-sm mt-2"
              >
                <i className="ri-layout-grid-line"></i>
                Lihat Semua Project
              </Link>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
