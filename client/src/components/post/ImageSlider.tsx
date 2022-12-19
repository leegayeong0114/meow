import React from 'react'
import { Carousel } from 'antd'

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '30vh',
  color: '#fff',
  lineHeight: '30vh',
  textAlign: 'center',
  background: '#364d79',
}

interface IProps {
  name: string
}

const ImageSlider: React.FC<IProps> = (
  name
) => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide)
  }

  return (
    <Carousel style={{ marginBottom: '3%' }} afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  )
}

export default ImageSlider