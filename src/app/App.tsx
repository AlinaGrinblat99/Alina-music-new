import React, { useState } from 'react';
import { Play, Instagram, Music, Youtube, X } from 'lucide-react';
import { motion } from 'motion/react';
import portraitImage from '../imports/IMG_9184.jpg';
import footerImage from '../imports/IMG_4942-2.jpg';
import showImage from '../imports/6BBF2F52-3C2D-4E19-B55A-14684AA82CF3.PNG';
import planeImage from '../imports/1A8C3334-3971-46AA-8764-A78605ED4040.jpg';
import motoImage from '../imports/96018E2F-3CFB-4370-AB48-9EF142FAF7CF.PNG';
import heroImage from '../imports/2026-04-22_14.04.42.jpg';
import yandexMusicImage from '../imports/yandex_music_icon_ru_circle_mono.png';
import vkImage from '../imports/Без_имени-1_копия.png';

const SvgYandex = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <defs>
      <mask id="yandex-mask">
        <image href={yandexMusicImage} width="24" height="24" />
      </mask>
    </defs>
    <rect width="24" height="24" fill="currentColor" mask="url(#yandex-mask)" />
  </svg>
);

const SvgYoutube = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const SvgSpotify = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.45 17.34c-.22.36-.69.48-1.05.26-2.88-1.76-6.5-2.16-10.77-1.18-.41.09-.82-.17-.91-.58-.09-.41.17-.82.58-.91 4.67-1.07 8.68-.62 11.89 1.35.36.22.48.69.26 1.06zm1.49-3.32c-.28.46-.88.6-1.34.33-3.3-2.03-8.38-2.63-12.24-1.44-.54.16-1.1-.14-1.26-.68-.16-.54.14-1.1.68-1.26 4.41-1.35 10.02-.68 13.84 1.67.46.27.6.87.32 1.38zm.13-3.48c-3.96-2.35-10.49-2.57-14.26-1.42-.66.2-1.35-.17-1.55-.83-.2-.66.17-1.35.83-1.55 4.35-1.33 11.56-1.07 16.14 1.65.59.35.79 1.13.44 1.72-.35.59-1.13.79-1.72.43z"/>
  </svg>
);

