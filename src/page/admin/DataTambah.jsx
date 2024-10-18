import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { FaArrowLeft } from 'react-icons/fa';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createData, getData } from '../../redux/features/gizi/giziAPI';
import Alert from '../../components/Alert';

const DataTambah = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const dispatch = useDispatch();
  const [data, setData] = useState({
    kecamatan: '',
    puskesmas: '',
    jumlah_balita_ditimbang: '',
    bb_u_kurang: '',
    persen_bb_u_kurang: '',
    jumlah_balita_diukur_tinggi_badan: '',
    tb_u_pendek: '',
    persen_tb_u_pendek: '',
    jumlah_balita_diukur_bb_tb: '',
    bb_tb_gizi_kurang: '',
    persen_gizi_kurang: '',
    bb_tb_gizi_buruk: '',
    persen_gizi_buruk: '',
  });

  const backNavigate = () => {
    navigate('/admin/data-list');
  };

  const handledata = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSucces = (newData) => {
    dispatch(getData(newData));
  };

  const handleAdd = () => {
    if (Object.values(data).some((value) => value === '' || value === null)) {
      setAlert(true);
      setAlertMessage('Kolom tidak boleh kosong! 😭');
      setTimeout(() => {
        setAlert(false);
      }, 1000);
      return;
    }

    dispatch(createData(data))
      .unwrap()
      .then((newData) => {
        handleSucces(newData);
      })
      .catch((err) => console.error(err.message));
    setData({
      kecamatan: '',
      puskesmas: '',
      jumlah_balita_ditimbang: '',
      bb_u_kurang: '',
      persen_bb_u_kurang: '',
      jumlah_balita_diukur_tinggi_badan: '',
      tb_u_pendek: '',
      persen_tb_u_pendek: '',
      jumlah_balita_diukur_bb_tb: '',
      bb_tb_gizi_kurang: '',
      persen_gizi_kurang: '',
      bb_tb_gizi_buruk: '',
      persen_gizi_buruk: '',
    });
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 1000);
    return;
  };

  const handleBatal = () => {
    setData({
      kecamatan: '',
      puskesmas: '',
      jumlah_balita_ditimbang: '',
      bb_u_kurang: '',
      persen_bb_u_kurang: '',
      jumlah_balita_diukur_tinggi_badan: '',
      tb_u_pendek: '',
      persen_tb_u_pendek: '',
      jumlah_balita_diukur_bb_tb: '',
      bb_tb_gizi_kurang: '',
      persen_gizi_kurang: '',
      bb_tb_gizi_buruk: '',
      persen_gizi_buruk: '',
    });
  };

  return (
    <div className='container p-5 mx-auto bg-whitetaker shadow-md rounded-md'>
      {alert && (
        <Alert
          variant={alertMessage.includes('berhasil') ? 'info' : 'warning'}
          title={alertMessage.includes('berhasil') ? 'info' : 'warning'}
          description={
            alertMessage.includes('berhasil')
              ? 'Data gagal ditambahkan! 😭'
              : 'Data berhasil ditambahkan! 😭'
          }
        />
      )}
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold mb-4'>Tambah Data Laporan Gizi</h1>
        <FaArrowLeft
          size={20}
          className='cursor-pointer'
          onClick={backNavigate}
        />
      </div>
      <div className='rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleAdd}>
        <div className='grid grid-cols-2 gap-5'>
          <div>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='kecamatan'
            >
              Kecamatan
            </label>
            <input
              type='text'
              id='kecamatan'
              name='kecamatan'
              value={data.kecamatan}
              onChange={handledata}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Masukkan nama kecamatan'
              required
            />
          </div>

          <div>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='puskesmas'
            >
              Puskesmas
            </label>
            <input
              type='text'
              id='puskesmas'
              name='puskesmas'
              value={data.puskesmas}
              onChange={handledata}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Masukkan nama puskesmas'
              required
            />
          </div>

          <div>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='jumlah_balita_ditimbang'
            >
              Jumlah Balita Ditimbang
            </label>
            <input
              type='number'
              id='jumlah_balita_ditimbang'
              name='jumlah_balita_ditimbang'
              value={data.jumlah_balita_ditimbang}
              onChange={handledata}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Masukkan jumlah balita ditimbang'
              required
              min={0}
            />
          </div>

          <div>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='bb_u_kurang'
            >
              BB U Kurang
            </label>
            <input
              type='number'
              id='bb_u_kurang'
              name='bb_u_kurang'
              value={data.bb_u_kurang}
              onChange={handledata}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Masukkan BB U Kurang'
              required
              min={0}
            />
          </div>

          <div>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='persen_bb_u_kurang'
            >
              Persen BB U Kurang
            </label>
            <input
              type='number'
              id='persen_bb_u_kurang'
              name='persen_bb_u_kurang'
              value={data.persen_bb_u_kurang}
              onChange={handledata}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Masukkan persen BB U Kurang'
              required
              min={0}
            />
          </div>

          <div>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='jumlah_balita_diukur_tinggi_badan'
            >
              Jumlah Balita Diukur Tinggi Badan
            </label>
            <input
              type='number'
              id='jumlah_balita_diukur_tinggi_badan'
              name='jumlah_balita_diukur_tinggi_badan'
              value={data.jumlah_balita_diukur_tinggi_badan}
              onChange={handledata}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Masukkan jumlah balita diukur tinggi badan'
              required
              min={0}
            />
          </div>

          <div>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='tb_u_pendek'
            >
              TB U Pendek
            </label>
            <input
              type='number'
              id='tb_u_pendek'
              name='tb_u_pendek'
              value={data.tb_u_pendek}
              onChange={handledata}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Masukkan TB U Pendek'
              required
              min={0}
            />
          </div>

          <div>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='persen_tb_u_pendek'
            >
              Persen TB U Pendek
            </label>
            <input
              type='number'
              id='persen_tb_u_pendek'
              name='persen_tb_u_pendek'
              value={data.persen_tb_u_pendek}
              onChange={handledata}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Masukkan persen TB U Pendek'
              required
              min={0}
            />
          </div>

          <div>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='jumlah_balita_diukur_bb_tb'
            >
              Jumlah Balita Diukur BB TB
            </label>
            <input
              type='number'
              id='jumlah_balita_diukur_bb_tb'
              name='jumlah_balita_diukur_bb_tb'
              value={data.jumlah_balita_diukur_bb_tb}
              onChange={handledata}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Masukkan jumlah balita diukur BB TB'
              required
              min={0}
            />
          </div>

          <div>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='bb_tb_gizi_kurang'
            >
              BB TB Gizi Kurang
            </label>
            <input
              type='number'
              id='bb_tb_gizi_kurang'
              name='bb_tb_gizi_kurang'
              value={data.bb_tb_gizi_kurang}
              onChange={handledata}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Masukkan BB TB Gizi Kurang'
              required
              min={0}
            />
          </div>

          <div>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='persen_gizi_kurang'
            >
              Persen Gizi Kurang
            </label>
            <input
              type='number'
              id='persen_gizi_kurang'
              name='persen_gizi_kurang'
              value={data.persen_gizi_kurang}
              onChange={handledata}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Masukkan persen gizi kurang'
              required
              min={0}
            />
          </div>

          <div>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='bb_tb_gizi_buruk'
            >
              BB TB Gizi Buruk
            </label>
            <input
              type='number'
              id='bb_tb_gizi_buruk'
              name='bb_tb_gizi_buruk'
              value={data.bb_tb_gizi_buruk}
              onChange={handledata}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Masukkan BB TB Gizi Buruk'
              required
              min={0}
            />
          </div>

          <div>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='persen_gizi_buruk'
            >
              Persen Gizi Buruk
            </label>
            <input
              type='number'
              id='persen_gizi_buruk'
              name='persen_gizi_buruk'
              value={data.persen_gizi_buruk}
              onChange={handledata}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Masukkan persen gizi buruk'
              required
              min={0}
            />
          </div>
        </div>

        <div className='flex items-center justify-between mt-6'>
          <Button.ButtonPrimary
            type='submit'
            onClick={handleAdd}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Tambah Data
          </Button.ButtonPrimary>
          <Button.ButtonSecondary
            type='button'
            onClick={handleBatal}
            className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Batal
          </Button.ButtonSecondary>
        </div>
      </div>
    </div>
  );
};

export default DataTambah;
