import React, {useState, useRef} from 'react'
import './PostShare.css'
import ProfileImg from '../../img/profilephoto.jpg'

import {UilScenery} from "@iconscout/react-unicons";
import {UilPlayCircle} from "@iconscout/react-unicons";
import {UilLocationPoint} from "@iconscout/react-unicons";
import {UilSchedule} from "@iconscout/react-unicons";
import {UilTimes} from "@iconscout/react-unicons";

import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadPost } from '../../actions/UploadAction';


const PostShare = () => {

  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER    

  const loading = useSelector((state)=>state.postReducer.uploading)

  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();
  const [image, setImage] = useState(null)
  const [video, setVideo] = useState(null)
  const imageRef = useRef()
  const videoRef = useRef()
  const desc = useRef();

  const onImageChange = (event) =>{
    if(event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const onVideoChange = (event) =>{
    if(event.target.files && event.target.files[0]) {
      let vdo = event.target.files[0];
      setVideo(vdo);
    }
  };
  // const onVideoChange = (event) => {
  //   if (event.target.files && event.target.files[0]) {
  //     let vdo = event.target.files[0];
  //     setVideo(URL.createObjectURL(vdo)); // Remove the object wrapping here
  //   }
  // };
  const closeVideoPreview = () => {
    setVideo(null);
  };
  

const reset =()=>{
  setImage(null)
  setVideo(null)
  desc.current.value= ""
}

// handle post upload
const handleSubmit = async (e) => {
  e.preventDefault();

  //post data
  const newPost = {
    userId: user._id,
    firstName: user._id.firstname,
    desc: desc.current.value,
  };

  // if there is an image with post
  if (image) {
    const data = new FormData();
    const fileName = Date.now() + image.name;
    data.append("name", fileName);
    data.append("file", image);
    newPost.image = fileName;
    console.log(newPost);
    try {
      dispatch(uploadImage(data));
    } catch (err) {
      console.log(err);
    }
  }

// if there is an video with post
  if (video) {
    const data = new FormData();
    const fileName = Date.now() + video.name;
    data.append("name", fileName);
    data.append("file", video);
    newPost.video = fileName;
    console.log(newPost);
    try {
      dispatch(uploadImage(data));
    } catch (err) {
      console.log(err);
    }
  }
  dispatch(uploadPost(newPost))
  reset()
}


  return (
    <div className='PostShare'>
        <div>
          <img className='profileImg' src={user.coverPicture? serverPublic+ user.coverPicture : serverPublic + "default-profile.jpg"} alt=''/>
          <input 
          ref={desc}
          required
          type='text' 
          placeholder="What's happening" ></input>
        </div>
          <div className='postOptions'>
            <div className='option' style={{color: "var(--photo)"}} onClick={()=>imageRef.current.click()}>
              <UilScenery/>
              Photo
            </div>
            <div className='option' style={{color: "var(--video)"}} onClick={()=>videoRef.current.click()}>
              <UilPlayCircle/>
              Video
            </div>
            <div className='option' style={{color: "var(--location)"}}>
              <UilLocationPoint/>
              Location
            </div>
            <div className='option' style={{color: "var(--schedule)"}}>
              <UilSchedule/>
              Schedule
            </div>
            <button className='button ps-button' 
            onClick={handleSubmit}
            disabled= {loading}
            >
              {loading ? "Uploading..." : "Post"}
            </button>
            <div style={{display: "none"}}>
              <input type='file' accept='image/*' name='myImage' ref={imageRef} onChange={onImageChange} />
            </div>
            <div style={{display: "none"}}>
              <input type='file' accept="video/*" name='myImage' ref={videoRef} onChange={onVideoChange} />
            </div>
          </div>
          {image && (
            <div className='previewImage'>
              <UilTimes onClick={()=>setImage(null)}/>
              <img className='prevImg' src={URL.createObjectURL(image)} alt=''/>
            </div>
          )}
          {/* {video && (
            <div className='previewImage'>
              <UilTimes onClick={()=>setVideo(null)}/>
              <video className='prevImg' src={video.video} alt=''/>
            </div>
          )} */}
          {video && (
            <div className='previewImage'>
              <button className='vdoCloseButton' onClick={closeVideoPreview}>
                <UilTimes />
              </button>
              <video className='prevImg' src={URL.createObjectURL(video)} controls width="100%" height="300" alt='Video preview' />
            </div>
          )}

    </div>
  )
}

export default PostShare