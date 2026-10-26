import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { Turnstile } from "@marsidev/react-turnstile";

// CMS Data Imports
import homeData from "../content/home/index.json";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const turnstileRef = useRef(null);
  const turnstileSiteKey = import.meta.env.VITE_CLOUDFLARE_TURNSTILE_SITE_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) {
      // Bot trapped by honeypot
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Mohon lengkapi semua kolom inputan.");
      return;
    }

    if (turnstileSiteKey && !turnstileToken) {
      setStatus("error");
      setErrorMessage("Harap selesaikan verifikasi keamanan terlebih dahulu.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const targetEmail =
        import.meta.env.VITE_CONTACT_EMAIL ||
        homeData.email ||
        "gungwiyana@gmail.com";
      const response = await fetch(
        `https://formsubmit.co/ajax/${targetEmail}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _honey: honeypot,
            _subject: `Pesan Baru dari Portfolio: ${formData.name}`,
            _template: "table",
          }),
        },
      );

      const result = await response.json();
      if (response.ok && result.success !== "false") {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTurnstileToken("");
        turnstileRef.current?.reset();
      } else {
        setStatus("error");
        setErrorMessage(
          result.message || "Gagal mengirim pesan. Silakan coba lagi.",
        );
      }
    } catch (err) {
      console.error("Error submitting contact form:", err);
      setStatus("error");
      setErrorMessage("Terjadi kesalahan koneksi. Silakan coba lagi nanti.");
    }
  };
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
      {/* Calm Ambient Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/10 rounded-full blur-[140px]" />
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
              Hello Everyone, I'm
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
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-lg leading-relaxed">
              {homeData.heroText ||
                "Bridging technology, design, and visual arts to create impactful digital products"}
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://drive.usercontent.google.com/download?id=1quUTnVrP5ZnARH7a76vrPfSvfQUM2s3I"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-8 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 text-sm"
              >
                Download CV <i className="ri-download-2-line"></i>
              </motion.a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-primary hover:border-primary/40 font-semibold text-sm transition-all duration-300"
              >
                <span>View Projects</span>
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>

            {/* Core Tech Stack Highlights (Menyeimbangkan ruang kosong desktop) */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 text-left">
              <p className="text-[11px] font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-3">
                Core Technologies
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                {[
                  { name: "React", icon: "ri-reactjs-line" },
                  { name: "JavaScript", icon: "ri-javascript-line" },
                  { name: "Tailwind CSS", icon: "ri-paint-brush-line" },
                  { name: "Node.js", icon: "ri-server-line" },
                  { name: "UI/UX Design", icon: "ri-layout-masonry-line" },
                ].map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    <i className={`${tech.icon} text-primary`}></i>
                    <span>{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 flex justify-center relative items-end min-h-[420px] md:min-h-[500px]"
          >
            {/* Ambient Back Glow */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-primary/20 via-secondary/10 to-transparent rounded-[3rem] blur-3xl -z-10" />

            {/* Backdrop Pedestal & Anchored Badges */}
            <div className="absolute bottom-0 w-[260px] sm:w-[300px] md:w-[350px] h-[320px] sm:h-[370px] md:h-[420px] pointer-events-none">
              <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-b from-primary/10 via-slate-100 to-slate-200/80 dark:from-primary/15 dark:via-slate-900 dark:to-slate-950 border border-slate-200/80 dark:border-slate-800 -z-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-transparent to-secondary/15 rounded-[2.5rem] blur-xl -z-10" />
              </div>

              {/* Floating Badge 1: Status Available (Center-Bottom di HP, Kiri-Bawah di Desktop) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="pointer-events-auto absolute -bottom-3 left-1/2 -translate-x-1/2 md:translate-x-0 md:-left-4 bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 shadow-xl rounded-xl px-4 py-2 flex items-center gap-2.5 backdrop-blur-md z-30 whitespace-nowrap"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <div className="text-left">
                  <p className="text-[9px] uppercase font-mono tracking-wider text-slate-400">
                    Status
                  </p>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-100">
                    Available for Work
                  </p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Discipline (Menempel rapi di bahu kanan atas kartu) */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="pointer-events-auto hidden sm:flex absolute -top-4 -right-16 md:-right-16 bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 shadow-xl rounded-xl px-3.5 py-2 items-center gap-2.5 backdrop-blur-md z-30 whitespace-nowrap"
              >
                <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                  <i className="ri-code-s-slash-line"></i>
                </div>
                <div className="text-left">
                  <p className="text-[9px] uppercase font-mono tracking-wider text-slate-400">
                    Specialty
                  </p>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-100">
                    Software & UI/UX
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Foto Cutout Transparan Utuh (Kepala pop-out di atas kartu, bagian bawah mask fade) */}
            {homeData.heroImage && (
              <img
                src={`/images/hero/${homeData.heroImage}`}
                alt="I Gusti Lanang Oka Wiyana"
                className="relative z-10 h-[380px] sm:h-[440px] md:h-[500px] max-w-none w-auto object-contain drop-shadow-2xl pointer-events-none [mask-image:linear-gradient(to_bottom,black_85%,transparent)]"
              />
            )}
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
            className="md:w-1/2 flex justify-center relative items-end min-h-[380px] md:min-h-[460px]"
          >
            {/* Backdrop Pedestal About */}
            <div className="absolute bottom-0 w-[240px] sm:w-[280px] md:w-[320px] h-[290px] sm:h-[340px] md:h-[380px] rounded-[2.5rem] bg-gradient-to-b from-primary/10 via-slate-100 to-slate-200/80 dark:from-primary/15 dark:via-slate-900 dark:to-slate-950 border border-slate-200/80 dark:border-slate-800 -z-0">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full -z-10" />
            </div>

            {homeData.aboutImage && (
              <img
                src={`/images/hero/${homeData.aboutImage}`}
                alt="About Oka"
                className="relative z-10 h-[350px] sm:h-[410px] md:h-[460px] w-auto object-contain drop-shadow-2xl pointer-events-none [mask-image:linear-gradient(to_bottom,black_85%,transparent)]"
              />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6 text-justify">
              Saya merupakan lulusan Sarjana Terapan Teknologi Rekayasa
              Perangkat Lunak dari Politeknik Negeri Bali yang memiliki
              antusiasme tinggi terhadap perkembangan dunia teknologi dan AI.
              Sebagai seseorang yang menyukai eksplorasi digital, saya senang
              merancang antarmuka yang intuitif sekaligus membangun sistem yang
              fungsional dan optimal. Di luar dunia koding, saya menyalurkan
              kreativitas melalui hobi fotografi dan menjaga keseimbangan energi
              dengan rutin berlari. Bagi saya, ketelitian di jalur lari dan
              ketajaman lensa kamera membantu saya melihat detail-detail kecil
              yang juga penting dalam menciptakan solusi digital yang berdampak.
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
                  rel="noreferrer"
                  className="w-11 h-11 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:border-primary/40 transition-all duration-300"
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
            My <span className="text-primary">Skills</span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-card p-4 rounded-xl flex items-center gap-4 hover:scale-105 transition-transform w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(20%-20px)]"
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
              Services & <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              The best digital solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "ri-palette-line",
                title: "Graphic Design",
                desc: "Membantu merancang identitas visual yang kuat, mulai dari logo, poster, hingga materi pemasaran yang selaras dengan karakter brand Anda.",
              },
              {
                icon: "ri-layout-masonry-line",
                title: "UI/UX Design",
                desc: "Merancang antarmuka (UI) yang intuitif dan pengalaman pengguna (UX) yang optimal untuk memastikan aplikasi web maupun mobile nyaman digunakan.",
              },
              {
                icon: "ri-code-s-slash-line",
                title: "Web Development",
                desc: "Mengembangkan website yang responsif, cepat, dan modern dengan implementasi kode yang bersih serta teknologi terdepan.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <i
                    className={`${service.icon} text-2xl text-primary group-hover:text-white transition-colors`}
                  ></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
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
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Selected works and experiences I have crafted
            </p>
          </motion.div>

          {projectsData.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-8">
              {projectsData.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]"
                >
                  <Link
                    to={`/projects/${project.slug}`}
                    className="group relative overflow-hidden rounded-2xl glass-card block h-full flex flex-col"
                  >
                    <div className="relative h-60 overflow-hidden bg-slate-100 dark:bg-slate-950">
                      <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                        <span className="text-white text-sm font-semibold border border-white/30 px-4 py-2 rounded-xl backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform flex items-center gap-2">
                          <i className="ri-eye-line"></i> View Project
                        </span>
                      </div>
                      {project.image && (
                        <img
                          src={`/images/projects/${project.image}`}
                          alt={project.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-3 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium">
                        <span>View Details</span>
                        <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center text-slate-400">
              No recent projects yet.
            </p>
          )}
        </section>
        {/* Section Projects End */}

        {/* Section Contact Start */}
        <section id="contact" className="py-20 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto glass-card p-8 md:p-12 rounded-2xl"
          >
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-8">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === "success" && (
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 text-sm flex items-center gap-3">
                  <i className="ri-checkbox-circle-line text-2xl flex-shrink-0"></i>
                  <div>
                    <p className="font-semibold">Pesan Berhasil Terkirim!</p>
                    <p className="text-xs opacity-90">
                      Terima kasih telah menghubungi saya. Pesan Anda telah
                      berhasil dikirim ke email.
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-sm flex items-center gap-3">
                  <i className="ri-error-warning-line text-2xl flex-shrink-0"></i>
                  <div>
                    <p className="font-semibold">Gagal Mengirim Pesan</p>
                    <p className="text-xs opacity-90">{errorMessage}</p>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-slate-700 dark:text-slate-200 mb-2 text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-slate-700 dark:text-slate-200 mb-2 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-primary transition-colors"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-slate-700 dark:text-slate-200 mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-primary transition-colors h-32 resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              {/* Honeypot Field (Tersembunyi dari manusia untuk menjebak bot spam) */}
              <input
                type="text"
                name="_honey"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Cloudflare Turnstile */}
              {turnstileSiteKey && (
                <div className="flex justify-center my-2">
                  <Turnstile
                    ref={turnstileRef}
                    siteKey={turnstileSiteKey}
                    onSuccess={(token) => setTurnstileToken(token)}
                    onExpire={() => setTurnstileToken("")}
                    onError={() => setTurnstileToken("")}
                    options={{
                      theme: "auto",
                    }}
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={
                  status === "loading" ||
                  (Boolean(turnstileSiteKey) && !turnstileToken)
                }
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <i className="ri-loader-4-line animate-spin text-xl"></i>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <i className="ri-send-plane-fill"></i>
                  </>
                )}
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
