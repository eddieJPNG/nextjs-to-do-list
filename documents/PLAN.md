Este plano de implementação foi desenhado em **7 fases sequenciais**. Cada etapa possui pré-requisitos claros, o objetivo de aprendizado específico e o "o que construir", permitindo que você avance de forma incremental e sólida.

---

## Fase 1: Configuração do Ambiente e Inicialização

* **Pré-requisitos:** Node.js instalado na máquina.
* **Objetivo de Aprendizado:** Compreender a estrutura padrão de pastas do Next.js 14+ (App Router) e a configuração inicial de ferramentas.
* **Passos de Implementação:**
1. Executar o comando de criação do projeto:
```bash
npx create-next-app@latest todo-app --typescript --tailwind --app

```


2. Instalar a biblioteca de ícones:
```bash
npm install lucide-react

```


3. Analisar a estrutura gerada: entender a diferença entre a pasta `app/` (rotas e páginas) e a raiz do projeto.
4. Limpar o arquivo `app/page.tsx` e `app/globals.css` para iniciar com um template em branco.



---

## Fase 2: Modelagem de Tipos (TypeScript)

* **Pré-requisitos:** Fase 1 concluída.
* **Objetivo de Aprendizado:** Estabelecer contratos de dados estáticos para garantir previsibilidade e evitar erros em tempo de execução.
* **Passos de Implementação:**
1. Criar o diretório `types/` na raiz.
2. Criar o arquivo `types/index.ts`.
3. Definir a interface da Tarefa (`Todo`) contendo `id`, `text`, `completed` e `createdAt`.
4. Definir o tipo de filtro (`FilterType` com os valores `'all' | 'active' | 'completed'`).



---

## Fase 3: Estado Central e Persistência Local (`app/page.tsx`)

* **Pré-requisitos:** Fase 2 concluída e tipos definidos.
* **Objetivo de Aprendizado:** Entender Client Components (`use client`), gerenciamento de estado global com `useState` e efeitos colaterais com `useEffect` para persistência no `localStorage`.
* **Passos de Implementação:**
1. Adicionar a diretiva `'use client'` no topo de `app/page.tsx`.
2. Declarar o estado principal `todos` tipado como `Todo[]`.
3. Implementar um `useEffect` na montagem do componente para ler os dados salvos no `localStorage`.
4. Implementar um `useEffect` disparado sempre que `todos` mudar, salvando o novo array no `localStorage`.
5. Criar as funções utilitárias base de manipulação: `addTodo`, `toggleTodo`, e `deleteTodo`.



---

## Fase 4: Componente de Entrada de Dados (`TodoInput.tsx`)

* **Pré-requisitos:** Fase 3 compreendida (precisa saber como as funções de manipulação são repassadas via props).
* **Objetivo de Aprendizado:** Manipulação de formulários controlados no React, prevenção de comportamento padrão e comunicação filho-pai via funções de callback.
* **Passos de Implementação:**
1. Criar a pasta `components/` e o arquivo `components/TodoInput.tsx`.
2. Criar um estado local para controlar o texto digitado no input (`text`).
3. Criar a função `handleSubmit` que valida se o texto não está vazio, chama a função recebida por props para adicionar a tarefa e limpa o input.
4. Estilizar o formulário utilizando classes utilitárias do Tailwind CSS (flexbox, inputs focados, botão de envio com ícone).



---

## Fase 5: Componente de Item Individual (`TodoItem.tsx`)

* **Pré-requisitos:** Fase 4 concluída.
* **Objetivo de Aprendizado:** Renderização condicional de classes CSS baseada em estado e tratamento de múltiplos eventos (clique no checkbox e clique no botão de deletar).
* **Passos de Implementação:**
1. Criar o arquivo `components/TodoItem.tsx`.
2. Receber a tarefa individual e as funções de ação (`onToggle`, `onDelete`) via props.
3. Renderizar o texto da tarefa aplicando estilo condicional (ex: riscar o texto e alterar a cor se `completed` for verdadeiro).
4. Conectar os eventos de clique do botão de exclusão e do marcador de conclusão às funções correspondentes.



---

## Fase 6: Listagem e Sistema de Filtros (`TodoList.tsx`)

* **Pré-requisitos:** Fases 4 e 5 concluídas.
* **Objetivo de Aprendizado:** Manipulação avançada de arrays com JavaScript (`filter`, `map`) e organização de componentes agrupadores.
* **Passos de Implementação:**
1. Criar o arquivo `components/TodoList.tsx`.
2. Criar botões de navegação para alternar entre os filtros ("Todas", "Pendentes", "Concluídas").
3. Aplicar a lógica de filtragem sobre o array de tarefas com base no filtro selecionado no momento.
4. Utilizar o método `.map()` para transformar a lista filtrada em múltiplos componentes `TodoItem`.
5. Tratar o caso de lista vazia exibindo uma mensagem amigável para o usuário.



---

## Fase 7: Integração Final, UI/UX e Responsividade

* **Pré-requisitos:** Todos os componentes anteriores construídos e testados isoladamente.
* **Objetivo de Aprendizado:** Montagem final da árvore de componentes em `app/page.tsx` e refinamento visual (responsividade mobile-first e espaçamentos).
* **Passos de Implementação:**
1. Importar `TodoInput` e `TodoList` dentro de `app/page.tsx`.
2. Conectar os estados e funções criadas na Fase 3 aos componentes filhos.
3. Ajustar o layout global para centralizar o container da To-Do List com sombra, bordas arredondadas e fundo limpo (estética moderna).
4. Testar o fluxo completo de ponta a ponta (Criar -> Concluir -> Filtrar -> Recarregar a página para validar o `localStorage`).



Qual destas fases você gostaria de detalhar agora para começarmos a codificar o primeiro bloco?