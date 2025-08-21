import React, { useState } from 'react';
import PasoPaciente from './PasoPaciente';
import PasoExamenes from './PasoExamenes';
import PasoOtrosDatos from './PasoOtrosDatos';

const CrearOrdenDeServicio = () => {
  const [pasoActual, setPasoActual] = useState(1);
  const [datosPaciente, setDatosPaciente] = useState(null);
  const [examenesSeleccionados, setExamenesSeleccionados] = useState([]);
  const [otrosDatos, setOtrosDatos] = useState({});

  const guardarOrden = async () => {
    const payload = {
      paciente: datosPaciente,
      examenes: examenesSeleccionados,
      otros: otrosDatos,
    };
    console.log('Guardando orden:', payload);
    // Aquí iría tu lógica de persistencia
  };

  const pasos = [
    {
      id: 1,
      titulo: 'Datos del Paciente',
      componente: PasoPaciente,
      datos: datosPaciente,
      completado: !!datosPaciente,
      onNext: setDatosPaciente,
    },
    {
      id: 2,
      titulo: 'Exámenes',
      componente: PasoExamenes,
      datos: examenesSeleccionados,
      completado: examenesSeleccionados.length > 0,
      onNext: setExamenesSeleccionados,
    },
    {
      id: 3,
      titulo: 'Otros Datos',
      componente: PasoOtrosDatos,
      datos: otrosDatos,
      completado: !!otrosDatos.estado && !!otrosDatos.pago,
      onNext: setOtrosDatos,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex justify-between mb-4">
        {pasos.map(p => (
          <div
            key={p.id}
            className={`flex-1 text-center py-2 rounded 
              ${pasoActual === p.id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}
              ${p.completado ? 'border-green-500 border-2' : 'border-gray-300 border'}
              cursor-pointer`}
            onClick={() => setPasoActual(p.id)}
          >
            Paso {p.id}
            <div className="text-sm">{p.titulo}</div>
          </div>
        ))}
      </div>

      {pasos.map(p => {
        const Componente = p.componente;
        return (
          <Componente
            key={p.id}
            datos={p.datos}
            onNext={p.onNext}
            estado={pasoActual === p.id ? 'activo' : 'pendiente'}
            completado={p.completado}
            guardar={p.id === 3 ? guardarOrden : undefined}
          />
        );
      })}
    </div>
  );
};

export default CrearOrdenDeServicio;