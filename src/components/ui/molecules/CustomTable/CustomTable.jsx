function CustomTable({ columns = [], data = [], renderRow }) {
    return (
        <table className="w-full table-auto">
            <thead className="text-[#A1A1AA] text-[16px]">
                <tr>
                    {columns.map((col) => (
                        <th key={col.key} className={`px-6 py-3 text-left font-medium ${col.className || ""}`} style={{ width: col.width }} >
                            {col.label}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                        {renderRow(item)}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default CustomTable;
