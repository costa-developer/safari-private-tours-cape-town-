import Image from 'next/image';
import Link from 'next/link';

const Logo = (props: { sticky: boolean }) => {
    const { sticky } = props;
    return (
        <Link href="/">
            <Image
                src={sticky ? "/images/logo/sticky_logo.svg" : "/images/logo/WhiteLogo.svg"}
                alt="logo"
                width={190}
                height={34}
                style={{ width: 'auto', height: 'auto' }}
                quality={100}
                priority={true}
                className='hidden xsm:block'
            />
            <Image src={sticky ? "/images/logo/favicondark.svg" : "/images/logo/favicon.svg"} alt='logo' width={40} height={40} className='block xsm:hidden' />
        </Link>
    );
};

export default Logo;
