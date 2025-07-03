import {BellIcon, ShoppingBagIcon, UserPlusIcon} from "@heroicons/react/16/solid";
import {HeaderTop} from "./section/HeaderTop.tsx";
import {ButtonIcon} from "@/shared";

export const Header = () => {
    return (
        <header className="bg-slate-800/20 backdrop-blur-md border-b border-slate-600/30 sticky top-0 z-50">
            <HeaderTop/>
            <div className="max-w-[1440px] mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo/Brand */}
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-slate-100">
                            ReactShop
                        </h1>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-slate-300 hover:text-slate-100 transition-colors font-medium">
                            Acasă
                        </a>
                        <a href="#" className="text-slate-300 hover:text-slate-100 transition-colors font-medium">
                            Produse
                        </a>
                        <a href="#" className="text-slate-300 hover:text-slate-100 transition-colors font-medium">
                            Despre
                        </a>
                        <a href="#" className="text-slate-300 hover:text-slate-100 transition-colors font-medium">
                            Contact
                        </a>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center space-x-4">
                        <ButtonIcon badge={{count: 100}} icon={<ShoppingBagIcon className="h-6 w-6"/>}/>
                        <ButtonIcon icon={<UserPlusIcon className="h-6 w-6"/>}/>
                        <ButtonIcon icon={<BellIcon className="h-6 w-6"/>}/>
                    </div>
                </div>
            </div>
        </header>
    )
}