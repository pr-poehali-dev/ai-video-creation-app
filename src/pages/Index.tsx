import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: 'Полная автоматизация',
      description: 'От идеи до готового видео за считанные минуты. Просто опишите что хотите - AI сделает всё остальное.',
      icon: 'Zap',
      color: 'from-purple-gradient to-amber-gradient'
    },
    {
      title: 'Любые нейросети',
      description: 'Подключайте любые AI-сервисы: онлайн, офлайн, китайские, свои собственные. Полная свобода выбора.',
      icon: 'Brain',
      color: 'from-amber-gradient to-pink-gradient'
    },
    {
      title: 'Мультиязычность',
      description: 'Автоматический перевод, озвучка и субтитры на любом языке. Ваш контент для всего мира.',
      icon: 'Languages',
      color: 'from-pink-gradient to-purple-gradient'
    },
    {
      title: 'Модульная архитектура',
      description: 'Добавляйте новые блоки и функции без обновлений. Система растёт вместе с вашими потребностями.',
      icon: 'Blocks',
      color: 'from-purple-gradient via-amber-gradient to-pink-gradient'
    }
  ];

  const platforms = [
    { name: 'iOS', icon: 'Smartphone', status: 'Скоро' },
    { name: 'Android', icon: 'Smartphone', status: 'Скоро' },
    { name: 'Web App', icon: 'Globe', status: 'Beta' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-gradient to-pink-gradient bg-clip-text text-transparent">
              AI Video Creator
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-white/80 hover:text-white transition-colors">Возможности</a>
              <a href="#download" className="text-white/80 hover:text-white transition-colors">Скачать</a>
              <a href="#support" className="text-white/80 hover:text-white transition-colors">Поддержка</a>
              <a href="#developer" className="text-white/80 hover:text-white transition-colors">О разработчике</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-gradient via-amber-gradient to-pink-gradient bg-clip-text text-transparent">
              AI Video Creator
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-4 max-w-3xl mx-auto">
              Универсальное AI-приложение для создания видео с подключением любых нейросетей и приложений
            </p>
            <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
              Полная автоматизация создания видео от идеи до готового контента
            </p>
          </div>
          
          <div className="animate-slide-in delay-300">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-gradient to-pink-gradient hover:scale-105 transition-transform duration-200 text-white border-0 px-8 py-6 text-lg"
            >
              <Icon name="Play" className="mr-2" />
              Попробовать Beta
            </Button>
          </div>

          {/* Floating Animation Element */}
          <div className="mt-20 animate-float">
            <div className="relative mx-auto w-80 h-48 bg-gradient-to-r from-purple-gradient/20 to-pink-gradient/20 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="absolute inset-4 bg-gradient-to-r from-purple-gradient/10 to-amber-gradient/10 rounded-xl flex items-center justify-center">
                <Icon name="Video" size={48} className="text-white/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Возможности
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Революционный подход к созданию видеоконтента с использованием искусственного интеллекта
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`bg-gradient-to-br ${feature.color} p-1 hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in border-0`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setActiveFeature(index)}
              >
                <CardContent className="bg-slate-900/80 backdrop-blur-sm rounded-lg p-8 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-white/10 to-white/5 p-3 rounded-xl mr-4">
                      <Icon name={feature.icon} size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-white/70 text-lg leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Скачать
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Приложение скоро будет доступно на всех популярных платформах
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <Card 
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:scale-105 transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <Icon name={platform.icon} size={48} className="text-white mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">{platform.name}</h3>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    platform.status === 'Beta' 
                      ? 'bg-gradient-to-r from-purple-gradient to-amber-gradient text-white' 
                      : 'bg-white/10 text-white/60'
                  }`}>
                    {platform.status}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              <Icon name="Bell" className="mr-2" />
              Уведомить о релизе
            </Button>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Поддержка
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Мы всегда готовы помочь вам получить максимум от нашего приложения
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Icon name="MessageCircle" size={48} className="text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Чат поддержки</h3>
                <p className="text-white/60 mb-6">Онлайн-помощь 24/7</p>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Открыть чат
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Icon name="Book" size={48} className="text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Документация</h3>
                <p className="text-white/60 mb-6">Подробные инструкции</p>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Читать гайды
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Icon name="Users" size={48} className="text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Сообщество</h3>
                <p className="text-white/60 mb-6">Общение с пользователями</p>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Присоединиться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section id="developer" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              О разработчике
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-purple-gradient/20 to-pink-gradient/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-gradient to-amber-gradient rounded-full flex items-center justify-center text-2xl font-bold text-white">
                    ST
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Sabirov Turap</h3>
                <p className="text-white/60 mb-2">9-класс</p>
                <p className="text-white/80 text-lg leading-relaxed">
                  Молодой разработчик, создающий инновационные решения в области ИИ и видеопроизводства. 
                  Стремится сделать технологии создания контента доступными для каждого.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-gradient to-pink-gradient bg-clip-text text-transparent mb-4">
            AI Video Creator
          </div>
          <p className="text-white/40 mb-6">
            © 2024 Sabirov Turap. Все права защищены.
          </p>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="sm" className="text-white/60 hover:text-white">
              <Icon name="Github" className="mr-2" />
              GitHub
            </Button>
            <Button variant="ghost" size="sm" className="text-white/60 hover:text-white">
              <Icon name="Mail" className="mr-2" />
              Контакт
            </Button>
            <Button variant="ghost" size="sm" className="text-white/60 hover:text-white">
              <Icon name="Twitter" className="mr-2" />
              Twitter
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}