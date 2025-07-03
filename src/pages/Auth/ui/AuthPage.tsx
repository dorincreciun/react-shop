import {Input, PageTemplate, Button} from "@/shared";

export const AuthPage = () => {
    return (
        <PageTemplate className='flex items-center justify-center px-4'>
            <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700 backdrop-blur-sm">
                {/* Formularul în dreapta */}
                <div className="flex-1 w-[400px]">
                    <h1 className="text-xl font-bold text-white mb-4">Conectare</h1>
                    
                    <form className="space-y-4">
                        <Input
                            type="email"
                            placeholder="Email"
                        />

                        <Input
                            isPassword={true}
                            placeholder="Parolă"
                        />

                        <Button
                            variants="primary"
                            size="medium"
                            className="w-full"
                        >
                            Conectare
                        </Button>
                    </form>
                </div>
            </div>
        </PageTemplate>
    )
}