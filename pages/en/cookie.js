export default function CookiePolicy() {
    return (
        <div className="p-8 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
            <p className="mb-4">This website uses technical cookies and third-party analytical cookies (Google Analytics).</p>
            <ul className="list-disc pl-6 mb-4">
                <li><strong>Technical cookies:</strong> Required for the website to function properly. These do not require consent.</li>
                <li><strong>Analytical cookies:</strong> Collect anonymous usage statistics (Google Analytics with anonymized IP). These require your consent.</li>
            </ul>
            <p>You can change your preferences by clicking the “Cookie Settings” button in the footer or by configuring your browser settings.</p>
        </div>
    );
}
