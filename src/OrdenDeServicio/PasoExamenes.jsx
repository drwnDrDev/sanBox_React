import React, { useState, useEffect } from 'react';

const PasoExamenes = ({ seleccionados, onNext, estado, completado }) => {
  const [listaExamenes, setListaExamenes] = useState([]);
  const [seleccion, setSeleccion] = useState(seleccionados || []);

  useEffect(() => {
    setListaExamenes([
      { id: 1, nombre: 'Hemograma' },
      { id: 2, nombre: 'Glucosa' },
      { id: 3, nombre: 'Colesterol' },
    ]);
  }, []);

  const toggleExamen = (id) => {
    setSeleccion(prev =>
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  const guardar = () => {
    onNext(seleccion);
  };

  return (
    <div className={`p-4 border rounded-md transition-all
      ${completado ? 'border-green-500' : 'border-gray-300'}
      ${estado === 'activo' ? 'bg-blue-50 shadow-md' : 'bg-white opacity-70'}
    `}>
      <h2 className="text-lg font-semibold mb-2">Paso 2: Selección de Exámenes</h2>
      <ul className="mb-4">
        {listaExamenes.map(ex => (
          <li key={ex.id}>
            <label>
              <input
                type="checkbox"
                checked={seleccion.includes(ex.id)}
                onChange={() => toggleExamen(ex.id)}
              />
              {ex.nombre}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={guardar} className="bg-blue-600 text-white px-4 py-1 rounded">
        Guardar Exámenes
      </button>
    </div>
  );
};

export default PasoExamenes;