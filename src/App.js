import { useState } from "react";
import { pacientes } from "./pacientes";
import { List } from "./List";
import Search from "./Search";



export default function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchId, setSearchId] = useState();

    const filteredPacientes = pacientes.filter(paciente =>
        paciente.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const keyWord = pacientes.find(paciente => paciente.id === Number(searchId));

    return (
        <>
            <div>
            <Search searchTerm={searchId} setSearchTerm={setSearchId} label="Buscar por ID"/>
            Paciente encontrado:
            {keyWord ? (
                <div key={keyWord.id}>
                    <h2>{keyWord.nombre}</h2>
                    <p>Edad: {keyWord.edad} años</p>
                    <p>Diagnóstico: {keyWord.diagnostico}</p>
                    <p>Fecha de Consulta: {keyWord.fechaConsulta}</p>
                </div>
            ) : (
                <p>No se encontró ningún paciente con ese ID.</p>
            )}
            </div>
            <div>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} label="Buscar por nombre" />
            <List pacientes={filteredPacientes}/>
            </div>
        </>
    );
}


