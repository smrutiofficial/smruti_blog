// import Image from "next/image";
import postData from "../api/post";

const Post = () => {
  function timeAgo(date: Date) {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) return `${interval} year${interval > 1 ? "s" : ""} ago`;

    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) return `${interval} month${interval > 1 ? "s" : ""} ago`;

    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return `${interval} day${interval > 1 ? "s" : ""} ago`;

    interval = Math.floor(seconds / 3600);
    if (interval >= 1) return `${interval} hour${interval > 1 ? "s" : ""} ago`;

    interval = Math.floor(seconds / 60);
    if (interval >= 1)
      return `${interval} minute${interval > 1 ? "s" : ""} ago`;

    return `${Math.floor(seconds)} seconds ago`;
  }
  return (
    <>
      {postData.map((postItem) => (
        // <div
        //   key={postItem.id}
        //   className="flex flex-col flex-wrap mb-6 border-4 rounded-md border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-border animate-gradient-border bg-[length:200%_200%]"
        // >
        <div
        key={postItem.id}
        className="flex flex-col items-center justify-center flex-wrap mb-6 relative
        after:content-[''] after:absolute after:h-full 
        after:w-full after:bg-gradient-to-r 
        after:via-transparent 
        after:odd:from-blue-500 
        after:even:from-transparent
        after:even:to-orange-500 
        after:odd:to-transparent 
        after:t-1/2 after:l-1/2 
        after:translate-1/2 after:-z-10 p-1 after:rounded-md 
        
        before:content-[''] before:absolute before:h-full 
        before:w-full before:bg-gradient-to-r  
        before:via-transparent 
      before:odd:from-blue-500 
        before:even:from-transparent
        before:even:to-orange-500 
        before:odd:to-transparent 
        
        
        before:t-1/2 before:l-1/2 
        before:translate-1/2 before:-z-10 before:rounded-md before:blur-md 
        "
      >
          {" "}
          <div className="w-full h-[13rem]">
            <div className="overflow-hidden bg-gray-700 h-full rounded-tl-lg rounded-tr-lg">
              <img
                src={postItem.image}
                alt={`Cover for ${postItem.title}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="bg-gray-800 p-4 rounded-bl-lg rounded-br-lg h-64">
              <h1 className="text-lg mb-2 font-bold h-16 py-2 overflow-hidden">
                {postItem.title}
              </h1>
              <p className="text-sm text-gray-400 h-16 overflow-hidden">
                {postItem.content}
              </p>
              {postItem.tags.map((tag) => (
                <button
                  key={tag}
                  className="border border-[#6a6ff6] text-[#6a6ff6] px-2 py-1 mt-4 mr-2 rounded-md text-sm"
                >
                  {tag}
                </button>
              ))}
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
                  <p className="text-gray-400">{postItem.comments} comments</p>
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
                  <p className="text-gray-400">
                    {timeAgo(new Date(postData[0].timestamp))}
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;
