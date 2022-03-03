import './store-properties.css';

const StoreProperties = ()=>{
    const properties = [
        {img:'Group8435.png', text:"ﺳﻬﻮﻟﺔ  اﺩﺍﺭﺔ و ﺗﻔﻌﻴﻞ ﺗﻄﺒﻴﻘﺎﺗﻚ ﻣﻦ ﻧﻔﺲ ﻟﻮﺣﺔ ﺗﺤﻜﻢ ﻣﺘﺠﺮك"},
        {img:"Vector.png", text:"دﻋﻢ ﻓﻨﻲ و ﺗﻘﻨﻲ ﻣﺘﻜﺎﻣﻞ ﻣﺘﻮﻓﺮ ﻋﻠﻰ ﻣﺪاﺭ اﻟﺴﺎﻋﺔ"},
        {img:"Group.png", text:"أﺳﻌﺎر ﺗﻨﺎﻓﺴﻴﺔ ﻣﻊ ﺗﺠﺮﺑﺔ ﻣﺠﺎﻧﻴﺔ وﺑﺎﻗﺎت اﺷﺘﺮﺎﻛ ﻣﺘﻨﻮﻋﺔ"}
    ]
    return(
        <section className='storeProp'>
            <div className='storeProp-img'>
                <img className="storeProp-image-img" src={require('../../../../assets/zidapp_1-min 1.png')} alt="" />
                <img className="storeProp-image-ellipse" src={require('../../../../assets/Ellipse.png')} alt="" />
                <img className="storeProp-image-dot" src={require('../../../../assets/Dot Pattern 3.png')} alt="" />
            </div>
            <div className='storeProp-prop'>
                <p className='storeProp-prop-main'>ﻛﻞ ﻣﺎ ﺗﺤﺘﺎﺟﻪ ﻟﻨﻤﻮ ﻣﺘﺠﺮك ﻓﻰ ﻣﻜﺎن وﺍﺣﺪ</p>
                <p className='storeProp-prop-sub1'>ﻣﻤﻴﺰﺎﺗ ﺳﻮق ﺗﻄﺒﻴﻘﺎت زﺩ ﺗﺴﺎﻋﺪك ﻓﻲ ﺳﻬﻮﻟﺔ وﺳﺮﻋﺔ اﻟﺎﺳﺘﻔﺎدﺔ ﻣﻦ ﺧﺪﻣﺎت وﺣﻠﻮل</p>
                <p className='storeProp-prop-sub2'>ﺳﻮق اﻟﺘﻄﺒﻴﻘﺎت ﻟﻨﻤﻮ ﻣﺘﺠﺮك وﻣﻀﺎﻋﻔﺔ أﺭﺑﺎﺣﻚ</p>
                {
                    properties.map((prop,index)=>{
                        return(
                            <div className='storeProp-prop-card' key={index}>
                                <p>{prop.text}</p>
                                <div>
                                    <img src={require('../../../../assets/'+ prop.img)} alt="" />
                                </div>
                            </div>
                        )
                    })
                }
                <div className='storeProp-btn'>
                    <button>
                    ﺗﺼﻔﺢ اﻟﺘﻄﺒﻴﻘﺎت
                    </button>
                </div>
            </div>
        </section>
    );
    
}

export default StoreProperties;