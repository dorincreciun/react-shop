import {HeaderTop} from "./section/HeaderTop.tsx";
import {ButtonAuth, ButtonCart, Menu} from "@/features";
import {APP_ROUTES} from "@/app/routing";
import {Link} from "react-router";

export const Header = () => {
    return (
        <header className="bg-slate-800/20 backdrop-blur-md border-b border-slate-600/30 sticky top-0 z-50">
            <HeaderTop/>
            <div className="max-w-[1440px] mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo/Brand */}
                    <div className="flex items-center">
                        <Link to={APP_ROUTES.HOME} className='text-2xl font-bold text-slate-100'>ReactShop</Link>
                    </div>

                    {/* Navigation */}
                    <Menu />

                    {/* Actions */}
                    <div className="flex items-center space-x-4">
                        <ButtonCart/>
                        <ButtonAuth/>
                    </div>
                </div>
            </div>
        </header>
    )
}