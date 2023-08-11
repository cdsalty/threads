import { sidebarLinks } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';

const LeftSidebar = () => {
  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link, index) => (
          <Link href={link.route} key={link.label} className="letsidebar_link">
            <Image src={link.imgURL} alt={link.label} height={24} width={24} />
            <p className="text-light-1 max-lg:hidden">{link.label}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LeftSidebar;

// https://youtu.be/O5cmLDVTgAs?t=2868
