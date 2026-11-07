import { useState } from 'preact/hooks'
import { PLANS, price, yearlySaving } from './pricing.js'

const FEATURES = [
  ['Agenda por barbeiro', 'Cada cadeira com sua grade, pausas e folgas. O cliente escolhe quem e quando, sem trocar mensagem.'],
  ['Lembrete no WhatsApp', 'Aviso 24h e 2h antes do horário, com botão para confirmar ou remarcar. Faltas caem na prática.'],
  ['Sinal por Pix', 'Segure o horário de quem costuma sumir com um sinal descontado no dia do corte.'],
  ['Comissão sem planilha', 'Fechamento por barbeiro e por serviço, pronto para o fim do mês.'],
  ['Lista de espera', 'Cancelou? O próximo da fila recebe o horário vago na hora, antes de ficar buraco na agenda.'],
  ['Clientes que voltam', 'Quem passou de 40 dias sem cortar aparece numa lista, com mensagem pronta para chamar de volta.'],
]
const STEPS = [
  ['01', 'Cadastre a casa', 'Serviços, preços e barbeiros em cerca de 10 minutos.'],
  ['02', 'Divulgue o link', 'Coloque no Instagram, no Google e na porta da barbearia.'],
  ['03', 'Receba agendados', 'O horário entra sozinho na agenda e o lembrete sai sem você.'],
]
const FAQ = [
  ['Preciso instalar alguma coisa?', 'Não. O Filete roda no navegador do celular ou do computador. O cliente agenda por um link, sem baixar aplicativo.'],
  ['Como funciona o lembrete no WhatsApp?', 'O sistema envia a mensagem pelo número da barbearia. O cliente responde com um toque para confirmar ou pedir outro horário.'],
  ['Posso cobrar sinal de todo mundo?', 'Você define por serviço ou por cliente. Muita gente cobra só de quem já faltou, para não afastar quem é pontual.'],
  ['E se eu já uso caderno ou planilha?', 'Importamos sua lista de clientes por planilha. A agenda dos próximos dias você lança em poucos minutos.'],
  ['Tem fidelidade ou multa?', 'Não. O plano mensal cancela quando quiser. No anual, o desconto vale pelo período pago.'],
  ['Meus dados ficam seguros?', 'Os dados da barbearia ficam isolados por conta e você exporta tudo quando quiser.'],
]
const SLOTS = [['09:00', 'ocupado'], ['09:45', 'livre'], ['10:30', 'ocupado'], ['11:15', 'livre'], ['14:00', 'livre'], ['14:45', 'ocupado']]

function Hero() {
  const [pick, setPick] = useState('11:15')
  return (
    <header className="hero">
      <nav className="nav" aria-label="Principal">
        <a className="logo" href="#top"><span className="mark" aria-hidden="true">F</span>Filete</a>
        <div className="links"><a href="#recursos">Recursos</a><a href="#precos">Preços</a><a href="#faq">Dúvidas</a></div>
        <a className="btn btn-sm" href="#precos">Testar 14 dias</a>
      </nav>
      <div className="hero-grid" id="top">
        <div>
          <p className="eyebrow">Agenda para barbearias</p>
          <h1>Cadeira cheia, sem <em>recado</em> no WhatsApp.</h1>
          <p className="lead">O cliente escolhe barbeiro e horário num link. Você recebe o agendamento, o sinal e o lembrete já resolvidos.</p>
          <div className="cta"><a className="btn" href="#precos">Começar grátis por 14 dias</a><a className="btn ghost" href="#recursos">Ver como funciona</a></div>
          <p className="fine">Sem cartão no teste. Cancele quando quiser.</p>
        </div>
        <div className="card mock" aria-label="Exemplo da tela de agendamento">
          <div className="mock-head"><span className="avatar" aria-hidden="true">R</span><div><strong>Rafa Moreira</strong><small>Corte + barba · 45 min · R$ 70</small></div></div>
          <p className="mock-day">Sexta, 14 de novembro</p>
          <div className="slots" role="group" aria-label="Horários">
            {SLOTS.map(([h, s]) => (
              <button key={h} disabled={s === 'ocupado'} aria-pressed={pick === h} className={pick === h ? 'on' : ''} onClick={() => setPick(h)}>{h}</button>
            ))}
          </div>
          <div className="mock-foot"><span>Sinal Pix <b>R$ 20</b></span><span className="ok">Horário {pick} reservado</span></div>
        </div>
      </div>
      <dl className="stats">
        <div><dt>faltas a menos</dt><dd>−38%</dd></div>
        <div><dt>mensagens poupadas por dia</dt><dd>~40</dd></div>
        <div><dt>para configurar</dt><dd>10 min</dd></div>
      </dl>
    </header>
  )
}

function Pricing() {
  const [annual, setAnnual] = useState(true)
  return (
    <section className="sec" id="precos">
      <p className="eyebrow">Preços</p>
      <h2>Um plano para o tamanho da sua casa</h2>
      <div className="toggle" role="group" aria-label="Periodicidade">
        <button aria-pressed={!annual} onClick={() => setAnnual(false)}>Mensal</button>
        <button aria-pressed={annual} onClick={() => setAnnual(true)}>Anual <span>−20%</span></button>
      </div>
      <div className="plans">
        {PLANS.map((p) => (
          <article key={p.id} className={'card plan' + (p.featured ? ' feat' : '')}>
            {p.featured && <span className="tag">Mais escolhido</span>}
            <h3>{p.name}</h3>
            <p className="muted">{p.blurb}</p>
            <p className="amount"><span>R$</span><b>{price(p.monthly, annual)}</b><small>/mês</small></p>
            <p className="save">{annual ? `Economia de R$ ${yearlySaving(p.monthly)} por ano` : 'Cobrança mensal'}</p>
            <p className="chairs">{p.chairs}</p>
            <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
            <a className={'btn' + (p.featured ? '' : ' ghost')} href="#faq">Testar o {p.name}</a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <section className="sec" id="recursos">
          <p className="eyebrow">Recursos</p>
          <h2>Menos tempo no celular, mais tempo na navalha</h2>
          <div className="grid3">
            {FEATURES.map(([t, d]) => <article className="card feature" key={t}><h3>{t}</h3><p>{d}</p></article>)}
          </div>
        </section>
        <section className="sec steps">
          <p className="eyebrow">Como começa</p>
          <h2>No ar em uma tarde</h2>
          <ol>{STEPS.map(([n, t, d]) => <li key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></li>)}</ol>
        </section>
        <blockquote className="sec quote">
          <p>“Na primeira semana o telefone parou de tocar no meio do corte. Hoje eu só olho a agenda.”</p>
          <footer>Dono de barbearia fictício · depoimento de demonstração</footer>
        </blockquote>
        <Pricing />
        <section className="sec faq" id="faq">
          <p className="eyebrow">Dúvidas</p>
          <h2>Perguntas frequentes</h2>
          {FAQ.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        </section>
        <section className="sec final">
          <h2>Sua próxima cadeira vazia pode estar reservada.</h2>
          <a className="btn" href="#precos">Começar o teste de 14 dias</a>
        </section>
      </main>
      <footer className="foot"><span>Filete · projeto de demonstração, marca e dados fictícios.</span><a href="#top">Voltar ao topo</a></footer>
    </>
  )
}
