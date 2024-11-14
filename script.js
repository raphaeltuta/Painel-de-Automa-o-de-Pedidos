// Array para armazenar o histórico de mensagens
let messageLog = [];

// Função para atualizar o pedido
function updateOrder() {
    const orderId = document.getElementById("orderId").value;
    const status = document.getElementById("status").value;
    
    if (orderId === "") {
        alert("Por favor, insira o ID do pedido.");
        return;
    }
    
    // Mensagem simulando resposta automática
    const message = `Pedido ${orderId} atualizado para o status: ${status}`;
    messageLog.push(message);
    
    // Adiciona a mensagem ao log de mensagens
    const messageList = document.getElementById("messageLog");
    const messageItem = document.createElement("li");
    messageItem.textContent = message;
    messageList.appendChild(messageItem);
    
    // Limpa o campo de entrada
    document.getElementById("orderId").value = "";
}

// Função para gerar um relatório diário das atualizações
function generateReport() {
    const reportSection = document.getElementById("report");
    if (messageLog.length === 0) {
        reportSection.textContent = "Nenhuma atualização realizada hoje.";
        return;
    }
    
    let reportText = "Relatório de Atualizações:\n";
    messageLog.forEach((msg, index) => {
        reportText += `${index + 1}. ${msg}\n`;
    });
    
    reportSection.textContent = reportText;
}
