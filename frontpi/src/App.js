function App() {
    fetch('http://localhost:5000')
    .then(response => {
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }
      return response.json();
    })
    .then(data => {
      // Maneja los datos recibidos
      console.log(data);
    })
    .catch(error => {
      // Maneja cualquier error que ocurra durante la solicitud
      console.error('Error:', error);
    });
}

export default App;
