import bucketThumbnailSrc from '@/assets/images/bucketThumbnail.webp';

const Thumbnail = () => {
  return (
    <div className='aspect-[67/36] my-3'>
      <img src={bucketThumbnailSrc} alt='버킷 썸네일' />
    </div>
  );
};

export default Thumbnail;
