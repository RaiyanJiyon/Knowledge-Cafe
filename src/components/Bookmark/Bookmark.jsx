import PropTypes from 'prop-types';

const Bookmark = ({readingTime}) => {
    console.log(readingTime)
    return (
        <div className="md:w-[30%]">
            <div className="bg-[#6047EC1A] px-10 py-5 border border-[#6047ec] rounded-lg">
                <p className="text-[#6047EC] font-bold text-lg">Spent time on read : <span>{readingTime}</span> min</p>
            </div>
        </div>
    );
};

Bookmark.propTypes = {
    readingTime: PropTypes.number.isRequired
}

export default Bookmark;