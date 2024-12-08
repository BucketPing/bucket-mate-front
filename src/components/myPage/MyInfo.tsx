import SettingIcon from '@/assets/icons/settings.svg';

const MyInfo = () => {
  return (
    <div className='flex justify-between px-5 py-5'>
      <div className='flex items-center'>
        <img
          className='w-[42px] h-[42px] rounded-full object-cover'
          src='https://plus.unsplash.com/premium_photo-1677545183884-421157b2da02?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fHww'
          alt='프로필 이미지'
        />
        <span className='ml-3 font-bold'>행복한고라니#121</span>{' '}
        <span className='ml-1 font-bold text-[#919191]'>님 반가워요!</span>
      </div>
      <img className='cursor-pointer' src={SettingIcon} />
    </div>
  );
};

export default MyInfo;
