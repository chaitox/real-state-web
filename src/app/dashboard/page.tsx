export default function DashboardPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">Bienvenido al Dashboard</h1>
            <p className="mt-2 text-gray-600">
                Gestiona tus propiedades, agentes y clientes desde aquí.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Stat Card 1 */}
                <div className="rounded-lg bg-white p-6 shadow-sm">
                    <h3 className="text-sm font-medium text-gray-500">Propiedades Activas</h3>
                    <p className="mt-2 text-3xl font-bold text-gray-900">12</p>
                </div>

                {/* Stat Card 2 */}
                <div className="rounded-lg bg-white p-6 shadow-sm">
                    <h3 className="text-sm font-medium text-gray-500">Total Consultas</h3>
                    <p className="mt-2 text-3xl font-bold text-gray-900">45</p>
                </div>

                {/* Stat Card 3 */}
                <div className="rounded-lg bg-white p-6 shadow-sm">
                    <h3 className="text-sm font-medium text-gray-500">Agentes Activos</h3>
                    <p className="mt-2 text-3xl font-bold text-gray-900">3</p>
                </div>
            </div>
        </div>
    );
}
