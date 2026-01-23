interface CardTopoHomeProps {
  dados: { label: string; value: string | number }[];
  tituloCard: string;
}

export default function CardTopoHome({ dados, tituloCard }: CardTopoHomeProps) {
  return (
    <div className="bg-card-background p-4 rounded-lg shadow-md flex flex-1 flex-col">
      <h2 className="text-fonts-primary text-lg font-semibold">{tituloCard}</h2>

      <div className="mt-2 flex flex-col gap-1">
        {dados.map((item) => (
          <div key={item.label} className="flex justify-between">
            <span className="text-primary-500">{item.label}</span>
            <p className="text-fonts-primary">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
