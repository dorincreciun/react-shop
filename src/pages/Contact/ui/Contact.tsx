import {PageTemplate} from "@/shared";
import {Input} from "@/shared/ui/Input";
import {useState} from "react";

export const ContactPage = () => {
    const [showError, setShowError] = useState(false)

    const message = [
        "wdwdwdwevbr wadw wd",
        "wdwdwdwd g ftn547"
    ]

    return (
        <PageTemplate>

            <div className={'max-w-[700px] mx-auto p-10 bg-slate-800/20 rounded-xl border border-slate-600/20 text-center group hover:bg-slate-700/20 transition-colors duration-300'}>
                <div className={'space-y-4'}>
                    {/* Email input */}
                    <Input
                        type={'email'}
                        placeholder={'Email'}
                    />

                    {/* Password input */}
                    <Input
                        type="password"
                        toggleMask
                        errorMessages={showError ? message : undefined}
                    />

                    <button onClick={() => setShowError((prev) => !prev)}>Show Error</button>
                </div>
            </div>

        </PageTemplate>
    )
}