import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Lee los datos desde un archivo JSON (puedes usar fetch o axios)
    fetch('http://Localhost:5000')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div id='contenedor'>
      <h2>LEER CLIENTE</h2>
      <ul>
        {data.map(item => (
              <div key={item["ID"]}class="container mt-5 centrar">
                <form>
                  <div class="mb-3">
                    <div class="container btn">
                    </div>
                  </div>
                    <div class="mb-3">
                      <div class="container btn">
                        <label for="nombre" class="form-label">NOMBRE: {item["Nombres"]}</label>
                      </div>
                      
                    </div>
                    <div class="mb-3">
                      <div class="container btn">
                        <label for="apellido" class="form-label">APELLIDO: {item["Apellidos"]}</label>
                      </div>
                    </div>
                </form>
              </div>
        ))}
      </ul>
    </div>
  );
}

export default App;