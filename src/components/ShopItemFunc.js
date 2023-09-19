import PropTypes from 'prop-types'; // Проверка типов

function ShopItemFunc(props) { //props - атрибут
    return (
        <div className="main-content">
        <h2>{props.item.brand}</h2>
        <h1>{props.item.title}</h1>
        <h3>{props.item.description}</h3>
        <div className="description">
        {props.item.descriptionFull}
        </div>
        <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
        <div className="divider"></div>
        <div className="purchase-info">
            <div className="price">{`${props.item.currency} ${props.item.price.toFixed(2)}`}</div>
            <button>Добавить в корзину</button>
        </div>
        </div>
    )
}

ShopItemFunc.propTypes = {
    item: PropTypes.shape({   // Объект с определённой структорой
        brand: PropTypes.string, // указываем типы и проверяем принадлежность к типу
        title: PropTypes.string,
        description: PropTypes.string,
        descriptionFull: PropTypes.string,
        price: PropTypes.number,
        currency: PropTypes.string,
    })
}

export default ShopItemFunc;

