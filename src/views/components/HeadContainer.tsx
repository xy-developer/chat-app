import React from 'react'

const HeadContainer = ({children}) => {
  return (
    <div
    style={{
        width:'100%',
        position:'fixed',
        top:'0',
        background:'#FAF9F4',
        boxShadow:'1px 1px 1px rgba(0,0,0,0.1)',
        zIndex:'5555'
    }}
    >
        {children}
    </div>
  )
}

export default HeadContainer