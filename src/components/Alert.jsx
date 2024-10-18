/* eslint-disable react/prop-types */
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid'; // Pastikan kamu memiliki ikon ini

const variants = {
  success: {
    icon: <CheckCircleIcon className='h-6 w-6 text-green-500' />,
    bgColor: 'bg-green-50',
    textColor: 'text-green-800',
    borderColor: 'border-green-300',
  },
  error: {
    icon: <XCircleIcon className='h-6 w-6 text-red-500' />,
    bgColor: 'bg-red-50',
    textColor: 'text-red-800',
    borderColor: 'border-red-300',
  },
  warning: {
    icon: <ExclamationCircleIcon className='h-6 w-6 text-yellow-500' />,
    bgColor: 'bg-yellow-50',
    textColor: 'text-yellow-800',
    borderColor: 'border-yellow-300',
  },
  info: {
    icon: <InformationCircleIcon className='h-6 w-6 text-blue-500' />,
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-800',
    borderColor: 'border-blue-300',
  },
};

const Alert = ({ variant = 'info', title, description }) => {
  const currentVariant = variants[variant] || variants.info;

  return (
    <div
      className={`flex p-4 mb-4 border-l-4 rounded-lg ${currentVariant.bgColor} ${currentVariant.borderColor} sticky right-32 top-3 `}
      role='alert'
    >
      <div className='flex-shrink-0'>{currentVariant.icon}</div>
      <div className='ml-3'>
        <h3 className={`font-medium ${currentVariant.textColor}`}>{title}</h3>
        <div className={`mt-1 text-sm ${currentVariant.textColor}`}>
          {description}
        </div>
      </div>
    </div>
  );
};

export default Alert;
