// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobileToggle');
const mainMenu = document.getElementById('mainMenu');

mobileToggle.addEventListener('click', () => {
    mainMenu.classList.toggle('active');
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (mainMenu.classList.contains('active')) {
            mainMenu.classList.remove('active');
        }
    });
});

// Chatbot functionality
const chatbotBtn = document.getElementById('chatbotBtn');
const chatbotWindow = document.getElementById('chatbotWindow');
const userInput = document.getElementById('userInput');
const sendMessage = document.getElementById('sendMessage');
const chatbotMessages = document.getElementById('chatbotMessages');

chatbotBtn.addEventListener('click', () => {
    chatbotWindow.classList.toggle('active');
});

function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(isUser ? 'user' : 'bot');
    messageDiv.textContent = message;
    chatbotMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function getBotResponse(userMessage) {
    userMessage = userMessage.toLowerCase();
    
    if (userMessage.includes('hola') || userMessage.includes('buenos días') || userMessage.includes('buenas tardes')) {
        return "¡Hola! Bienvenido a AlfaIAIDigital. ¿En qué puedo ayudarte?";
    }
    
    if (userMessage.includes('servicio') || userMessage.includes('qué ofrecen')) {
        return "Ofrecemos cuatro servicios principales:\n1. Automatización Inteligente con n8n\n2. Análisis de Datos Estratégico\n3. Desarrollo de Redes Neuronales\n4. Consultoría y Capacitación\n¿Te gustaría saber más sobre alguno en particular?";
    }
    
    if (userMessage.includes('automatización') || userMessage.includes('n8n')) {
        return "Nuestro servicio de Automatización Inteligente utiliza n8n para crear workflows personalizados que reducen costos operativos y errores humanos en un 40%. Automatizamos procesos como envío de facturas, sincronización de CRMs y más.";
    }
    
    if (userMessage.includes('datos') || userMessage.includes('análisis')) {
        return "El Análisis de Datos Estratégico transforma tus datos en decisiones. Ofrecemos:\n- Reportes y dashboards\n- Análisis predictivo\n- Recomendaciones automáticas\n- Limpieza y estructuración de datos";
    }
    
    if (userMessage.includes('red neuronal') || userMessage.includes('ia a medida')) {
        return "Desarrollamos redes neuronales personalizadas para visión por computadora, procesamiento de lenguaje natural y predicción numérica. Creamos soluciones específicas para tus necesidades.";
    }
    
    if (userMessage.includes('contacto') || userMessage.includes('dónde están')) {
        return "Puedes contactarnos por:\n📞 Teléfono: +52 55 1234 5678\n✉️ Email: info@alfaiadigital.com\n📍 Dirección: Av. Innovación 123, Ciudad Tecnológica\nTambién puedes completar el formulario de contacto en nuestra página.";
    }
    
    if (userMessage.includes('precio') || userMessage.includes('cuesta')) {
        return "Nuestros precios varían según el proyecto. Tenemos dos modelos:\n1. Proyectos por fases: Desde $5,000 USD\n2. Suscripciones: $300-$1,000 USD/mes\n¿Te gustaría una cotización personalizada?";
    }
    
    if (userMessage.includes('gracias') || userMessage.includes('adiós')) {
        return "¡Gracias por contactar con AlfaIAIDigital! Si tienes más preguntas, no dudes en consultarme. ¡Que tengas un excelente día!";
    }
    
    return "Gracias por tu mensaje. ¿Puedes reformular tu pregunta? Estoy aquí para ayudarte con información sobre nuestros servicios de IA, automatización, análisis de datos y consultoría.";
}

sendMessage.addEventListener('click', () => {
    if (userInput.value.trim() !== '') {
        addMessage(userInput.value, true);
        
        // Simulate bot response after a delay
        setTimeout(() => {
            const botResponse = getBotResponse(userInput.value);
            addMessage(botResponse);
        }, 1000);
        
        userInput.value = '';
    }
});

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage.click();
    }
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo lo antes posible.');
    contactForm.reset();
});