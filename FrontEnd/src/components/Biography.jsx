import React from 'react'

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className='container biography'>
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>
            Who We Are
          </h3>
          <p >
            Kashif Care Medical Institute is dedicated to delivering exceptional healthcare with compassion and innovation. Our mission is to provide comprehensive care, ensuring every patient receives the highest standard of treatment.
          </p>
          <p>
            We prioritize patient well-being, offering personalized care in a supportive environment. Our team is committed to excellence, driven by a vision to be a leader in healthcare, where trust and integrity are at the core of everything we do.
          </p>
        </div>
      </div>
    </>
  )
}

export default Biography
