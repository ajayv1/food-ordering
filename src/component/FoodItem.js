import './item.css';

export const FoodItem = ({ idx, item }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-header">
          <span className="card-num">{idx}</span>
          <div className="card-author">{item.category}</div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <div className="card-img">
            <img src={item.image} /> 
          </div> 
          <div className="card-desc">{item.description}</div>
        </div>
        <div className="card-footer">
          <span className="card-read-more">Read</span>
        </div>
        <div className="order-now btn">Order Now</div>
      </div>
    </div>
  );
};