export default function CardTopoHistorico({ title, value, highlight }: { title: string; value: string; highlight?: boolean }) {
    return (
        <div className={`border border-gray-300 rounded-lg p-4 mb-4 shadow-sm bg-card-background ${highlight ? 'bg-primary-500' : 'bg-card-background'}`}>
            <h2 className={`text-lg font-semibold mb-2 ${highlight ? 'text-white' : 'text-fonts-primary'}`}>{title}</h2>
            <p className={`text-2xl font-bold ${highlight ? 'text-white' : 'text-primary-500'}`}>{value}</p>
        </div>
    );
}