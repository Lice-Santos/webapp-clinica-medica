export function openModal() {

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close-button">&times;</span>
                <h2>Detalhes da Consulta</h2>
                <p>{/* Detalhes adicionais aqui */}</p>
            </div>
        </div>
    )
}