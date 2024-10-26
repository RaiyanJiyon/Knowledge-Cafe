import PropTypes from "prop-types";

const Bookmark = ({ readingTime, bookmarks }) => {
    return (
        <div className="md:w-[30%]">
            <div className="bg-[#6047EC1A] px-10 py-5 border border-[#6047ec] rounded-lg">
                <h2 className="text-[#6047EC] font-bold text-lg">
                    Spent time on read : <span>{readingTime}</span> min
                </h2>
            </div>

            <div className="bg-[#ebebed] rounded-lg p-6 mt-6">
                <h2 className="font-bold text-lg">
                    Bookmarked Blogs : <span>{bookmarks.length}</span>
                </h2>
                {bookmarks && bookmarks.length > 0 ? (
                    bookmarks.map((bookmark, index) => (
                        <div key={index} className="bg-white rounded-lg mt-4 p-4">
                            <p className="font-semibold">{bookmark}</p>
                        </div>
                    ))
                ) : (
                    <p className="mt-4 text-gray-500">No bookmarks added yet</p>
                )}
            </div>
        </div>
    );
};

Bookmark.propTypes = {
    readingTime: PropTypes.number.isRequired,
    bookmarks: PropTypes.array.isRequired,
};

export default Bookmark;
