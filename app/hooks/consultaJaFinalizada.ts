export function consultaJaFinalizada(dataConsulta: string): boolean {
    const dataAtual = new Date();
    const dataConsultaDate = new Date(dataConsulta);
    return dataAtual > dataConsultaDate;
}