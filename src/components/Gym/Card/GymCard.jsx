import img from '../../../assets/images/img.jpg'
import './Card.css'



const GymCard = ({ data }) => {
  const { logo_img_url, is_hot_deal, name } = data;
  return (
    <div className="col-md-4  col-sm-6 col-lg-3 text-center ">
      <div className="card-shadow rounded-4">
        <img
          src={logo_img_url || img}
          className="img mx-auto mb-3"
          alt="gym-img"
        />
        <h3 className='mb-3'>{name}</h3>

        <div className="text-center text-light fs-4 hot-deals-height">
          {is_hot_deal && (<p className="hot-deals-bg rounded-bottom py-1">hot deals</p>)}
        </div>
      </div>
    </div>
  );
};

export default GymCard;
