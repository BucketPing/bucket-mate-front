import type { ReactNode } from 'react';

interface ButtonProps {
  variant: 'primary' | 'black';
  children: string | ReactNode;
  onClick: () => void;
}

const Button = ({ variant, children, onClick }: ButtonProps) => {
  const variantStyle =
    variant === 'black'
      ? 'bg-black text-white hover:bg-[#0e0e0e]'
      : 'bg-[#0073FF] text-white';
  return (
    <button
      className={`${variantStyle} rounded-[10px] h-[48px] cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
