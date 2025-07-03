import {DescriptionBlock} from "@/pages/About/ui/components/DescriptionBloc.tsx";


export const AboutMission = () => {
    return (
        <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <DescriptionBlock
                        title={'Misiunea Noastră'}
                        content={[
                            "Să simplificăm experiența de cumpărare prin tehnologie modernă și\n" +
                            "să oferim produse de calitate care îmbunătățesc viața clienților noștri.",
                            "Credem că fiecare interacțiune cu un client este o oportunitate\n" +
                            "de a construi o relație de încredere și de a depăși așteptările."
                        ]}
                    />
                    <DescriptionBlock
                        title={'Viziunea Noastră'}
                        content={[
                            "Să devenim liderul în experiența digitală de cumpărare,\n" +
                            "inovând constant și adaptându-ne la nevoile în evoluție ale pieței.",
                            "Ne propunem să creăm o platformă care să inspire încredere,\n" +
                            "să faciliteze deciziile de cumpărare și să ofere valoare reală."
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}; 