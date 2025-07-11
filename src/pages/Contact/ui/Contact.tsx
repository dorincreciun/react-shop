import {PageTemplate} from "@/shared";
import {Input} from "@/shared/ui/Input";
import {EnvelopeIcon} from "@heroicons/react/16/solid";

export const ContactPage = () => {
    return (
        <PageTemplate>
           <Input
               type={'password'}
               toggleMask
               iconStart={<EnvelopeIcon className="h-6 w-6" />}
               errorMessages={['Wdnenvnn jenjrnbtrnjb wjnfj', 'esfgtnrt 4ergrt wr3wfv wfe']}
           />
        </PageTemplate>
    )
}