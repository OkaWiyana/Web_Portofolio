import React from "react";

export default function Maintenance() {
  const contactEmail =
    import.meta.env.VITE_CONTACT_EMAIL || "gungwiyana@gmail.com";

  const maintenanceMessage =
    import.meta.env.VITE_MAINTENANCE_MESSAGE ||
    "Currently undergoing updates to boost performance, add new project showcases, and revamp the user experience.";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6 relative overflow-hidden font-sans selection:bg-primary selection:text-white">
      {/* Background Subtle Grid & Radial Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-xl w-full bg-slate-900/70 border border-slate-800/80 rounded-2xl p-8 sm:p-10 backdrop-blur-xl shadow-2xl">
        {/* Status Badge */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-5 mb-8">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              System Maintenance
            </span>
          </div>
          <span className="text-xs font-mono text-slate-500">v2.0 Update</span>
        </div>

        {/* Clean Vector SVG Illustration (Server Stack & Terminal) */}
        <div className="flex justify-center mb-8">
          <div className="relative w-48 h-36 flex items-center justify-center">
            <svg
              className="w-full h-full text-primary"
              viewBox="0 0 200 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Server Unit 1 */}
              <rect
                x="25"
                y="25"
                width="150"
                height="28"
                rx="6"
                className="fill-slate-800/90 stroke-slate-700"
                strokeWidth="1.5"
              />
              <circle
                cx="45"
                cy="39"
                r="3"
                className="fill-emerald-400 animate-pulse"
              />
              <circle cx="57" cy="39" r="3" className="fill-primary" />
              <line
                x1="80"
                y1="39"
                x2="155"
                y2="39"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="opacity-40"
              />

              {/* Server Unit 2 */}
              <rect
                x="25"
                y="61"
                width="150"
                height="28"
                rx="6"
                className="fill-slate-800/90 stroke-slate-700"
                strokeWidth="1.5"
              />
              <circle
                cx="45"
                cy="75"
                r="3"
                className="fill-amber-400 animate-pulse"
              />
              <circle cx="57" cy="75" r="3" className="fill-slate-600" />
              <line
                x1="80"
                y1="75"
                x2="135"
                y2="75"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="3 3"
                className="opacity-40"
              />

              {/* Server Unit 3 (Active Sync) */}
              <rect
                x="25"
                y="97"
                width="150"
                height="28"
                rx="6"
                className="fill-slate-800/90 stroke-primary/50"
                strokeWidth="1.5"
              />
              <circle
                cx="45"
                cy="111"
                r="3"
                className="fill-primary animate-ping"
              />
              <circle cx="45" cy="111" r="3" className="fill-primary" />
              <line
                x1="80"
                y1="111"
                x2="160"
                y2="111"
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary/70"
              />

              {/* Connecting side bracket */}
              <path
                d="M15 35 H20 V115 H15"
                stroke="#475569"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M185 35 H180 V115 H185"
                stroke="#475569"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Content Typography */}
        <div className="text-center space-y-3 mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Under Maintenance
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
            {maintenanceMessage}
          </p>
        </div>

        {/* Quick Contact & Action Buttons */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Need to discuss or interested in a collaboration?
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 text-xs font-medium transition-colors"
            >
              <i className="ri-mail-line"></i>
              <span>Contact me</span>
            </a>
            <a
              href="https://github.com/OkaWiyana"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-sm"
              title="GitHub"
            >
              <i className="ri-github-line"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
