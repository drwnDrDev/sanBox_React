import { useState } from "react";
import { users as initialUsers } from "./users.js";

export default function EditUsers() {
    const [editableUsers, setEditableUsers] = useState(initialUsers);
    const [editIndex, setEditIndex] = useState(null);
    const [formData, setFormData] = useState({ name: "", email: "" });

    const handleEdit = (index) => {
        setEditIndex(index);
        setFormData({ ...editableUsers[index] });
    };

    const handleSave = () => {
        const updated = editableUsers.map((user, index) =>
            index === editIndex ? { ...formData } : user
        );
        setEditableUsers(updated);
        setEditIndex(null);
    };

    const handleCancel = () => {
        setEditIndex(null);
    };



    return (
        <div className="w-1/2 m-auto border shadow-lg p-4">
            <h1 className="uppercase py-2 text-xl">Lista de Usuarios</h1>
            <ul>
                {editableUsers.map((user, index) => (
                    <li key={index} className="pb-4">
                        {editIndex === index ? (
                            <>
                                <input
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="border px-2 mr-2"
                                />
                                <input
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="border px-2 mr-2"
                                />
                                <button onClick={handleSave} className="bg-green-100 px-2 mr-1">Guardar</button>
                                <button onClick={handleCancel} className="bg-red-100 px-2">Cancelar</button>
                            </>
                        ) : (
                            <>
                                {index} - {user.name} - {user.email}
                                <button onClick={() => handleEdit(index)} className="ml-4 px-2 rounded bg-indigo-100">
                                    Editar
                                </button>
                            </>
                        )}
                    </li>
                ))}

            </ul>
        </div>
    );
}