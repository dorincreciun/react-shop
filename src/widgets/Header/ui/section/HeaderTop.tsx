import {EnvelopeIcon, GlobeAltIcon, PhoneIcon} from "@heroicons/react/16/solid";

export const HeaderTop = () => {
    return (
        <div className="bg-gradient-to-r from-slate-800/90 to-gray-900/90 backdrop-blur-sm border-b border-white/10">
            <div className="flex items-center justify-between gap-3 max-w-[1440px] mx-auto px-4 py-3 md:py-4">
                <div className="flex items-center gap-4 md:gap-6">
                    <a href="tel:060255043" className="flex items-center gap-2 hover:text-slate-300 transition-all duration-300 group">
                        <PhoneIcon className="h-5 w-5 text-slate-400 group-hover:scale-110 transition-transform"/>
                        <span className="hidden sm:inline text-slate-200 group-hover:text-slate-300">060 255 043</span>
                    </a>
                    <span className="hidden md:block h-6 w-px bg-gradient-to-b from-transparent via-slate-500 to-transparent" />
                    <a href="mailto:creciundorin25@gmail.com" className="flex items-center gap-2 hover:text-slate-300 transition-all duration-300 group">
                        <EnvelopeIcon className="h-5 w-5 text-slate-400 group-hover:scale-110 transition-transform" />
                        <span className="hidden sm:inline text-slate-200 group-hover:text-slate-300">creciundorin25@gmail.com</span>
                    </a>
                </div>
                <button className="flex items-center gap-2 hover:text-slate-300 transition-all duration-300 group bg-white/5 hover:bg-white/10 rounded-lg px-3 py-1">
                    <GlobeAltIcon className="h-5 w-5 text-slate-400 group-hover:scale-110 transition-transform" />
                    <span className="hidden md:inline text-slate-200 group-hover:text-slate-300 font-medium">RO</span>
                </button>
            </div>
        </div>
    )
}