import PropTypes from 'prop-types';

const Blog = ({ blog, handleReadingTime }) => {
  // console.log(blog);
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="card rounded-lg">
      <figure className="">
        <img className="w-full" src={cover} alt="Shoes" />
      </figure>
      <div className="card-body px-0 space-y-4">
        <div className="flex justify-between">
          <div className="flex gap-6">
            <figure>
              <img className="w-12" src={author_img} alt="author image" />
            </figure>
            <div>
              <h3 className="text-xl font-bold">{author}</h3>
              <p className="text-[#11111199]">{posted_date}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg text-[#11111199]">{reading_time} minute read</h3>
            <svg
              onClick={() => handleReadingTime(reading_time)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
          </div>
        </div>

        <h2 className="card-title text-4xl">{title}</h2>

        <div className="flex lg:w-[30%] text-[#11111199]">
        {
            hashtags.map((hash, index) => (
                <p key={index}>#{hash}</p>
            ))
        }
        </div>

        <div>
        <button className="text-[#6047EC] underline">Mark as read</button>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleReadingTime: PropTypes.func.isRequired
}

export default Blog;
