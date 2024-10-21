import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  createColumnHelper,
  flexRender,
} from '@tanstack/react-table';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  selectGiziItem,
  selectGiziStatus,
} from '../redux/features/gizi/giziSelector';
import {
  getData,
  // getDataById,
  removeData,
} from '../redux/features/gizi/giziAPI';
import Pagination from './Pagination';
import { FaTrash, FaEdit } from 'react-icons/fa';
import Tooltip from '../components/Tooltip';
import { useNavigate } from 'react-router-dom';
import { exportToExcel } from '../utils/constant';

const TabelGizi = () => {
  const dispatch = useDispatch();
  const item = useSelector(selectGiziItem);
  const status = useSelector(selectGiziStatus);
  const navigate = useNavigate();
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize] = useState(10);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getData());
    }
  }, [status, dispatch]);

  const handleEdit = (rowData) => {
    navigate('/admin/data-edit/' + rowData.id);
  };

  const handleDelete = async (id) => {
    try {
      await dispatch(removeData(id)).unwrap();
      console.log(`Data dengan ID ${id} berhasil dihapus.`);
    } catch (error) {
      console.error('Error removing', error);
    }
  };

  // Definisi kolom
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor('id', {
      header: 'NO',
    }),
    columnHelper.accessor('kecamatan', {
      header: 'Kecamatan',
    }),
    columnHelper.accessor('puskesmas', {
      header: 'Puskesmas',
    }),
    columnHelper.accessor('jumlah_balita_ditimbang', {
      header: 'Jumlah Balita Ditimbang',
    }),
    columnHelper.accessor('bb_u_kurang', {
      header: 'Berat Badan Kurang',
    }),
    columnHelper.accessor('persen_bb_u_kurang', {
      header: 'Persen Berat Badan Underweight Kurang(%)',
    }),
    columnHelper.accessor('jumlah_balita_diukur_tinggi_badan', {
      header: 'Jumlah Balita Diukur Tinggi Badan',
    }),
    columnHelper.accessor('tb_u_pendek', {
      header: 'Tinggi Badan Pendek',
    }),
    columnHelper.accessor('persen_tb_u_pendek', {
      header: 'Persen Tinggi Badan Pendek(%)',
    }),
    columnHelper.accessor('jumlah_balita_diukur_bb_tb', {
      header: 'Jumlah Balita Diukur BB dan TB',
    }),
    columnHelper.accessor('bb_tb_gizi_kurang', {
      header: 'BB TB Gizi Kurang',
    }),
    columnHelper.accessor('persen_gizi_kurang', {
      header: 'Persen Gizi Kurang(%)',
    }),
    columnHelper.accessor('bb_tb_gizi_buruk', {
      header: 'BB TB Gizi Buruk',
    }),
    columnHelper.accessor('persen_gizi_buruk', {
      header: 'Persen Gizi Buruk(%)',
    }),
    columnHelper.accessor('laporan_tanggal', {
      header: 'Tanggal Laporan',
    }),
    columnHelper.display({
      id: 'action',
      header: 'Action',
      cell: ({ row }) => (
        <div className='flex justify-around items-center gap-x-5'>
          <Tooltip text={'edit'} position='top'>
            <button
              onClick={() => handleEdit(row.original)}
              className='text-blue-600 hover:underline'
            >
              <FaEdit size={20} />
            </button>
          </Tooltip>
          <Tooltip text={'delete'} position='top'>
            <button
              onClick={() => handleDelete(row.original.id)}
              className='text-red-600 hover:underline'
            >
              <FaTrash size={20} />
            </button>
          </Tooltip>
        </div>
      ),
    }),
  ];

  // Data
  const data = item || [];

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination: {
        pageIndex,
        pageSize,
      },
    },
    onPaginationChange: (updater) => {
      setPageIndex((old) =>
        typeof updater === 'function' ? updater(old) : updater
      );
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className='text-sm'>
      <div className='flex w-full items-center justify-around px-4 py-5'>
        <Button.ButtonPrimary onClick={() => navigate('/admin/data-tambah')}>
          Tambah data
        </Button.ButtonPrimary>
        <h1 className='font-bold text-xl'>
          Tabel Gizi Balita di Kabupaten Sumenep
        </h1>
        <Button.ButtonSuccess onClick={() => exportToExcel(data)}>
          Ekspor data
        </Button.ButtonSuccess>
      </div>

      {status === 'loading' ? (
        <p>Loading...</p>
      ) : status === 'success' && data.length > 0 ? (
        <>
          <table className='table-auto border-collapse min-w-max'>
            <thead className='bg-gray-100'>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className='border'>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className='px-4 py-2 text-left text-sm font-medium text-gray-900 border border-gray-200'
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className='hover:bg-gray-50'>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className='px-4 py-2 text-sm text-gray-700 border border-gray-200'
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {data.length > 10 && (
            <Pagination
              pageIndex={table.getState().pagination.pageIndex}
              onPageChange={setPageIndex}
              pageCount={table.getPageCount()}
            />
          )}
        </>
      ) : (
        <p className='text-center p-10'>Data Tidak ditemukan</p>
      )}
    </div>
  );
};

export default TabelGizi;
