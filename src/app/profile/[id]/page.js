import React from 'react'

export default function UserProfile({params}) {
  return (
    <div className="flex flex-col items-center h-screen justify-center text-white p-2">
      <h1 className="">Profile</h1>
      <p className="t">This profile belongs to id <span className="bg-orange-500 rounded p-1">{params.id}</span></p>
    </div>
  )
}
