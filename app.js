const download = require('download'); // Одна команда установки: npm install download

(async () => {
    await download('https://github.com/Elwyney/radiant/archive/refs/heads/Elwyney/brandbook.zip', './', { 
        extract: true 
    });
    
    console.log('✅ Готово! Репозиторий скачан в текущую папку');
})();
