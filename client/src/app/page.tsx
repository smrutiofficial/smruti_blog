import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import Post from "./components/post";
import Postrb from "./components/post_rb";

export default function Home() {
  return (
    <>
      <div className="w-full h-6 bg-gradient-to-r from-blue-500 to-purple-500"></div>
     <Navbar/>
      <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold mb-4">Become a Better Linux User</h2>
        <p className="text-xl text-gray-400 mb-6 w-full px-6 text-center">
        Kernel Hub is your go-to resource for Linux tips, open-source news, and community discussions. We&apos;re passionate about empowering users with knowledge and fostering a collaborative environment.!
        </p>
        <div className="flex items-center rounded-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-[400px] py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-[#6a6ff6] text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300">
            Subscribe
          </button>
        </div>
        <div className="mt-8 font-mono text-sm">
          <span className="text-green-500">➜</span>{" "}
          <span className="text-blue-500">~</span>{" "}
          <span className="text-yellow-500">$</span> Stay powered with our
          updates!
        </div>
      </div>

      {/* Recent blog posts */}
      <div className="container mx-auto px-4 py-4">
        <h3 className="text-2xl font-bold mb-4">Recent Blog Posts</h3>
       <Postrb/>
       <h3 className="text-2xl font-bold mb-4 mt-20">All Blog Posts</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Post />
        <Post />
        <Post />
        <Post />

        <Post />
        <Post />
        <Post />
        <Post />

        <Post />
        <Post />
        <Post />
        <Post />

      </div>
        <hr className="w-full mt-[5rem] mb-10"/>
      <div className="flex justify-between items-center space-x-4 mt-8">
        <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Previous
        </button>
        <div className="flex space-x-2">
          {[1, 2, 3,"...",8,9,10].map((page) => (
            <button
              key={page}
              className={`px-3 py-1 ${page === 1 ? 'bg-[#6a6ff6]' : ''} text-white rounded-md hover:bg-gray-600 transition duration-300`}
            >
              {page}
            </button>
          ))}
        </div>
        <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300 flex items-center">
          Next
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      </div>
      <div className="w-full h-4 mt-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
<Footer/>
    </>
  );
}
