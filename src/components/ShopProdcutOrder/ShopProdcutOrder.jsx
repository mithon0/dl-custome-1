import './ShopProdcutOrder.css'

const ShopProdcutOrder = ({ productName, productDiscountPercent, backgroundImage }) => {
    const listingStyle = {
        backgroundImage: `url(${backgroundImage})`
    }
    return (
        <div className="listingCard" style={listingStyle}>
            <p className="listingHeading">{productName}</p>
            <p className="listingPara">{productDiscountPercent}</p>
            <div className="listingOverlay"></div>
            <button className="listingCard-btn">Shop Now</button>
        </div>
    );
};

export default ShopProdcutOrder;