document.addEventListener('DOMContentLoaded', () => {

  // 1. Mostrar / Ocultar Senha
  const eyeToggle = document.querySelector('.eye-toggle');
  const passwordInput = document.getElementById('senha');

  if (eyeToggle && passwordInput) {
    eyeToggle.addEventListener('click', () => {
      const isPassword = passwordInput.getAttribute('type') === 'password';
      passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
      eyeToggle.style.opacity = isPassword ? '0.5' : '1';
    });
  }

  // 2. Transição para Tela de Recuperação de Senha
  const forgotBtn = document.getElementById('forgot-link');
  const loginForm = document.getElementById('login-form');
  const recoveryBox = document.getElementById('recovery-box');
  const backBtn = document.getElementById('btn-back-login');

  if (forgotBtn && loginForm && recoveryBox) {
    forgotBtn.addEventListener('click', () => {
      loginForm.style.display = 'none';
      recoveryBox.style.display = 'flex';
    });
  }

  if (backBtn && loginForm && recoveryBox) {
    backBtn.addEventListener('click', () => {
      recoveryBox.style.display = 'none';
      loginForm.style.display = 'flex';
    });
  }

  // 3. Enviar Código de Recuperação
  const sendRecoveryBtn = document.getElementById('btn-send-recovery');
  if (sendRecoveryBtn) {
    sendRecoveryBtn.addEventListener('click', () => {
      const userVal = document.getElementById('rec-usuario').value;
      if (userVal.trim() === '') {
        alert('Por favor, informe seu e-mail ou CPF.');
      } else {
        alert(`Instruções de redefinição enviadas para: ${userVal}`);
        recoveryBox.style.display = 'none';
        loginForm.style.display = 'flex';
      }
    });
  }

  // 4. Ajuste do Tamanho da Fonte (A- / A+)
  const btnFontUp = document.getElementById('btn-font-up');
  const btnFontDown = document.getElementById('btn-font-down');
  let currentFontSize = 100;

  if (btnFontUp && btnFontDown) {
    btnFontUp.addEventListener('click', () => {
      if (currentFontSize < 120) {
        currentFontSize += 10;
        document.body.style.fontSize = `${currentFontSize}%`;
        btnFontUp.classList.add('active');
        btnFontDown.classList.remove('active');
      }
    });

    btnFontDown.addEventListener('click', () => {
      if (currentFontSize > 90) {
        currentFontSize -= 10;
        document.body.style.fontSize = `${currentFontSize}%`;
        btnFontDown.classList.add('active');
        btnFontUp.classList.remove('active');
      }
    });
  }

  // 5. Suporte
  const supportLink = document.getElementById('support-link');
  if (supportLink) {
    supportLink.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Conectando ao suporte de acessibilidade SENAI...');
    });
  }

  // 6. Submissão do Formulário
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = document.getElementById('usuario').value;
      alert(`Acesso efetuado com sucesso para: ${user}`);
    });
  }

});