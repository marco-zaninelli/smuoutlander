import { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

// Create Language Context
const LanguageContext = createContext();

// LanguageProvider component
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(null);
    const router = useRouter();

    // Get language from path name or localStorage
    useEffect(() => {
        // Try to get language from localStorage first
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
            setLanguage(storedLanguage);
        } else {
            const pathname = router.pathname;
            if (pathname.startsWith('/en')) {
                setLanguage('en');
            } else if (pathname.startsWith('/it')) {
                setLanguage('it');
            } else {
                setLanguage('it');
            }
        }
    }, [router.pathname]);

    function handleChange(url) {
        const newLanguage = language === 'it' ? 'en' : 'it';
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);  // Persist the selected language
        router.push(`/${newLanguage}/${url}`);
    }

    return (
        <LanguageContext.Provider value={{ language, handleChange }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
