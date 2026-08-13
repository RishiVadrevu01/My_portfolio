export default function App() {
  return (
    <div>

      {/* ── TOP BAR ─────────────────────────────────────────────── */}
      <div className="topbar">
        <span>CREATIVE PORTFOLIO</span>
        <span className="topbar-right">
          <span className="pulse-dot"></span>
          AVAILABLE FOR HIRE
        </span>
      </div>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="hero" id="intro">

        {/* Giant display text */}
        <h1 className="display-title">VADREVU RISHI</h1>

        {/* Three-column hero grid */}
        <div className="hero-grid">

          {/* LEFT: About Me text */}
          <div className="hero-left">
            <div>
              <div className="hero-role-label">ABOUT ME</div>
              <div className="hero-role-sub" style={{ color: 'var(--accent)', marginBottom: '14px', fontWeight: 600 }}>
                AI-DRIVEN • BACKEND-FOCUSED • PROBLEM-SOLVING ORIENTED
              </div>
              <div style={{ fontSize: '12px', color: 'var(--cream-dim)', lineHeight: '1.65', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <p>
                  I’m Vadrevu Rishi, a Software Engineer specializing in Artificial Intelligence, Machine Learning, Generative AI, and Backend Development. I enjoy building practical, intelligent systems that solve real-world engineering problems.
                </p>
                <p>
                  My experience includes developing AI-powered applications, ML pipelines, REST APIs, and backend services using Python, FastAPI, LLMs, RAG, embeddings, semantic search, and FAISS vector databases.
                </p>
                <p>
                  I also have hands-on experience in Computer Vision & autonomous systems (ONNX, CARLA, Webots) and built an AI-assisted Terrain Intelligence Platform combining ML, GIS, and spatial analysis.
                </p>
              </div>
            </div>
            <div style={{ marginTop: '16px', fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--muted)', letterSpacing: '0.05em' }}>
              HYDERABAD, TELANGANA · AVAILABLE FOR OPPORTUNITIES
            </div>
          </div>

          {/* CENTER: photo + circle */}
          <div className="hero-center">
            <div className="hero-accent-circle"></div>
            <img
              src={`${import.meta.env.BASE_URL}hero.png`}
              alt="Vadrevu Rishi"
              className="hero-photo"
            />
          </div>

          {/* RIGHT: title, description, stats */}
          <div className="hero-right">
            <div>
              <div className="hero-name">AI &amp; ML<br />ENGINEER</div>
              <div className="hero-title-tag">SOFTWARE &amp; BACKEND DEVELOPER</div>
              <p className="hero-desc">
                Software Engineer specializing in Artificial Intelligence,
                Machine Learning, and Backend Development. I build production-ready
                AI applications using Python, FastAPI, LLMs, RAG, and scalable
                backend architectures.
              </p>
            </div>
            <div className="stats-row">
              <div className="stat-item">
                <div className="stat-num">3+</div>
                <div className="stat-label">PROJECTS<br />BUILT</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">15+</div>
                <div className="stat-label">TECHNOLOGIES<br />MASTERED</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">1+</div>
                <div className="stat-label">YEARS<br />EXPERIENCE</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── WHAT I DO ───────────────────────────────────────────── */}
      <section className="what-i-do" id="skills">
        <div className="section-header">
          <div>
            <div className="section-title">WHAT I DO</div>
            <div className="section-line"></div>
          </div>
        </div>
        <div className="what-grid">
          <div className="what-card">
            <span className="material-symbols-outlined what-icon">smart_toy</span>
            <div className="what-card-title">AI Development</div>
            <div className="what-card-desc">Building LLM-powered applications, RAG systems, and intelligent automation pipelines.</div>
          </div>
          <div className="what-card">
            <span className="material-symbols-outlined what-icon">api</span>
            <div className="what-card-title">Backend Engineering</div>
            <div className="what-card-desc">Designing scalable REST APIs and microservices with Python and FastAPI.</div>
          </div>
          <div className="what-card">
            <span className="material-symbols-outlined what-icon">psychology</span>
            <div className="what-card-title">Generative AI</div>
            <div className="what-card-desc">Prompt engineering, fine-tuning models, and embedding-based semantic search.</div>
          </div>
          <div className="what-card">
            <span className="material-symbols-outlined what-icon">memory</span>
            <div className="what-card-title">Machine Learning</div>
            <div className="what-card-desc">ML pipelines from data preprocessing and feature engineering to model training and inference.</div>
          </div>
          <div className="what-card">
            <span className="material-symbols-outlined what-icon">radar</span>
            <div className="what-card-title">Computer Vision</div>
            <div className="what-card-desc">Real-time object detection, ONNX model integration, and autonomous perception systems.</div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ──────────────────────────────────────────────── */}
      <section className="skills-section">
        <div className="section-header">
          <div>
            <div className="section-title">TECHNICAL SKILLS</div>
            <div className="section-line"></div>
          </div>
        </div>
        <div className="skills-grid">
          <div className="skill-group">
            <div className="skill-group-label">Programming</div>
            <div className="skill-pills">
              {['Python', 'Java', 'C', 'JavaScript'].map(s => (
                <span className="skill-pill" key={s}>{s}</span>
              ))}
            </div>
          </div>
          <div className="skill-group">
            <div className="skill-group-label">AI &amp; GenAI</div>
            <div className="skill-pills">
              {['LLMs', 'Generative AI', 'RAG', 'Prompt Engineering', 'Semantic Search', 'FAISS', 'Hugging Face', 'Sentence Transformers', 'Vector DBs'].map(s => (
                <span className="skill-pill" key={s}>{s}</span>
              ))}
            </div>
          </div>
          <div className="skill-group">
            <div className="skill-group-label">Backend &amp; ML</div>
            <div className="skill-pills">
              {['FastAPI', 'Node.js', 'REST APIs', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'ONNX', 'MongoDB', 'PostgreSQL'].map(s => (
                <span className="skill-pill" key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MY PROCESS + FEATURED WORK ──────────────────────────── */}
      <section className="two-col" id="experience">

        {/* Left: My Process */}
        <div className="process-col">
          <div className="section-header">
            <div>
              <div className="section-title">EXPERIENCE</div>
              <div className="section-line"></div>
            </div>
          </div>

          {/* ── Work Experience items ── */}
          <div className="process-item">
            <div className="process-num">01</div>
            <span className="material-symbols-outlined process-icon">smart_toy</span>
            <div className="process-content">
              <div className="process-title">Software Engineer (AI)</div>
              <div className="process-desc" style={{ color: '#c0392b', fontSize: '11px', marginBottom: '6px', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>
                Intelliod Private Limited · Sept 2025 – Present · Visakhapatnam
              </div>
              <div className="process-desc">
                Delivered scalable AI-powered applications with LLM integration, RAG systems, FastAPI backends, and end-to-end ML pipelines. Collaborated cross-team using Git and Docker.
              </div>
            </div>
          </div>

          <div className="process-item">
            <div className="process-num">02</div>
            <span className="material-symbols-outlined process-icon">directions_car</span>
            <div className="process-content">
              <div className="process-title">Python Developer Intern</div>
              <div className="process-desc" style={{ color: '#c0392b', fontSize: '11px', marginBottom: '6px', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>
                Advi Group of Companies · Feb 2025 – July 2025 · Hyderabad
              </div>
              <div className="process-desc">
                Built ML-powered autonomous driving simulation with ONNX object detection, obstacle avoidance, and an intelligent vehicle dispatch algorithm using real-time coordinate data.
              </div>
            </div>
          </div>

          {/* ── Education Sub-Heading ── */}
          <div style={{
            padding: '14px 28px 10px',
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(192,57,43,0.04)',
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--accent)', fontVariationSettings: "'FILL' 0" }}>school</span>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '20px',
              color: 'var(--cream)',
              letterSpacing: '0.08em',
            }}>EDUCATION</span>
            <span style={{ flex: 1, height: '1px', background: 'var(--border)' }}></span>
          </div>

          <div className="process-item">
            <div className="process-num">01</div>
            <span className="material-symbols-outlined process-icon">account_balance</span>
            <div className="process-content">
              <div className="process-title">B.Tech — CS &amp; Business Systems</div>
              <div className="process-desc" style={{ color: '#c0392b', fontSize: '11px', marginBottom: '6px', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>
                VBIT · 2021 – 2025
              </div>
              <div className="process-desc">
                Vignana Bharathi Institute of Technology, Hyderabad. Specialized in Computer Science and Business Systems.
              </div>
            </div>
          </div>

          {/* ── Certifications Sub-Heading ── */}
          <div style={{
            padding: '14px 28px 10px',
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(192,57,43,0.04)',
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--accent)', fontVariationSettings: "'FILL' 0" }}>verified</span>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '20px',
              color: 'var(--cream)',
              letterSpacing: '0.08em',
            }}>CERTIFICATIONS</span>
            <span style={{ flex: 1, height: '1px', background: 'var(--border)' }}></span>
          </div>

          <div className="process-item">
            <div className="process-num">01</div>
            <span className="material-symbols-outlined process-icon">workspace_premium</span>
            <div className="process-content">
              <div className="process-title">ServiceNow Certified Application Developer</div>
              <div className="process-desc" style={{ color: '#c0392b', fontSize: '11px', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>ServiceNow</div>
            </div>
          </div>

          <div className="process-item">
            <div className="process-num">02</div>
            <span className="material-symbols-outlined process-icon">workspace_premium</span>
            <div className="process-content">
              <div className="process-title">Infosys Foundation Python Web Developer</div>
              <div className="process-desc" style={{ color: '#c0392b', fontSize: '11px', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>Infosys Foundation</div>
            </div>
          </div>

          <div className="process-item" style={{ borderBottom: 'none' }}>
            <div className="process-num">03</div>
            <span className="material-symbols-outlined process-icon">workspace_premium</span>
            <div className="process-content">
              <div className="process-title">Wipro TalentNext Java Full Stack</div>
              <div className="process-desc" style={{ color: '#c0392b', fontSize: '11px', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>Wipro Digital</div>
            </div>
          </div>

        </div>

        {/* Right: Featured Projects */}
        <div className="projects-col">
          <div className="section-header">
            <div>
              <div className="section-title">FEATURED WORK</div>
              <div className="section-line"></div>
            </div>
            <a className="section-link" href="#projects">View all →</a>
          </div>
          <div className="projects-grid" id="projects">

            <div className="project-card">
              <div className="project-img-wrap">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ5MzvLvWaQHRZzfz9xvUleKCP65Vdi10gyNt7HdoRz8TxMM3sU2O3Tacq7jdEC_0b7TmXXC84heSmhbCwvogQ3f_tXBzgVbd6bcA30rj9qAaoANrMCoO3o7h4EV1tHT3DO8fLJ_bErtl903Dj0IVQsywYlyP54FIFdKJL6f5S__HQZB0gHFAOSoJa1b3VinQZRUxP6qmhAet2-fjhnA2iX8wbFjDVB0gH5alfh33TF0F6bFJ2uTx_uqkOfmDzJdsyGmC4tjqrzag"
                  alt="Terrain Intelligence"
                />
                <div className="project-overlay"></div>
              </div>
              <div className="project-info">
                <div className="project-name">TERRAIN INTELLIGENCE</div>
                <div className="project-type">GIS / AI PLATFORM</div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-img-wrap">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaYeY4wLuDbAW3Qyp78ScOyKkCo6mIP-_vKgUp9Ca4ovoALNK2yP2ZY6oYCcsWlqtHvK0Gw8O6bUqkBeFssNLzCz8LEglaK7Dmq8He_cg2CiHxvnbDmYGWXaEHFGB7wZ5Erl8ptMTs5tFx5zK-8sPHEYlSHox0k6Lj1zrvcjJEmr88QrLz_ModRf9aupTrVb6fIeaDEq1f1ojpaLH1mq2QvMqRbHtdRlZvqVMatommq4v-C3DUTAOSnu_f-isE_FkxRvCwQjDhURA"
                  alt="RAG Chatbot"
                />
                <div className="project-overlay"></div>
              </div>
              <div className="project-info">
                <div className="project-name">RAG CHATBOT</div>
                <div className="project-type">GENERATIVE AI / LLM</div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-img-wrap">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqdd3LD2ztXlNg3MLBGSGXtFtLbSQ23GxtRbTymt6uD6blkurubwrnOrpOBphfiERvz0fQFDR0c_SjAIYYnnu5Ks4-1aBzqUgQLqSupluwtcB8JeJ0H3_g6jFn1cGrV8-3W54pPrAr15ZowGWPaObSm5jasWUaSi4GvrcWHT95JpB9v-2auKRglIi5SVIr3Ex0xCdn3inV_xmWqNUEgW1yeZUrv3JlH48c7JuK6R5P64G7TQHopp82fqndLBSi8QObVWJgEdhfShU"
                  alt="Self-Driving Simulation"
                />
                <div className="project-overlay"></div>
              </div>
              <div className="project-info">
                <div className="project-name">SELF-DRIVING SIM</div>
                <div className="project-type">AUTONOMOUS / ONNX</div>
              </div>
            </div>

            <div className="project-card" style={{ background: '#111' }}>
              <div className="project-img-wrap">
                <div className="project-placeholder">COMING<br />SOON</div>
              </div>
              <div className="project-info">
                <div className="project-name">NEXT PROJECT</div>
                <div className="project-type">IN DEVELOPMENT</div>
              </div>
            </div>

          </div>

          {/* ── TOOLS & TECHNOLOGIES inside right column ── */}
          <div style={{ padding: '24px 28px', borderTop: '1px solid var(--border)' }}>
            <div className="section-header" style={{ marginBottom: '16px', padding: 0 }}>
              <div>
                <div className="section-title">TOOLS &amp; TECHNOLOGIES</div>
                <div className="section-line"></div>
              </div>
            </div>
            <div className="tools-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
              {[
                { icon: 'code', label: 'Python' },
                { icon: 'api', label: 'FastAPI' },
                { icon: 'psychology', label: 'LangChain' },
                { icon: 'database', label: 'FAISS' },
                { icon: 'memory', label: 'PyTorch' },
                { icon: 'view_in_ar', label: 'ONNX' },
                { icon: 'terminal', label: 'Docker' },
                { icon: 'storage', label: 'PostgreSQL' },
              ].map(({ icon, label }) => (
                <div className="tool-item" key={label}>
                  <div className="tool-icon-wrap">
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{icon}</span>
                  </div>
                  <span className="tool-label">{label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── CONTACT FOOTER ─────────────────────────────────────── */}
      <section className="contact-bar" id="contact">

        <div className="contact-section">
          <div className="contact-title">LET'S COLLABORATE</div>
          <div className="contact-subtitle">Have a project in mind or just want to say hi? I'd love to hear from you.</div>
          <div className="contact-links">
            <a href="mailto:rishivadrevu01@gmail.com" className="contact-link">
              <span className="material-symbols-outlined">mail</span>
              rishivadrevu01@gmail.com
            </a>
            <div className="contact-link">
              <span className="material-symbols-outlined">location_on</span>
              Hyderabad, Telangana
            </div>
          </div>
          <div className="social-links">
            <a className="social-btn" href="https://www.linkedin.com/in/rishi-vadrevu-b7974b341/" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn
            </a>
            <a className="social-btn" href="https://github.com/RishiVadrevu01" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </div>


        <div className="contact-section closing-quote">
          <div className="closing-text">
            BUILDING<br />INTELLIGENT<br />SYSTEMS.
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Vadrevu Rishi · 2026
          </div>
        </div>

      </section>

    </div>
  );
}
