import { ko } from 'date-fns/locale';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = ({
  label,
  selectedDate,
  onChange,
  minDate,
  selectsStart,
  selectsEnd,
}: {
  label: string;
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
  minDate?: Date | null;
  selectsStart?: boolean;
  selectsEnd?: boolean;
}) => (
  <label className='text-[#7B7D83] font-medium text-sm'>
    {label}
    <DatePicker
      locale={ko}
      selected={selectedDate}
      selectsEnd={selectsEnd}
      onChange={onChange}
      minDate={minDate || undefined}
      selectsStart={selectsStart}
      dateFormat='yyyy.MM.dd'
      placeholderText='날짜를 선택해주세요'
      className='w-full border-none outline-none bg-transparent text-[#292A2C] font-bold text-sm'
    />
  </label>
);

export default DateInput;
