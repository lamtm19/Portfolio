import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Download, 
  MapPin, 
  Code2, 
  Database, 
  Layout, 
  Cpu, 
  Wrench,
  Globe,
  Scissors,
  Video,
  Trophy,
  ChevronRight,
  Copy,
  Check
} from 'lucide-react';
import { projects } from './data/projects';
import { skillCategories } from './data/skills';
import { extras } from './data/extras';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState(i18n.language);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('lamtham.dev@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleLang = () => {
    const newLang = activeLang === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
    setActiveLang(newLang);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const getIcon = (category: string) => {
    switch (category) {
      case 'Front-end': return <Layout className="w-6 h-6 text-blue-500" />;
      case 'Back-end': return <Code2 className="w-6 h-6 text-indigo-500" />;
      case 'Bases de données': return <Database className="w-6 h-6 text-emerald-500" />;
      case 'DevOps / Infrastructure': return <Cpu className="w-6 h-6 text-purple-500" />;
      case 'Outils & versioning': return <Wrench className="w-6 h-6 text-slate-500" />;
      default: return <Code2 className="w-6 h-6 text-blue-500" />;
    }
  };

  const getSkillIcon = (skill: string) => {
    const s = skill.toLowerCase().replace('.js', '').replace(/\s+/g, '');
    const iconMap: { [key: string]: string } = {
      'html': 'html5',
      'css': 'css3',
      'javascript': 'javascript',
      'react': 'react',
      'vue': 'vuejs',
      'alpine': 'alpinejs',
      'three': 'threejs',
      'node': 'nodejs',
      'php': 'php',
      'python': 'python',
      'java': 'java',
      'kotlin': 'kotlin',
      'c': 'c',
      'sql': 'postgresql',
      'postgresql': 'postgresql',
      'mongodb': 'mongodb',
      'nosql': 'azuresqldatabase',
      'docker': 'docker',
      'linux': 'linux',
      'vmware': 'embeddedc',
      'ci/cd': 'githubactions',
      'cloud': 'googlecloud',
      'git': 'git',
      'github': 'github',
      'googleappsscript': 'google',
      'architecturemvc': 'appwrite',
      'apirest': 'fastapi'
    };
    
    const iconName = iconMap[s] || s;
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${iconName}/${iconName}-original.svg`;
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight">LTV</span>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <a href="#projects" className="hover:text-blue-600 transition-colors">{t('nav.projects')}</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">{t('nav.skills')}</a>
            <a href="#beyond" className="hover:text-blue-600 transition-colors">{t('nav.about')}</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">{t('nav.contact')}</a>
          </div>
          <button 
            onClick={toggleLang}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-slate-200 text-sm font-medium hover:bg-slate-50 transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span>{activeLang.toUpperCase()}</span>
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="section-padding pt-32 md:pt-48 flex flex-col items-center text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src="resources/profile/profile.jpg" 
                alt="Lam Tham Vo" 
                className="w-full h-full object-cover"
                onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/600?text=LTV")}
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-3 rounded-xl shadow-lg">
              <Code2 className="w-6 h-6" />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
          >
            Lam Tham Vo
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl font-semibold gradient-text mb-4"
          >
            {t('hero.title')}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center text-slate-500 mb-10"
          >
            <MapPin className="w-4 h-4 mr-2" />
            <span>{t('hero.subtitle')}</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex items-center space-x-4 mb-10"
          >
            <a href="https://github.com/lamtm19" target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-all shadow-sm">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/lam-tham/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-all shadow-sm">
              <Linkedin className="w-5 h-5" />
            </a>
            <button onClick={copyEmail} className="p-3 bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-all shadow-sm relative group">
              {copied ? <Check className="w-5 h-5 text-green-500" /> : <Mail className="w-5 h-5" />}
              {copied && (
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded-md">
                  {t('contact.copied')}
                </span>
              )}
            </button>
          </motion.div>
          
          <motion.a 
            href="#projects"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-slate-900 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 flex items-center"
          >
            {t('hero.cta')}
            <ChevronRight className="w-4 h-4 ml-2" />
          </motion.a>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-padding bg-slate-50/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('skills.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((cat, idx) => (
                <motion.div 
                  key={cat.title}
                  {...fadeInUp}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-6"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 bg-slate-50 rounded-lg">
                      {getIcon(cat.title)}
                    </div>
                    <h3 className="font-semibold text-lg">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map(skill => (
                      <span key={skill} className="flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-semibold shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
                        <img 
                          src={getSkillIcon(skill)} 
                          alt={skill} 
                          className="w-5 h-5" 
                          onError={(e) => (e.currentTarget.style.display = 'none')}
                        />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-padding">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">{t('projects.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <motion.div 
                  key={project.title}
                  {...fadeInUp}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[2.2/1] overflow-hidden bg-slate-100">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/800x450?text=" + project.title)}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-blue-600 px-2 py-0.5 bg-blue-50 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex space-x-4">
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mr-1.5" />
                          {t('projects.visit')}
                        </a>
                      )}
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                      >
                        <Github className="w-4 h-4 mr-1.5" />
                        {t('projects.github')}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Beyond Code Section */}
        <section id="beyond" className="section-padding bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">{t('extras.title')}</h2>
            <p className="text-slate-400 mb-12 max-w-2xl">
              Mon parcours ne s'arrête pas au développement. Voici ce qui forge ma discipline, ma créativité et mon esprit d'équipe.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {extras.map((extra) => (
                <motion.div 
                  key={extra.title}
                  {...fadeInUp}
                  className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group"
                >
                  <div className="aspect-video w-full overflow-hidden bg-slate-800">
                    {extra.image.endsWith('.mp4') ? (
                      <video 
                        src={extra.image} 
                        className="w-full h-full object-cover"
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                      />
                    ) : (
                      <img 
                        src={extra.image} 
                        alt={extra.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => (e.currentTarget.src = `https://via.placeholder.com/600x400?text=${extra.title}`)}
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-white/10 rounded-lg">
                        {extra.title.includes('Barber') && <Scissors className="w-5 h-5" />}
                        {extra.title.includes('Vidéo') && <Video className="w-5 h-5" />}
                        {extra.title.includes('Football') && <Trophy className="w-5 h-5" />}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">{extra.category}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{extra.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {extra.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">{t('contact.title')}</h2>
            
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Bouton Mailto Direct */}
                <a 
                  href="mailto:lamtham.dev@gmail.com"
                  className="flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:scale-[1.02] active:scale-95"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  {t('contact.email')}
                </a>

                {/* Bouton Copier (Secours) */}
                <button 
                  onClick={copyEmail}
                  className="flex items-center justify-center bg-white border-2 border-slate-100 text-slate-900 px-8 py-4 rounded-2xl font-bold hover:border-blue-200 transition-all hover:scale-[1.02] active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5 mr-3 text-green-500" />
                      <span className="text-green-600">{t('contact.copied')}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5 mr-3 text-slate-400" />
                      {t('contact.copy')}
                    </>
                  )}
                </button>
              </div>

              {/* Bouton CV */}
              <a 
                href="resources/cv/lam-tham-vo-cv.pdf" 
                download
                className="w-full flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
              >
                <Download className="w-5 h-5 mr-3" />
                {t('contact.cv')}
              </a>

              {/* Réseaux Sociaux */}
              <div className="flex justify-center space-x-6 pt-8">
                <a href="https://github.com/lamtm19" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border border-slate-100 rounded-2xl text-slate-400 hover:text-slate-900 hover:border-slate-200 transition-all shadow-sm">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/lam-tham/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border border-slate-100 rounded-2xl text-slate-400 hover:text-slate-900 hover:border-slate-200 transition-all shadow-sm">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-100 text-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} Lam Tham Vo </p>
      </footer>
    </div>
  );
};

export default App;
