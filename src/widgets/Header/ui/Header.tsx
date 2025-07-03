import { ShoppingBagIcon} from "@heroicons/react/16/solid";
import {HeaderTop} from "./section/HeaderTop.tsx";
import {ButtonIcon} from "@/shared";
import {AuthButton} from "@/features/auth";
import {Menu} from "@/features";

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
                    <Menu />

                    {/* Actions */}
                    <div className="flex items-center space-x-4">
                        <ButtonIcon badge={{count: 100}} icon={<ShoppingBagIcon className="h-6 w-6"/>}/>
                        <AuthButton />
                    </div>
                </div>
            </div>
        </header>
    )
}