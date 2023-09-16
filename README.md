<h1 align="center"> Upload AI </h1>

<p align="center">
Aplicação que recebe vídeos e utiliza IA para gerar títulos e descrições . <br/>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-anotações">Anotações</a>
</p>

<br>

<p align="center">
  <img alt="imagem representando um preview do projeto" src="./public/preview.png" width="100%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- Vite
- TailwindCSS
- RadixUI
- ShadcnUI
- Lucid react

## 💻 Projeto

O Upload AI tem a responsabilidade de gerar qualquer informação em relação a algum vídeo que será postado no Youtube, como o título e descrição, porém é possível utilizar outros recursos na aplicação

- [Acesse o projeto finalizado, online](#)

## 🔖 Layout

Acesse o Layout do projeto [aqui](#)

## 📋 Anotações

### Tópicos

<ul>
<li><a href="#tailwindcss">TailwindCSS</a></li>
<li><a href="#radix">RadixUI</a></li>
<li><a href="#shadcn">ShadcnUI</a></li>
</ul>

### TailwindCSS

<div id="#tailwindcss"></div>

O Tailwind é um processador de estilização CSS baseado em classes.
Todo tamanho colocado é um múltiplo de 4 (w-4 = width: 16px)

### RadixUI

<div id="#radix"></div>

Biblioteca com vários componentes React sem estilização

### ShadcnUI

<div id="#shadcn"></div>

Seguir a [documentação](https://ui.shadcn.com/docs/installation/vite) sobre a instalação da biblioteca para o Vite

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install -D @types/node
npx shadcn-ui@latest init
```

Bilioteca com vários componentes, principalmente do Radix, seguindo um estilo de design padrão com uma união dos componentes. Instala automaticamente o RadixUI e o TailwindCSS.
Os comandos acima são um exemplo do que devo fazer para iniciar um projeto com Shadcn, conforme na documentação de instalação.
Os componentes do Shadcn são copiados para dentro do projeto, ou seja, não vem de um pacote, como o MaterialUI ou Bootstrap

#### components/ui

Quando o shadcn é iniciado, o alias de @/components é usado para anexar todos os componentes que são baixados do shadcnUI, que vão na pasta ./ui

```
npx shadcn-ui@latest add button
npx shadcn-ui@latest add separator
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add label
npx shadcn-ui@latest add select
npx shadcn-ui@latest add slider
```

### lucide react

```
npm install lucide-react
```

Utilizado para inserir ícones

### Windows+.

Chama uma lista de emojis
