import Header from '../../components/AdminPageHeader';
import TabelGizi from '../../components/Table';

const DataList = () => {
  return (
    <div className='p-4 flex flex-col gap-y-20 w-[174rem] h-[50rem] -z-10'>
      <Header.DataListHeader />
      <TabelGizi />
    </div>
  );
};

export default DataList;
