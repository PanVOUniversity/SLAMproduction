import './App.css';
import { useEffect, useState } from 'react';
import Equipment from './Equipment';
import AIEquipmentSelector from './AIEquipmentSelector';

export default function App() {
  const [route, setRoute] = useState(window.location.hash.replace('#', '') || '/');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash.replace('#', '') || '/');
    window.addEventListener('hashchange', onHashChange);

    // Scroll progress tracking
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial call

    // Reveal on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.2 }
    );
    
    // Initialize observer for current route
    const initializeObserver = () => {
      // Remove all revealed classes first
      document.querySelectorAll('.reveal, .reveal-logo').forEach((el) => {
        el.classList.remove('revealed');
      });
      
      // Re-observe elements
      setTimeout(() => {
        document.querySelectorAll('.reveal, .reveal-logo').forEach((el) => observer.observe(el));
      }, 100);
    };
    
    initializeObserver();

    return () => {
      window.removeEventListener('hashchange', onHashChange);
      window.removeEventListener('scroll', updateScrollProgress);
      observer.disconnect();
    };
  }, []);

  // Re-initialize observer when route changes
  useEffect(() => {
    if (route === '/') {
      setTimeout(() => {
        // Remove all revealed classes first
        document.querySelectorAll('.reveal, .reveal-logo').forEach((el) => {
          el.classList.remove('revealed');
        });
        
        // Re-observe elements
        setTimeout(() => {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add('revealed');
              });
            },
            { threshold: 0.2 }
          );
          document.querySelectorAll('.reveal, .reveal-logo').forEach((el) => observer.observe(el));
        }, 100);
      }, 50);
    }
  }, [route]);

  if (route === '/equipment') {
    return (
      <div className="app">
        <header className="header">
          <div className="phone">
            <button className="phone-btn" onClick={() => window.open('tel:+79067078762')}>
              +7 906 707 8762
            </button>
          </div>
        </header>
        <main className="main">
          <Equipment />
        </main>
      </div>
    );
  }

  if (route === '/ai-equipment') {
    return (
      <div className="app">
        <header className="header">
          <div className="phone">
            <button className="phone-btn" onClick={() => window.open('tel:+79067078762')}>
              +7 906 707 8762
            </button>
          </div>
        </header>
        <main className="main">
          <AIEquipmentSelector />
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Progress bar */}
      <div className="progress-bar">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Header with phone number */}
      <header className="header">
        <div className="phone">
          <button className="phone-btn" onClick={() => window.open('tel:+79067078762')}>
            +7 906 707 8762
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="main">
        {/* Hero section minimal: background + centered logo + title */}
        <section className="hero hero--rebuild">
          <div className="hero-inner">
            <img
              className="hero-logo animate-logo"
              src="/утка боком белая.png"
              alt="SLAM Production"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/логотип2.png'; }}
            />
            <h1 className="hero-title animate-title">Sound Light And Media Production</h1>
          </div>
        </section>

        {/* Services section */
        }
        <section className="services reveal">
          <h2 className="services-title">Услуги:</h2>
          <div className="services-grid">
            <div className="service-card reveal">
              <div className="service-bg service-bg-1"></div>
              <div className="service-content">
                <h3>Прокат звукового и светового оборудования</h3>
                <a href="#/equipment" className="service-cta">Список оборудования</a>
              </div>
            </div>
            <div className="service-card reveal">
              <div className="service-bg service-bg-2"></div>
              <div className="service-content">
                <h3>Продакшн праздников и мероприятий</h3>
                <div className="service-actions">
                  <a href="#/ai-equipment" className="service-cta">Примерный подбор оборудования с ИИ</a>
                  <a href="https://t.me/vasiliibolotov" target="_blank" rel="noopener noreferrer" className="service-cta">Написать профессионалу</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credibility metrics */}
        <section className="metrics reveal">
          <div className="metrics-grid">
            <div className="metric reveal">
              <div className="metric-value">15+</div>
              <div className="metric-label">специалистов</div>
            </div>
            <div className="metric reveal">
              <div className="metric-value">50+ мероприятий</div>
              <div className="metric-label">разного масштаба</div>
            </div>
            <div className="metric reveal">
              <div className="metric-value">100% вовремя</div>
              <div className="metric-label">сдаём проекты</div>
            </div>
            <div className="metric reveal">
              <div className="metric-value">24/7</div>
              <div className="metric-label">на связи</div>
            </div>
          </div>
        </section>

        {/* Benefits/value props */}
        <section className="benefits reveal">
          <h2 className="benefits-title">Почему с нами надёжно</h2>
          <div className="benefits-grid">
            <div className="benefit-card reveal">
              <h3>Современное оборудование</h3>
              <p>Работаем на проверенных системах звука, света и видео без сюрпризов.</p>
            </div>
            <div className="benefit-card reveal">
              <h3>Полный продакшн под ключ</h3>
              <p>От идеи и дизайна сцены до монтажа и технической поддержки на площадке.</p>
            </div>
            <div className="benefit-card reveal">
              <h3>Прозрачная смета</h3>
              <p>Чёткие условия без скрытых доплат. Согласуем всё заранее.</p>
            </div>
            <div className="benefit-card reveal">
              <h3>Команда экспертов</h3>
              <p>Инженеры и продюсеры с опытом крупных федеральных проектов.</p>
            </div>
             <div className="benefit-card reveal">
               <h3>Планирование рисков</h3>
               <p>Резервируем время, технику и персонал; готовим план Б на случай форс-мажора.</p>
             </div>
             <div className="benefit-card reveal">
               <h3>Быстрый монтаж и демонтаж площадки</h3>
               <p>Приезжаем вовремя, собираем и разбираем оперативно без простоев и задержек.</p>
             </div>
          </div>
        </section>

        {/* Repeated CTA */}
        <section className="cta-repeat reveal">
          <h2 className="cta-repeat-title">Обсудим ваш проект сейчас?</h2>
          <div className="cta-buttons cta-buttons-center">
            <a
              className="cta-button cta-telegram"
              href="https://t.me/vasiliibolotov"
              target="_blank"
              rel="noopener noreferrer"
            >
              Связаться в Telegram
            </a>
            <a className="cta-button cta-phone" href="tel:+79067078762">
              Позвонить: +7 906 707 8762
            </a>
          </div>
        </section>
      </main>

      {/* Big CTAs are in the hero section */}
    </div>
  );
}


