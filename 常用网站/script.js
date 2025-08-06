// 确保 DOM 加载完成后再执行脚本
document.addEventListener('DOMContentLoaded', () => {

    // 文件夹开关逻辑
    const folderToggles = document.querySelectorAll('.folder-name');
    folderToggles.forEach(toggle => {
        toggle.addEventListener('click', (event) => {
            // 阻止事件冒泡，防止与木鱼事件冲突
            // 这在理论上是必要的，但有了 z-index 之后优先级就降低了
            event.stopPropagation();
            
            const contentId = toggle.getAttribute('data-content-id');
            const content = document.getElementById(contentId);

            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });

    // 电子木鱼逻辑
    const muyuContainer = document.querySelector('.muyu-container');
    const muyuSound = document.getElementById('muyu-sound');
    const meritCounter = document.getElementById('merit-counter');
    
    muyuContainer.addEventListener('click', (event) => {
        // 阻止事件冒泡到父元素，防止触发文件夹开关
        event.stopPropagation();
        
        muyuSound.currentTime = 0;
        muyuSound.play();

        muyuContainer.classList.add('clicked');
        setTimeout(() => {
            muyuContainer.classList.remove('clicked');
        }, 100);

        const meritText = document.createElement('div');
        meritText.className = 'merit-text';
        meritText.textContent = `功德+1`;
        meritCounter.appendChild(meritText);

        meritText.addEventListener('animationend', () => {
            meritText.remove();
        });
    });
});