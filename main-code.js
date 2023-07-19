<!DOCTYPE html>
<html>
<head>
  <title>Saludo Personalizado</title>
  <style>
    body {
      background-image: url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg');
      background-size: cover;
    }
    h1 {
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>Saludo Personalizado</h1>
  <div id="container">
    <input type="text" id="nombre" placeholder="Ingresa tu nombre" required>
    <button onclick="generarSaludo()">Saludar</button>
    <h1 id="saludito"></h1>
  </div>

  <script>
    function generarSaludo() {
      const nombre = document.getElementById("nombre").value;
      const saludito = document.getElementById("saludito");
      saludito.textContent = `¡Hola, ${nombre}! Bienvenido`;
    }
  </script>
</body>
</html>