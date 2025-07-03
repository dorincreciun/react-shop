import {PageTemplate} from "@/shared";
import {AboutHero} from "./sections/AboutHero";
import {AboutMission} from "./sections/AboutMission";
import {AboutTeam} from "./sections/AboutTeam";
import {AboutValues} from "./sections/AboutValues";

export const AboutPage = () => {
    return (
        <PageTemplate>
            <AboutHero/>
            <AboutMission/>
            <AboutValues/>
            <AboutTeam/>
        </PageTemplate>
    );
};