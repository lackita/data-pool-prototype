---
layout: default
title: Data Pool
tab: workflows
---

<style>
  .chat-container {
    max-width: 850px;
    margin: 0 auto;
    background-color: white;
    border-radius: 0.75rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 180px);
  }
  
  .chat-header {
    background-color: #0f56b3;
    color: white;
    padding: 1rem;
    border-bottom: 1px solid #e5e7eb;
  }
  
  .chat-header h2 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
  }
  
  .chat-header p {
    margin: 0.25rem 0 0;
    font-size: 0.875rem;
    opacity: 0.8;
  }
  
  .chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .chat-message {
    max-width: 80%;
  }
  
  .chat-message.assistant {
    align-self: flex-start;
  }
  
  .chat-message.assistant .message-content {
    background-color: #f3f4f6;
    border-radius: 1rem 1rem 1rem 0;
  }
  
  .chat-message.assistant .message-sender {
    color: #4b5563;
  }
  
  .chat-message.user {
    align-self: flex-end;
  }
  
  .chat-message.user .message-content {
    background-color: #1a62c0;
    color: white;
    border-radius: 1rem 1rem 0 1rem;
  }
  
  .message-content {
    padding: 1rem;
    font-size: 0.95rem;
    line-height: 1.5;
  }
  
  .message-sender {
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
    font-weight: 600;
  }
  
  .chat-input-container {
    padding: 1rem;
    border-top: 1px solid #e5e7eb;
    background-color: white;
    display: flex;
  }
  
  .chat-input-field {
    flex: 1;
    padding: 0.75rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    font-size: 0.95rem;
    outline: none;
    transition: border-color 0.2s;
  }
  
  .chat-input-field:focus {
    border-color: #2670cc;
  }
  
  .chat-submit-button {
    margin-left: 0.5rem;
    padding: 0.75rem 1.25rem;
    background-color: #1a62c0;
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .chat-submit-button:hover {
    background-color: #0f56b3;
  }
  
  .typing-indicator {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
  }
  
  .typing-indicator span {
    height: 8px;
    width: 8px;
    background-color: #6b7280;
    border-radius: 50%;
    display: inline-block;
    margin-right: 3px;
    animation: typing 1.3s infinite;
  }
  
  .typing-indicator span:nth-child(2) {
    animation-delay: 0.2s;
  }
  
  .typing-indicator span:nth-child(3) {
    animation-delay: 0.4s;
  }
  
  @keyframes typing {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
  
  /* Suggested prompts */
  .suggested-prompts {
    margin-top: 1rem;
    border-top: 1px solid #e5e7eb;
    padding-top: 0.75rem;
  }
  
  /* Tab headers */
  .prompt-tab-headers {
    display: flex;
    border-bottom: 1px solid #e5e7eb;
    margin-bottom: 0.75rem;
    overflow-x: auto;
    scrollbar-width: none; /* Firefox */
  }
  
  .prompt-tab-headers::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Edge */
  }
  
  .prompt-tab-header {
    padding: 0.5rem 1rem;
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    font-size: 0.875rem;
    color: #6b7280;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s;
  }
  
  .prompt-tab-header:hover {
    color: #1a62c0;
  }
  
  .prompt-tab-header.active {
    color: #1a62c0;
    border-bottom: 2px solid #1a62c0;
    font-weight: 600;
  }
  
  /* Tab content */
  .prompt-tab-content {
    position: relative;
  }
  
  .prompt-tab-pane {
    display: none;
  }
  
  .prompt-tab-pane.active {
    display: block;
    animation: fadeIn 0.3s;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  /* Prompt buttons */
  .prompt-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
  
  .prompt-button {
    background-color: #f3f4f6;
    border: 1px solid #d1d5db;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    text-align: left;
    font-size: 0.875rem;
    color: #1a62c0;
    cursor: pointer;
    transition: all 0.2s;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .prompt-button:hover {
    background-color: #e5e7eb;
    border-color: #9ca3af;
  }
</style>

<div class="chat-container">
  <div class="chat-header">
    <h2>Data Pool Assistant</h2>
    <p>Your intelligent workflow automation companion</p>
  </div>
  
  <div class="chat-messages" id="chat-messages">
    <div class="chat-message assistant">
      <div class="message-sender">Data Pool Assistant</div>
      <div class="message-content">
        <p>Hello! I'm your Data Pool Assistant. How can I help you today?</p>
        <p>You can ask me to run workflows, analyze data, or answer questions about your connected services.</p>
        <div class="suggested-prompts">
          <p>Here are some things you can ask me:</p>
          <div class="prompt-tabs">
            <div class="prompt-tab-headers">
              <button class="prompt-tab-header active" data-tab="product">Product</button>
              <button class="prompt-tab-header" data-tab="sales">Sales</button>
              <button class="prompt-tab-header" data-tab="cs">Customer Success</button>
              <button class="prompt-tab-header" data-tab="engineering">Engineering</button>
            </div>
            <div class="prompt-tab-content">
              <div class="prompt-tab-pane active" id="product-tab">
                <div class="prompt-buttons">
                  <button class="prompt-button" onclick="sendSuggestedPrompt('What features are my customers requesting the most?')">What features are my customers requesting the most?</button>
                  <button class="prompt-button" onclick="sendSuggestedPrompt('Generate product documentation for our top requested features')">Generate product documentation for our top requested features</button>
                  <button class="prompt-button" onclick="sendSuggestedPrompt('Notify customers about the new features we just released')">Notify customers about the new features we just released</button>
                </div>
              </div>
              <div class="prompt-tab-pane" id="sales-tab">
                <div class="prompt-buttons">
                  <button class="prompt-button" onclick="sendSuggestedPrompt('What are the top sales objections we\'re facing?')">What are the top sales objections we're facing?</button>
                  <button class="prompt-button" onclick="sendSuggestedPrompt('What\'s the best way to run a sales process to ensure a second meeting?')">What's the best way to run a sales process to ensure a second meeting?</button>
                  <button class="prompt-button" onclick="sendSuggestedPrompt('What features resonate most with our existing customers?')">What features resonate most with our existing customers?</button>
                </div>
              </div>
              <div class="prompt-tab-pane" id="cs-tab">
                <div class="prompt-buttons">
                  <button class="prompt-button" onclick="sendSuggestedPrompt('Create an implementation plan for our new customer')">Create an implementation plan for our new customer</button>
                  <button class="prompt-button" onclick="sendSuggestedPrompt('Develop an account management process for customer success')">Develop an account management process for customer success</button>
                </div>
              </div>
              <div class="prompt-tab-pane" id="engineering-tab">
                <div class="prompt-buttons">
                  <button class="prompt-button" onclick="sendSuggestedPrompt('Show me which engineers contributed to our top features')">Show me which engineers contributed to our top features</button>
                  <button class="prompt-button" onclick="sendSuggestedPrompt('Highlight recent engineering achievements mentioned by customers')">Highlight recent engineering achievements mentioned by customers</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="chat-input-container">
    <input type="text" id="chat-input-field" class="chat-input-field" placeholder="Type your message here..." autofocus>
    <button id="chat-submit-button" class="chat-submit-button">Send</button>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chat-messages');
    const chatInputField = document.getElementById('chat-input-field');
    const chatSubmitButton = document.getElementById('chat-submit-button');
    
    // Setup tab switching
    const tabHeaders = document.querySelectorAll('.prompt-tab-header');
    
    tabHeaders.forEach(header => {
      header.addEventListener('click', function() {
        // Remove active class from all tabs
        tabHeaders.forEach(h => h.classList.remove('active'));
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Hide all tab panes
        const tabPanes = document.querySelectorAll('.prompt-tab-pane');
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        // Show the selected tab pane
        const tabName = this.getAttribute('data-tab');
        const activePane = document.getElementById(tabName + '-tab');
        if (activePane) {
          activePane.classList.add('active');
        }
      });
    });
    
    // Function to handle suggested prompts
    window.sendSuggestedPrompt = function(text) {
      // Set the input field with the suggested prompt
      chatInputField.value = text;
      
      // Send the message
      sendMessage();
      
      // Remove the suggested prompts after selection
      removeSuggestedPrompts();
    }
    
    // Function to remove suggested prompts
    function removeSuggestedPrompts() {
      const suggestedPromptsElements = document.querySelectorAll('.suggested-prompts');
      suggestedPromptsElements.forEach(element => {
        element.remove();
      });
    }
    
    // Lorem ipsum paragraphs for random responses
    const loremIpsumResponses = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
      "Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.",
      "Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.",
      "Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.",
      "Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus."
    ];
    
    // Function to get 1-3 random paragraphs from the lorem ipsum responses
    function getRandomLoremIpsumResponse() {
      const numParagraphs = Math.floor(Math.random() * 3) + 1;
      let response = '';
      
      for (let i = 0; i < numParagraphs; i++) {
        const randomIndex = Math.floor(Math.random() * loremIpsumResponses.length);
        response += `<p>${loremIpsumResponses[randomIndex]}</p>`;
      }
      
      return response;
    }
    
    // Function to add user message
    function addUserMessage(text) {
      const userMessage = document.createElement('div');
      userMessage.className = 'chat-message user';
      userMessage.innerHTML = `
        <div class="message-content">
          <p>${text}</p>
        </div>
      `;
      chatMessages.appendChild(userMessage);
      
      // Scroll to bottom
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Function to add assistant message
    function addAssistantMessage(html) {
      const assistantMessage = document.createElement('div');
      assistantMessage.className = 'chat-message assistant';
      assistantMessage.innerHTML = `
        <div class="message-sender">Data Pool Assistant</div>
        <div class="message-content">
          ${html}
        </div>
      `;
      chatMessages.appendChild(assistantMessage);
      
      // Scroll to bottom
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Function to add typing indicator
    function addTypingIndicator() {
      const typingIndicator = document.createElement('div');
      typingIndicator.className = 'chat-message assistant typing-indicator';
      typingIndicator.id = 'typing-indicator';
      typingIndicator.innerHTML = `
        <div class="message-sender">Data Pool Assistant</div>
        <div class="message-content">
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      `;
      chatMessages.appendChild(typingIndicator);
      
      // Scroll to bottom
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Function to remove typing indicator
    function removeTypingIndicator() {
      const typingIndicator = document.getElementById('typing-indicator');
      if (typingIndicator) {
        chatMessages.removeChild(typingIndicator);
      }
    }
    
    // Function to handle message sending
    function sendMessage() {
      const text = chatInputField.value.trim();
      
      if (text) {
        // Remove suggested prompts if they exist
        removeSuggestedPrompts();
        
        // Add user message
        addUserMessage(text);
        
        // Clear input field
        chatInputField.value = '';
        
        // Show typing indicator
        addTypingIndicator();
        
        // Simulate typing delay
        setTimeout(() => {
          // Remove typing indicator
          removeTypingIndicator();
          
          // Add assistant response
          addAssistantMessage(getRandomLoremIpsumResponse());
        }, Math.floor(Math.random() * 1000) + 1000); // Random delay between 1-2 seconds
      }
    }
    
    // Event listeners
    chatSubmitButton.addEventListener('click', sendMessage);
    
    chatInputField.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  });
</script>