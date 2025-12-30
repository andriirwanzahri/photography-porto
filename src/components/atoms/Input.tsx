function Input({
    label,
    type,
    id,
    name,
    placeholder,
}: {
    label: string
    type: string
    id: string
    name: string
    placeholder: string
}) {
    return (
        <div>
            <label className="mb-2 block font-medium" htmlFor={id}>
                {label}
            </label>
            <input
                className="w-64 rounded border border-gray-300 p-2"
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input
