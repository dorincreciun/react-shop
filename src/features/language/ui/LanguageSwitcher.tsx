import {Button} from "@/shared";
import {GlobeAltIcon} from "@heroicons/react/16/solid";

export const LanguageSwitcher = () => {
    return (
        <div>
            <Button
                label={'RO'}
                size={'small'}
                variant={'secondary'}
                iconPosition={'left'}
                content={'icon-text'}
                icon={<GlobeAltIcon className="h-6 w-6"/>}
            />
        </div>
    )
}