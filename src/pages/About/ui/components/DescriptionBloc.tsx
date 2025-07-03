import type {FC} from "react";
import type {DescriptionBlockType} from "@/pages/About/model/types.ts";

export const DescriptionBlock: FC<DescriptionBlockType> = (props) => {
    const {title, content} = props;
    return (
        <div>
            <h2 className="text-3xl font-bold text-slate-100 mb-6">{title}</h2>
            {
                content.map((item, index) => {
                    return (
                        <p key={index} className="text-slate-300 text-lg leading-relaxed mb-6">{item}</p>
                    )
                })
            }
        </div>
    )
}

/*
<div>
    <h2 className="text-3xl font-bold text-slate-100 mb-6">
        Misiunea Noastră
    </h2>
    <p className="text-slate-300 text-lg leading-relaxed mb-6">
        Să simplificăm experiența de cumpărare prin tehnologie modernă și
        să oferim produse de calitate care îmbunătățesc viața clienților noștri.
    </p>
    <p className="text-slate-300 leading-relaxed">
        Credem că fiecare interacțiune cu un client este o oportunitate
        de a construi o relație de încredere și de a depăși așteptările.
    </p>
</div>*/

/*<div>
    <h2 className="text-3xl font-bold text-slate-100 mb-6">
        Viziunea Noastră
    </h2>
    <p className="text-slate-300 text-lg leading-relaxed mb-6">
        Să devenim liderul în experiența digitală de cumpărare,
        inovând constant și adaptându-ne la nevoile în evoluție ale pieței.
    </p>
    <p className="text-slate-300 leading-relaxed">
        Ne propunem să creăm o platformă care să inspire încredere,
        să faciliteze deciziile de cumpărare și să ofere valoare reală.
    </p>
</div>*/
