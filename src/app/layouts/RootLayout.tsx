import {AppRouter} from "@/app/routing";
import {Footer, Header} from "@/widgets";

export const RootLayout = () => {
    return (
        <div className={'layout-app'}>
            <Header/>
            <AppRouter/>
            <Footer/>
        </div>
    );
};