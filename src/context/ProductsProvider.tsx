import { createContext, ReactElement, useState } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
  category: string;
  description: string;
};

const initState: ProductType[] = [
        {
          "sku": "item0001",
          "name": "Employee Experience",
          "price": 509.99,
          "category": "experiencia",
          "description": "Com um olhar inovador, o seu diferencial está no modo como integra o cuidado com as pessoas e aplica tecnologia de ponta em seus processos, como inteligência artificial, robotic process automation, serviços em nuvem e ferramentas de analytics e segurança."
        },
        {
          "sku": "item0002",
          "name": "Customer Experience",
          "price": 299.99,
          "category": "direitoria",
          "description": "Como um dos diferenciais competitivos, a AeC possui expertise em atendimento ao cliente e, por ser originalmente uma empresa de tecnologia, atualmente é referência no desenvolvimento de soluções que conciliam atendimento humano e digital."
        },
        {
          "sku": "item0003",
          "name": "Transformação Digital",
          "price": 359.99,
          "category": "digital",
          "description": "A empresa também atua na área de Consultoria e Gestão, oferecendo serviços, soluções e produtos, Consultoria e Gerenciamento de Projetos, Outsourcing e Desenvolvimento de sistemas sob medida, criando soluções inovadoras para facilitar o dia a dia de milhões de consumidores."
        },
        {
          "sku": "item0004",
          "name": "Case de Sucesso",
          "price": 509.99,
          "category": "resultados",
          "description": "A AeC é apontada consistentemente como a líder brasileira na entrega de soluções de experiência do cliente e gestão de processos terceirizados."
        },
        {
          "sku": "item0005",
          "name": "Atendimento Personalizado",
          "price": 299.99,
          "category": "contato",
          "description": "Entenda como foi construído um lugar em que as pessoas desejam realizar suas atividades profissionais, o que é essencial para manter talentos e também entregar um atendimento de excelência para o consumidor final."
        },
        {
          "sku": "item0006",
          "name": "Foodtech",
          "price": 359.99,
          "category": "delivery",
          "description": "Conheça, como a AeC mudou a visão do consumidor no atendimento prestado por uma das empresas referência em pedidos online."
        },
        {
          "sku": "item0007",
          "name": "Pagamentos",
          "price": 509.99,
          "category": "contas",
          "description": "Em meio a esse cenário dinâmico, a AeC assumiu a operação de atendimento ao cliente de uma renomada bandeira de cartões de crédito."
        },
        {
          "sku": "item0008",
          "name": "Automação",
          "price": 299.99,
          "category": "inteligencia",
          "description": "Esse é um exemplo interessante de como a tecnologia pode ser aplicada para aprimorar os serviços ao cliente, melhorar a eficiência operacional e alcançar resultados significativos. A colaboração interdepartamental, a análise de dados e a adaptação às necessidades dos clientes foram componentes fundamentais para esse sucesso."
        },
        {
          "sku": "item0009",
          "name": "Carteira Digital",
          "price": 359.99,
          "category": "atendimento",
          "description": "Assim como fez no projeto para a carteira digital, a AeC contribui para que diversas empresas de vários segmentos tenham condições de prestar serviços cada vez melhores para milhões de pessoas. Por isso, uma empresa cuidadosa, que investe pesado em infraestrutura, tecnologia e, principalmente, em capital humano."
        }      
];

export type UseProductsContextType = { products: ProductType[] };

const initContextState: UseProductsContextType = { products: initState };

const ProductsContext = createContext<UseProductsContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products] = useState<ProductType[]>(initState);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
