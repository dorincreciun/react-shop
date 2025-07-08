import {useNavigate} from "react-router";
import {APP_ROUTES} from "@/app/routing";
import {Button} from "@/shared/ui/Button/ui";

export const SectionHero = () => {
    const navigate = useNavigate()
    return (
        <div className="text-center py-16 px-4">
            {/* Titlu */}
            <h1 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6 leading-tight">
                Descoperă <span className="text-slate-300">Calitatea</span><br />
                în Fiecare <span className="text-slate-300">Produs</span>
            </h1>
            {/* Subtitlu */}
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                O experiență de cumpărare modernă și elegantă, cu produse selectate cu grijă pentru a satisface cele mai înalte standarde de calitate.
            </p>
            {/* Butoane CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                    size={"medium"}
                    content={"text"}
                    variant={"primary"}
                    label={"Explorează Produsele"}
                    onClick={(): void => {
                        navigate(APP_ROUTES.PRODUCTS)
                    }}
                />
                <Button
                    size={"medium"}
                    content={"text"}
                    variant={"secondary"}
                    label={"Află Mai Multe"}
                    onClick={(): void => {
                        navigate(APP_ROUTES.ABOUT)
                    }}
                />
            </div>
        </div>
    )
}