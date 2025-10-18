"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { 
  TrendingUp, 
  Shield, 
  BookOpen, 
  Users, 
  Star, 
  CheckCircle, 
  Play, 
  Clock, 
  Award,
  BarChart3,
  PiggyBank,
  Target,
  Zap,
  ArrowRight,
  Quote,
  DollarSign,
  Globe,
  Bitcoin,
  Download,
  Video,
  FileText,
  MessageCircle,
  Smartphone,
  TrendingDown,
  Calculator,
  Brain,
  Lightbulb
} from "lucide-react"
import { useState } from "react"

export default function CursoInvestimentos() {
  const [showPayment, setShowPayment] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<{name: string, price: string, originalPrice?: string, features: string[]} | null>(null)

  const modulos = [
    {
      titulo: "Fundamentos dos Investimentos",
      aulas: 12,
      duracao: "4h 30min",
      topicos: ["Conceitos básicos", "Perfil de investidor", "Objetivos financeiros", "Planejamento estratégico", "Psicologia do investidor", "Gestão de risco"]
    },
    {
      titulo: "Renda Fixa Nacional",
      aulas: 18,
      duracao: "6h 45min", 
      topicos: ["Tesouro Direto completo", "CDB e RDB", "LCI/LCA", "Debêntures", "CRI/CRA", "Fundos DI", "Como montar carteira conservadora"]
    },
    {
      titulo: "Renda Variável Brasileira",
      aulas: 22,
      duracao: "8h 20min",
      topicos: ["Ações na prática", "FIIs completo", "ETFs nacionais", "Análise fundamentalista", "Análise técnica", "Day trade", "Swing trade", "Buy and hold"]
    },
    {
      titulo: "Fundos de Investimento",
      aulas: 15,
      duracao: "5h 10min",
      topicos: ["Tipos de fundos", "Taxa de administração", "Como escolher", "Tributação", "Fundos multimercado", "Fundos imobiliários", "Previdência privada"]
    },
    {
      titulo: "Moedas Estrangeiras e Forex",
      aulas: 20,
      duracao: "7h 30min",
      topicos: ["Mercado Forex completo", "Dólar e Euro", "Hedge cambial", "BDRs na prática", "ETFs internacionais", "Remessa para exterior", "Conta no exterior", "Tributação internacional"]
    },
    {
      titulo: "Criptomoedas e Bitcoin",
      aulas: 18,
      duracao: "6h 40min",
      topicos: ["Fundamentos do Bitcoin", "Altcoins principais", "Exchanges brasileiras", "Carteiras digitais", "DeFi básico", "NFTs", "Staking", "Tributação crypto", "Análise on-chain"]
    },
    {
      titulo: "Estratégias Avançadas",
      aulas: 16,
      duracao: "5h 50min",
      topicos: ["Diversificação global", "Rebalanceamento", "Dollar cost averaging", "Buy and hold", "Arbitragem", "Hedge strategies", "Proteção de carteira"]
    },
    {
      titulo: "Impostos e Tributação",
      aulas: 14,
      duracao: "4h 40min",
      topicos: ["IR sobre investimentos", "Come-cotas", "Isenções", "Declaração anual", "Crypto na receita", "Planejamento tributário", "Otimização fiscal"]
    },
    {
      titulo: "Ferramentas e Análise",
      aulas: 12,
      duracao: "4h 20min",
      topicos: ["Planilhas avançadas", "Calculadoras", "Apps essenciais", "Plataformas de análise", "Indicadores técnicos", "Backtesting"]
    },
    {
      titulo: "Mentalidade e Disciplina",
      aulas: 10,
      duracao: "3h 30min",
      topicos: ["Psicologia do investidor", "Controle emocional", "Disciplina financeira", "Metas de longo prazo", "Erros comuns", "Mindset milionário"]
    }
  ]

  const depoimentos = [
    {
      nome: "Carlos Eduardo Silva",
      profissao: "Engenheiro de Software",
      texto: "Em 8 meses seguindo as estratégias do curso, consegui aumentar meu patrimônio em 47%. O módulo de Bitcoin foi fundamental!",
      rating: 5,
      resultado: "+47% em 8 meses"
    },
    {
      nome: "Marina Oliveira",
      profissao: "Médica Veterinária",
      texto: "Nunca pensei que investir em moedas estrangeiras pudesse ser tão simples. Hoje tenho uma carteira diversificada globalmente.",
      rating: 5,
      resultado: "Carteira global diversificada"
    },
    {
      nome: "Roberto Santos",
      profissao: "Empresário",
      texto: "O curso me ensinou a otimizar meus impostos e hoje pago 60% menos IR nos meus investimentos. Valeu cada centavo!",
      rating: 5,
      resultado: "-60% em impostos"
    },
    {
      nome: "Ana Paula Costa",
      profissao: "Professora",
      texto: "Comecei com R$ 500 e hoje tenho mais de R$ 50.000 investidos. As estratégias funcionam mesmo!",
      rating: 5,
      resultado: "R$ 500 → R$ 50.000"
    },
    {
      nome: "Felipe Rodrigues",
      profissao: "Advogado",
      texto: "A comunidade é incrível! Sempre alguém compartilhando oportunidades. Já fiz várias operações lucrativas através das dicas.",
      rating: 5,
      resultado: "Múltiplas operações lucrativas"
    },
    {
      nome: "Juliana Ferreira",
      profissao: "Arquiteta",
      texto: "O módulo de criptomoedas me abriu os olhos. Hoje crypto representa 20% da minha carteira e está performando muito bem.",
      rating: 5,
      resultado: "20% em crypto com alta performance"
    }
  ]

  const faq = [
    {
      pergunta: "Preciso ter conhecimento prévio em investimentos?",
      resposta: "Não! O curso foi desenvolvido para iniciantes. Começamos do básico e evoluímos gradualmente até estratégias avançadas."
    },
    {
      pergunta: "O curso aborda criptomoedas e Bitcoin?",
      resposta: "Sim! Temos um módulo completo sobre criptomoedas, Bitcoin, DeFi, NFTs e como investir com segurança neste mercado."
    },
    {
      pergunta: "Posso investir em moedas estrangeiras sendo brasileiro?",
      resposta: "Claro! Ensinamos todas as formas legais de investir no exterior, incluindo BDRs, ETFs internacionais, contas no exterior e remessas."
    },
    {
      pergunta: "Por quanto tempo tenho acesso ao conteúdo?",
      resposta: "Você tem acesso vitalício ao curso e a todas as atualizações futuras. Uma vez aluno, sempre aluno!"
    },
    {
      pergunta: "Existe certificado de conclusão?",
      resposta: "Sim! Ao completar todos os módulos, você recebe um certificado digital de conclusão reconhecido no mercado."
    },
    {
      pergunta: "Posso tirar dúvidas durante o curso?",
      resposta: "Claro! Temos um grupo exclusivo no Telegram para alunos tirarem dúvidas e trocarem experiências, além de suporte direto."
    },
    {
      pergunta: "Há garantia de satisfação?",
      resposta: "Oferecemos 30 dias de garantia incondicional. Se não ficar satisfeito, devolvemos 100% do valor, sem perguntas."
    },
    {
      pergunta: "O curso ensina sobre impostos?",
      resposta: "Sim! Temos um módulo completo sobre tributação, incluindo como otimizar impostos legalmente e declarar investimentos."
    },
    {
      pergunta: "Vocês oferecem mentoria individual?",
      resposta: "Sim! No plano VIP incluímos 1 hora de mentoria individual para análise da sua carteira e estratégia personalizada."
    },
    {
      pergunta: "O conteúdo é atualizado?",
      resposta: "Constantemente! O mercado muda e nosso conteúdo acompanha. Você recebe todas as atualizações gratuitamente."
    }
  ]

  const plans = [
    {
      name: "Essencial",
      price: "297",
      originalPrice: "497",
      description: "Para quem está começando do zero",
      features: [
        "Acesso aos 10 módulos completos",
        "157 aulas + 50h de conteúdo",
        "Certificado de conclusão",
        "Acesso vitalício",
        "Suporte por email",
        "Atualizações gratuitas"
      ]
    },
    {
      name: "Premium",
      price: "497",
      originalPrice: "797",
      description: "Recomendado - Melhor custo-benefício",
      popular: true,
      features: [
        "Tudo do plano Essencial",
        "Grupo exclusivo no Telegram",
        "20+ planilhas e calculadoras",
        "E-books complementares",
        "Suporte prioritário",
        "Lives mensais exclusivas",
        "Análises de mercado semanais"
      ]
    },
    {
      name: "VIP",
      price: "897",
      originalPrice: "1497",
      description: "Para quem quer resultados máximos",
      features: [
        "Tudo do plano Premium",
        "1 mentoria individual (1h)",
        "Análise personalizada da carteira",
        "Acesso antecipado a novos cursos",
        "Suporte WhatsApp direto",
        "Grupo VIP exclusivo",
        "Consultoria tributária básica",
        "Kit de ferramentas premium"
      ]
    }
  ]

  const bonusItems = [
    {
      title: "E-book: Guia Completo de Criptomoedas",
      value: "R$ 97",
      description: "Manual completo sobre Bitcoin, Ethereum e principais altcoins"
    },
    {
      title: "Planilha de Controle de Investimentos",
      value: "R$ 67",
      description: "Planilha profissional para acompanhar todos seus investimentos"
    },
    {
      title: "Calculadora de Aposentadoria",
      value: "R$ 47",
      description: "Descubra quanto precisa investir para se aposentar"
    },
    {
      title: "Grupo VIP no Telegram",
      value: "R$ 197",
      description: "Acesso exclusivo ao grupo de alunos e mentores"
    },
    {
      title: "Lives Mensais Exclusivas",
      value: "R$ 297",
      description: "Análises de mercado e oportunidades em tempo real"
    }
  ]

  const handlePlanSelect = (plan: typeof plans[0]) => {
    setSelectedPlan(plan)
    setShowPayment(true)
  }

  if (showPayment && selectedPlan) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-8 w-8 text-blue-600" />
                <span className="text-2xl font-bold text-gray-900">InvestMaster Pro</span>
              </div>
              <Button 
                variant="outline" 
                onClick={() => setShowPayment(false)}
              >
                Voltar
              </Button>
            </div>
          </div>
        </header>

        {/* Página de Pagamento PIX */}
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Finalizar Compra - Plano {selectedPlan.name}
              </h1>
              <p className="text-xl text-gray-600">
                Você está a um passo de transformar sua vida financeira!
              </p>
              <div className="mt-4 inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                <Clock className="h-4 w-4" />
                <span className="font-semibold">Oferta por tempo limitado!</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Resumo do Pedido */}
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span>Resumo do Pedido</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="font-semibold text-lg mb-2">
                      Curso Completo de Investimentos - Plano {selectedPlan.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{selectedPlan.description}</p>
                    
                    <div className="space-y-2">
                      {selectedPlan.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bônus Inclusos */}
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                      <Award className="h-5 w-5 mr-2" />
                      Bônus Inclusos (Valor: R$ 705)
                    </h4>
                    <div className="space-y-2">
                      {bonusItems.slice(0, selectedPlan.name === 'VIP' ? 5 : selectedPlan.name === 'Premium' ? 4 : 3).map((bonus, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <span className="text-yellow-700">{bonus.title}</span>
                          <span className="font-semibold text-yellow-800">{bonus.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Valor original:</span>
                      <span className="line-through text-gray-500">R$ {selectedPlan.originalPrice},00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Desconto especial:</span>
                      <span className="text-red-600">-R$ {(parseInt(selectedPlan.originalPrice!) - parseInt(selectedPlan.price)).toFixed(0)},00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>R$ {selectedPlan.price},00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Desconto PIX (5%):</span>
                      <span className="text-green-600">-R$ {(parseInt(selectedPlan.price) * 0.05).toFixed(0)},00</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total:</span>
                        <span className="text-green-600">R$ {(parseInt(selectedPlan.price) * 0.95).toFixed(0)},00</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        Economia total: R$ {(parseInt(selectedPlan.originalPrice!) - (parseInt(selectedPlan.price) * 0.95)).toFixed(0)},00
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="h-5 w-5 text-green-600" />
                      <span className="font-semibold text-green-800">Garantias Incluídas</span>
                    </div>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>✅ 30 dias de garantia incondicional</li>
                      <li>✅ Acesso imediato após pagamento</li>
                      <li>✅ Suporte técnico incluído</li>
                      <li>✅ Atualizações gratuitas vitalícias</li>
                      <li>✅ Certificado de conclusão</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Pagamento PIX */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="h-6 w-6 text-blue-600" />
                    <span>Pagamento via PIX</span>
                  </CardTitle>
                  <CardDescription>
                    Pagamento instantâneo com 5% de desconto adicional
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* QR Code Simulado */}
                  <div className="text-center">
                    <div className="bg-white border-2 border-gray-300 rounded-lg p-8 mb-4 inline-block">
                      <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-32 h-32 bg-black mx-auto mb-4 rounded-lg flex items-center justify-center">
                            <div className="grid grid-cols-8 gap-1">
                              {Array.from({length: 64}).map((_, i) => (
                                <div 
                                  key={i} 
                                  className={`w-1 h-1 ${Math.random() > 0.5 ? 'bg-white' : 'bg-black'}`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-xs text-gray-600">QR Code PIX</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Escaneie o QR Code com o app do seu banco
                    </p>
                  </div>

                  {/* Chave PIX */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">Ou copie a chave PIX:</p>
                    <div className="flex items-center space-x-2">
                      <code className="flex-1 bg-white p-3 rounded border text-xs break-all">
                        00020126580014BR.GOV.BCB.PIX013636c4e1c8-7e4a-4c2d-9f8a-1b2c3d4e5f6g5204000053039865802BR5925INVESTMASTER EDUCACAO LTDA6009SAO PAULO62070503***6304{Math.random().toString(36).substring(2, 6).toUpperCase()}
                      </code>
                      <Button size="sm" variant="outline">
                        Copiar
                      </Button>
                    </div>
                  </div>

                  {/* Instruções */}
                  <div className="space-y-4">
                    <h4 className="font-semibold">Como pagar:</h4>
                    <ol className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start space-x-2">
                        <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                        <span>Abra o app do seu banco ou carteira digital</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                        <span>Escolha a opção "Pagar com PIX"</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                        <span>Escaneie o QR Code ou cole a chave PIX</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                        <span>Confirme o pagamento de R$ {(parseInt(selectedPlan.price) * 0.95).toFixed(0)},00</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">5</span>
                        <span>Receba o acesso por email em até 5 minutos</span>
                      </li>
                    </ol>
                  </div>

                  {/* Status do Pagamento */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-yellow-600" />
                      <span className="font-semibold text-yellow-800">Aguardando Pagamento</span>
                    </div>
                    <p className="text-sm text-yellow-700 mt-1">
                      Esta página será atualizada automaticamente quando o pagamento for confirmado.
                    </p>
                  </div>

                  {/* Urgência */}
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingDown className="h-5 w-5 text-red-600" />
                      <span className="font-semibold text-red-800">Oferta por Tempo Limitado!</span>
                    </div>
                    <p className="text-sm text-red-700">
                      Este desconto especial expira em breve. Garante já sua vaga com o melhor preço!
                    </p>
                  </div>

                  {/* Suporte */}
                  <div className="text-center pt-4 border-t">
                    <p className="text-sm text-gray-600 mb-2">
                      Precisa de ajuda? Entre em contato:
                    </p>
                    <div className="flex justify-center space-x-4 text-sm">
                      <span className="text-blue-600">📧 suporte@investmaster.com.br</span>
                      <span className="text-green-600">📱 (11) 99999-9999</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">InvestMaster Pro</span>
            </div>
            <Button className="bg-green-600 hover:bg-green-700">
              Começar Agora
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-red-100 text-red-800 hover:bg-red-100 animate-pulse">
            🔥 OFERTA LIMITADA: Até 40% OFF - Últimas vagas!
          </Badge>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Torne-se um <span className="text-blue-600">Investidor</span><br />
            <span className="text-green-600">Profissional</span> em 2024
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            O curso mais completo do Brasil sobre investimentos nacionais e internacionais. 
            Aprenda <strong>Bitcoin, moedas estrangeiras, ações, renda fixa</strong> e muito mais 
            com quem já treinou mais de <strong>50.000 investidores</strong>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4" onClick={() => handlePlanSelect(plans[1])}>
              <Play className="mr-2 h-5 w-5" />
              Quero Começar Agora
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Ver Conteúdo Completo
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <Video className="h-6 w-6 text-blue-600" />
              <span className="text-gray-700">157 aulas + 50h</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Bitcoin className="h-6 w-6 text-orange-600" />
              <span className="text-gray-700">Bitcoin e Crypto</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Globe className="h-6 w-6 text-green-600" />
              <span className="text-gray-700">Investimentos Globais</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-6 w-6 text-purple-600" />
              <span className="text-gray-700">30 dias de garantia</span>
            </div>
          </div>

          {/* Prova Social */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50.000+</div>
                <div className="text-gray-600">Alunos Formados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">R$ 2.5B+</div>
                <div className="text-gray-600">Patrimônio Gerenciado</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">4.9/5</div>
                <div className="text-gray-600">Avaliação Média</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Por que mais de 50.000 pessoas escolheram nosso curso?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O método mais eficaz para dominar investimentos nacionais e internacionais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Mercado Nacional Completo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Domine todos os investimentos brasileiros: ações, FIIs, renda fixa, 
                  fundos e estratégias avançadas de diversificação.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <Bitcoin className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Bitcoin e Criptomoedas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Módulo completo sobre Bitcoin, altcoins, DeFi, NFTs, exchanges 
                  e como investir com segurança no futuro do dinheiro.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <Globe className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Investimentos Globais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Aprenda sobre Forex, BDRs, ETFs internacionais, contas no exterior 
                  e diversificação global da sua carteira.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <Brain className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Mentalidade Vencedora</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Desenvolva a psicologia e disciplina necessárias para ser um 
                  investidor de sucesso no longo prazo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <Calculator className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Ferramentas Profissionais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Planilhas avançadas, calculadoras, apps essenciais e 
                  ferramentas que os profissionais usam no dia a dia.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-teal-200 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-teal-600 mb-4" />
                <CardTitle>Comunidade Exclusiva</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Acesso ao grupo exclusivo com outros investidores, mentores 
                  e oportunidades compartilhadas em tempo real.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Módulos do Curso */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Conteúdo Completo do Curso
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              10 módulos estruturados + 157 aulas + 50 horas de conteúdo para te transformar 
              em um investidor profissional
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {modulos.map((modulo, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className={`${
                      index === 4 ? 'bg-green-100 text-green-800' : 
                      index === 5 ? 'bg-orange-100 text-orange-800' :
                      index === 8 ? 'bg-purple-100 text-purple-800' :
                      index === 9 ? 'bg-pink-100 text-pink-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      Módulo {index + 1}
                      {index === 4 && <Globe className="ml-1 h-3 w-3" />}
                      {index === 5 && <Bitcoin className="ml-1 h-3 w-3" />}
                      {index === 8 && <Calculator className="ml-1 h-3 w-3" />}
                      {index === 9 && <Brain className="ml-1 h-3 w-3" />}
                    </Badge>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Play className="h-4 w-4 mr-1" />
                        {modulo.aulas} aulas
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {modulo.duracao}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{modulo.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {modulo.topicos.map((topico, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{topico}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preços */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-100 animate-pulse">
              🔥 OFERTA ESPECIAL - ÚLTIMAS HORAS!
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Investimento no Seu Futuro Financeiro
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha o plano ideal para transformar sua vida financeira
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`border-2 transition-colors ${
                plan.popular ? 'border-green-500 shadow-2xl scale-105 relative' : 'hover:border-blue-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-600 text-white px-4 py-1">
                      MAIS ESCOLHIDO
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-2xl text-gray-500 line-through">R$ {plan.originalPrice}</span>
                      <span className="text-4xl font-bold text-gray-900">R$ {plan.price}</span>
                    </div>
                    <p className="text-green-600 font-semibold mt-1">
                      Economia: R$ {(parseInt(plan.originalPrice!) - parseInt(plan.price)).toFixed(0)}
                    </p>
                    <span className="text-gray-500">/pagamento único</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  <Button 
                    className={`w-full mt-6 ${
                      plan.popular ? 'bg-green-600 hover:bg-green-700' :
                      plan.name === 'VIP' ? 'bg-purple-600 hover:bg-purple-700' :
                      ''
                    }`}
                    variant={plan.popular || plan.name === 'VIP' ? 'default' : 'outline'}
                    onClick={() => handlePlanSelect(plan)}
                  >
                    Escolher {plan.name}
                  </Button>
                  {plan.popular && (
                    <p className="text-center text-sm text-green-600 font-semibold">
                      ⚡ Melhor custo-benefício
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 space-y-4">
            <div className="bg-green-50 p-6 rounded-lg max-w-2xl mx-auto">
              <h3 className="font-semibold text-green-800 mb-2">💳 Formas de Pagamento</h3>
              <p className="text-green-700 mb-2">
                <strong>PIX:</strong> 5% de desconto adicional (pagamento à vista)
              </p>
              <p className="text-green-700 mb-2">
                <strong>Cartão:</strong> Parcelamento em até 12x sem juros
              </p>
              <p className="text-green-700">
                <strong>Boleto:</strong> À vista com 3% de desconto
              </p>
            </div>
            <p className="text-gray-600">
              🛡️ <strong>30 dias de garantia incondicional</strong> - Se não ficar satisfeito, devolvemos 100% do valor
            </p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Resultados Reais dos Nossos Alunos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mais de 50.000 pessoas já transformaram suas vidas financeiras
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {depoimentos.map((depoimento, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {[...Array(depoimento.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {depoimento.resultado}
                    </Badge>
                  </div>
                  <Quote className="h-8 w-8 text-gray-300 mb-4" />
                  <p className="text-gray-700 mb-6 italic">
                    "{depoimento.texto}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">{depoimento.nome}</p>
                    <p className="text-gray-600 text-sm">{depoimento.profissao}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre o curso
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  {item.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {item.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Urgência e Escassez */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              ⚠️ ATENÇÃO: Oferta Expira em Breve!
            </h2>
            <p className="text-xl text-red-100 mb-6">
              Esta é uma oferta especial por tempo limitado. Após o prazo, 
              o curso volta ao preço normal de <strong>R$ 1.497</strong>.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">23</div>
                <div className="text-red-100 text-sm">Horas</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">45</div>
                <div className="text-red-100 text-sm">Minutos</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">12</div>
                <div className="text-red-100 text-sm">Segundos</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">87</div>
                <div className="text-red-100 text-sm">Vagas</div>
              </div>
            </div>

            <p className="text-red-100 mb-6">
              🔥 <strong>Últimas 87 vagas</strong> com desconto especial
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="bg-white text-red-600 hover:bg-gray-100 text-xl px-12 py-6 animate-pulse"
            onClick={() => handlePlanSelect(plans[1])}
          >
            <ArrowRight className="mr-2 h-6 w-6" />
            GARANTIR MINHA VAGA AGORA
          </Button>
          
          <p className="text-red-100 text-sm mt-4">
            ✅ Acesso imediato • ✅ 30 dias de garantia • ✅ PIX com 5% desconto extra
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Pronto para se tornar um investidor profissional?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a mais de 50.000 pessoas que já aprenderam a investir com segurança 
            e construir patrimônio no Brasil e no exterior.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
              onClick={() => handlePlanSelect(plans[1])}
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              Começar Agora - R$ 497
            </Button>
            <div className="text-blue-100 text-sm">
              <p>✅ 30 dias de garantia</p>
              <p>✅ Acesso imediato</p>
              <p>✅ PIX com 5% desconto</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="font-semibold text-white mb-4">🎁 Bônus Exclusivos Inclusos:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-100 text-sm">
              <div>✅ E-book Guia de Criptomoedas (R$ 97)</div>
              <div>✅ Planilha de Controle (R$ 67)</div>
              <div>✅ Calculadora de Aposentadoria (R$ 47)</div>
              <div>✅ Grupo VIP Telegram (R$ 197)</div>
            </div>
            <p className="text-white font-semibold mt-4">
              Total em bônus: R$ 705 - GRÁTIS!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">InvestMaster Pro</span>
              </div>
              <p className="text-gray-400">
                Transformando vidas através da educação financeira e investimentos 
                inteligentes nacionais e internacionais desde 2018.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Curso</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Conteúdo Completo</li>
                <li>Preços e Planos</li>
                <li>Bitcoin & Crypto</li>
                <li>Moedas Estrangeiras</li>
                <li>Certificado</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li>FAQ</li>
                <li>Contato</li>
                <li>Comunidade</li>
                <li>Ajuda Técnica</li>
                <li>Garantia</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Termos de Uso</li>
                <li>Política de Privacidade</li>
                <li>Política de Reembolso</li>
                <li>CNPJ: 12.345.678/0001-90</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 InvestMaster Pro. Todos os direitos reservados.</p>
            <p className="mt-2 text-sm">
              Este produto é comercializado com apoio da Hotmart. A plataforma não faz controle editorial prévio dos produtos comercializados, nem avalia a tecnicidade e experiência daqueles que os produzem.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}