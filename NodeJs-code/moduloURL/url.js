//$ Crear una URL:
const miURl = new URL ('https://www.yisusprograming.god/cursos/programacion?backend=python&frontend=javascript');

//$ Extraer las distintas partes de una URL
console.log(miURl.hostname);   /// www.yisusprograming.god
console.log(miURl.pathname);  /// cursos/programacion
console.log(miURl.searchParams);   /// URLSearchParams { 'backend' => 'python', 'frontend' => 'javascript' }
console.log(miURl.searchParams.get('backend'));   /// python
console.log(miURl.searchParams.get('frontend'));   /// javascript
