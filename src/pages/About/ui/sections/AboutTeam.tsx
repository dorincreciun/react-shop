import {CardTeam} from "@/pages/About/ui/components/CardTeam.tsx";
import {contentTeam} from "@/pages/About/config/contentPage.ts";

export const AboutTeam = () => {
    return (
        <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-100 text-center mb-12">
                    Echipa Noastră
                </h2>
                <p className="text-slate-300 text-center max-w-3xl mx-auto mb-12 text-lg">
                    O echipă dedicată de profesioniști cu experiență vastă în domeniul lor,
                    unite de pasiunea pentru inovație și serviciul excepțional.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contentTeam.map((member, index) => {
                        const {name, role, description} = member;
                        return (
                           <CardTeam key={index} name={name} role={role} description={description} />
                        )
                    })}
                </div>
            </div>
        </section>
    );
}; 