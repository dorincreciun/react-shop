export const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-slate-100 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-slate-300 mb-4">
                    Pagina nu a fost găsită
                </h2>
                <p className="text-slate-400 mb-8">
                    Pagina pe care o căutați nu există sau a fost mutată.
                </p>
                <a 
                    href="/" 
                    className="inline-block bg-slate-700 hover:bg-slate-600 text-slate-100 px-6 py-3 rounded-lg transition-colors"
                >
                    Înapoi la Acasă
                </a>
            </div>
        </div>
    )
}