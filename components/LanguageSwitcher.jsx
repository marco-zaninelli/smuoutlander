// components/LanguageSwitcher.js
import { useRouter } from 'next/router'
import Link from 'next/link'

const LanguageSwitcher = () => {
    const { locale, locales, asPath } = useRouter()

    return (
        <div>
            {locales.map((lng) => (
                <Link key={lng} href={asPath} locale={lng}>
                    <button>{lng}</button>
                </Link>
            ))}
        </div>
    )
}

export default LanguageSwitcher
