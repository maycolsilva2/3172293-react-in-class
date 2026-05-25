export default function Input({
    label, 
    htmlFor,
    type= "text",
    variant= "primary",
    size= "lg",
    ...props 
}){

    const variants = {
        // Obligatorio que estos valores deben de ser con variables
        primary:`
                border-brand
                bg-background
        `, 
        secundary:`
                border-red-950
                bg-gray-300
        `, 
        tertiary:`
                border-green-950
        `
    }
    const sizes = {
        sm:`
              h-8
        `, 
        md:`
                h-10
        `, 
        lg:`
                h-12
        `
    }

    return(
            <div className="w-80">
                        {/*label*/}
                    <label 
                        // htmlFor con kebab-case
                        htmlFor={htmlFor}
                        className={`
                            block
                            text-caption
                            text-secondary
                            ${
                                size === "sm"
                                    ? "-mb-2"
                                    : size === "md"
                                        ? "mb-0"
                                        : "mb-1"
                            }
                        
                        
                        `}
                        >
                        {label}
                    </label>

                    {/* Contenedor del input*/}
                    <div 
                        className="
                            relative
                            h-12
                            flex
                            items-center 
                        "
                    >
                    {/* Arrea interactiva invisible (48px)*/}

                    <div
                     
                        className="
                        absolute 
                        inset-0
                       "
                       onMouseDown={(e) => {
                        e.preventDef
                        e.currentTarget.nextSibling.focus();
                       }}
                    />


                    {/* input visual*/}
                    <input 
                        id={htmlFor}
                        type={type}
                        className={`
                        relative
                        w-full
                        rounded-md
                        border
                        px-4
                        text-body

                        focus:outline-none
                        focus:ring-2
                        focus:ring-ring
                        focus:ring-brand
                        ${variants[variant]}
                        ${sizes[size]}
                   `}
                     {...props} 
                    />
                    </div>


            </div>
    )
} 