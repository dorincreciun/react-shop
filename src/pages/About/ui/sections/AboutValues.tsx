import {CardValues} from "@/pages/About/ui/components/CardValues.tsx";
import {contentCardValues} from "@/pages/About/config/contentPage.ts";

export const AboutValues = () => {
    return (
        <section className="py-16 px-4 bg-slate-800/20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-100 text-center mb-12">
                    Valorile Noastre
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contentCardValues.map((item, index) => {
                        const {title, description} = item;
                        return (
                            <CardValues key={index} title={title} description={description}/>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}; 