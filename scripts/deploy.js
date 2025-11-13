#!/usr/bin/env node

const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pega a mensagem de commit do argumento ou pergunta ao usuário
const commitMessage = process.argv[2] || null;

function runCommand(command, description) {
  try {
    console.log(`\n📦 ${description}...`);
    execSync(command, { stdio: 'inherit' });
    console.log(`✅ ${description} concluído!`);
  } catch (error) {
    console.error(`\n❌ Erro ao ${description.toLowerCase()}:`, error.message);
    process.exit(1);
  }
}

async function deploy() {
  console.log('\n🚀 Iniciando deploy automático...\n');

  // Verifica se há mudanças
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf-8' });
    if (!status.trim()) {
      console.log('ℹ️  Nenhuma mudança para commitar.');
      return;
    }
  } catch (error) {
    console.error('❌ Erro ao verificar status do git:', error.message);
    process.exit(1);
  }

  // Adiciona todos os arquivos
  runCommand('git add .', 'Adicionando arquivos');

  // Faz commit
  let message = commitMessage;
  if (!message) {
    message = await new Promise((resolve) => {
      rl.question('💬 Digite a mensagem de commit (ou Enter para usar mensagem padrão): ', (answer) => {
        resolve(answer.trim() || 'Atualização automática');
      });
    });
  }

  runCommand(`git commit -m "${message}"`, 'Fazendo commit');

  // Faz push
  runCommand('git push origin master', 'Fazendo push para GitHub');

  console.log('\n✨ Deploy iniciado! O Netlify fará o deploy automaticamente.');
  console.log('📊 Acompanhe o progresso em: https://app.netlify.com\n');

  rl.close();
}

deploy();