const SvgVk = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <defs>
      <mask id="vk-mask">
        <image href={vkImage} width="24" height="24" />
      </mask>
    </defs>
    <rect width="24" height="24" fill="currentColor" mask="url(#vk-mask)" />
  </svg>
);

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const appleFont = "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

  const dreams = [
    {
      title: "Пролететь за штурвалом над озёрами Севера",
      image: planeImage
    },
    {
      title: "Промчаться на мотоцикле по дорогам Альп",
      image: motoImage
    },
    {
      title: "Подняться на высокие пики",
      image: "https://images.unsplash.com/photo-1768504178096-d5074940b3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHBpbmlzdHMlMjBjbGltYmluZyUyMHNub3d5JTIwbW91bnRhaW4lMjBwZWFrfGVufDF8fHx8MTc3Njc3ODg5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Погрузиться к затонувшим кораблям",
      image: "https://images.unsplash.com/photo-1639707184438-d8f82b0ffdb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3ViYSUyMGRpdmVyJTIwc3Vua2VuJTIwc2hpcHdyZWNrfGVufDF8fHx8MTc3Njc3ODg5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const facts = [
    "Частный пилот",
    "Дайвер",
    "Путешественник",
    "Предприниматель",
    "Исследователь живого опыта"
  ];

  const platforms = [
    { name: "Яндекс Музыка", icon: SvgYandex, url: "https://music.yandex.ru/artist/25452896?utm_source=desktop&utm_medium=copy_link" },
    { name: "YouTube Music", icon: SvgYoutube, url: "https://music.youtube.com/channel/UCdOvTGnj7Z7Gj-97aazP_tg" },
    { name: "Spotify", icon: SvgSpotify, url: "https://open.spotify.com/artist/1RlrhW9NIOE9rnXtaJNNgf" },
    { name: "VK Музыка", icon: SvgVk, url: "https://vk.com/artist/alinagrinblat" }
  ];

  const blogPosts = [
    {
      title: "За кулисами нового альбома",
      date: "22 апреля 2026",
      excerpt: "Как рождается звук, который включает. Процесс создания музыки от первой ноты до полного погружения в состояние.",
      image: "https://images.unsplash.com/photo-1606943537055-6cef4e5d3b68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y3Rpb24lMjBzdHVkaW8lMjBkYXJrfGVufDF8fHx8MTc3Njg1NjgxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Жизнь происходит прямо сейчас",
      date: "15 марта 2026",
      excerpt: "Почему мы так часто откладываем себя на потом, и как концерт помогает вернуться в точку «здесь и сейчас».",
      image: "https://images.unsplash.com/photo-1649772308558-db37c0dfae7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwY29uY2VydCUyMHN0YWdlJTIwZGFya3xlbnwxfHx8fDE3NzY4NTY4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Больше, чем концерт",
      date: "28 февраля 2026",
      excerpt: "Опыт, который меняет восприятие. Отзывы и впечатления зрителей, проживших внутренний сдвиг на наших шоу.",
      image: "https://images.unsplash.com/photo-1725709392546-90721fba6a7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMGRhcmslMjBhZXN0aGV0aGV0aWN8ZW58MXx8fHwxNzc2ODU2ODE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <div className="w-full bg-[#000000] text-[#f5f5f7] overflow-x-hidden selection:bg-[#2997ff] selection:text-white" style={{ fontFamily: appleFont }}>
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <motion.img
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={heroImage}
            alt="Alina Grinblat"
            className="w-full h-full object-cover object-[80%_20%] md:object-[90%_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-bold tracking-tighter mb-6 leading-[1.05]">Музыка, которая<br />включает</h1>
          <p className="text-2xl md:text-3xl font-medium text-[#86868b] tracking-tight mb-12 max-w-3xl mx-auto">Жизнь происходит прямо сейчас</p>
          <button 
            onClick={() => document.getElementById('music-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#f5f5f7] border border-transparent hover:bg-transparent hover:border-[#f5f5f7] hover:text-[#f5f5f7] text-[#000000] hover:scale-[1.02] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] font-semibold text-lg tracking-tight overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2)_0%,transparent_60%)] mix-blend-screen"></div>
            <Play className="relative z-10 w-5 h-5 transition-colors duration-500" fill="currentColor" />
            <span className="relative z-10 transition-colors duration-500">Слушать сейчас</span>
          </button>
        </motion.div>
      </section>

      {/* Dreams Section */}
      <section className="relative w-full bg-[#000000]">
        <div className="grid grid-cols-1 md:grid-cols-4 w-full">
          {dreams.map((dream, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="group relative h-[400px] md:h-[500px] w-full overflow-hidden cursor-pointer"
            >
              <img
                src={dream.image}
                alt={dream.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-[0.16,1,0.3,1]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#000000]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700"></div>
              <div className="absolute top-0 left-0 right-0 p-6 md:p-8 z-10 flex flex-col justify-start h-full">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-tight text-[#f5f5f7]">
                  {dream.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10 py-16 px-6">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] md:w-[100%] h-[150%] md:h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(29,29,31,0.6)_0%,transparent_70%)] -z-10 blur-2xl pointer-events-none"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-10 max-w-4xl mx-auto relative z-10"
          >
            <p className="text-3xl md:text-5xl lg:text-5xl font-bold tracking-tighter leading-tight">Alina Grinblat уже прожила этот опыт <span className="text-[#86868b]">и принесла его в музыку для тебя</span></p>
<a href="https://music.yandex.ru/artist/25452896?utm_source=web&utm_medium=copy_link" target="_blank"
className="inline-block px-8 py-4 rounded-full bg-[#1d1d1f]
border border-transparent hover: bg- [#f5f5f7]
hover: text-black text-[#f5f5f7] transition all duration-300
font-semibold text-lg tracking-tight">Включай состояние</a>          </motion.div>
        </div>
      </section>

      {/* Who Section */}
      <section className="relative py-32 px-6 overflow-hidden bg-[#000000]">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-[700px] flex items-center justify-center"
            >
              <img
                src={portraitImage}
                alt="Alina Grinblat"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-10"
            >
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">Alina<br />Grinblat</h2>

              <div className="flex flex-wrap gap-3 group">
                {facts.map((fact, index) => (
                  <div
                    key={index}
                    className="text-[#f5f5f7] font-medium tracking-tight text-xl flex items-center transition-all duration-300 group-hover:opacity-30 hover:!opacity-100 hover:scale-110 cursor-default"
                  >
                    {fact}
                  </div>
                ))}
              </div>

              <p className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight text-[#86868b]">Она поёт не о фантазиях<br /><span className="text-[#f5f5f7]">Она поёт о том, что прожила</span></p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="relative py-32 flex items-center justify-center bg-[#000000]">
        <div 
          className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
          }}
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25)_0%,transparent_60%)] blur-[120px] rounded-full mix-blend-screen"
          />
          <motion.div 
            animate={{ 
              rotate: [0, 180, 360],
              scale: [1.1, 0.9, 1.1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute w-[800px] h-[500px] md:w-[1200px] md:h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.2)_0%,transparent_70%)] blur-[120px] rounded-full mix-blend-screen"
          />
          <motion.div 
            animate={{ 
              rotate: [360, 180, 0],
              scale: [0.9, 1.3, 0.9],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[700px] h-[600px] md:w-[1100px] md:h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.15)_0%,transparent_60%)] blur-[120px] rounded-full mix-blend-screen"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <p className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-[#a1a1a6]">Эта музыка не объясняет жизнь<br /><span className="text-[#86868b] drop-shadow-sm">Она включает состояние</span></p>
        </motion.div>
      </section>

      {/* Music Section */}
      <section id="music-section" className="relative py-32 px-6 bg-[#000000]">
        <div className="max-w-5xl mx-auto text-center space-y-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Включи</h2>
            <p className="text-3xl font-bold tracking-tight text-[#86868b]">и забери своё состояние</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex flex-col items-center justify-center p-10 rounded-[32px] bg-[#1d1d1f] hover:bg-white hover:text-black hover:scale-[1.02] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8)_0%,transparent_60%)] mix-blend-overlay"></div>
                  <Icon className="w-10 h-10 mb-5 text-[#f5f5f7] group-hover:text-black transition-colors duration-500 z-10" />
                  <span className="text-base font-semibold tracking-tight text-[#f5f5f7] group-hover:text-black transition-colors duration-500 z-10">
                    {platform.name}
                  </span>
                </a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Event Section */}
      <section className="relative py-48 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            src={showImage}
            alt="Alina Grinblat incredible show"
            className="w-full h-[140%] -top-[20%] relative object-cover object-top"
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1.2 }}
            transition={{ duration: 3, ease: "easeOut" }}
          />
          {/* Extremely smooth Apple-style gradient fades for background imagery */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#000000]/20 to-[#000000]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-[#f5f5f7]">Больше, чем концерт</h2>

            <p className="text-2xl md:text-3xl max-w-3xl mx-auto font-medium tracking-tight text-[#d2d2d7] leading-relaxed">Живая психологическая игра, усиленная музыкой Пространство, в котором человек может прожить внутренний сдвиг, увидеть себя иначе и выйти глубже</p>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="relative px-8 py-4 rounded-full backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white text-[#f5f5f7] hover:text-black hover:scale-[1.02] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] font-semibold text-lg tracking-tight overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8)_0%,transparent_60%)] mix-blend-overlay"></div>
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black">Ближайшее событие</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Press Section */}
      <section className="relative py-32 px-6 bg-[#000000] overflow-hidden">
        {/* Apple-style visible gradient mesh background */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#000000]"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent, black 35%, black 65%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 35%, black 65%, transparent)'
          }}
        >
          {/* Base deep cosmic gradient */}
          <motion.div 
            animate={{
              opacity: [0.3, 0.6, 0.3],
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-br from-[#120a2a] via-[#000000] to-[#0a1828] z-0 bg-[length:200%_200%]"
          />
          
          {/* Animated colorful orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, 120, -50, 0],
              y: [0, 80, -40, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-30%] left-[-10%] w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-[radial-gradient(circle_at_center,rgba(88,86,214,0.24)_0%,transparent_60%)] blur-[100px] rounded-full mix-blend-screen z-10"
          />
          <motion.div 
            animate={{ 
              scale: [1.1, 0.8, 1.1],
              x: [0, -100, 50, 0],
              y: [0, -80, 40, 0],
            }}
            transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-30%] right-[-10%] w-[700px] h-[700px] md:w-[1000px] md:h-[1000px] bg-[radial-gradient(circle_at_center,rgba(175,82,222,0.21)_0%,transparent_60%)] blur-[120px] rounded-full mix-blend-screen z-10"
          />
          <motion.div 
            animate={{ 
              scale: [0.9, 1.2, 0.9],
              x: [0, -80, 60, 0],
              y: [0, 100, -50, 0],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] right-[10%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-[radial-gradient(circle_at_center,rgba(10,132,255,0.18)_0%,transparent_60%)] blur-[100px] rounded-full mix-blend-screen z-10"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, 90, -60, 0],
              y: [0, -90, 50, 0],
            }}
            transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[0%] left-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[radial-gradient(circle_at_center,rgba(255,55,95,0.15)_0%,transparent_60%)] blur-[90px] rounded-full mix-blend-screen z-10"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-bold tracking-tighter"
          >О ней пишут<br />Её читают</motion.h2>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative px-8 py-4 rounded-full bg-transparent border-2 border-[#424245] hover:border-[#f5f5f7] hover:bg-[#f5f5f7] text-[#f5f5f7] hover:text-black hover:scale-[1.02] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] font-semibold text-lg tracking-tight overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8)_0%,transparent_60%)] mix-blend-overlay"></div>
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">Смотреть публикации</span>
          </motion.button>
        </div>
      </section>

      {/* Blog Section */}
      <section className="relative py-16 px-6 bg-[#000000]">
        <div className="max-w-7xl mx-auto relative z-10 space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#f5f5f7]">Блог</h2>
              <p className="text-2xl mt-4 font-bold tracking-tight text-[#86868b]">Истории, мысли, состояния</p>
            </div>
            
            <button className="relative px-6 py-3 rounded-full bg-transparent border-2 border-[#424245] hover:border-white hover:bg-white text-[#f5f5f7] hover:text-black hover:scale-[1.02] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] font-semibold text-base tracking-tight shrink-0 overflow-hidden group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8)_0%,transparent_60%)] mix-blend-overlay"></div>
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black">Читать все</span>
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col cursor-pointer"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#1d1d1f]">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-[0.16,1,0.3,1]"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                    <span className="text-sm font-semibold tracking-wide text-[#86868b] uppercase mb-3 block opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                      {post.date}
                    </span>
                    <h3 className="text-3xl font-bold tracking-tight leading-tight text-[#f5f5f7] mb-3 group-hover:text-white transition-colors duration-500">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="relative py-16 px-6 flex items-center justify-center overflow-hidden bg-[#000000]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center space-y-12"
        >
          <p className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight">Жизнь происходит<br />прямо сейчас</p>

          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#f5f5f7] border border-transparent hover:bg-transparent hover:border-[#f5f5f7] hover:text-[#f5f5f7] text-[#000000] transition-colors duration-300 font-semibold text-lg tracking-tight">
            <Play className="w-5 h-5" fill="currentColor" />
            Включить
          </button>
        </motion.div>
      </section>

      {/* Social Section */}
      <section className="relative py-32 px-6 bg-[#000000]">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-10"
            >
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">Если откликнулось —<br /><span className="text-[#86868b]">оставайся</span></h2>

              <div className="flex gap-4">
                <a href="#" className="relative p-6 rounded-full bg-[#1d1d1f] hover:bg-white text-[#f5f5f7] hover:text-black hover:scale-[1.02] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8)_0%,transparent_60%)] mix-blend-overlay"></div>
                  <Instagram className="relative z-10 w-8 h-8 transition-colors duration-500" />
                </a>
                <a href="#" className="relative p-6 rounded-full bg-[#1d1d1f] hover:bg-white text-[#f5f5f7] hover:text-black hover:scale-[1.02] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8)_0%,transparent_60%)] mix-blend-overlay"></div>
                  <Music className="relative z-10 w-8 h-8 transition-colors duration-500" />
                </a>
                <a href="#" className="relative p-6 rounded-full bg-[#1d1d1f] hover:bg-white text-[#f5f5f7] hover:text-black hover:scale-[1.02] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8)_0%,transparent_60%)] mix-blend-overlay"></div>
                  <Youtube className="relative z-10 w-8 h-8 transition-colors duration-500" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-[600px] flex items-center justify-center"
            >
              <img
                src={footerImage}
                alt="Alina Grinblat"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 bg-[#1d1d1f] w-full max-w-md rounded-[32px] p-10 text-center shadow-2xl border border-white/10"
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-[#86868b] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
              <Music className="w-8 h-8 text-white/80" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Скоро здесь будет анонс нового мероприятия!</h3>
            <p className="text-[#86868b] mb-8 text-base">Следите за обновлениями, чтобы не пропустить старт продаж.</p>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="w-full py-4 rounded-full bg-white text-black font-semibold text-lg hover:scale-[1.02] transition-transform"
            >
              Понятно
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
