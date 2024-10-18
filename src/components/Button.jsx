/* eslint-disable react/prop-types */
const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`py-2 px-4 rounded-md cursor-pointer font-semibold ${className}`} // Menyertakan kelas umum
      {...props} // Menyertakan props lain seperti onClick, disabled, dll.
    >
      {children}
    </button>
  );
};

// Variasi tombol utama
const ButtonPrimary = ({ children, className, ...props }) => {
  return (
    <Button
      className={`bg-blue-500 text-white hover:bg-blue-600 focus:ring-4 focus:ring-blue-500 ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

// Variasi tombol sekunder
const ButtonSecondary = ({ children, className, ...props }) => {
  return (
    <Button
      className={`bg-gray-500 text-white hover:bg-gray-600 focus:ring-4 focus:ring-gray-500 ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

// Variasi tombol success
const ButtonSuccess = ({ children, className, ...props }) => {
  return (
    <Button
      className={`bg-green-500 text-white hover:bg-green-600 focus:ring-4 focus:ring-green-500 ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

// Variasi tombol danger
const ButtonDanger = ({ children, className, ...props }) => {
  return (
    <Button
      className={`bg-red-500 text-white hover:bg-red-600 focus:ring-4 focus:ring-red-500 ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

// Menambahkan varian tombol ke Button utama
Button.ButtonPrimary = ButtonPrimary;
Button.ButtonSecondary = ButtonSecondary;
Button.ButtonSuccess = ButtonSuccess;
Button.ButtonDanger = ButtonDanger;

export default Button;
