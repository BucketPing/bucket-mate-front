import ChevronRightIcon from '@/assets/icons/chevron-right.svg';

const List = ({ children }: { children: React.ReactNode }) => {
  return <ul className='flex flex-col gap-5'>{children}</ul>;
};

const Button = ({
  children,
  onClick,
  icon,
}: {
  children: React.ReactNode;
  onClick: () => void;
  icon?: string;
}) => {
  return (
    <button
      className='flex w-full p-0 justify-between text-[#292A2C] font-medium'
      onClick={onClick}
    >
      <span>
        {icon}
        <span className='ml-3 text-base'>{children}</span>
      </span>
      <img src={ChevronRightIcon} alt='' />
    </button>
  );
};

export const MyPageMenu = {
  List,
  Button,
};
