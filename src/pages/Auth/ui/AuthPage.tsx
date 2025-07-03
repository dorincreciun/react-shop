import {Input, PageTemplate} from "@/shared";

export const AuthPage = () => {
    return (
        <PageTemplate className='max-w-[1440px] w-full mx-auto px-4'>
            Auth page
            <Input isPassword={true} />
        </PageTemplate>
    )
}