import { useState } from "react"

export function FormPaciente() {

    const [paciente, setPaciente] = useState({
        id: "",
        nombre: "",
        bday: "",
        sexo: ""
    });

    const getErrores = () => {
        const errores = {};
        if (!paciente.id) errores.id = true;
        if (!paciente.nombre) errores.nombre = true;
        if (!paciente.bday) errores.bday = true;
        if (!paciente.sexo) errores.sexo = true;
        return errores;
    };

    const errores = getErrores();

    return (
        <div className="p-4 m-auto bg-cyan-100 w-1/2">
            <form action="" className="flex flex-col gap-2">
                <input
                    type="number"
                    name="id"
                    id="id"
                    placeholder="ID"
                    value={paciente.id}
                    onChange={(e) => setPaciente({ ...paciente, id: e.target.value })}
                    className={`border rounded px-2 py-1 ${errores.id ? 'border-red-500' : 'border-gray-300'}`} />
                <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Nombre"
                    value={paciente.nombre}
                    onChange={(e) => setPaciente({ ...paciente, nombre: e.target.value })}
                    className={`border rounded px-2 py-1 ${errores.nombre ? 'border-red-500' : 'border-gray-300'}`} />
                <label htmlFor="bday">B-day:
                    <input
                        type="date"
                        name="bday"
                        id="bday"
                        value={paciente.bday}
                        onChange={(e) => setPaciente({ ...paciente, bday: e.target.value })}
                        className={`border rounded px-2 py-1 ${errores.bday ? 'border-red-500' : 'border-gray-300'}`} />
                </label>
                <div className={`p-2 rounded ${errores.sexo ? 'border border-red-500' : ''}`}>
                    <span>Sexo: </span>
                    <label htmlFor="sexoM" className="mr-2">
                        M
                        <input type="radio" name="sexo" id="sexoM"
                            value="M"
                            checked={paciente.sexo === "M"}
                            onChange={(e) => setPaciente({ ...paciente, sexo: e.target.value })}
                            className="ml-1" />
                    </label>
                    <label htmlFor="sexoF">
                        F
                        <input
                            type="radio"
                            name="sexo"
                            id="sexoF"
                            value="F"
                            checked={paciente.sexo === "F"}
                            onChange={(e) => setPaciente({ ...paciente, sexo: e.target.value })}
                            className="ml-1" />
                    </label>
                </div>
                    {Object.keys(errores).length > 0 && (
                    <p className="text-red-600 text-sm mt-2">Completa todos los campos obligatorios.</p>
                )}

            </form>
        </div>
    )
}