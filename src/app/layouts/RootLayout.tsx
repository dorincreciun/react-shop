import {AppRouter} from "@/app/routing";
import {Footer, Header} from "@/widgets";

export const RootLayout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Header/>
            <AppRouter/>
            <Footer/>
        </div>
    );
};