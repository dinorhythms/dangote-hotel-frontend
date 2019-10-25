import React from 'react'

export default function Spinner() {
  return (
    <div className="d-flex justify-content-center pt-3 pb-3">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
