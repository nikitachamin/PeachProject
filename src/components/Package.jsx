import "../styles/Package.scss";
function Package() {
    return ( 
        <section className="package">
    <div className="package__container">
        <div className="package__header">
            <h2 className="package__title">Компенсационный пакет</h2>
            <div className="package__bonus-list">
                <div className="package__bonus-item">
                    <img src="img/package/item1.svg" alt="" />
                    <p className="package__bonus-text">ДМС</p>
                </div>
                <div className="package__bonus-item">
                    <img src="img/package/item2.svg" alt="" />
                    <p className="package__bonus-text">Выходной в день рождения</p>
                </div>
                <div className="package__bonus-item">
                    <img src="img/package/item3.svg" alt="" />
                    <p className="package__bonus-text">Корпоративная мобильная связь</p>
                </div>
                <div className="package__bonus-item">
                    <img src="img/package/item4.svg" alt="" />
                    <p className="package__bonus-text">Корпоративная мобильная связь</p>
                </div>
                <div className="package__bonus-item">
                    <img src="img/package/item5.svg" alt="" />
                    <p className="package__bonus-text">LTI</p>
                </div>
            </div>
        </div>
        <div className="package__separator"></div>
        <div className="package__footer">
            <div className="package__footer-heading">
                <h2 className="package__footer-title">Программа дополнительной мотивации</h2>
                <span className="package__footer-title_red">доплата 12% от суммы</span>
            </div>
            <div className="package__bonus-list">
                <div className="package__bonus-item">
                    <img src="img/package/item6.svg" alt="" />
                    <p className="package__bonus-text">Оргтехники</p>
                </div>
                <div className="package__bonus-item">
                    <img src="img/package/item7.svg" alt="" />
                    <p className="package__bonus-text">ДМС</p>
                </div>
                <div className="package__bonus-item">
                    <img src="img/package/item8.svg" alt="" />
                    <p className="package__bonus-text">Ипотеки</p>
                </div>
            </div>
        </div>
    </div>
</section>
     );
}

export default Package;