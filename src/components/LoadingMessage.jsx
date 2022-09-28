import React from 'react'

export const LoadingMessage = ({isLoading}) => {
  console.log(isLoading);
  return (
    isLoading && ( <h2>Loading...</h2>)
  )
}
