import Button from './Button';

const Pagination = ({ pageIndex, pageCount, onPageChange }) => {
  return (
    <div className='flex justify-center absolute bottom-0 left-[100rem] top-[48rem] -z-0 items-center mt-4 gap-x-5'>
      <Button.ButtonPrimary
        onClick={() => onPageChange(pageIndex - 1)}
        disabled={pageIndex === 0}
      >
        Previous
      </Button.ButtonPrimary>

      {/* Menampilkan nomor halaman yang dapat diklik */}
      <span className='text-lg font-medium cursor-pointer'>
        {Array.from({ length: pageCount }, (_, index) => (
          <span
            key={index}
            onClick={() => onPageChange(index)}
            className={`mx-1 ${
              pageIndex === index
                ? 'font-bold'
                : 'text-blue-600 hover:underline cursor-pointer'
            }`}
          >
            {index + 1}
          </span>
        ))}
      </span>

      <Button.ButtonPrimary
        onClick={() => onPageChange(pageIndex + 1)}
        disabled={pageIndex >= pageCount - 1}
      >
        Next
      </Button.ButtonPrimary>
    </div>
  );
};

export default Pagination;
