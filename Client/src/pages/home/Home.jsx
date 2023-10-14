import Header from '../../components/header/Header';
import PostSide from '../../components/postSide/PostSide';
import ProfileSide from '../../components/profileSide/ProfileSide';
import RightSide from '../../components/rightSide/RightSide';
import './Home.css'

const Home = () => {
    return ( 
        <>
            <Header/>
            <div className="Home">
                <ProfileSide />
                <PostSide/>
                <RightSide/>
            </div>
        </>
     );
}
 
export default Home;