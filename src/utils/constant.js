import * as XLSX from 'xlsx';
export const exportToExcel = (data) => {
  const sheet = XLSX.utils.json_to_sheet(data);

  const book = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(book, sheet, 'Gis');

  XLSX.writeFile(book, 'gis.xlsx');
};

export const formatDate = (item) => {
  item.map((d) => {
    const date = new Date(d.laporan_tanggal);
    const formattedDate = `${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

    return { ...d, laporan_tanggal: formattedDate };
  });
};
