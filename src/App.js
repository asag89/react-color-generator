import { useEffect, useState } from "react"
import Values from "values.js"
import ColorItem from "./ColorItem"
import Alert from "./Alert"
import Modal from "./Modal"

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [colorList, setColorList] = useState(new Values('#681691').all(10))
  const [alert, setAlert] = useState(false)

  const itemColor = `rgb(${colorList[12].rgb.join(',')})`

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert])

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      setColorList(new Values(color).all(10))
    } catch (error) {
      setError(true)
    }
  }

  return (
    <>
      <div className="container">
        <div className="top" >
          <h1 style={{ color: itemColor }}>Color Generator</h1>
          <form onSubmit={handleSubmit}>
            <input value={color} onChange={(e) => setColor(e.target.value)} style={{ outlineColor: itemColor, borderColor: itemColor }} />
            <button style={{ backgroundColor: itemColor }} type="submit">Generate</button>
            <div className="question-mark" onClick={() => setError(true)}>?</div>
          </form>
        </div>
        <div className="colors-container">
          {colorList.map((color, index) => {
            return (
              <ColorItem
                key={index}
                index={index}
                rgb={color.rgb}
                weight={color.weight}
                hexColor={color.hex}
                setAlert={setAlert}
              />
            )
          })}
        </div>
        {alert && <Alert color={itemColor} />}
      </div >
      {error && <Modal setError={setError} color={itemColor} />}
    </>
  );
}

export default App;
