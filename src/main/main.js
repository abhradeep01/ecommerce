import React from 'react';
import Heading from './component/heading/heading';
import Cart from './component/cart/cart';
import salesproductData from '../data/salesproductdata.json';
import sellingProductsData from '../data/productdata.json';
import ExportData from '../data/exploredata.json';
import data from '../data/otherdata.json';
import './main.css';
import { CiMobile1,CiCamera,CiHeadphones,CiDeliveryTruck,CiBookmarkCheck } from "../../node_modules/react-icons/ci";
import { HiOutlineComputerDesktop } from "../../node_modules/react-icons/hi2";
import { BsSmartwatch } from "../../node_modules/react-icons/bs";
import { MdOutlineVideogameAsset } from "../../node_modules/react-icons/md";

const service = [
  {
    icon:<CiDeliveryTruck className='icon' />,
    head:'free and fast delivery',
    about:'free delivery for all over $140'
  },
  {
    icon:<CiHeadphones className='icon' />,
    head:'24/7 customer service',
    about:'friendly 24/7 customer support'
  },
  {
    icon:<CiBookmarkCheck className='icon' />,
    head:'money back garantee',
    about:'we return money within 30 days'
  }
];

//main component
function Main() {

  const onclickCartEvent = (e)=>{
    const clickedElement = e.target;
    const parent = clickedElement.closest('#cart');
    const cartInfo ={
      quantity:1,
      itemImg:parent.querySelector('img').src,
      itemName:parent.dataset.itemName,
      itemPrice:parent.dataset.price,
      discount:parent.dataset.discount,
      bool:parent.dataset.favorite
    };
    console.log(JSON.stringify(cartInfo));
  }

  const onclickFavEvent =(e)=>{
    const clickedElement = e.target;
    const parent = clickedElement.closest('#cart');
    if(parent.dataset.favorite){
      window.alert('item added to favorite item')
    }
    else{
      window.alert('item remove from favorite item.');
    }
    const cartInfo = {
      itemImg:parent.querySelector('img').src,
      itemName:parent.dataset.itemName,
      itemPrice:parent.dataset.price,
      discount:parent.dataset.discount,
      bool:parent.dataset.favorite
    }
    var fav = document.querySelector('.heartcount');
    let favNum = fav.nodeValue;
    favNum = favNum +1;
    fav.nodeValue=favNum;
    console.log(favNum);
    console.log(JSON.stringify(cartInfo));
  }
  const Service =()=>{
    const Card =({icon,head,about})=>{
      return(
        <div className="card">
          {icon}
          <div className="h4">{head}</div>
          <div className="p">{about}</div>
        </div>
      )
    }
    return(
      <div className="service">
        {service.map((item,index)=>{
          return <Card icon={item.icon} head={item.head} about={item.about} />
        })}
      </div>
    )
  }

  //this is the ads component
  const Arrival =()=>{
    const first = data.first;
    const second = data.second;
    const third = data.sub;
    return(
      <div className="arrival">
        <Heading context={'featured'} heading={'new arrival'} />
        <div className="ads">
          <div className="item1 float">
            <img src={first.img} alt={first.desc} />
            <div className="text">
              <div className="h3">{first.head}</div>
              <div className="h5">{first.desc}</div>
              <a href="/">buy now</a>
            </div>
          </div>
          <div className="item2 float">
            <img src={second.img} alt={second.desc} />
            <div className="text">
              <div className="h3">{second.head}</div>
              <div className="h5">{second.desc}</div>
              <a href="/">buy now</a>
            </div>
          </div>
          <div className="item3">
            {third.map((item,index)=>{
              return(
                <div className="item float">
                  <img src={item.img} alt={item.desc} />
                  <div className="text">
                    <div className="h3">{item.head}</div>
                    <div className="h5">{item.desc}</div>
                    <a href="/">buy now</a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  //new items component
  const Explore =()=>{
    return(
      <div className="shopping-cart">
        <Heading context={'our products'} heading={'explore our poduct'} icon={'icon'} />
        <div className="container">
          {ExportData.map((item,index)=>{
            return <Cart
              key={index}
              float={item.discount}
              img={item.img}
              itemName={item.productName}
              price={item.price}
              cartEvent={onclickCartEvent}
              favEvent={onclickFavEvent}
            />
          })}
        </div>
      </div>
    )
  }

  //this is the banner component
  const Banner =()=>{
    const content=data.banner;
    return(
      <div className="banner">
        <div className="text">
          <div className="head">{content.head}</div>
          <div className="subhead">{content.subhead}</div>
          <button>buy now</button>
        </div>
        <div className="img">
          <img src={content.img} alt={content.describe} />
        </div>
      </div>
    )
  }

  //this is the product cart section
  const Product =()=>{
    return(
      <div className="shopping-cart">
        <Heading context={'this month'} heading={'best selling products'} icon={'view all'} />
        <div className="container">
          {sellingProductsData.map((item,index)=>{
            return <Cart
             key={index}
             float={item.discount} 
             img={item.img} 
             itemName={item.productName}
             price={item.price}
             not={item.notprice}
             cartEvent={onclickCartEvent}
             favEvent={onclickFavEvent}
            />
          })}
        </div>
      </div>
    )
  }

  //this the item category component section
  const Category =()=>{
    return(
      <div className="category">
        <Heading context={'categories'} heading={'browse by category'} icon={'icon'} />
        <div className="category-section">
          <div className="card">
            <CiMobile1 className='icon' />
            <div className="h3">phones</div>
          </div>
          <div className="card">
            <HiOutlineComputerDesktop className='icon' />
            <div className="h3">computer</div>
          </div>
          <div className="card">
            <BsSmartwatch className='icon' />
            <div className="h3">SmartWatch</div>
          </div>
          <div className="card">
            <CiCamera className='icon' />
            <div className="h3">camera</div>
          </div>
          <div className="card">
            <CiHeadphones className='icon' />
            <div className="h3">headPhones</div>
          </div>
          <div className="card">
            <MdOutlineVideogameAsset className='icon' />
            <div className="h3">gaming</div>
          </div>
        </div>
      </div>
    )
  }

  //this is the first part of main section
  const Sales =()=>{
    return(
      <div className="shopping-cart">
        <Heading context={"today's"} heading={'flash sales'} icon={'icon'} />
        <div className="container">
          {salesproductData.map((item,index)=>{
            return <Cart 
              key={index} 
              float={item.discount} 
              img={item.img} 
              itemName={item.productName} 
              price={item.price} 
              not={item.notPrice} 
              cartEvent={onclickCartEvent} 
              favEvent={onclickFavEvent}
            />
          })}
        </div>
      </div>
    )
  }

  //main compenent for main tag here all component added one by one 
  return (
    <main>
        <Sales />
        <Category />
        <Product />
        <Banner />
        <Explore />
        <Arrival />
        <Service />
    </main>
  )
}

export default Main;