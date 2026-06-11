// componente select 

export default function select ({
    label,
    htmlFor,
    name,
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
                id="htmlFor"
                className="
                    w-80
                    h-12
                    rounded-md
                    border
                    px-4

                    hover:border
                    hover:border-2
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

        </div>
    )
}