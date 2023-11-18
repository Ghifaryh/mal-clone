import { authUserSession } from '@/libs/auth-libs';
import Image from 'next/image';

const Page = async () => {
  const user = await authUserSession();
  return (
    <div>
      <h3 className='text-color-primary'>Dashboard</h3>
      <h3 className='text-color-primary'>Welcome, {user.name} </h3>
      <Image src={user.image} alt='...' width={250} height={250} />
    </div>
  );
};

export default Page;
