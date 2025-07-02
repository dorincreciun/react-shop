import {Header} from "@/widgets/Header";
import {Footer} from "@/widgets/Footer";
import {RoutingStructure} from "@/app/routing";

export const RootLayout = () => {
    return (
        <div className={'layout-app'}>
            <Header/>
            <RoutingStructure/>
            <Footer/>
        </div>
    );
};