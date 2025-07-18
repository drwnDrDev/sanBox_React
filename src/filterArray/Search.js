export default function Search({ searchTerm, setSearchTerm, label }) {
    return (
        <form>
            <label htmlFor="search">{label}:</label>
            <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </form>
    );
}