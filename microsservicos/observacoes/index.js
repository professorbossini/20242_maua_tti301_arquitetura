//lembre-se de lidar com o .env e o .env.example

//suba o serviço na porta 5000

//1. 
//pense em como vocẽ vai organizar a sua base de observações
//dado um id de lembrete, temos que ser capazes de acessar a sua lista de observações, tanto para cadastro de nova observação quanto para a sua obtenção

//2. Gere identificadores para as observações, usando o pacote uuid (encontre mais sobre ele no npmjs.com)


//3.
//defina dois endpoints

//GET /lembretes/idLembrete/observacoes
//exemplo: /lembretes/15/observacoes: isso dá acesso à coleção de observações apenas do lembrete de id igual a 15

//POST /lembretes/idLembrete/observacoes
//{texto: comprar açúcar}