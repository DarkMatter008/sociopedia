import {useEffect, useState} from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import ProfileEdit from '../../profileEdit/profileEdit'
import * as UserApi from "../../../api/UserRequest"
import {useDispatch, useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import { logout } from '../../../actions/AuthAction'


const InfoCard = () => {

    const [modelOpened, setModelOpened] = useState(false)

    const dispatch = useDispatch();
    const param = useParams();
    const profileUserId = param.id
    const [profileUser, setProfileUser] = useState({})

    const {user} = useSelector((state)=>state.authReducer.authData)

    useEffect(()=>{
        const fatchProfileUser = async()=> {
            if(profileUserId === user._id){
                setProfileUser(user)
                console.log(user)
            }else{
                const profileUser = await UserApi.getUser(profileUserId)
                setProfileUser(profileUser)
                console.log(user)
            }

        }
        fatchProfileUser();

    }, [user])

    const handleLogOut = () =>{
        dispatch(logout())
    }

  return (
    <div className='InfoCard'>
        <div className='infoHead'>
            <h4>Profile Info</h4>
            {user._id === profileUserId ? 
            (<>
            <UilPen width='2rem' height='1.2rem' onClick={()=>setModelOpened(true)}/>
            <ProfileEdit modelOpened={modelOpened} setModelOpened={setModelOpened} data={user} />
            </>
            ) : ("")
            }
        </div>
        <div className='info'>
            <span><b>Studied at </b></span>
            <span>{profileUser.worksAt}</span>
        </div>
        <div className='info'>
            <span><b>Lives in </b></span>
            <span>{profileUser.livesin}</span>
        </div>
        <div className='info'>
            <span><b>From </b></span>
            <span>{profileUser.from}</span>
        </div> 
        <div className='info'>
            <span><b>Relationship status </b></span>
            <span>{profileUser.relationship}</span>
        </div> 

        <button className='button Logout-btn' onClick={handleLogOut} >Logout</button>
    </div>
  )
}

export default InfoCard