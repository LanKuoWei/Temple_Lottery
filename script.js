document.addEventListener('DOMContentLoaded', () => {
    const drawBtn = document.getElementById('draw-btn');
    const resetBtn = document.getElementById('reset-btn');
    const cylinderWrapper = document.getElementById('cylinder-wrapper');
    const drawnStick = document.getElementById('drawn-stick');
    const resultModal = document.getElementById('result-modal');
    const fortuneNumber = document.getElementById('fortune-number');

    const TOTAL_SIGNS = 108;

    drawBtn.addEventListener('click', startDrawing);
    resetBtn.addEventListener('click', resetCylinder);

    function startDrawing() {
        // 1. 鎖定按鈕，避免連續點擊
        drawBtn.disabled = true;

        // 2. 搖晃整個容器（包含裡面的所有籤枝齊動）
        cylinderWrapper.classList.add('shake-animation');

        // 3. 模擬搖動 1.3 秒
        setTimeout(() => {
            // 停止搖晃
            cylinderWrapper.classList.remove('shake-animation');

            // 4. 觸發單支籤垂直向上飛出的動畫
            drawnStick.classList.add('fly-up');

            // 5. 動態運算：當單籤升到最高點時（約 0.6 秒），結算亂數並彈出視窗
            setTimeout(() => {
                // 完美生成 1 至 108 號亂數
                const luckyNumber = Math.floor(Math.random() * TOTAL_SIGNS) + 1;
                fortuneNumber.textContent = luckyNumber;
                
                // 彈出顯示視窗
                resultModal.classList.add('show');
            }, 600);

        }, 1300);
    }

    function resetCylinder() {
        // 1. 收回彈出視窗
        resultModal.classList.remove('show');
        
        // 2. 將抽出的籤歸位回筒內深處
        drawnStick.classList.remove('fly-up');
        
        // 3. 重新啟用抽籤按鈕
        drawBtn.disabled = false;
    }
});