// src/components/ProfileComponent.js
import React, { useEffect } from 'react';
import { useAppDispatch } from '../../../hook';
import { fetchProfileImage , fetchCoverImage} from '../../../store/thunks/imagesThunk';
import { useAppSelector } from '../../../hook';

const FetchUserPicture = ({path} : {path?: string}) => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(state => state.user.currentUser)
  

  useEffect(() => {
      if(currentUser?.image || currentUser?.coverImage) return;
      dispatch(fetchProfileImage(path ? path : currentUser?.image as string));
      dispatch(fetchCoverImage(path? path : currentUser?.coverImage as string))
      console.log("FetchProfileImage");
    
  }, [currentUser?.image, dispatch, currentUser?.coverImage , path]);

  return (
    <div className='hidden'/>
  );
};

export default FetchUserPicture;
