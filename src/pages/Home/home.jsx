import './home.css';
import Introduction from './components/introduction/introduction';
import StoreProperties from './components/store-properties/store-properties';
import SpeacialApps from './components/special-apps/speacial-apps';

const Home = ()=>{
    return(
        <div>
            <Introduction></Introduction>
            <StoreProperties></StoreProperties>
            <SpeacialApps></SpeacialApps>
        </div>
    );
}

export default Home;