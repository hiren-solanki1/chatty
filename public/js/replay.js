function replayChat() {
    fetch('/api/replay')
      .then(response => response.json())
      .then(messages => {
        // Clear the chat messages
        const chatMessages = document.getElementById('message');
        chatMessages.innerHTML = '';
  
        // Render the chat messages
        messages.forEach(message => {
          const messageElement = document.createElement('div');
          messageElement.classList.add('message');
          messageElement.innerHTML = Mustache.render(
            document.getElementById('message-template').innerHTML,
            {
              username: message.username,
              createdAt: moment(message.createdAt).format('h:mm a'),
              message: message.text
            }
          );
          chatMessages.appendChild(messageElement);
        });
      })
      .catch(error => {
        console.error('Error retrieving chat messages:', error);
      });
  }
  
  // Trigger chat replay when the page loads
  window.addEventListener('load', () => {
    replayChat();
  });
  