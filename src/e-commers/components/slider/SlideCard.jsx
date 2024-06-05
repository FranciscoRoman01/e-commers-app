import PropTypes from 'prop-types';

export function SlideCard ({category}) {
    return(
        <div className="relative w-[450px] h-[450px] bg-white rounded-xl shadow dark:bg-gray-700 overflow-hidden">
            <img src={category.image} alt={category.name} className="absolute top-0 left-0 w-full h-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center p-4">
                <div className='flex flex-col items-center justify-around w-full h-full'>
                    <div>
                        <h5 className="text-xs text-white uppercase font-bold">Category:</h5>
                        <h5 className="text-4xl text-white z-10 font-bold">{category.name}</h5>
                    </div>
                    <button className="bg-white w-[8rem] text-xs font-bold rounded-md px-5 py-3" >Go to store</button>
                </div>
            </div>
        </div>
    )
}

SlideCard.propTypes = {
    category: PropTypes.object
}