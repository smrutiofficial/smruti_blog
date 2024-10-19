const postData = [
  {
    id: 1,
    title: "10 Essential Linux Commands Every User Should Know",
    slug: "essential-linux-commands",
    content:
      "In this post, we'll cover 10 fundamental Linux commands that will boost your productivity and help you navigate the command line with ease.",
    timestamp: "2023-05-15T09:30:00Z",
    comments: 12,
  },
  {
    id: 2,
    title: "Setting Up a LAMP Stack on Ubuntu 22.04",
    slug: "lamp-stack-ubuntu-setup",
    content:
      "Learn how to install and configure a LAMP (Linux, Apache, MySQL, PHP) stack on Ubuntu 22.04 for web development projects.",
    timestamp: "2023-05-18T14:45:00Z",
    comments: 8,
  },
  {
    id: 3,
    title: "Mastering Vim: Tips and Tricks for Efficient Text Editing",
    slug: "mastering-vim-tips",
    content:
      "Discover advanced Vim techniques to streamline your text editing workflow and become a more efficient programmer.",
    timestamp: "2023-05-22T11:15:00Z",
    comments: 15,
  },
  {
    id: 4,
    title: "Understanding Linux File Permissions",
    slug: "linux-file-permissions-explained",
    content:
      "Dive deep into Linux file permissions, including how to read and modify them using chmod and chown commands.",
    timestamp: "2023-05-26T16:00:00Z",
    comments: 6,
  },
  {
    id: 5,
    title: "Getting Started with Docker on Linux",
    slug: "docker-linux-introduction",
    content:
      "Learn the basics of Docker containerization and how to use it effectively on your Linux system for application deployment.",
    timestamp: "2023-05-30T10:30:00Z",
    comments: 10,
  },
  {
    id: 6,
    title: "Customizing Your Bash Prompt for Productivity",
    slug: "customize-bash-prompt",
    content:
      "Explore various ways to customize your Bash prompt to display useful information and improve your command-line experience.",
    timestamp: "2023-06-03T13:45:00Z",
    comments: 7,
  },
  {
    id: 7,
    title: "Securing Your Linux Server: Best Practices",
    slug: "linux-server-security-best-practices",
    content:
      "Learn essential security measures to protect your Linux server from common threats and vulnerabilities.",
    timestamp: "2023-06-07T15:20:00Z",
    comments: 18,
  },
  {
    id: 8,
    title: "Introduction to Shell Scripting in Linux",
    slug: "shell-scripting-introduction",
    content:
      "Get started with shell scripting in Linux and automate common tasks to save time and increase efficiency.",
    timestamp: "2023-06-11T09:00:00Z",
    comments: 9,
  },
  {
    id: 9,
    title: "Linux Networking Fundamentals",
    slug: "linux-networking-fundamentals",
    content:
      "Explore the basics of networking in Linux, including configuration, troubleshooting, and common networking tools.",
    timestamp: "2023-06-15T11:30:00Z",
    comments: 14,
  },
  {
    id: 10,
    title: "Managing Packages with apt on Ubuntu",
    slug: "ubuntu-apt-package-management",
    content:
      "Learn how to effectively use the apt package manager to install, update, and remove software on Ubuntu Linux.",
    timestamp: "2023-06-19T14:00:00Z",
    comments: 11,
  },
  {
    id: 11,
    title: "Introduction to systemd in Linux",
    slug: "systemd-linux-introduction",
    content:
      "Understand the basics of systemd, the init system and service manager for modern Linux distributions.",
    timestamp: "2023-06-23T10:15:00Z",
    comments: 13,
  },
  {
    id: 12,
    title: "Mastering the Linux Command Line",
    slug: "mastering-linux-command-line",
    content:
      "Take your command line skills to the next level with advanced techniques and lesser-known but powerful commands.",
    timestamp: "2023-06-27T16:45:00Z",
    comments: 20,
  },
];

const Post = () => {
  

  return (
    <>
      {postData.map((postItem) => (
        <div key={postItem.id} className="flex flex-col flex-wrap mb-6">
          <div className="w-full h-[13rem]">
            <div className="py-4 pl-4 pr-0 bg-gray-700 h-full rounded-tl-lg rounded-tr-lg"></div>
          </div>
          <div className="w-full">
            <div className="bg-gray-800 p-4 rounded-bl-lg rounded-br-lg">
              <h1 className="text-lg mb-2 font-bold">{postItem.title}</h1>
              <p className="text-sm text-gray-400">{postItem.content}</p>
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
                    {new Date(postItem.timestamp).toLocaleDateString()}
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
