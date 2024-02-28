import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <App />
    <div class="container mt-5 centrar">
      <h2>AGREGAR CLIENTE</h2>
      <form>
        <div class="mb-3">
        </div>
          <div class="mb-3">
            <div class="container btn">
              <label for="nombre" class="form-label">NOMBRE:</label>
            </div>
            
          </div>
          <div class="mb-3">
            <div class="container btn">
              <label for="apellido" class="form-label">APELLIDO:</label>
            </div>
          </div>
          
          <div class="container btn ">
            <button type="submit" class="btn btn-primary">ENVIAR</button>
          </div>
      </form>
    </div>
  </React.Fragment>
);

