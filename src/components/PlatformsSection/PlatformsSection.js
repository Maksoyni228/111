import React from 'react';
import './PlatformsSection.css';  // Подключаем стили
import desc from '../../img/pic_desctop.png';
import tab from '../../img/pic_tab.png';
import mob from '../../img/pic_mob.png';

function PlatformsSection() {
    return (
        <div className="platforms-section">
            <section id="PlatformsSection">
                <h2>Сетка</h2>
                <h6>Задание предполагает адаптивную вёрстку. Используется 3 состояния в зависимости от устройства. Сетка
                    «резиновая» — переменной ширины.</h6>

                <div className="section-category">
                    <h3>Десктоп (1200+)</h3>
                    <div className="grid">
                        <div className="cell">
                            <h4>Контент</h4>
                            <h5>1072–1312</h5>
                        </div>
                        <div className="cell">
                            <h4>Колонок</h4>
                            <h5>12</h5>
                        </div>
                        <div className="cell">
                            <h4>Ширина колонки</h4>
                            <h5>60-80</h5>
                        </div>
                        <div className="cell">
                            <h4>Межколонник</h4>
                            <h5>32</h5>
                        </div>
                    </div>
                    <img src={desc} alt="pic_desctop" />
                </div>

                <div className="section-category">
                    <h3>Планшет (736+)</h3>
                    <div className="grid">
                        <div className="cell">
                            <h4>Контент</h4>
                            <h5>672–928</h5>
                        </div>
                        <div className="cell">
                            <h4>Колонок</h4>
                            <h5>8</h5>
                        </div>
                        <div className="cell">
                            <h4>Ширина колонки</h4>
                            <h5>56-88</h5>
                        </div>
                        <div className="cell">
                            <h4>Межколонник</h4>
                            <h5>32</h5>
                        </div>
                    </div>
                    <img src={tab} alt="pic_tab"/>
                </div>

                <div className="section-category">
                    <h3>Телефон (320+)</h3>
                    <div className="grid">
                        <div className="cell">
                            <h4>Контент</h4>
                            <h5>296–424</h5>
                        </div>
                        <div className="cell">
                            <h4>Колонок</h4>
                            <h5>4</h5>
                        </div>
                        <div className="cell">
                            <h4>Ширина колонки</h4>
                            <h5>56-88</h5>
                        </div>
                        <div className="cell">
                            <h4>Межколонник</h4>
                            <h5>24</h5>
                        </div>
                    </div>
                    <img src={mob} alt="pic_mob"/>
                </div>
            </section>
        </div>
    );
}

export default PlatformsSection;
