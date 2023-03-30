
const Alert = ({ color }) => {
    return (
        <div className="alert-container" style={{ backgroundColor: color }}>
            <p className="alert-text">copied to clipboard</p>
        </div>
    )
}

export default Alert