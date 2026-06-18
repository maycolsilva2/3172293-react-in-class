// componente select 

export default function select ({
    label,
    error,
    htmlFor,
    name,
    onChange,
    value,
    options = [],
}){
    return(
        <div>
            {/**label solo se muestra si es truthy en uno logico */}
            {label && (
                <label 
                    htmlFor ={htmlFor}
                    className="
                    block
                    text-caption
                    text-secondary
                    "
                >
                    {label}
                </label>
            )}
            {/**select */}
            <select
                name={name}
                onChange={onChange}
                value={value}
                id={htmlFor}
                className="
                    w-80
                    h-12
                    rounded-md
                    border
                    px-4

                    hover:border
                    border:border-2
                    hover:border-focus-border
                    
                "
            >
                <option value=""> selecione una opción</option>

                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                    ))}


            </select>
             {error && (
                        <p className="text-caption text-red-800 place-self-start mt-1">{error}</p>
                )}

        </div>
    )
}