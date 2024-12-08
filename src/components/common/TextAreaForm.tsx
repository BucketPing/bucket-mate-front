interface Props {
  rows: number;
  maxLength: number;
  id: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaForm = ({
  rows,
  maxLength,
  id,
  value,
  placeholder,
  onChange,
}: Props) => {
  return (
    <div className='w-full py-4 px-3 flex items-center rounded-[10px] bg-[#F5F6F8]'>
      <textarea
        rows={rows}
        maxLength={maxLength}
        id={id}
        value={value}
        className='w-full text-base outline-none bg-[#F5F6F8] resize-none placeholder-[#CDD1DB]'
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextAreaForm;
