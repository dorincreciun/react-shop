export const ErrorMessage = ({messages}: { messages: string[] }) => {
    return (
        <div className="mt-2 text-sm text-red-400 animate-in slide-in-from-bottom-2 duration-300 ease-out">
            <ul className="space-y-1">
                {
                    messages.map((message: string, index: number) => (
                        <li
                            key={index}
                            className="animate-in slide-in-from-bottom-1 duration-300 ease-out text-start"
                            style={{animationDelay: `${index * 100}ms`}}
                        >
                            {message}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}