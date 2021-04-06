import React from 'react'
import { RichText } from 'prismic-reactjs';

const TextSlice = ({slice}) => {
  return (
    <div>
      {RichText.render(slice.primary.content)}
    </div>
  )
}

export default TextSlice
