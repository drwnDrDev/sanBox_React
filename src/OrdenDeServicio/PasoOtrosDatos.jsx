import React, { useState, useEffect } from 'react';

const PasoOtrosDatos = ({ datos, onNext, estado, completado, guardar }) => {
  const [form, setForm] = useState(datos || { estado: '', pago: '', observaciones: '' });

  useEffect(() => {
    setForm(datos || { estado: '', pago: '', observaciones: '' });
  }, [datos]);

  const guardarDatos = () => {
    if (!form.estado || !form.pago) return alert('Faltan datos');
    onNext(form);
    if (guardar) guardar();
  };

  return (
    <div className={`p-4 border rounded-md transition-all
      ${completado ? 'border-green-500' : 'border-gray-300'}
      ${estado === 'activo' ? 'bg-blue-50 shadow-md' : 'bg-white opacity-70'}
    `}>
      <h2 className="text-lg font-semibold mb-2">Paso 3: Otros Datos</h2>
      <select
        value={form.estado}
        onChange={e => setForm({ ...form, estado: e.target.value })}
        className="block mb-2"
      >
        <option value="">Seleccione estado</option>
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <select
        value={form.pago}
        onChange={e => setForm({ ...form, pago: e.target.value })}
        className="block mb-2"
      >
        <option value="">Modo de pago</option>
        <option value="efectivo">Efectivo</option>
        <option value="tarjeta">Tarjeta</option>
      </select>
      <textarea
        placeholder="Observaciones"
        value={form.observaciones}
        onChange={e => setForm({ ...form, observaciones: e.target.value })}
        className="block mb-4 w-full"
      />
      <button onClick={guardarDatos} className="bg-green-600 text-white px-4 py-1 rounded">
        Finalizar y Guardar
      </button>
    </div>
  );
};

export default PasoOtrosDatos;