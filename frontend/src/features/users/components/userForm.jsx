import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

import {createUser} from "../services/userServices";

const [isSubmitting, setIssubmitting] = useState(false);

// ======================================HANDLE SUBMIT=======================
const handleSubmit = async (e) => {
    e.preventDefault();

    // Validamos los datos del formulario contra el esquema zod
    // safeParse NO lanza excepción, retorna un objeto controlao
    const result = userSchema.safeParse(formData);

    // verificar en consola si el esquema esta funcionando correctamente
    console.log(result);

    // si la  validación falla
    if (!result.succes) {
        // objeto donde almacenaremos los  errores por campo
        const fieldErrors = {};

        // Recorremos cada error generado por zod
        result.error.issues.forEach((issue) => {
            // issue.path[0] corresponde al nombre del campo
            // issue.message contiene el mensaje del error definido en el Schema
            fieldErrors[issue.path[0]] = issue.message

        })

        // Actualizamos el estado de errores para mostrarlos en la UI
        setErrors(fieldErrors);
        // cortamos la ejecución no se envia nada al backend

        return;
    
    }
    // si la validación pasa, limpiamos erroes previos
    setErrors({});

// Activamos estado de envio (util para deshabilitar el botón)
    setIssubmitting(true);
    try{
        // Llamamos el servicio de frontend que consume la API
        // Result.data contiene los datos ya validados por Zod
        const response = await createUser(result.data);

        // log informativo para desarrollo
        console.log("usuarios creado:", response);

        // feedback basico del usuario
        alert("usuario creado correctamente");

        // navegamos a la vista anterior
        navigate(-1);
    }catch (error){
        // capturamos errores de red o errores lanzados por service
        console.error("error:", error.message);

        // mostramos el  mensaje de error al usuario
        alert(error.message);

    } finally {
        // pase lo que pase, desactivamos el estado envio
        setIssubmitting(false)
    }
};