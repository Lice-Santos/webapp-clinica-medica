export default function verificarSeEhHoje(dataConsulta : string): boolean {

  const hoje = new Date();

    const [ano, mes, data] = dataConsulta.split("-").map(Number);

    const dataConsultaDate = new Date(ano, mes - 1, data);
    return (
      dataConsultaDate.getFullYear() === hoje.getFullYear() &&
      dataConsultaDate.getMonth() === hoje.getMonth() &&
      dataConsultaDate.getDate() === hoje.getDate()
    );

}

