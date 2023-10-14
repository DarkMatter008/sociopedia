import { Modal, useMantineTheme} from '@mantine/core';
import './ProfileEdit.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { uploadImage } from '../../actions/UploadAction';

function ProfileEdit({modelOpened, setModelOpened, data}) {
    const theme = useMantineTheme();
    const {password, ...other} = data;
    const [formData, setFormData] = useState(other);
    const [profileImage, setProfileImage] = useState(null);
    const [coverImage, setCoverImage] = useState(null);
    const dispatch = useDispatch()
    const param = useParams()
    const {user} = useSelector((state)=>state.authReducer.authData)

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const onImageChange = (event)=>{
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0];
            event.target.name === "profilePicture"
            ? setProfileImage(img)
            : setCoverImage(img);
        }
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        let data = formData;
        if (profileImage){
            const data = new FormData();
            const fileName = Date.now() + profileImage.name;
            data.append("name", fileName);
            data.append('file', profileImage);
            userData.profilePicture = fileName;
            try{
                dispatch(uploadImage(data));
            }catch(err){
                console.log(err)
            }
        }

        if (coverImage){
            const data = new FormData();
            const fileName = Date.now() + coverImage.name;
            data.append("name", fileName);
            data.append('file', coverImage);
            userData.coverPicture = fileName;
            try{
                dispatch(uploadImage(data));
            }catch(err){
                console.log(err)
            }
        }
        dispatch(updateUser(param.id, UserData))
        setModelOpened(false)
    }

  return (
    <>
      <Modal 
      overlayProps={{
        //   color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          color: theme.colors.dark[10],
          opacity: 0.55,
          blur: 3,
        }}
      opened={modelOpened} 
      onClose={()=>setModelOpened(false)} 
      title="Edit your info"
      size='55%'
      >
        <form className="infoEdit">
            {/* <h3>Your info</h3> */}

            <div>
                <input
                    type="text"
                    className="infoInputEdit"
                    name="firstname"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={formData.firstname}
                />

                <input
                    type="text"
                    className="infoInputEdit"
                    name="lastname"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={formData.lastname}
                />
            </div>

            <div>
                <input
                    type="text"
                    className="infoInputEdit"
                    name="worksAt"
                    placeholder="Works at"
                    onChange={handleChange}
                    value={formData.worksAt}
                />
            </div>

            <div>
                <input
                    type="text"
                    className="infoInputEdit"
                    name="livesin"
                    placeholder="LIves in"
                    onChange={handleChange}
                    value={formData.livesin}
                />

                <input
                    type="text"
                    className="infoInputEdit"
                    name="country"
                    placeholder="Country"
                    onChange={handleChange}
                    value={formData.country}
                />
            </div>

            <div>
                <input
                    type="text"
                    className="infoInputEdit"
                    name='relationship'
                    placeholder="Relationship Status"
                    onChange={handleChange}
                    value={formData.relationship}
                />
            </div>

            <div>
                <input
                    type="text"
                    className="infoInputEdit"
                    name='about'
                    placeholder="About"
                    onChange={handleChange}
                    value={formData.about}
                />
            </div>


            <div>
                <div>
                    <span>Profile Image</span> 
                    <input type="file" accept='image/*' name='profilePicture' onChange={onImageChange}/>
                </div>
                <div>
                    <span>Cover Image</span>
                    <input type="file" accept='image/*' name="coverPicture" onChange={onImageChange}/>
                </div>
            </div>

            <button className="button infoButton EditBtn" onClick={handleSubmit}>Update</button>
        </form>
      </Modal>

    </>
  );
}
export default ProfileEdit;