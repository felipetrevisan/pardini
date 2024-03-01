import { NextResponse } from "next/server";
import { Service } from "@/types/services";

export function GET() {
  const services: Service[] = [
    {
      icon: "",
      title: "Via judicial contra a fila",
      content:
        "Melhor opção pata obter a sua cidadania sem precisa ir à Itália ou aguardar anos na fila do consulado. Preparação dos documentos, ajuizamento e acompanhamento do processo do começo ao fim.",
      type: "NOT_HAVING",
    },
    {
      icon: "",
      title: "Via judicial materna (1948)",
      content:
        "Análise e preparação dos documentos no Brasil, orientação ajuizamento e acompanhamento da ação judicial na Itália feito por uma advogada italiana.",
      type: "NOT_HAVING",
    },
    {
      icon: "",
      title: "Via consulado",
      content:
        "Análise e preparação dos documentos no Brasil e orientação para a entrega e pedido via consulado.​",
      type: "NOT_HAVING",
    },
    {
      icon: "",
      title: "Consultoria on-line para reconhecimento na Itália",
      content:
        "Tenha orientação e consultoria para fazer o seu processo sozinho na Itália. Avaliamos o seu caso individual e montamos juntos um plano de execução e suporte em todas as etapas.",
      type: "NOT_HAVING",
    },
    {
      icon: "",
      title: "Pesquisa Genealógica",
      content:
        "Para você que está começando agora. Pesquisa genealógica para resgatar informações sobre a sua família e encontrar os dados de todos os documentos necessários para o processo.",
      type: "NOT_HAVING",
    },
    {
      icon: "",
      title: "Busca de documentos na Itália",
      content:
        "Para você que já localizou a certidão do seu italiano e precisa do documento físico. Busca e apostilamento do documento na Itália (nascimento, batismo e casamento).",
      type: "NOT_HAVING",
    },
    {
      icon: "",
      title: "Análise de documentos",
      content:
        "Análise minuciosa de todas as certidões do processo, relatório detalhado e orientações para a execução das retificações necessárias.",
      type: "NOT_HAVING",
    },
    {
      icon: "",
      title: "Montagem da pasta de documentos",
      content:
        "Para você que não quer ter trabalho algum com os documentos do Brasil. Preparação, análise, emissão, retificação, tradução e apostilamento de todos os documentos necessários para o reconhecimento da sua cidadania.",
      type: "NOT_HAVING",
    },
  ];

  return NextResponse.json({ data: services });
}
