# Real Code Studio - Site da Agência

## 🎯 Sobre o Projeto

Site responsivo e moderno desenvolvido para a Real Code Studio, uma agência especializada em criação de sites. O projeto foi criado com foco em demonstrar expertise em desenvolvimento web através de um design elegante e funcionalidades interativas.

## ✨ Características Principais

### Design e Visual
- **Paleta de Cores**: Azul (#0066FF), Preto e Branco
- **Estilo**: Moderno, minimalista e profissional
- **Responsividade**: Totalmente adaptável para desktop, tablet e mobile
- **Animações**: Efeitos visuais suaves e micro-interações

### Funcionalidades Especiais
- **Portfólio Interativo**: Hover effect que mostra o logo do cliente ao passar o mouse
- **Navegação Suave**: Scroll suave entre seções
- **Filtros de Categoria**: Organização dos projetos por tipo (Restaurantes, Oficinas, Varejo, Construção)
- **Formulário de Contato**: Interface completa para captação de leads

### Seções do Site
1. **Hero Section**: Apresentação impactante com call-to-actions
2. **Portfólio**: Showcase dos projetos com efeitos interativos
3. **Sobre**: Informações da agência com estatísticas
4. **Serviços**: Cards dos principais serviços oferecidos
5. **Contato**: Formulário e informações de contato
6. **Footer**: Links rápidos e informações adicionais

## 🚀 Tecnologias Utilizadas

- **React 18**: Framework principal
- **Vite**: Build tool e dev server
- **Tailwind CSS**: Framework de CSS utilitário
- **Lucide React**: Ícones modernos
- **Framer Motion**: Animações (preparado para uso)
- **shadcn/ui**: Componentes de UI

## 📁 Estrutura do Projeto

```
realcode-studio/
├── assets/                    # Assets coletados
│   ├── images/               # Imagens gerais e logo
│   ├── logos/                # Logos dos clientes
│   └── screenshots/          # Screenshots dos projetos
├── realcode-website/         # Projeto React
│   ├── src/
│   │   ├── assets/          # Assets do projeto
│   │   ├── components/      # Componentes React
│   │   ├── App.jsx          # Componente principal
│   │   └── App.css          # Estilos customizados
│   ├── dist/                # Build de produção
│   └── package.json         # Dependências
└── README.md                # Esta documentação
```

## 🛠️ Como Executar

### Desenvolvimento
```bash
cd realcode-website
npm install
npm run dev
```
O site estará disponível em `http://localhost:5173`

### Produção
```bash
cd realcode-website
npm run build
```
Os arquivos de produção estarão na pasta `dist/`

## 🎨 Portfólio Incluído

O site inclui 23 projetos organizados por categorias:

### Restaurantes e Gastronomia (10 projetos)
- Modern Mamma Osteria
- Restaurante Sapporo
- Grupo Banzeiro
- Tatini Restaurante
- Camarões
- Pizzaria Baggio
- Família Braz
- Pizzaria do Angelo
- Big Kahuna Burger
- Bull Guer

### Oficinas e Serviços Automotivos (4 projetos)
- Rede Top Oficina
- Oficina Bosch Service
- Oficcina
- Meu Mecânico

### Varejo e E-commerce (6 projetos)
- Fac Colchões
- GPA Brasil
- HS Bebidas
- Rift Distribuidora
- Super Ville Supermercado
- Quitanda Delivery

### Construção e Engenharia (3 projetos)
- Metaforma Inc
- Goes Construtora
- CDG Construtora

## 🎯 Funcionalidade Especial: Hover Effect

O portfólio possui um efeito especial onde ao passar o mouse sobre qualquer projeto:
1. Aparece um overlay escuro
2. O logo do cliente é exibido no centro
3. Um ícone de link externo indica que é clicável
4. Ao clicar, o site do cliente abre em nova aba

## 📱 Responsividade

O site foi desenvolvido com abordagem mobile-first e é totalmente responsivo:
- **Desktop**: Layout em grid de 3 colunas no portfólio
- **Tablet**: Layout em grid de 2 colunas
- **Mobile**: Layout em coluna única com menu hambúrguer

## 🎨 Customizações Possíveis

### Cores
As cores principais podem ser alteradas no arquivo `App.css`:
```css
:root {
  --primary-blue: #0066FF;
  --primary-blue-dark: #003399;
}
```

### Conteúdo
- Textos podem ser editados diretamente no `App.jsx`
- Imagens podem ser substituídas na pasta `src/assets/`
- Projetos do portfólio podem ser adicionados/removidos no array `portfolioProjects`

## 🚀 Deploy

O site está pronto para deploy em qualquer plataforma:
- **Vercel**: `vercel --prod`
- **Netlify**: Arraste a pasta `dist/` para o Netlify
- **GitHub Pages**: Configure o workflow de deploy
- **Servidor próprio**: Copie os arquivos da pasta `dist/`

## 📞 Informações de Contato (Fictícias)

- **Email**: contato@realcodestudio.com.br
- **Telefone**: (11) 99999-9999
- **Localização**: São Paulo, SP - Brasil

## 📝 Notas Importantes

1. **Assets**: Todos os assets (imagens, logos) foram coletados e organizados
2. **Performance**: Site otimizado para carregamento rápido
3. **SEO**: Estrutura HTML semântica preparada para SEO
4. **Acessibilidade**: Suporte a navegação por teclado e leitores de tela
5. **Compatibilidade**: Testado em navegadores modernos

## 🎉 Resultado Final

O site da Real Code Studio foi desenvolvido com excelência técnica e visual, demonstrando:
- Expertise em desenvolvimento web moderno
- Design profissional e elegante
- Funcionalidades interativas avançadas
- Código limpo e bem estruturado
- Responsividade perfeita
- Performance otimizada

O projeto está completo e pronto para uso profissional!

