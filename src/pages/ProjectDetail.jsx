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

  // Scroll to top on mount and set dynamic SEO page title
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (project) {
      document.title = `${project.title} | Oka Wiyana Portfolio`;
    } else {
      document.title = "Project Not Found | Oka Wiyana";
    }
    return () => {
      document.title =
        "Oka Wiyana (I Gusti Lanang Oka Wiyana) | Web Developer & Software Engineer";
    };
  }, [slug, project]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="text-8xl mb-6">🔍</div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Project Not Found
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Project with slug{" "}
            <code className="text-primary font-mono">"{slug}"</code> does not exist.
          </p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-8 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
          >
            <i className="ri-arrow-left-line"></i> Back to Portfolio
          </Link>
        </motion.div>
      </div>
    );
  }

  const hasGithub = project.github && project.github !== "#";

  return (
    <div className="min-h-screen pb-20">
      {/* Calm Ambient Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/10 rounded-full blur-[140px]" />
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
              About Project
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed text-justify mb-8 whitespace-pre-line">
              {project.description}
            </p>

            {/* Problem Statement if available */}
            {project.problem && (
              <div className="mb-6 p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center text-sm">
                    <i className="ri-error-warning-line"></i>
                  </span>
                  Latar Belakang (The Problem)
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                  {project.problem}
                </p>
              </div>
            )}

            {/* Key Features if available */}
            {project.features && project.features.length > 0 && (
              <div className="mb-6 p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Fitur & Cara Kerja (Key Features)
                </h3>
                <ul className="space-y-2.5">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Impact if available */}
            {project.impact && (
              <div className="mb-8 p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-sm">
                    <i className="ri-rocket-line"></i>
                  </span>
                  Dampak & Skala Uji Coba (Impact)
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                  {project.impact}
                </p>
              </div>
            )}

            {/* Tech Stack — shown if available */}
            {project.tech && project.tech.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full inline-block"></span>
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Project Access & Links */}
            <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-3">
                <span className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full inline-block"></span>
                Resources & Access
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {hasGithub ? (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 glass-card rounded-2xl px-5 py-4 text-slate-700 dark:text-white hover:text-primary transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                      <i className="ri-github-fill text-xl text-white"></i>
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors text-sm">
                        View on GitHub
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        Source Code Repository
                      </p>
                    </div>
                    <i className="ri-external-link-line ml-auto text-slate-400 group-hover:text-primary transition-colors"></i>
                  </motion.a>
                ) : (
                  <div className="inline-flex items-center gap-3 glass-card rounded-2xl px-5 py-4 opacity-75 cursor-not-allowed">
                    <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="ri-github-fill text-xl text-white"></i>
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-900 dark:text-white text-sm">
                        Private Repository
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Source code is private
                      </p>
                    </div>
                    <i className="ri-lock-line ml-auto text-slate-400"></i>
                  </div>
                )}

                {project.download && (
                  <motion.a
                    href={project.download}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl px-5 py-4 text-slate-700 dark:text-white hover:border-primary transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-primary/25">
                      <i className="ri-download-2-line text-xl"></i>
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors text-sm">
                        Download Executable
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        Versi Siap Pakai (.exe)
                      </p>
                    </div>
                    <i className="ri-external-link-line ml-auto text-slate-400 group-hover:text-primary transition-colors"></i>
                  </motion.a>
                )}

                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl px-5 py-4 text-slate-700 dark:text-white hover:border-primary transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-primary/25">
                      <i className="ri-external-link-line text-xl"></i>
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors text-sm">
                        Live Demo
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        Kunjungi Aplikasi Web
                      </p>
                    </div>
                    <i className="ri-arrow-right-line ml-auto text-slate-400 group-hover:text-primary transition-colors"></i>
                  </motion.a>
                )}
              </div>
            </div>

            {/* Back button */}
            <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary hover:border-primary/40 font-medium transition-all duration-300"
                >
                  <i className="ri-arrow-left-line"></i>
                  <span>Back to Home</span>
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
                Other Projects
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
                View All Projects
              </Link>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
