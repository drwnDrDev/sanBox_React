
export function List({ pacientes, renderItem }) {
    return (

        <div>
            <h2>Lista de Items</h2>
            <ul>
                {pacientes.map(paciente => (
                    <li key={paciente.id}>
                        {paciente.nombre} - {paciente.edad} años - {paciente.diagnostico} - {paciente.fechaConsulta}
                    </li>
                ))}
            </ul>
        </div>
    );
}