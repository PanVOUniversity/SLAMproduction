import React from 'react';

export default function Equipment() {
  return (
    <section className="equipment">
      <div className="equipment-header">
        <h1>Список оборудования</h1>
        <a className="back-link" href="#/">← На главную</a>
      </div>

      <p className="equipment-subtitle">Топ‑позиции на складе. Быстрый выезд и оперативная сборка под задачи вашего мероприятия.</p>

      <div className="equipment-grid">
        <div className="equipment-card">
          <div className="equipment-card-header">
            <h2>Свет</h2>
            <span className="badge">Шоу‑свет</span>
          </div>
          <p className="equipment-desc">Яркие, управляемые приборы для сцен любой сложности: от камерных до арен.</p>
          <ul>
            <li>Wash 19x15 (реплика MAC Aura) — 22 шт</li>
            <li>Beam 230 7R — 8 шт</li>
            <li>Robe ColorSpot (300/250) — 6 шт</li>
            <li>Par 18×18 — 10 шт</li>
            <li>LED Bar 18×20 — 10 шт</li>
            <li>BeeEye K10 — 6 шт (4 в аренде)</li>
            <li>K15 — 8 шт (4 в аренде)</li>
            <li>Tour Hazer 1500 — 1 шт</li>
            <li>Tour Hazer 3000 — 1 шт (в ремонте)</li>
            <li>Пульты: GMA2 Mini, Command Wing, Fader Wing</li>
            <li>Ноутбуки — 2 шт</li>
            <li>Монтотем сборный — 4 шт (ещё 4 будут)</li>
          </ul>
        </div>

        <div className="equipment-card">
          <div className="equipment-card-header">
            <h2>Звук</h2>
            <span className="badge">Системы PA</span>
          </div>
          <p className="equipment-desc">Чистый и мощный звук для зала любого размера, от конференций до open‑air.</p>
          <ul>
            <li>L‑Acoustics Kara S118 — 10 шт</li>
            <li>L‑Acoustics Kara 2 — 14 шт</li>
            <li>Усиление: Verse — 10 кВт</li>
            <li>Усиление: EV — 10 кВт</li>
            <li>Усиление: JBL SRX — 10 кВт</li>
            <li>Ударные — 4 шт</li>
            <li>Бас‑комбо — 8 шт</li>
            <li>Гитарные — 12 шт</li>
            <li>Радио‑микрофоны — 20 шт</li>
            <li>Радио‑гарнитуры — 20 шт</li>
            <li>Ин‑эры — 12 каналов</li>
          </ul>
        </div>

        <div className="equipment-card">
          <div className="equipment-card-header">
            <h2>Экраны</h2>
            <span className="badge">LED</span>
          </div>
          <p className="equipment-desc">Высокая яркость и чёткость: для залов, входных групп и рекламных зон.</p>
          <ul>
            <li>LED 500×500, Р2.6 — 120 м²</li>
            <li>LED Р2.5 — 20 м²</li>
            <li>Пилоны 960×1920, Р2.5 — 10 шт</li>
            <li>LED Р3.5 — 40 м²</li>
            <li>Разрозненные экраны 8–10 шт, есть уличные решения</li>
          </ul>
        </div>

        <div className="equipment-card">
          <div className="equipment-card-header">
            <h2>Логистика и доставка</h2>
            <span className="badge">Под ключ</span>
          </div>
          <p className="equipment-desc">Довезём всё необходимое — возможности не ограничены. Работаем оперативно по Москве и области.</p>
          <ul>
            <li>Доставка и вывоз в согласованные окна</li>
            <li>Оперативные дозаказы по ходу проекта</li>
            <li>Полная комплектация и проверка на складе</li>
          </ul>
        </div>
      </div>

      
      <div className="cta-buttons cta-buttons-center">
        <a className="cta-button cta-telegram" href="https://t.me/vasiliibolotov" target="_blank" rel="noopener noreferrer">
          Заказать через Telegram
        </a>
        <a className="cta-button cta-phone" href="tel:+79067078762">
          Позвонить: +7 906 707 8762
        </a>
      </div>
    </section>
  );
}


