export const PLANS = [
  { id: 'solo', name: 'Solo', monthly: 49, blurb: 'Para quem corta sozinho e quer parar de responder recado.', chairs: '1 barbeiro', features: ['Agenda online com link próprio', 'Lembrete por WhatsApp (200/mês)', 'Cadastro de serviços e preços', 'Relatório semanal simples'] },
  { id: 'casa', name: 'Casa', monthly: 99, blurb: 'A escolha da maioria: equipe, sinal e comissão no mesmo lugar.', chairs: 'Até 5 barbeiros', featured: true, features: ['Tudo do Solo', 'Agenda por barbeiro e folgas', 'Sinal via Pix para segurar o horário', 'Comissão calculada por serviço', 'Lembretes ilimitados', 'Lista de espera automática'] },
  { id: 'rede', name: 'Rede', monthly: 219, blurb: 'Para quem tem mais de uma unidade e precisa enxergar tudo.', chairs: 'Barbeiros ilimitados', features: ['Tudo do Casa', 'Várias unidades, um painel', 'Pacotes e assinatura de cortes', 'Painel de retenção de clientes', 'Suporte prioritário'] },
]
export const ANNUAL_DISCOUNT = 0.2
export const price = (monthly, annual) => Math.round(annual ? monthly * (1 - ANNUAL_DISCOUNT) : monthly)
export const yearlySaving = (monthly) => Math.round(monthly * 12 * ANNUAL_DISCOUNT)
