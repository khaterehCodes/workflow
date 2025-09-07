import ReactPaginate from 'react-paginate';
import Icons from '../../atoms/icons/Icons';
function Paginate({ setCurrentPage }) {
    const pageClickHandler = (page) => {
        setCurrentPage(page.selected)
    }
    return (
        <div>
            <ReactPaginate
                previousLabel={<Icons name={'perviousPaginate'}/>}
                nextLabel={<Icons name={'nextPaginate'}/>}
                breakLabel={'...'}
                pageCount={10}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={pageClickHandler}
                containerClassName="flex justify-center w-[380px] h-[40px] items-strench border-[1px] divide-x divide-[#E4E4E7] border-[#E4E4E7] rounded-[8px]"
                pageClassName="w-[44px] h-[40px] flex items-center justify-center text-[#27272A] cursor-pointer "
                breakClassName='w-[44px] h-[40px] flex items-center justify-center text-[#27272A] cursor-pointer'
                activeClassName={'w-[44px] h-[40px] flex items-center justify-center bg-[#4763E4] text-white'}
                previousClassName='w-[44px] h-[40px] flex items-center justify-center'
                nextClassName='w-[44px] h-[40px] flex items-center justify-center'
            />
        </div>
    );
}

export default Paginate;