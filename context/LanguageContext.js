// context/LanguageContext.js
import { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

// Create Language Context
const LanguageContext = createContext();

// LanguageProvider component
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(null);
    const router = useRouter();

    // Get language from path name
    useEffect(() => {
        const pathname = router.pathname;

        if (pathname.startsWith('/en')) {
            setLanguage('en');
        } else if (pathname.startsWith('/')) {
            setLanguage('it');
        } else {
            setLanguage('it');
        }
    }, []);


    function handleChange(url) {
        if (language === 'it') {
            setLanguage('en');
            router.push(url);
        } else {
            setLanguage('it');
            router.push(url);
        }
    }

    return (
        <LanguageContext.Provider value={{ language, handleChange }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
