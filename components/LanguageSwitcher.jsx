import { useRouter } from 'next/router';
import Link from 'next/link';

// Language switcher for toggling between locales
const LanguageSwitcher = () => {
    const { locale, locales, asPath } = useRouter(); // Get current locale, available locales, and current path

    return (
        <div>
            {locales.map((lng) => (
                <Link key={lng} href={asPath} locale={lng}>
                    {/* Button for each available language */}
                    <button>
                        {lng}
                    </button>
                </Link>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
