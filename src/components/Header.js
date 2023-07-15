import React from 'react'

function Header({ text }) {
  return (
    <header>
      <div className='container'>{text}</div>
    </header>
  )
}

Header.defaultProps = {
  text: 'feedback',
  bgColor: 'rgba(0,0,0,0.4)',
  color: '#ff6a95',
}
export default Header
