# desafio03-123_Rocketseat

Desafio 01

🚀 Sobre o desafio
Nesse desafio você deve criar um servidor que tenha duas rotas que devem retornar o conteúdo dos html gerados no desafio 2-3 (páginas de Cursos e Sobre). Além disso, deve ser implementando um arquivo padrão (layout.njk) que reaproveite o código em comum entre esses dois e também um arquivo que sirva uma página de erro 404.

Erro 404 é comum aparecer em páginas da internet, quando não foi encontrado nenhum conteúdo.

Arquivos HTML
courses.njk: Arquivo referente à pagina de conteúdos, deve ser servido na rota raiz.

about.njk: Arquivo referente à pagina de descrição, deve ser servido na rota /about.

layout.njk: Arquivo referente à base comum entre as páginas.

not-found.njk: Arquivo referente à pagina de erro 404, deve ser servido quando for realizada uma requisição à uma página que não existe. Esse arquivo deve ter:

Layout.njk como base
Ter um texto infortivo sobre o erro
Dica: Para capturar essas requisições, basta adicionar esse trecho após todas as rotas no seu server.js:

server.use(function(req, res) {
  res.status(404).render("not-found");
});

Desafio 02

🚀 Sobre o desafio
Nesse desafio você deve atualizar os arquivos com informações de cursos e descrição de forma dinâmica.

Desafio 03

🚀 Sobre o desafio
Nesse desafio você deve criar uma página de descrição do curso que deve ser chamada no lugar da modal quando o usuário clicar no card do curso.

Rota
A rota também será a /courses, porém o id do curso será passado via route params (ex.: /courses/id_do_curso). Dica: utilize o req.params para recuperar o id fornecido na rota.

server.get("/courses/:id", function(req, res) {
  const id = req.params.id;

  return res.send(`O id fornecido na rota é: ${id}`);
});
Informações
Layout padrão
Card do curso
Link que redireciona para a página do curso
