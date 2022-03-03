import './speacial-apps.css';

const SpeacialApps = ()=>{
    const cards = [
        1,2,3,4
    ];
    return(
        <section className='speacial-apps'>
            <div className='speacial-apps-header'>
                <h3>اﻟﺘﻄﺒﻴﻘﺎت اﻟﻤﻤﻴﺰة</h3>
                <p>ﺗﻄﺒﻴﻘﺎت ﺗﻘﺪم ﺣﻠﻮل وﺧﺪﻣﺎت ﻣﻤﻴﺰة ﻧﻮﺻﻲ ﺑﺘﺠﺮﺑﺘﻬﺎ</p>
            </div>
            <div className='speacial-apps-body'>
                {
                    cards.map((card)=>{
                        return(
                            <div key={card} className='speacial-apps-body-card'>
                                <div className='speacial-apps-body-card-img'>
                                    <img src={require('../../../../assets/amr.png')} alt="" />
                                </div>
                                <div className='speacial-apps-body-card-body'>
                                    <div className='speacial-apps-body-card-body-1'>
                                        <p>قمره</p>
                                        <span>
                                            <img src={require('../../../../assets/Icon ionic-ios-star.png')} alt="" />
                                            5
                                        </span>
                                    </div>
                                    <div className='speacial-apps-body-card-body-2'>
                                        <p>ﺗﻄﻮﻳﺮ : ﻋﻤﺮ ﺑﺮﻫﻮم</p>
                                    </div>
                                    <div className='speacial-apps-body-card-body-3'>
                                        <p>ﻧﻈﺎم اﻟﻮﻟﺎء اﻟﺄﻣﺜﻞ اﻟﺬي ﻳﻤﻜﻨﻚ ﻣﻦ رﻓﻊ ﻣﺒﻴﻌﺎﺗﻚ ﻧﻈﺎم اﻟﻮﻟﺎء اﻟﺄﻣﺜﻞ اﻟﺬي ﻳﻤﻜﻨﻚ ﻣﻦ رﻓﻊ ﻣﺒﻴﻌﺎﺗﻚ</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <div className='speacial-apps-btn'>
                <div>
                    <img src={require('../../../../assets/DownArrow 3.png')} alt="" />
                    <p>ﺟﻤﻴﻊ اﻟﺘﻄﺒﻴﻘﺎت</p>
                </div>
            </div>
        </section>
    )
}

export default SpeacialApps;