window.onload = function() {
    var gallery = document.getElementById('gallery');
    //var imagenes = ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg','imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg','imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg','imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg',]; // Agrega las rutas de tus imágenes aquí
  
    // Crear las imágenes en la galería
    imagenes.forEach(function(imagenSrc) {
      var img = document.createElement('img');
      img.src = imagenSrc;
      img.alt = "Imagen de la galería";
      img.onclick = function() {
        window.open(imagenSrc, '_blank'); // Abre la imagen en una nueva pestaña
      };
      gallery.appendChild(img);
    });
  };
  