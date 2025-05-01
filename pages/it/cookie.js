// pages/cookie-policy.js
export default function CookiePolicy() {
    return (
        <div className="p-8 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
            <p className="mb-4">Questo sito utilizza cookie tecnici e cookie analitici di terze parti (Google Analytics).</p>
            <ul className="list-disc pl-6 mb-4">
                <li><strong>Cookie tecnici:</strong> necessari al corretto funzionamento del sito, non richiedono consenso.</li>
                <li><strong>Cookie analitici:</strong> raccolgono statistiche in forma anonima (Google Analytics con IP anonimizzato). Richiedono consenso.</li>
            </ul>
            <p>Puoi modificare le preferenze cliccando sul pulsante “Gestione cookie” nel footer o configurando il tuo browser.</p>
        </div>
    );
}