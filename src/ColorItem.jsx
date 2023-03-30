import rgbToHex from './utils'

const ColorItem = ({ rgb, weight, index, hexColor, setAlert }) => {
    const bcg = rgb.join(',')
    rgbToHex(...rgb)
    const hexValue = `#${hexColor}`

    return (
        <div
            className={`color-item ${index > 9 && 'color-light'}`}
            style={{ backgroundColor: `rgb(${bcg})` }}
            onClick={() => {
                setAlert(true)
                navigator.clipboard.writeText(hexValue)
            }}
        >
            <span className='color-value'>{hexValue}</span>
            <span className='color-value'>{weight}%</span>
        </div>
    )
}

export default ColorItem
