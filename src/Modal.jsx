
const Modal = ({ setError, color }) => {
    return (
        <div className="modal-container" onClick={() => setError(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-top" style={{ color: color }}>
                    Examples of Correct Input Types
                </div>
                <div className="modal-content">
                    <div className="modal-content-item"><span className="color-type">hex: </span>#681691</div>
                    <div className="modal-content-item"><span className="color-type">rgb: </span> rgb(104, 22, 145)</div>
                </div>
                <button onClick={() => setError(false)} style={{ backgroundColor: color }} className="close-btn">Close</button>
            </div>
        </div>
    )
}

export default Modal