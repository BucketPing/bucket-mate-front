import search from '@/assets/icons/search.svg';

interface InputProps {
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  defaultValue?: string | number;
  onSearch?: () => void;
  onFucus?: () => void;
  onBlur?: () => void;
}

const Input = ({
  placeholder,
  onChange,
  value,
  defaultValue,
  onSearch,
  onFucus,
  onBlur,
}: InputProps) => {
  return (
    <div className='w-full flex items-center shadow-[0px_0px_10px_0px_#0000000F] rounded-[10px] py-2 px-3'>
      <input
        value={value}
        defaultValue={defaultValue}
        className='w-full rounded-lg border-none outline-none placeholder:text-[#cdd1db]'
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFucus}
        onBlur={onBlur}
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
