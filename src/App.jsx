import { Target, Trophy, Users, Calendar, TrendingUp, Shield, Star, Zap, ArrowRight, Menu, X, MessageSquare, Clock, ChevronRight, Award, BarChart } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const newsItems = [
    {
      title: "Новое обновление CS2: Изменения в метагейме",
      date: "15 Января 2024",
      category: "Обновления",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80"
    },
    {
      title: "Топ-5 стратегий для профессиональных игроков",
      date: "12 Января 2024",
      category: "Гайды",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80"
    },
    {
      title: "Анонс Major турнира 2024: $2M призовой фонд",
      date: "10 Января 2024",
      category: "Турниры",
      image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&q=80"
    }
  ]

  const guides = [
    {
      icon: Target,
      title: "Мастерство прицеливания",
      description: "Профессиональные техники улучшения точности и контроля отдачи",
      level: "Pro"
    },
    {
      icon: Shield,
      title: "Тактика обороны",
      description: "Продвинутые стратегии удержания позиций и ротаций",
      level: "Advanced"
    },
    {
      icon: Zap,
      title: "Скоростной раш",
      description: "Координация команды для эффективных атак и захвата точек",
      level: "Pro"
    },
    {
      icon: Users,
      title: "Командная игра",
      description: "Коммуникация и синхронизация действий в профессиональных матчах",
      level: "Expert"
    }
  ]

  const topPlayers = [
    { rank: 1, name: "s1mple", team: "NAVI", rating: 1.42, country: "🇺🇦" },
    { rank: 2, name: "ZywOo", team: "Vitality", rating: 1.38, country: "🇫🇷" },
    { rank: 3, name: "NiKo", team: "G2", rating: 1.35, country: "🇧🇦" },
    { rank: 4, name: "m0NESY", team: "G2", rating: 1.32, country: "🇷🇺" },
    { rank: 5, name: "electroNic", team: "NAVI", rating: 1.28, country: "🇷🇺" }
  ]

  const tournaments = [
    { name: "IEM Katowice 2024", date: "Feb 5-11", prize: "$1,000,000", teams: 24 },
    { name: "BLAST Premier Spring", date: "Mar 15-24", prize: "$425,000", teams: 16 },
    { name: "ESL Pro League S19", date: "Apr 8-28", prize: "$850,000", teams: 32 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-orange-950/20 to-slate-950">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-xl z-50 border-b border-orange-500/20">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="relative">
              <Target className="w-10 h-10 text-orange-500" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            </div>
            <span className="text-3xl font-black text-white tracking-tighter">CS2<span className="text-orange-500">PRO</span></span>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#news" className="text-gray-300 hover:text-orange-500 transition-colors font-semibold">Новости</a>
            <a href="#guides" className="text-gray-300 hover:text-orange-500 transition-colors font-semibold">Гайды</a>
            <a href="#rating" className="text-gray-300 hover:text-orange-500 transition-colors font-semibold">Рейтинг</a>
            <a href="#tournaments" className="text-gray-300 hover:text-orange-500 transition-colors font-semibold">Турниры</a>
            <a href="#forum" className="text-gray-300 hover:text-orange-500 transition-colors font-semibold">Форум</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-2.5 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-orange-600/30">
              Войти
            </button>
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-slate-900 border-t border-orange-500/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              <a href="#news" className="text-gray-300 hover:text-orange-500 transition-colors font-semibold">Новости</a>
              <a href="#guides" className="text-gray-300 hover:text-orange-500 transition-colors font-semibold">Гайды</a>
              <a href="#rating" className="text-gray-300 hover:text-orange-500 transition-colors font-semibold">Рейтинг</a>
              <a href="#tournaments" className="text-gray-300 hover:text-orange-500 transition-colors font-semibold">Турниры</a>
              <a href="#forum" className="text-gray-300 hover:text-orange-500 transition-colors font-semibold">Форум</a>
            </div>
          </motion.div>
        )}
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1920&q=80" 
            alt="CS2" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-orange-950/40 to-slate-950" />
        </div>
        
        <motion.div 
          className="relative z-10 container mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6 px-6 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full backdrop-blur-sm">
            <span className="text-orange-400 font-bold text-sm tracking-wide">🔥 ПРОФЕССИОНАЛЬНЫЙ HUB</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-none">
            COUNTER-STRIKE 2
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 mt-2">
              PRO COMMUNITY
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Новости, профессиональные гайды, рейтинг игроков и календарь турниров. 
            Всё для киберспортсменов в одном месте.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-10 py-5 rounded-xl text-lg font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-2xl shadow-orange-600/40">
              Смотреть турниры
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-xl text-lg font-bold transition-all backdrop-blur-sm border border-white/20">
              Читать гайды
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-md p-6 rounded-xl border border-orange-500/20">
              <div className="text-4xl font-black text-orange-500 mb-2">1000+</div>
              <div className="text-gray-400 font-semibold">Гайдов</div>
            </div>
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-md p-6 rounded-xl border border-orange-500/20">
              <div className="text-4xl font-black text-orange-500 mb-2">50K+</div>
              <div className="text-gray-400 font-semibold">Игроков</div>
            </div>
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-md p-6 rounded-xl border border-orange-500/20">
              <div className="text-4xl font-black text-orange-500 mb-2">200+</div>
              <div className="text-gray-400 font-semibold">Турниров</div>
            </div>
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-md p-6 rounded-xl border border-orange-500/20">
              <div className="text-4xl font-black text-orange-500 mb-2">24/7</div>
              <div className="text-gray-400 font-semibold">Поддержка</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* NEWS SECTION */}
      <section id="news" className="py-24 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
              Последние <span className="text-orange-500">Новости</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Будьте в курсе всех обновлений и важных событий CS2
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-orange-500/20 hover:border-orange-500/50 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-600/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-orange-600 px-4 py-1 rounded-full text-white text-sm font-bold">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <Clock className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                    {item.title}
                  </h3>
                  <button className="text-orange-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Читать далее
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDES SECTION */}
      <section id="guides" className="py-24 px-6 bg-gradient-to-b from-orange-950/10 to-transparent">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
              Профессиональные <span className="text-orange-500">Гайды</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Изучайте тактики и стратегии от лучших игроков мира
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-orange-600/20"
              >
                <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <guide.icon className="w-8 h-8 text-orange-500" />
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-bold rounded-full">
                    {guide.level}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{guide.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {guide.description}
                </p>
                <button className="text-orange-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Изучить
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RATING SECTION */}
      <section id="rating" className="py-24 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
              Рейтинг <span className="text-orange-500">Игроков</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Топ профессиональных игроков CS2 по статистике
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl border border-orange-500/20 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black text-white flex items-center gap-3">
                  <Trophy className="w-8 h-8" />
                  Топ-5 Игроков
                </h3>
                <BarChart className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <div className="divide-y divide-orange-500/10">
              {topPlayers.map((player, index) => (
                <div key={index} className="p-6 hover:bg-orange-500/5 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl ${
                        index === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-yellow-900' :
                        index === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-gray-900' :
                        index === 2 ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-orange-900' :
                        'bg-slate-800 text-gray-400'
                      }`}>
                        {player.rank}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-2xl">{player.country}</span>
                          <span className="text-xl font-bold text-white">{player.name}</span>
                          <span className="text-sm text-gray-500">({player.team})</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-orange-500" />
                          <span className="text-sm text-gray-400">Professional Player</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-black text-orange-500">{player.rating}</div>
                      <div className="text-sm text-gray-500">Rating</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-orange-950/20 border-t border-orange-500/20">
              <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 rounded-xl font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                Полный рейтинг
                <TrendingUp className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TOURNAMENTS SECTION */}
      <section id="tournaments" className="py-24 px-6 bg-gradient-to-b from-orange-950/10 to-transparent">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
              Календарь <span className="text-orange-500">Турниров</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Следите за расписанием крупнейших киберспортивных событий
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {tournaments.map((tournament, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-600/20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-8 h-8 text-orange-500" />
                  <span className="text-orange-400 font-bold">{tournament.date}</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-6">{tournament.name}</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Призовой фонд</span>
                    <span className="text-xl font-bold text-green-500">{tournament.prize}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Команд</span>
                    <span className="text-xl font-bold text-white">{tournament.teams}</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-orange-600/20 hover:bg-orange-600 text-orange-400 hover:text-white py-3 rounded-lg font-bold transition-all border border-orange-500/30">
                  Подробнее
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FORUM SECTION */}
      <section id="forum" className="py-24 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
              Сообщество <span className="text-orange-500">Игроков</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Общайтесь, делитесь опытом и находите напарников для игры
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all"
            >
              <MessageSquare className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-3xl font-black text-white mb-2">15,000+</h3>
              <p className="text-gray-400">Активных обсуждений</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all"
            >
              <Users className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-3xl font-black text-white mb-2">50,000+</h3>
              <p className="text-gray-400">Участников форума</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all"
            >
              <Award className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-3xl font-black text-white mb-2">500+</h3>
              <p className="text-gray-400">Экспертов онлайн</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-12 py-5 rounded-xl text-xl font-bold transition-all transform hover:scale-105 shadow-2xl shadow-orange-600/40 flex items-center justify-center gap-3 mx-auto">
              <MessageSquare className="w-6 h-6" />
              Присоединиться к форуму
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Готовы стать профессионалом?
          </h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Присоединяйтесь к крупнейшему сообществу профессиональных игроков CS2. 
            Получите доступ ко всем функциям бесплатно!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-orange-50 text-orange-600 px-12 py-5 rounded-xl text-xl font-bold transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2">
              Регистрация
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-12 py-5 rounded-xl text-xl font-bold transition-all backdrop-blur-sm border-2 border-white/30">
              Узнать больше
            </button>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-orange-500/20 py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-black text-white">CS2<span className="text-orange-500">PRO</span></span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Профессиональная платформа для игроков Counter-Strike 2
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Разделы</h4>
              <div className="space-y-2">
                <a href="#news" className="block text-gray-400 hover:text-orange-500 transition-colors">Новости</a>
                <a href="#guides" className="block text-gray-400 hover:text-orange-500 transition-colors">Гайды</a>
                <a href="#rating" className="block text-gray-400 hover:text-orange-500 transition-colors">Рейтинг</a>
                <a href="#tournaments" className="block text-gray-400 hover:text-orange-500 transition-colors">Турниры</a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Сообщество</h4>
              <div className="space-y-2">
                <a href="#forum" className="block text-gray-400 hover:text-orange-500 transition-colors">Форум</a>
                <a href="#" className="block text-gray-400 hover:text-orange-500 transition-colors">Discord</a>
                <a href="#" className="block text-gray-400 hover:text-orange-500 transition-colors">Команды</a>
                <a href="#" className="block text-gray-400 hover:text-orange-500 transition-colors">Поддержка</a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Информация</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-orange-500 transition-colors">О проекте</a>
                <a href="#" className="block text-gray-400 hover:text-orange-500 transition-colors">Контакты</a>
                <a href="#" className="block text-gray-400 hover:text-orange-500 transition-colors">Правила</a>
                <a href="#" className="block text-gray-400 hover:text-orange-500 transition-colors">API</a>
              </div>
            </div>
          </div>

          <div className="border-t border-orange-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              © 2024 CS2 Pro Hub. Все права защищены.
            </div>
            <div className="text-gray-500 text-sm">
              Создано с ❤️ для профессиональных игроков
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App