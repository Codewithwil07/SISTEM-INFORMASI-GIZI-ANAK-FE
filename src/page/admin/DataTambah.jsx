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

  const handleAdd = (e) => {
    e.preventDefault();
    if (Object.values(data).some((value) => value === '' || value === null)) {
      setAlert(true);
      setAlertMessage('Kolom tidak boleh kosong! 😭');
      setTimeout(() => {
        setAlert(false);
      }, 1000);
      return;
    }

    dispatch(createData(data)).unwrap();

    setAlertMessage('Data berhasil diperbarui! 🎉');
    setAlert(true);
    setTimeout(() => {
      navigate('/admin/data-list');
    }, 1500); //

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
          title={alertMessage.includes('berhasil') ? 'Success' : 'Error'}
          description={alertMessage}
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
      <form className='rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleAdd}>
        <div className='grid grid-cols-2 gap-5'>
          {Object.keys(data).map((key) => (
            <div key={key}>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor={key}
              >
                {key
                  .replace(/_/g, ' ')
                  .replace(/\b\w/g, (char) => char.toUpperCase())}
              </label>
              <input
                type={key.includes('persen') ? 'number' : 'text'}
                id={key}
                name={key}
                value={data[key]}
                onChange={handledata}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder={`Masukkan ${key.replace(/_/g, ' ')}`}
                required
                min={
                  key.includes('jumlah') || key.includes('bb') ? 1 : undefined
                }
                step='0.01' // Mengizinkan angka desimal dengan titik
                lang='en'
              />
            </div>
          ))}
        </div>

        <div className='flex items-center justify-between mt-6'>
          <Button.ButtonPrimary
            type='submit'
            onClick={handleAdd}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Simpan
          </Button.ButtonPrimary>
          <Button.ButtonSecondary
            type='button'
            onClick={handleBatal}
            className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Batal
          </Button.ButtonSecondary>
        </div>
      </form>
    </div>
  );
};

export default DataTambah;
