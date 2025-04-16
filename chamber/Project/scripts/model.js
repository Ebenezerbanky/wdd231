export function setupModal() {
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('close-modal');
  
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  }
  
  export function showModal(member) {
    const modal = document.getElementById('modal');
    document.getElementById('modal-name').textContent = member.name;
    document.getElementById('modal-bio').textContent = member.bio;
    modal.classList.remove('hidden');
  }
  