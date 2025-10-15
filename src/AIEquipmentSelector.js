import { useState } from 'react';
import './AIEquipmentSelector.css';

export default function AIEquipmentSelector() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [equipmentList, setEquipmentList] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setError(null);
    setEquipmentList(null);

    try {
      // Здесь будет реальный API запрос
      // Пока используем моковые данные для демонстрации
      await new Promise(resolve => setTimeout(resolve, 2000)); // Имитация задержки API
      
      const mockEquipment = [
        'Концертная акустическая система JBL SRX835P (2 шт.)',
        'Микшерный пульт Soundcraft Si Expression 3',
        'Радиомикрофоны Shure SM58 (4 шт.)',
        'Светодиодные прожекторы Chauvet DJ Intimidator Spot 355 IRC (6 шт.)',
        'Светодиодный прожектор Martin MAC Quantum Profile (2 шт.)',
        'Дым-машина Antari Z-1200 II',
        'Проектор Epson EB-L1755U',
        'Экран проекционный 3x4м',
        'Кабели и коммутация',
        'Техническая поддержка на площадке'
      ];

      setEquipmentList(mockEquipment);
    } catch (err) {
      setError('Произошла ошибка при обработке запроса. Попробуйте еще раз.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    if (!equipmentList) return;
    
    const text = equipmentList.join('\n');
    try {
      await navigator.clipboard.writeText(text);
      alert('Список оборудования скопирован в буфер обмена!');
    } catch (err) {
      console.error('Ошибка копирования:', err);
    }
  };

  const generateTelegramLink = () => {
    if (!equipmentList) return '#';
    
    const message = `Привет! Мне нужен подбор оборудования для мероприятия:\n\n${equipmentList.join('\n')}\n\nМожете помочь с расчетом стоимости?`;
    const encodedMessage = encodeURIComponent(message);
    return `https://t.me/vasiliibolotov?text=${encodedMessage}`;
  };

  return (
    <div className="ai-equipment-selector">
      <div className="container">
        <div className="back-link-container">
          <a href="#/" className="back-link">← Назад на главную</a>
        </div>

        <div className="ai-header">
          <h1 className="ai-title">ИИ-подбор оборудования</h1>
          <p className="ai-subtitle">
            Опишите ваше мероприятие, и наш ИИ подберет оптимальный набор оборудования
          </p>
        </div>

        <div className="ai-content">
          <form className="ai-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="query" className="form-label">
                Опишите ваше мероприятие:
              </label>
              <textarea
                id="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Например: Концерт рок-группы на 500 человек в закрытом помещении. Нужна сцена, звук, свет, видео..."
                className="form-textarea"
                rows="6"
                disabled={isLoading}
              />
            </div>
            
            <button 
              type="submit" 
              className="ai-submit-btn"
              disabled={isLoading || !query.trim()}
            >
              {isLoading ? (
                <>
                  <div className="spinner"></div>
                  Анализируем запрос...
                </>
              ) : (
                'Подобрать оборудование'
              )}
            </button>
          </form>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          {equipmentList && (
            <div className="equipment-result">
              <h2 className="result-title">Рекомендуемое оборудование:</h2>
              <div className="equipment-list">
                {equipmentList.map((item, index) => (
                  <div key={index} className="equipment-item">
                    <span className="item-number">{index + 1}</span>
                    <span className="item-text">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="result-actions">
                <button 
                  onClick={copyToClipboard}
                  className="action-btn copy-btn"
                >
                  📋 Копировать результат
                </button>
                <a 
                  href={generateTelegramLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn order-btn"
                >
                  💬 Заказать в Telegram
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
