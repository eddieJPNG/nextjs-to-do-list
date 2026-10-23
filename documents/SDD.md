## 1. Visão Geral do Projeto

Este **Software Design Document (SDD)** detalha a arquitetura, os componentes e os fundamentos de desenvolvimento web por trás de uma **To-Do List (Lista de Tarefas)** moderna desenvolvida em **Next.js**.

O projeto foi pensado para consolidar os pilares essenciais do desenvolvimento web moderno: componentização, manipulação de estado, persistência de dados local, roteamento baseado em arquivos e estilização responsiva com uma experiência de usuário limpa e fluida.

---

## 2. Objetivos de Aprendizagem e Fundamentos Web

Construir uma To-Do List em Next.js exercita conceitos fundamentais que sustentam aplicações web de nível profissional:

* **Arquitetura de Componentes:** Divisão da interface em blocos reutilizáveis, isolando responsabilidades (ex: entrada de dados, listagem e item individual).
* **Gerenciamento de Estado (State Management):** Uso de hooks do React (`useState`, `useEffect`) para controlar a reatividade da interface em tempo real.
* **Renderização Híbrida (SSR vs. Client Components):** Compreensão da diretiva `use client` no Next.js App Router para gerenciar interatividade no navegador.
* **Persistência de Dados (Web Storage):** Utilização do `localStorage` do navegador para manter os dados salvos mesmo após atualizar a página.
* **Estilização Utilitária:** Uso do **Tailwind CSS** para criar layouts responsivos de forma rápida e padronizada.

---

## 3. Stack Tecnológica

| Camada | Tecnologia | Propósito |
| --- | --- | --- |
| **Framework** | Next.js (App Router) | Estrutura da aplicação, roteamento e renderização |
| **Linguagem** | TypeScript | Tipagem estática para maior segurança e previsibilidade do código |
| **Estilização** | Tailwind CSS | Estilização ágil baseada em classes utilitárias |
| **Ícones** | Lucide React | Biblioteca de ícones leves e modernos para a interface |

---

## 4. Arquitetura e Estrutura de Pastas

A organização do projeto segue o padrão recomendado para o App Router do Next.js, mantendo a separação clara entre páginas, componentes visuais e tipos de dados.

```text
todo-app/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx       # Layout global e provedores de fontes
│   └── page.tsx         # Página principal da aplicação
├── components/
│   ├── TodoInput.tsx    # Formulário para criação de novas tarefas
│   ├── TodoItem.tsx     # Item individual da lista (ações de concluir/deletar)
│   └── TodoList.tsx     # Agrupador e filtro das tarefas
├── types/
│   └── index.ts         # Definições de interfaces TypeScript
├── package.json
└── tailwind.config.ts

```

---

## 5. Modelagem de Dados

Para garantir a consistência dos dados manipulados na aplicação, definimos a estrutura principal da Tarefa (`Todo`) em `types/index.ts`:

```typescript
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

export type FilterType = 'all' | 'active' | 'completed';

```

---

## 6. Especificação de Componentes

### 6.1. `app/page.tsx` (Página Principal)

* **Responsabilidade:** Servir como o contêiner central da aplicação. Gerencia o estado global das tarefas (`todos`), a lógica de CRUD (Criar, Ler, Atualizar, Deletar) e a sincronização com o `localStorage`.
* **Fundamento Web:** Demonstra o ciclo de vida do componente no lado do cliente (`useEffect` para carregar dados salvos ao iniciar a aplicação).

### 6.2. `components/TodoInput.tsx` (Entrada de Dados)

* **Responsabilidade:** Capturar o input do usuário para adicionar uma nova tarefa.
* **Fundamento Web:** Manipulação de eventos de formulário (`onSubmit`), prevenção do comportamento padrão de recarregamento (`e.preventDefault()`) e validação básica de campos vazios.

### 6.3. `components/TodoList.tsx` (Listagem e Filtros)

* **Responsabilidade:** Exibir a coleção de tarefas e permitir filtrar entre "Todas", "Pendentes" e "Concluídas".
* **Fundamento Web:** Métodos de array do JavaScript (`filter`, `map`) para transformar dados brutos em elementos de interface dinâmicos.

### 6.4. `components/TodoItem.tsx` (Item Individual)

* **Responsabilidade:** Renderizar o texto da tarefa, um botão para alternar o status de conclusão e um botão para exclusão.
* **Fundamento Web:** Interatividade baseada em eventos de clique e estilização condicional de classes CSS com base no estado (`completed ? 'line-through text-gray-400' : ''`).

---

## 7. Guia de Implementação Rápida

Para colocar este projeto em prática, siga os passos fundamentais de inicialização:

1. **Criar o projeto Next.js:**
```bash
npx create-next-app@latest todo-app --typescript --tailwind --app

```


2. **Instalar dependências de ícones:**
```bash
npm install lucide-react

```


3. **Configurar os tipos** em `types/index.ts`.
4. **Desenvolver os componentes** na pasta `components/` seguindo a separação de responsabilidades descrita neste documento.
5. **Implementar a persistência** com `localStorage` no hook `useEffect` dentro de `app/page.tsx`.

> **Nota de Design:** Mantenha o código limpo, utilize tipagem estrita no TypeScript sem o uso de `any`, e aproveite as classes utilitárias do Tailwind para construir uma interface responsiva tanto para dispositivos móveis quanto para desktops.

