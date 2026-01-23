
export function ordenarConsultas(consultas: CardConsultaProps[]) {
  return [...consultas].sort((a, b) => {
    const dataA = new Date(`${a.data}T${a.horario}`);
    const dataB = new Date(`${b.data}T${b.horario}`);
    return dataA.getTime() - dataB.getTime();
  });
}
