import HeroImage from "../assets/img/Oka Profile.png";
import Aboutme from "../assets/img/About Oka.png";
import proyek1 from "../assets/img/project 1.png";
import proyek2 from "../assets/img/project 2.png";
import proyek3 from "../assets/img/project 3.png";

import html_icon from "../assets/icon/html.png";
import css_icon from "../assets/icon/css-3.png";
import php_icon from "../assets/icon/php.png";
import tailwind_icon from "../assets/icon/Tailwind CSS.png";
import bootsrap_icon from "../assets/icon/bootstrap.png";
import laravel_icon from "../assets/icon/laravel.png";
import figma_icon from "../assets/icon/figma.png";
import ai_icon from "../assets/icon/illustrator.png";
import ps_icon from "../assets/icon/photoshop.png";
import lr_icon from "../assets/icon/lightroom.png";
import codeigniter_icon from "../assets/icon/codeigniter.png";
import dart_icon from "../assets/icon/dart.png";
import flutter_icon from "../assets/icon/flutter.png";
import js_icon from "../assets/icon/js.png";
import react_icon from "../assets/icon/react js.png";

const Homepage = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        {/* section home start */}
        <section
          id="home"
          className="hero flex md:flex-row flex-col items-center justify-between gap-20 pt-32"
        >
          <div className="box text-center md:text-left">
            <h1 className="lg:text-lg text-base font-semibold text-blue-600">
              Halo Semua, Saya
              <span className="block font-bold lg:text-4xl text-3xl mb-1 text-black">
                I Gusti Lanang Oka Wiyana
              </span>
            </h1>
            <h2 className="font-medium text-slate-500 text-lg mb-5">
              Web Developer & UI/UX Designer
            </h2>
            <p className="md:text-base text-sm mb-7">
              Dengan pengalaman di pengembangan web dan desain UI/UX, saya siap
              menciptakan solusi digital yang fungsional dan menarik.
            </p>
            <a
              href="https://drive.usercontent.google.com/download?id=1XIAy6f27HtWDtohnoeM0c0aP7VtJRRTu&export=download&authuser=0&confirm=t&uuid=7043d32d-20c3-48d6-9671-1dedae158cf8&at=AN_67v3SZCPO06MaT2aGW9HiucKY:1730121135883"
              className="bg-blue-600 hover:bg-blue-800 transition-all py-2 px-4 text-white shadow rounded-sm"
            >
              Download CV <i className="ri-download-2-line ms-1"></i>
            </a>
          </div>
          <div className="box flex justify-center md:justify-start md:m-0 m-0">
            <img
              src={HeroImage}
              alt="HeroImage"
              className="w-full max-w-full object-cover"
            />
          </div>
        </section>
        {/* section home end */}

        {/* section About start */}
        <section
          id="about"
          className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 md:pt-20 pt-32"
        >
          <div className="box md:order-1 order-2">
            <img
              src={Aboutme}
              alt="About image"
              className="lg:w-[500px] w-[400px] md:m-0 mx-auto"
            />
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-4xl text-2xl font-semibold mb-7">
              Tentang Saya
            </h1>
            <p className="md:text-base/lose text-sm text-justify">
              Saya adalah mahasiswa di Politeknik Negeri Bali, jurusan Teknologi
              Informasi, program studi Teknologi Rekayasa Perangkat Lunak, saat
              ini saya sedang menempuh semester 5. Saya memiliki minat yang
              mendalam di bidang desain UI/UX dan pengembangan website, di mana
              saya berusaha menggabungkan estetika dan fungsionalitas dalam
              setiap proyek. Selain itu, saya juga memiliki hobi di olahraga,
              desain grafis, dan fotografi. Hobi-hobi ini membantu saya
              mengekspresikan kreativitas dan menjaga keseimbangan antara
              kegiatan akademis dan rekreasi. Dengan komitmen untuk terus
              belajar dan berkembang, saya berharap dapat berkontribusi secara
              signifikan dalam industri teknologi di masa depan.
            </p>
            <div className="flex items-center lg:pt-20 pt-5">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/wiyana_12"
                target="_blank"
                className="w-10 h-10 mr-3 rounded-full flex justify-center items-center border border-slate-500 text-slate-500 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <svg
                  role="img"
                  width={23}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <title>Instagram</title>
                  <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                </svg>
              </a>

              {/* facebook */}
              <a
                href="https://web.facebook.com/oka.wiyana.7/"
                target="_blank"
                className="w-10 h-10 mr-3 rounded-full flex justify-center items-center border border-slate-500 text-slate-500 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <svg
                  role="img"
                  width={23}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <title>Facebook</title>
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                </svg>
              </a>

              {/* Tiktok */}
              <a
                href="https://www.tiktok.com/@iglow_12"
                target="_blank"
                className="w-10 h-10 mr-3 rounded-full flex justify-center items-center border border-slate-500 text-slate-500 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <svg
                  role="img"
                  width={23}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <title>TikTok</title>
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>

              {/* Linkedin */}
              <a
                href="https://www.linkedin.com/in/okawiyana/"
                target="_blank"
                className="w-10 h-10 mr-3 rounded-full flex justify-center items-center border border-slate-500 text-slate-500 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <svg
                  role="img"
                  width={23}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Github */}
              <a
                href="https://github.com/IGLOW2004"
                target="_blank"
                className="w-10 h-10 mr-3 rounded-full flex justify-center items-center border border-slate-500 text-slate-500 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <svg
                  role="img"
                  width={23}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>
        </section>
        {/* section About end */}

        {/* section skill start */}
        <section id="skills" className="skills-container pt-32">
          <h2 className="lg:text-4xl text-2xl font-semibold mb-8 text-center">
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="flex items-center space-x-2 p-2 border rounded-lg hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.7)] transition-shadow duration-300">
              <img src={html_icon} alt="HTML Icon" className="h-6 w-6" />
              <span className="text-sm font-medium cursor-default">HTML</span>
            </div>
            <div className="flex items-center space-x-2 p-2 border rounded-lg hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.7)] transition-shadow duration-300">
              <img src={css_icon} alt="CSS Icon" className="h-6 w-6" />
              <span className="text-sm font-medium cursor-default">CSS</span>
            </div>
            <div className="flex items-center space-x-2 p-2 border rounded-lg hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.7)] transition-shadow duration-300">
              <img src={php_icon} alt="PHP Icon" className="h-6 w-6" />
              <span className="text-sm font-medium cursor-default">PHP</span>
            </div>
            <div className="flex items-center space-x-2 p-2 border rounded-lg hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.7)] transition-shadow duration-300">
              <img
                src={tailwind_icon}
                alt="Tailwind Icon"
                className="h-6 w-6"
              />
              <span className="text-sm font-medium cursor-default">
                Tailwind
              </span>
            </div>
            <div className="flex items-center space-x-2 p-2 border rounded-lg hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.7)] transition-shadow duration-300">
              <img
                src={bootsrap_icon}
                alt="Bootsrap Icon"
                className="h-6 w-6"
              />
              <span className="text-sm font-medium cursor-default">
                Bootstrap
              </span>
            </div>
            <div className="flex items-center space-x-2 p-2 border rounded-lg hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.7)] transition-shadow duration-300">
              <img src={laravel_icon} alt="Laravel Icon" className="h-6 w-6" />
              <span className="text-sm font-medium cursor-default">
                Laravel
              </span>
            </div>
            <div className="flex items-center space-x-2 p-2 border rounded-lg hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.7)] transition-shadow duration-300">
              <img src={figma_icon} alt="Figma Icon" className="h-6 w-6" />
              <span className="text-sm font-medium cursor-default">Figma</span>
            </div>
            <div className="flex items-center space-x-2 p-2 border rounded-lg hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.7)] transition-shadow duration-300">
              <img src={ai_icon} alt="AI Icon" className="h-6 w-6" />
              <span className="text-sm font-medium cursor-default">
                Illustrator
              </span>
            </div>
            <div className="flex items-center space-x-2 p-2 border rounded-lg hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.7)] transition-shadow duration-300">
              <img src={ps_icon} alt="PS Icon" className="h-6 w-6" />
              <span className="text-sm font-medium cursor-default">
                Photoshop
              </span>
            </div>
            <div className="flex items-center space-x-2 p-2 border rounded-lg hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.7)] transition-shadow duration-300">
              <img src={lr_icon} alt="Lr Icon" className="h-6 w-6" />
              <span className="text-sm font-medium cursor-default">
                Lightroom
              </span>
            </div>
            <div className="flex items-center space-x-2 p-2 border rounded-lg hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.7)] transition-shadow duration-300">
              <img
                src={codeigniter_icon}
                alt="Codeigniter Icon"
                className="h-6 w-6"
              />
              <span className="text-sm font-medium cursor-default">
                CodeIgniter
              </span>
            </div>
            <div className="flex items-center space-x-2 p-2 border rounded-lg hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.7)] transition-shadow duration-300">
              <img src={dart_icon} alt="Dart Icon" className="h-6 w-6" />
              <span className="text-sm font-medium cursor-default">Dart</span>
            </div>
            <div className="flex items-center space-x-2 p-2 border rounded-lg hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.7)] transition-shadow duration-300">
              <img src={flutter_icon} alt="Fluuter Icon" className="h-6 w-6" />
              <span className="text-sm font-medium cursor-default">
                Flutter
              </span>
            </div>
            <div className="flex items-center space-x-2 p-2 border rounded-lg hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.7)] transition-shadow duration-300">
              <img src={js_icon} alt="JS Icon" className="h-6 w-6" />
              <span className="text-sm font-medium cursor-default">
                Javascript
              </span>
            </div>
            <div className="flex items-center space-x-2 p-2 border rounded-lg hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.7)] transition-shadow duration-300">
              <img src={react_icon} alt="React Icon" className="h-6 w-6" />
              <span className="text-sm font-medium cursor-default">
                React JS
              </span>
            </div>
          </div>
        </section>
        {/* section skill end */}

        {/* section services start */}
        <section id="services" className="services pt-32">
          <h1 className="text-center lg:text-4xl text-2xl font-semibold mb-2">
            Layanan
          </h1>
          <p className="text-center ">
            Berikut merupakan beberapa layanan yang dapat membantumu
          </p>
          <div className="services-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box bg-blue-700 rounded-lg shadow p-6 hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.7)] transition-shadow duration-300 text-white">
              <div className="ri-palette-line text-5xl text-center"></div>
              <h3 className="text-xl font-bold mt-6 mb-2 text-center">
                Graphic Design
              </h3>
              <p className="text-sm text-justify">
                Layanan ini mencakup pembuatan desain visual seperti logo,
                poster, dan materi pemasaran yang menarik secara estetika dan
                sesuai dengan kebutuhan klien untuk meningkatkan daya tarik
                brand.
              </p>
            </div>
            <div className="box bg-blue-700 rounded-lg shadow p-6 hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.7)] transition-shadow duration-300 text-white">
              <div className="ri-crop-2-line text-5xl text-white text-center"></div>
              <h3 className="text-xl font-bold mt-6 mb-2 text-center">
                UI/UX Design
              </h3>
              <p className="text-sm text-justify">
                Fokus pada pengalaman pengguna (UX) dan tampilan antarmuka (UI)
                yang intuitif dan menarik. Layanan ini memastikan aplikasi atau
                situs web mudah digunakan, dengan desain yang efisien dan ramah
                pengguna.
              </p>
            </div>
            <div className="box bg-blue-700 rounded-lg shadow p-6 hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.7)] transition-shadow duration-300 text-white">
              <div className="ri-code-s-slash-line text-5xl text-white text-center"></div>
              <h3 className="text-xl font-bold mt-6 mb-2 text-center">
                Web Developer
              </h3>
              <p className=" text-sm text-justify">
                Pengembangan website fungsional dan responsif, termasuk coding,
                integrasi fitur, dan optimasi agar website dapat berjalan dengan
                baik di berbagai perangkat dan browser.
              </p>
            </div>
          </div>
        </section>
        {/* section services end */}

        {/* section project start */}
        <section id="projects" className="proyek pt-32">
          <h1 className="text-center lg:text-4xl text-2xl font-semibold mb-2">
            Project
          </h1>
          <p className="text-center ">
            berikut beberapa project dan pengalaman saya
          </p>
          <div className="proyek-box pt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box p-2 bg-white shadow">
              <img
                src={proyek1}
                alt="proyek image"
                className="w-full h-[250px]"
              />
              <h3 className="text-xl font-bold mt-6 mb-2">Bali Job Finder</h3>
              <p className=" text-sm text-justify">
                Bali Job Finder adalah website yang memudahkan pencarian
                lowongan pekerjaan dan menghubungkan pelamar dengan perusahaan,
                membantu mengatasi masalah pengangguran dan kesulitan menemukan
                pekerjaan yang terpercaya. Dalam proyek ini, saya bertanggung
                jawab merancang UI/UX serta mengembangkan front-end dan back-end
                dashboard perusahaan.
              </p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img
                src={proyek2}
                alt="proyek 2 image"
                className="w-full h-[250px]"
              />
              <h3 className="text-xl font-bold mt-6 mb-2">
                TOEIC For Hospitality
              </h3>
              <p className=" text-sm text-justify">
                TOEIC For Hospitality adalah website yang simulasi tes TOEIC di
                Politeknik Negeri Bali yang dapat digunakan oleh mahasiswa untuk
                berlatih tes TOEIC untuk persiapan sebelum mengikuti tes
                sebenarnya. Dalam proyek ini, saya bertanggung jawab merancang
                UI/UX sistem, serta mengembangkan front-end dan back-end untuk
                sistem penilaian, dan homepage.
              </p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img
                src={proyek3}
                alt="proyek 3 image"
                className="w-full h-[250px]"
              />
              <h3 className="text-xl font-bold mt-6 mb-2">Finsage</h3>
              <p className=" text-sm text-justify">
                Finsage adalah sebuah aplikasi yang dibuat untuk untuk
                memanajemen keuangan berbasis dekstop, program ini dibuat dengan
                bahasa pemrograman java. Dalam proyek ini, saya bertanggung
                jawab merancang UI/UX sistem, serta mengembangkan front-end GUI
                dan back-end untuk sistem.
              </p>
            </div>
          </div>
        </section>
        {/* section project end */}

        {/* section contact start */}
        <section id="contact" className="pt-36 pb-32">
          <div className="container">
            <div className="w-full px-4">
              <h1 className="text-center lg:text-4xl text-2xl font-semibold mb-5">
                Contact
              </h1>
            </div>

            <form action="">
              <div className="w-full lg:w-2/3 lg:mx-auto">
                <div className="w-full px-4 mb-8">
                  <label htmlFor="name" className="text-base font-bold">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-slate-200 text-black p-3 rounded-md focus:outline-none focus:ring-blue-600 focus:ring-1 focus:border-blue-600"
                  />
                </div>
                <div className="w-full px-4 mb-8">
                  <label htmlFor="email" className="text-base font-bold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-slate-200 text-black p-3 rounded-md focus:outline-none focus:ring-blue-600 focus:ring-1 focus:border-blue-600"
                  />
                </div>
                <div className="w-full px-4 mb-8">
                  <label htmlFor="email" className="text-base font-bold">
                    Pesan
                  </label>
                  <textarea
                    type="text"
                    id="pesan"
                    className="w-full bg-slate-200 text-black p-3 rounded-md focus:outline-none focus:ring-blue-600 focus:ring-1 focus:border-blue-600 h-32"
                  ></textarea>
                </div>
                <div className="w-full px-4">
                  <button className="text-base font-semibold text-white bg-blue-600 py-3 px-8 rounded-sm w-full hover:opacity-80 hover:shadow-lg transition duration-500">
                    Kirim
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
        {/* section contact end */}
      </div>
    </div>
  );
};

export default Homepage;
