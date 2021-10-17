
### Queries SQL (Etapa1)

1. Buscar os nomes de todos os alunos que frequentam alguma turma do professor 'JOAO PEDRO'.
```SQL
SELECT ALUNO.Nome FROM TURMA 
WHERE PROFESSOR.nome LIKE "JOAO PEDRO";
```
2. Buscar os dias da semana que tenham aulas da disciplina 'MATEMATICA'.
```SQL
SELECT DISTINCT TURMA.dia_da_semana FROM TURMA 
WHERE DISCIPLINA.nome = 'MATEMATICA';
```
3. Buscar todos os alunos que frequentem aulas de 'MATEMATICA' e também 'FISICA'.
```SQL
SELECT ALUNO.Nome FROM TURMA 
WHERE DISCIPLINA.nome = 'MATEMATICA' OR DISCIPLINA.nome = 'FISICA';
```
4. Buscar as disciplinas que não tenham nenhuma turma.
```SQL
SELECT DISCIPLINA.* FROM DISCIPLINA
WHERE TURMA.disciplina_id IS NULL;
```
5. Buscar os alunos que frequentem aulas de 'MATEMATICA' exceto os que frequentem 'QUIMICA'.
```SQL
SELECT DISTINCT ALUNO.Nome FROM TURMA
WHERE DISCIPLINA.nome = "MATEMATICA" NOT IN (
  SELECT DISTINCT ALUNO.Nome FROM TURMA
  WHERE DISCIPLINA.nome = "QUIMICA");
```


# TODO App
## Projeto

Este projeto foi criado usando [React](https://reactjs.org/) com algumas contribuições de CSS

De biblioteca adicional fui usado o [React-Icons](https://react-icons.github.io/react-icons) apenas para os ícones de edição e remoção.


Foi utilizado um build-tool chamado [Vite](https://vitejs.dev/) através do [Replit](https://replit.com) para projetar, sendo o [Replit](https://replit.com) para codificar e hospedar.

## Sobre o Escopo

"Precisamos de uma ferramenta para o controle de tarefas a fazer, o famoso TODO. Serão bem poucas funcionalidades, capriche na usabilidade que pode ser seu diferencial. A aplicação deve cumprir os seguintes requisitos:"

- (OK)  A tela principal deve ser a minha lista de tarefas
- (OK)  Permitir que o usuário consiga facilmente adicionar uma nova tarefa
- (OK)  Possibilitar a finalização de uma tarefa e poder desfazer isso
- (+-)  Facilitar a visualização das atividades pendentes e finalizadas separadamente
- (OK)  O usuário pode excluir uma tarefa, mas garantir que ele tenha certeza disso
