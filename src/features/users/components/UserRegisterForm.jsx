// userRegisterForm componente para registrar un usuario
import { useState, useEffect } from  "react"
import { Input, Select, Checkbox, Button } from "@/shared"
import { getDocumentTypes } from "@/services/selectServices";


export default function UserRegisterForm (){
// Estado del formulario
    const [FormData, setFormData] = useState({
        userName:"",
        userEmail:"",
        userPhone:"",
        userDocumentType:"",
        userDocumentNumber:"",
        userPassword:"",
        // userImage:[],

        isStaff: false,
        isActive: true,
        isSuperUser: false,

        
        
    });
    const[documentTypes, setDocumentTypes] = useState ([])
       // El uso del estado  useEffect
       useEffect(() =>{
           getDocumentTypes().then(setDocumentTypes);
       },[])


    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;

        setFormData ((prev) => ({
            ...prev,

            [name]: type === "checkbox" ? checked : value
        }));
    };


    const handleSubmit = async (e) => {
        // Evita que el formulario recargue la pagina
        e.preventDefault();

        const result = userSchema.safeParse(FormData);

        if (!result.succes){
            const fieldErrors = {};

            result.error.issues.forEach((issue) => {
                fieldErrors[issues.path[0]] = issue.message;
            })

            setErrors(fieldErrors);
            return;
        }


    return(
        <div>
            <Input 
             label="nombre"
             type="text"
             placeholder="Escribe tu nombre"
             htmlFor="user-name"
            />
            <Input 
             label="correo"
             type="email"
             placeholder="Escribe tu correo"
             htmlFor="user-email"
            />
            <Input 
             label="Telefono"
             type="tel"
             placeholder="Escribe tu número de teléfono"
             htmlFor="user-phone"
            />
            <Select
              label="tipos de documentos"
              name="userDocumentTypes"
              htmlFor="userDocumentTypes"
              options={documentTypes}
            />
            <Input 
             label="Documento"
             type="text"
             placeholder="Escribe tu número de documento"
             htmlFor="user-document-number"
            />
            <Input 
             label="Contraseña"
             type="password"
             placeholder="Escribe tu contraseña"
             htmlFor="user-password"
            />

                {/**Checkbox */}
            <Checkbox
                id="isSuperUser"
                name="isSuperUser"
                label="Es super usuario"
                checked={FormData.isSuperUser}
                onChange={handleChange}
            />
            <Checkbox
                id="isStaff"
                name="isStaff"
                label="Es staff"
                checked={FormData.isStaff}
                onChange={handleChange}
            />
            <Checkbox
                id="isActive"
                name="isActive"
                label="Esta activo"
                checked={FormData.isActive}
                onChange={handleChange}
            />




                {/*Actions*/}

            <div className="flex gap-6 items-center">
                
                <Button
                  variant="secondary"
                  size="sm"
                  type="submit"
                  onClick={() => console.log("se oprimio el submit")}
                >  
                    cancelar
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  type="submit"
                  onClick={() => console.log("se oprimio el submit")}
                >  
                     Guardar
                </Button>
            </div>
        </div>
    );
}}