import pinkDoor from "./assets/images/png/pink_door.png";
import product1 from "./assets/images/png/product1.png";
import product2 from "./assets/images/png/product2.png";
import product3 from "./assets/images/png/product3.png";
import product4 from "./assets/images/png/product4.png";
import './App.css';

function App() {
  return (
    <div className='container'>
      <h1 className='ff_hind fw_semibold fs_36 lh_normal text-center black_01 mb_24 font_feature'>Featured Product</h1>
      <div className="row">
        <div className="col-12 col-lg-5 col-md-10 mx_auto position_relative">
          <img src={pinkDoor} alt="pinkDoor" className="w-100 border_radius_35 h_100 object_fit max_h_903" />
          <p className="ff_hind fw_semibold lh_117 fs_xxl text-center text_shadow text_white overlay_text">
            Explore More<br/>
            Product
          </p>
        </div>
        <div className="col-12 col-lg-7 col-md-10 mx_auto mt_25">
          <div className="d_sm_flex gap_25">
            <div className="card_box w-100 h_100 d-flex flex-column justify-content-between">
              <div>
                <img src={product1} alt="product1" className="w-100 border_radius_15" />
                <p className="ff_open_sans fs_sm fw_normal lh_normal black_01 mt_22 mb_29">Concetti Di-Lusso ALESANDRDO Luxury
                  Turkish Spa Towels and ganic Bamboo
                  Robes 12 PC set</p>
              </div>
              <div className="d-flex align-item-center justify-content-between">
                <h4 className="ff_hind fs_lg lh_normal fw_semibold wine_color font_feature">
                  $169.99
                </h4>
                <p className="grey_color ff_hind fs_sm fw_normal font_feature lg_normal text_decoration">
                  $199.99
                </p>
                <button className="add_btn lh_normal ff_hind fs_sm fw_semibold glass_hover">
                  ADD CART
                </button>
              </div>
            </div>
            <div className="card_box w-100 h_100 d-flex flex-column justify-content-between mt_20">
              <div>
                <img src={product2} alt="product2" className="w-100 border_radius_15" />
                <p className="ff_open_sans fs_sm fw_normal lh_normal black_01 mt_22 mb_29">Concetti Di-Lusso CAPPY Organic
                  Turkish Cotton - Set of 4 in Gift Box
                </p>
              </div>
              <div className="d-flex align-item-center justify-content-between">
                <h4 className="ff_hind fs_lg lh_normal fw_semibold wine_color font_feature">
                  $59.99
                </h4>
                <p className="grey_color ff_hind fs_sm fw_normal font_feature lg_normal text_decoration">
                  $199.99
                </p>
                <button className="add_btn lh_normal ff_hind fs_sm fw_semibold glass_hover">
                  ADD CART
                </button>
              </div>
            </div>
          </div>
          <div className="d_sm_flex mt_50 gap_25">
            <div className="card_box w-100 h_100 d-flex flex-column justify-content-between">
              <div>
                <img src={product3} alt="product3" className="w-100 border_radius_15" />
                <p className="ff_open_sans fs_sm fw_normal lh_normal black_01 mt_22 mb_29">Concetti Di-Lusso Luxury 100% Turkish
                  Bamboo Shawl Spa Robe in Premium
                  Gift Box</p>
              </div>
              <div className="d-flex align-item-center justify-content-between">
                <h4 className="ff_hind fs_lg lh_normal fw_semibold wine_color font_feature">
                  $159.99
                </h4>
                <p className="grey_color ff_hind fs_sm fw_normal font_feature lg_normal text_decoration">
                  $199.99
                </p>
                <button className="add_btn lh_normal ff_hind fs_sm fw_semibold glass_hover">
                  ADD CART
                </button>
              </div>
            </div>
            <div className="card_box w-100 h_100 d-flex flex-column justify-content-between mt_20">
              <div>
                <img src={product4} alt="pinkDoor" className="w-100 border_radius_15" />
                <p className="ff_open_sans fs_sm fw_normal lh_normal black_01 mt_22 mb_29">Concetti Di-Lusso ALESANDRDO Luxury
                  Turkish Spa Towels and ganic Bamboo
                  Robes 12 PC set</p>
              </div>
              <div className="d-flex align-item-center justify-content-between">
                <h4 className="ff_hind fs_lg lh_normal fw_semibold wine_color font_feature">
                  $59.99
                </h4>
                <p className="grey_color ff_hind fs_sm fw_normal font_feature lg_normal text_decoration">
                  $199.99
                </p>
                <button className="add_btn lh_normal ff_hind fs_sm fw_semibold glass_hover">
                  ADD CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
      <button className="show_btn ff_hind fs_md fw_semibold lh_normal text_white mt_50 mb_29">SHOW MORE</button>
      </div>
    </div>
  );
}

export default App;
