import './introduction.css';

const Introduction = ()=>{
    return(
        <section className="Introduction">
            <div className="Introduction-content">
                <h2>ﻃﻮر ﻣﺘﺠﺮك ووﺳﻊ آﻓﺎق ﺗﺠﺎرﺗﻚ ﻣﻊ ﺳﻮق ﺗﻄﺒﻴﻘﺎت زد</h2>
                <p>طور تجارتك من خلال  تطبيقات وحلول سوق تطبيقات زد التي تساعدك في نمو أرباحك عبر إدارة عمليات متجرك بشكل فعال واحترافي</p>
                <div>
                    <button>
                        ﺗﺼﻔﺢ اﻟﺘﻄﺒﻴﻘﺎت
                    </button>
                </div>
            </div>
            <div className="Introduction-image">
                <img className="Introduction-image-img" src={require('../../../../assets/product03 1.png')} alt="" />
                <img className="Introduction-image-ellipse" src={require('../../../../assets/Ellipse 250.png')} alt="" />
                <img className="Introduction-image-dot" src={require('../../../../assets/Dot Pattern 2.png')} alt="" />
            </div>
        </section>
    );
}

export default Introduction;