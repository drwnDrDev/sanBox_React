export function IndexUsers({ users }) {
    return (
        <>
            {users.length > 0 ? (
                users.map((user, index) => (
                    <li
                        key={index}
                        className="bg-gray-50 px-4 py-2 rounded border border-gray-200 shadow-sm hover:bg-indigo-50 transition-all"
                    >
                        <strong className="text-indigo-700">{user.name}</strong> <br />
                        <span className="text-gray-600 text-sm">{user.email}</span>
                    </li>
                ))
            ) : (
                <li className="text-gray-500 italic">No hay usuarios que coincidan.</li>
            )}
        </>
    );
}