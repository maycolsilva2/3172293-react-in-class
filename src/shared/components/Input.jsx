export default function Input({
    label, 
    htmlFor,
    type= "text",
    ...props 
}){

    return(
            <div className="w-80">
                        {/*label*/}
                    <label 
                        htmlFor={htmlFor}
                        className="
                            block
                            text-caption
                            mb-1
                            text-secondary
                        "
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
                        type={type}
                        className="
                        relative
                        w-full
                        h-10
                        rounded-md
                        border border-black
                        px-4
                        text-body
                        focus:outline-none
                        focus:ring-2
                        focus:ring-ring
                        focus:ring-brand
                    "   
                     {...props} 
                    />
                    </div>


            </div>
    )
} 