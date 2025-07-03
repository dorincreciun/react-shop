import {AppRouter} from "@/app/routing";
import {Footer, Header} from "@/widgets";

export const RootLayout = () => {
    return (
        <div className='min-h-screen flex flex-col relative'>
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient circles */}
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-slate-500/5 rounded-full blur-3xl"></div>
                
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 flex flex-col min-h-screen">
                <Header/>
                <AppRouter/>
                <Footer/>
            </div>
        </div>
    );
};