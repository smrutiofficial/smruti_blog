import React from 'react'

const Post = () => {
  return (
    <div className="flex flex-col flex-wrap">
    <div className="w-full h-[13rem] ">
      {/* Content for the first div */}
      <div className='py-4 pl-4 pr-0 bg-gray-700 h-full rounded-tl-lg rounded-tr-lg'></div>
    </div>
    <div className="w-full">
      <div className="bg-gray-800 p-4 rounded-bl-lg rounded-br-lg">
        {/* Content for the first column */}
        <h1 className="text-lg mb-2 font-bold">
          Seamlessly Connect Your Android Phone and Linux Using
          GSConnect
        </h1>
        <p className='text-sm text-gray-400'>
          Let&apos;s improve the &apos;relation&apos; between your
          Linux computer and the Android smartphone.{" "}
        </p>
        <button className="border border-[#6a6ff6] text-[#6a6ff6] px-2 py-1 mt-4 mr-2 rounded-md text-sm">
          Linux
        </button>
        <button className="border border-[#6a6ff6] text-[#6a6ff6] px-2 py-1 mt-4 rounded-md text-sm">
          Open Source
        </button>
        <div className="flex items-center mt-4 text-sm text-gray-100">
          <span className="flex items-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <p className='text-gray-400'>5 comments</p> 
          </span>
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className='text-gray-400'>2 days ago</p> 
          </span>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Post