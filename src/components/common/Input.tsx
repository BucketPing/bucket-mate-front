import search from '@/assets/icons/search.svg';

interface InputProps {
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  defaultValue?: string | number;
  onSearch?: () => void;
}

const Input = ({
  placeholder,
  onChange,
  value,
  defaultValue,
  onSearch,
}: InputProps) => {
  return (
    <div className='w-full flex items-center shadow-[0px_0px_10px_0px_#0000000F] rounded-xl py-2 px-3'>
      <input
        value={value}
        defaultValue={defaultValue}
        className='w-full rounded-lg border-none outline-none placeholder:text-[#cdd1db]'
        placeholder={placeholder}
        onChange={onChange}
      />
      {onSearch && (
        <img
          src={search}
          alt='search'
          className='cursor-pointer'
          onClick={onSearch}
        />
      )}
    </div>
  );
};

export default Input;
