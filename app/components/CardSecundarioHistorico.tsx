export default function CardSecundarioHistorico({ title, value }: { title: string; value: string }) {
    return (
        <div className="text-center rounded-lg p-4 mb-4 ">
            <h2 className="text-lg font-semibold mb-2 text-primary-500">{title}</h2>
            <p className="text-2xl font-bold text-fonts-primary">{value}</p>
        </div>
    );
}