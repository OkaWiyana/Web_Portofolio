import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

// CMS Data Imports
// CMS Data Imports
import homeData from "../content/home/index.json";
// const homeData = {
//   heroText: "Test",
//   roles: ["Test"],
//   heroImage: "",
//   aboutImage: "",
// };

// Import all project and skill JSONs
const projectModules = import.meta.glob("../content/projects/*.json", {
  eager: true,
});
const projectsData = Object.values(projectModules).map(
  (mod) => mod.default || mod,
);

const skillModules = import.meta.glob("../content/skills/*.json", {
  eager: true,
});
const skillsData = Object.values(skillModules).map((mod) => mod.default || mod);

const Homepage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Process roles for TypeAnimation sequence
  const roleSequence = homeData.roles
    ? homeData.roles.flatMap((role) => [role, 2000])
    : [];

  return (
    <div className="homepage pb-10 overflow-hidden">
      {/* Background Gradients */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] mix-blend-screen animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Home Start */}
        <section
          id="home"
          className="min-h-screen flex md:flex-row flex-col items-center justify-between gap-10 pt-32"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="md:w-1/2 text-center md:text-left z-10"
          >
            <h1 className="text-lg md:text-xl font-semibold text-primary mb-2">
              Halo Semua, Saya
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white leading-tight">
              I Gusti Lanang <br />
              <span className="text-gradient">Oka Wiyana</span>
            </h2>
            <h3 className="text-xl md:text-2xl font-medium text-slate-700 dark:text-white/80 mb-6 flex flex-col md:flex-row gap-2">
              <span>I'm a</span>
              {roleSequence.length > 0 && (
                <TypeAnimation
                  sequence={roleSequence}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-primary font-bold"
                />
              )}
            </h3>
            <p className="text-base md:text-lg text-slate-600 dark:text-white/60 mb-8 max-w-lg leading-relaxed">
              {homeData.heroText || "Web Developer & UI/UX Designer"}
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.usercontent.google.com/download?id=1XIAy6f27HtWDtohnoeM0c0aP7VtJRRTu&export=download&authuser=0&confirm=t&uuid=7043d32d-20c3-48d6-9671-1dedae158cf8&at=AN_67v3SZCPO06MaT2aGW9HiucKY:1730121135883"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
            >
              Download CV <i className="ri-download-2-line"></i>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center relative"
          >
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-20 animate-pulse"></div>
              {homeData.heroImage && (
                <img
                  src={`/images/hero/${homeData.heroImage}`}
                  alt="Hero Image"
                  className="w-full h-full object-cover rounded-full border-4 border-white/10 relative z-10 drop-shadow-2xl"
                />
              )}
            </div>
          </motion.div>
        </section>
        {/* Section Home End */}

        {/* Section About Start */}
        <section
          id="about"
          className="min-h-screen flex md:flex-row flex-col items-center gap-16 py-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full"></div>
              {homeData.aboutImage && (
                <img
                  src={`/images/hero/${homeData.aboutImage}`}
                  alt="About image"
                  className="w-[300px] md:w-[400px] relative z-10 drop-shadow-2xl"
                />
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              Tentang <span className="text-gradient">Saya</span>
            </h2>
            <p className="text-slate-700 dark:text-white/70 text-lg leading-relaxed mb-6 text-justify">
              Saya adalah mahasiswa di Politeknik Negeri Bali, jurusan Teknologi
              Informasi, program studi Teknologi Rekayasa Perangkat Lunak, saat
              ini saya sedang menempuh semester 5. Saya memiliki minat yang
              mendalam di bidang desain UI/UX dan pengembangan website, di mana
              saya berusaha menggabungkan estetika dan fungsionalitas dalam
              setiap proyek.
            </p>
            <div className="flex gap-4 mt-8">
              {[
                {
                  name: "Instagram",
                  url: "https://www.instagram.com/wiyana_12",
                },
                {
                  name: "Facebook",
                  url: "https://web.facebook.com/oka.wiyana.7/",
                },
                { name: "TikTok", url: "https://www.tiktok.com/@iglow_12" },
                {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/in/okawiyana/",
                },
                { name: "GitHub", url: "https://github.com/OkaWiyana" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  className="w-12 h-12 glass rounded-full flex items-center justify-center text-slate-600 dark:text-white/70 hover:text-primary dark:hover:text-white hover:bg-gray-100 dark:hover:bg-primary transition-all duration-300"
                >
                  <i
                    className={`ri-${social.name.toLowerCase()}-fill text-xl`}
                  ></i>
                </a>
              ))}
            </div>
          </motion.div>
        </section>
        {/* Section About End */}

        {/* Section Skills Start */}
        <section id="skills" className="py-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-12 text-center text-slate-900 dark:text-white"
          >
            My <span className="text-gradient">Skills</span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-card p-4 rounded-xl flex items-center gap-4 hover:scale-105 transition-transform"
              >
                <img
                  src={`/images/skills/${skill.icon}`}
                  alt={skill.name}
                  className="w-8 h-8"
                />
                <span className="text-slate-900 dark:text-white font-medium">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </section>
        {/* Section Skills End */}

        {/* Section Services Start */}
        <section id="services" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              Layanan <span className="text-gradient">Kami</span>
            </h2>
            <p className="text-slate-600 dark:text-white/60">
              Solusi digital terbaik untuk kebutuhan Anda
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "ri-palette-line",
                title: "Graphic Design",
                desc: "Desain visual menarik seperti logo, poster, dan materi pemasaran yang sesuai dengan identitas brand Anda.",
              },
              {
                icon: "ri-layout-masonry-line",
                title: "UI/UX Design",
                desc: "Perancangan antarmuka yang intuitif dan pengalaman pengguna yang optimal untuk aplikasi web dan mobile.",
              },
              {
                icon: "ri-code-s-slash-line",
                title: "Web Development",
                desc: "Pengembangan website responsif, cepat, dan modern menggunakan teknologi terbaru.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass p-8 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-primary/50 transition-all group"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <i
                    className={`${service.icon} text-3xl text-primary group-hover:text-white transition-colors`}
                  ></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-white/60 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
        {/* Section Services End */}

        {/* Section Projects Start */}
        <section id="projects" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              Project <span className="text-gradient">Terbaru</span>
            </h2>
            <p className="text-slate-600 dark:text-white/60">
              Karya dan pengalaman yang telah saya kerjakan
            </p>
          </motion.div>

          {projectsData.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {projectsData.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative overflow-hidden rounded-2xl glass"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                      <span className="text-white font-semibold border border-white px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        View Project
                      </span>
                    </div>
                    {project.image && (
                      <img
                        src={`/images/projects/${project.image}`}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-white/60 text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center text-white/60">No recent projects yet.</p>
          )}
        </section>
        {/* Section Projects End */}

        {/* Section Contact Start */}
        <section id="contact" className="py-20 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto glass p-8 md:p-12 rounded-3xl"
          >
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-8">
              Hubungi <span className="text-gradient">Saya</span>
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-slate-700 dark:text-white/80 mb-2 text-sm font-medium">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-50 dark:bg-dark/50 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="Masukkan nama anda"
                />
              </div>
              <div>
                <label className="block text-slate-700 dark:text-white/80 mb-2 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-50 dark:bg-dark/50 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-slate-700 dark:text-white/80 mb-2 text-sm font-medium">
                  Pesan
                </label>
                <textarea
                  className="w-full bg-gray-50 dark:bg-dark/50 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors h-32 resize-none"
                  placeholder="Tulis pesan anda disini..."
                ></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transform hover:-translate-y-1 transition-all duration-300">
                Kirim Pesan
              </button>
            </form>
          </motion.div>
        </section>
        {/* Section Contact End */}
      </div>
    </div>
  );
};

export default Homepage;
