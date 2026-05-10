
import React from 'react'
import Logo from '@/components/Logo'

const NotFoundPage = () => {
  return (
    <div>
      <div>
        <div>
            <Logo/>
            <h1>Looking for something?</h1>
            <p>We are sortReleases. The web address you entered is not a functional page of our StickerIcon. </p>
        </div>
        <div>
            <button>Go to Upcart home page</button>
            <button>Help</button>
        </div>
      </div>
      <p>Need help?Visit the Help section or Contact Us </p>
    </div>
  )
}

export default NotFoundPage
