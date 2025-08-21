import React, { useState, useEffect } from 'react';

const PasoPaciente = ({ datos, onNext, estado, completado }) => {
  const [form, setForm] = useState(datos || { nombre: '', documento: '', edad: '' });

  useEffect(() => {
    setForm(datos || { nombre: '', documento: '', edad: '' });
  }, [datos]);

  const guardar = () => {
    if (!form.nombre || !form.documento) return alert('Faltan datos');
    onNext(form);
  };

  return (
    <div className={`p-4 border rounded-md transition-all
      ${completado ? 'border-green-500' : 'border-gray-300'}
      ${estado === 'activo' ? 'bg-blue-50 shadow-md' : 'bg-white opacity-70'}
    `}>
      <h2 className="text-lg font-semibold mb-2">Paso 1: Datos del Paciente</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={form.nombre}
        onChange={e => setForm({ ...form, nombre: e.target.value })}
        className="block mb-2"
      />
      <input
        type="text"
        placeholder="Documento"
        value={form.documento}
        onChange={e => setForm({ ...form, documento: e.target.value })}
        className="block mb-2"
      />
      <input
        type="number"
        placeholder="Edad"
        value={form.edad}
        onChange={e => setForm({ ...form, edad: e.target.value })}
        className="block mb-4"
      />
      <button onClick={guardar} className="bg-blue-600 text-white px-4 py-1 rounded">
        Guardar Datos
      </button>
    </div>
  );
};

export default PasoPaciente;