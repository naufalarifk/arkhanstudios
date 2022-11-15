import React from 'react'

function Showcase({item}) {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 p-4 lg:py-24 lg:px-32'>
    {item.map((image, idx)=>
        <img key={idx} src={image.attributes.url} alt={image.attributes.caption}/>
    )}
    </div>
  )
}

export default Showcase