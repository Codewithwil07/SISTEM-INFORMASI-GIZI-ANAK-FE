import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button';
import { FaArrowLeft } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getData,
  getDataById,
  updateData,
} from '../../redux/features/gizi/giziAPI';
import {
  selectGiziItem,
  selectGiziStatus,
} from '../../redux/features/gizi/giziSelector';
import Alert from '../../components/Alert';

const DataTambah = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const item = useSelector(selectGiziItem);
  const status = useSelector(selectGiziStatus);
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // State untuk form
  const [form, setForm] = useState({
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
    dispatch(getData());
  };

  useEffect(() => {
    dispatch(getDataById(id)).unwrap();
  }, []);

  // console.log(item.data.kecamatan);

  useEffect(() => {
    if (item && item.data) {
      setForm({
        kecamatan: item.data.kecamatan || '',
        puskesmas: item.data.puskesmas || '',
        jumlah_balita_ditimbang: item.data.jumlah_balita_ditimbang || '',
        bb_u_kurang: item.data.bb_u_kurang || '',
        persen_bb_u_kurang: item.data.persen_bb_u_kurang || '',
        jumlah_balita_diukur_tinggi_badan:
          item.data.jumlah_balita_diukur_tinggi_badan || '',
        tb_u_pendek: item.data.tb_u_pendek || '',
        persen_tb_u_pendek: item.data.persen_tb_u_pendek || '',
        jumlah_balita_diukur_bb_tb: item.data.jumlah_balita_diukur_bb_tb || '',
        bb_tb_gizi_kurang: item.data.bb_tb_gizi_kurang || '',
        persen_gizi_kurang: item.data.persen_gizi_kurang || '',
        bb_tb_gizi_buruk: item.data.bb_tb_gizi_buruk || '',
        persen_gizi_buruk: item.data.persen_gizi_buruk || '',
      });
    }
  }, [item]); // Memastikan efek ini berjalan ketika item berubah

  const handleData = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const forms = {
      kecamatan: form.kecamatan,
      puskesmas: form.puskesmas,
      jumlah_balita_ditimbang: parseInt(form.jumlah_balita_ditimbang, 10) || 0,
      bb_u_kurang: parseInt(form.bb_u_kurang, 10) || 0,
      persen_bb_u_kurang: parseFloat(form.persen_bb_u_kurang) || 0.0,
      jumlah_balita_diukur_tinggi_badan:
        parseInt(form.jumlah_balita_diukur_tinggi_badan, 10) || 0,
      tb_u_pendek: parseInt(form.tb_u_pendek, 10) || 0,
      persen_tb_u_pendek: parseFloat(form.persen_tb_u_pendek) || 0.0,
      jumlah_balita_diukur_bb_tb:
        parseInt(form.jumlah_balita_diukur_bb_tb, 10) || 0,
      bb_tb_gizi_kurang: parseInt(form.bb_tb_gizi_kurang, 10) || 0,
      persen_gizi_kurang: parseFloat(form.persen_gizi_kurang) || 0.0,
      bb_tb_gizi_buruk: parseInt(form.bb_tb_gizi_buruk, 10) || 0,
      persen_gizi_buruk: parseFloat(form.persen_gizi_buruk) || 0.0,
    };

    // Validasi input
    if (Object.values(forms).some((value) => !value)) {
      setAlert(true);
      setAlertMessage('Kolom tidak boleh kosong! 😭');
      setTimeout(() => {
        setAlert(false);
      }, 1000);
      return;
    }

    dispatch(updateData({ forms, id })).unwrap();

    setAlertMessage('Data berhasil diperbarui! 🎉');
    setAlert(true);
    setTimeout(() => {
      navigate('/admin/data-list');
      dispatch(getData());
    }, 1500);
  };

  if (status === 'loading') {
    return <p>Loading...</p>; // Tampilkan loading jika status loading
  }

  return (
    <div className='container p-5 mx-auto bg-white shadow-md rounded-md'>
      {alert && (
        <Alert
          variant={alertMessage.includes('berhasil') ? 'info' : 'warning'}
          title={alertMessage.includes('berhasil') ? 'Success' : 'Error'}
          description={alertMessage}
        />
      )}
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold mb-4'>Edit Data Laporan Gizi</h1>
        <FaArrowLeft
          size={20}
          className='cursor-pointer'
          onClick={backNavigate}
        />
      </div>
      <form className='rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleAdd}>
        <div className='grid grid-cols-2 gap-5'>
          {/* Input fields */}
          {Object.keys(form).map((key) => (
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
                value={form[key]}
                onChange={handleData}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder={`Masukkan ${key.replace(/_/g, ' ')}`}
                required
                min={
                  key.includes('jumlah') || key.includes('bb') ? 1 : undefined
                }
                step={0.01}
                lang='en'
              />
            </div>
          ))}
        </div>

        <div className='flex items-center justify-between mt-6'>
          <Button.ButtonPrimary
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Simpan
          </Button.ButtonPrimary>
          <Button.ButtonSecondary
            type='button'
            onClick={backNavigate}
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
