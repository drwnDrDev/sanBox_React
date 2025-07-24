import { useState } from "react";

export default function AddUsers() {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({ name: "", email: "" });

    const handleSave=()=>{
        if (!formData.name || !formData.email) return;
        const newUser = {...formData};
        setUsers([...users, newUser]);
        setFormData({name:"", email: ""});
    }

    const handleDel=(index)=>{
        const updated = users.filter((_, i) => i !== index);
        setUsers(updated);
    }

    return (
        <div className="w-1/2 m-auto border border-stone-600 p-4">
            <div>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border rounded px-3 py-2 w-full mb-2"
                />
                <input
                    type="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border rounded px-3 py-2 w-full mb-2"
                />
                <button onClick={handleSave} className="px-6 py-2 m-auto bg-purple-200 rounded-xl">Agregar</button>
            </div>
            <ul>
                {users.map((user, index)=>(
                
                <li key={index}>
                        <span>{user.name} - {user.email}</span>
                        <button onClick={()=>handleDel(index)} className="text-red-500 font-bold">Del</button>
                </li>
                ))}
            </ul>
        </div>
    );

}