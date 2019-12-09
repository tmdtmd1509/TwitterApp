import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default props => 
  props.images.map((image, i) =>
    <div key={i} className='fadein'>
      <div 
        onClick={() => props.removeImage(image.public_id)} 
        className='delete'
      >
        <Text>Iamge</Text>
      </div>
      <img 
        src={image.secure_url} 
        alt='' 
        onError={() => props.onError(image.public_id)}
      />
    </div>
  )