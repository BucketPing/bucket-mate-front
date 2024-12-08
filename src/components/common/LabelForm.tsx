interface Props {
  id: string;
  label: string;
}

const LabelForm = ({ id, label }: Props) => {
  return (
    <div className='pt-9 pb-2'>
      <label
        htmlFor={id}
        className=' text-[#919191] text-base font-medium tracking-tighter'
      >
        {label}
        <span className='text-red-500 ml-1'>*</span>
      </label>
    </div>
  );
};

export default LabelForm;
