import React, { Children, useState } from "react";
import { users } from "./users";
import { IndexUsers } from "./filterUsers/IndexUsers";

export function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded shadow-md mt-10">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Buscar Usuarios</h2>
            <input
                type="text"
                placeholder="Ej. Ana, Carlos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
            />

            <ul className="mt-6 space-y-2">
                <IndexUsers users={filteredUsers} />
            </ul>
        </div>
    );
}