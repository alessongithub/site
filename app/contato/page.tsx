// Página estática para garantir detecção do formulário pelo Netlify
export const dynamic = 'force-static'

export default function ContatoPage() {
  return (
    <form name="contato-evoque" method="POST" data-netlify="true" netlify-honeypot="bot-field" hidden>
      <input type="hidden" name="form-name" value="contato-evoque" />
      <input type="text" name="nome" />
      <input type="email" name="email" />
      <input type="tel" name="telefone" />
      <input type="text" name="especialidade" />
      <textarea name="mensagem"></textarea>
      <input type="text" name="bot-field" />
    </form>
  )
}

